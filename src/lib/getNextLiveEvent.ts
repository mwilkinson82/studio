// src/lib/getNextLiveEvent.ts
// ────────────────────────────────────────────────────────────────────────────
// Returns the very next “live event” based on four weekly slots, or null if
// nothing remains this week.  All times are in America/New_York (EST/EDT).
// ────────────────────────────────────────────────────────────────────────────

import { addDays, addHours, getDay, isAfter } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';

type LiveEvent = {
  name: string;
  weekday: number;   // 0=Sunday … 1=Monday … 6=Saturday
  hour24: number;    // e.g. 8 for 8:00 AM, 19 for 7:00 PM
};

// Our four weekly slots (all in EST):
const LIVE_EVENTS: LiveEvent[] = [
  { name: 'Power Hour', weekday: 1, hour24: 8 },
  { name: 'Power Hour', weekday: 2, hour24: 8 },
  { name: 'Power Hour', weekday: 3, hour24: 8 },
  { name: 'Power Hour', weekday: 4, hour24: 8 },
  { name: 'Power Hour', weekday: 5, hour24: 8 },
  { name: 'Negotiation Masterclass', weekday: 1, hour24: 19 },
  { name: 'Contractor School',       weekday: 2, hour24: 19 },
  { name: 'Sales & Marketing School',weekday: 3, hour24: 19 },
];

const TZ = 'America/New_York';

export interface NextEventResult {
  name: string;
  start: Date;   // JavaScript Date (UTC) at which the event begins
  end: Date;     // JavaScript Date (UTC) at which the event ends (one hour later)
}

/**
 * Returns the next live event (with correct UTC‐dates) or null if nothing 
 * remains *later this week* (Sunday→Saturday).
 */
export function getNextLiveEvent(): NextEventResult | null {
  // 1) “now” as a JS Date (in your server/browser’s local time)
  const now = new Date();

  // 2) Convert “now” into an EST Date object so we can work with the EST components:
  const nowInEST = utcToZonedTime(now, TZ);

  // 3) Extract the current weekday (0=Sun…6=Sat) and hour (0–23) in EST:
  const currentWeekday = getDay(nowInEST);
  // (we won’t explicitly use currentHour; we’ll filter against actual Date objects)

  // 4) Build a list of “candidate events” this week (with actual UTC timestamps)
  const candidates: NextEventResult[] = [];

  LIVE_EVENTS.forEach(ev => {
    // 4a) How many days from today (in EST) is the event’s weekday?
    let daysDiff = ev.weekday - currentWeekday;
    if (daysDiff < 0) {
      // If it's negative, that means the event's day is earlier in the week,
      // so we wrap it around by adding 7 days (still “this week” cycle).
      daysDiff += 7;
    }

    // 4b) Construct a “zoned” EST Date representing ev.weekday at ev.hour24:00
    //    Start by copying today-in-EST, then jump forward daysDiff days, then set hours
    let eventInEST = new Date(nowInEST);
    eventInEST = addDays(eventInEST, daysDiff);

    // Overwrite hour/min/sec (in EST) to exactly ev.hour24:00:00
    eventInEST.setHours(ev.hour24, 0, 0, 0);

    // 4c) Convert that EST Date into the actual UTC‐based JS Date:
    //    zonedTimeToUtc(eventInEST, TZ) → gives the correct UTC instant
    const eventStartUTC = zonedTimeToUtc(eventInEST, TZ);

    // 4d) End is exactly one hour later (UTC)
    const eventEndUTC = addHours(eventStartUTC, 1);

    // 4e) Only keep it if “eventEndUTC is after now”
    if (isAfter(eventEndUTC, now)) {
      candidates.push({
        name: ev.name,
        start: eventStartUTC,
        end:   eventEndUTC,
      });
    }
  });

  // 5) If no candidates remain, return null
  if (candidates.length === 0) {
    return null;
  }

  // 6) Otherwise, sort by soonest “start” time (UTC) and return the first
  candidates.sort((a, b) => a.start.getTime() - b.start.getTime());
  return candidates[0];
}

/**
 * (Helper if you ever want to format a Date in EST)
 * 
 * Example:
 *    formatInEST(new Date(), "hh:mm a zzz");
 *    → “02:03 AM EDT”  (depending on daylight savings)
 */
export function formatInEST(date: Date, pattern: string): string {
  return format(date, pattern, { timeZone: TZ });
}
