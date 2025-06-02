// src/lib/getNextLiveEvent.ts
import { utcToZonedTime, format as formatInTimeZone, zonedTimeToUtc } from 'date-fns-tz';
// Using 'formatInTimeZone' as alias for 'format' from date-fns-tz to avoid conflict if 'format' from date-fns is also used.
import { setHours, setMinutes, setSeconds, setMilliseconds, addDays, getDay } from 'date-fns';

export interface LiveEventSchedule {
  name: string;
  daysOfWeek: number[]; // 0 = Sunday, 1 = Monday, etc.
  startHour: number;    // 24h format in target timezone
  endHour: number;      // 24h format in target timezone
  timezone: string;     // e.g., 'America/New_York'
}

const liveEventsSchedule: LiveEventSchedule[] = [
  { name: 'Power Hour', daysOfWeek: [1,2,3,4,5], startHour: 8, endHour: 9, timezone: 'America/New_York' },
  { name: 'Negotiation Masterclass', daysOfWeek: [1], startHour: 19, endHour: 20, timezone: 'America/New_York' },
  { name: 'Contractor School', daysOfWeek: [2], startHour: 19, endHour: 20, timezone: 'America/New_York' },
  { name: 'Sales & Marketing School', daysOfWeek: [3], startHour: 19, endHour: 20, timezone: 'America/New_York' },
];

export type EventInfo = 
  | { status: 'live'; name: string; endsAt: Date; endsAtFormatted: string; } 
  | { status: 'upcoming'; name: string; startsAt: Date; startsAtFormatted: string; } 
  | null;

export function getNextLiveEvent(): EventInfo {
  const nowUTC = new Date(); // Current time in UTC

  let closestUpcomingEvent: { name: string; startUTC: Date; endUTC: Date; } | null = null;

  for (const eventRule of liveEventsSchedule) {
    const nowInEventTz = utcToZonedTime(nowUTC, eventRule.timezone);

    for (let i = 0; i < 7; i++) { // Check today and up to 6 days ahead
      const prospectiveDateInEventTz = addDays(nowInEventTz, i);
      
      if (eventRule.daysOfWeek.includes(getDay(prospectiveDateInEventTz))) {
        let eventStartInEventTz = setMilliseconds(setSeconds(setMinutes(setHours(prospectiveDateInEventTz, eventRule.startHour), 0), 0), 0);
        let eventEndInEventTz = setMilliseconds(setSeconds(setMinutes(setHours(prospectiveDateInEventTz, eventRule.endHour), 0), 0), 0);

        // If we are looking at "today" (i=0) but the event has already ended, skip to the next week's occurrence for this rule
        if (i === 0 && nowInEventTz >= eventEndInEventTz) {
          eventStartInEventTz = addDays(eventStartInEventTz, 7);
          eventEndInEventTz = addDays(eventEndInEventTz, 7);
        }
        
        const eventStartUTC = zonedTimeToUtc(eventStartInEventTz, eventRule.timezone);
        const eventEndUTC = zonedTimeToUtc(eventEndInEventTz, eventRule.timezone);

        // Check if event is currently live
        if (nowUTC >= eventStartUTC && nowUTC < eventEndUTC) {
          return { 
            status: 'live', 
            name: eventRule.name, 
            endsAt: eventEndUTC,
            endsAtFormatted: formatInTimeZone(eventEndInEventTz, eventRule.timezone, 'h:mm aa zzz')
          };
        }

        // Check if it's an upcoming event
        if (eventStartUTC > nowUTC) {
          if (!closestUpcomingEvent || eventStartUTC < closestUpcomingEvent.startUTC) {
            closestUpcomingEvent = { 
              name: eventRule.name, 
              startUTC: eventStartUTC, 
              endUTC: eventEndUTC 
            };
          }
        }
        // Once we've found the first valid day for this event rule in the 7-day window, move to the next rule
        break; 
      }
    }
  }

  if (closestUpcomingEvent) {
    const targetTimezone = liveEventsSchedule.find(e => e.name === closestUpcomingEvent!.name)!.timezone;
    const startsAtInEventTz = utcToZonedTime(closestUpcomingEvent.startUTC, targetTimezone);
    return { 
      status: 'upcoming', 
      name: closestUpcomingEvent.name, 
      startsAt: closestUpcomingEvent.startUTC,
      startsAtFormatted: formatInTimeZone(startsAtInEventTz, targetTimezone, 'h:mm aa zzz')
    };
  }

  return null;
}
