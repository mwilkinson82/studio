import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface EventInfo {
  name: string;
  time: string;
  isLive: boolean;
  isNextUp: boolean;
  day: string;
  category: string[];
  endTimeAbs?: number; // Absolute end time in ms for live check
}

const LiveEventsOverviewCard = () => {
  const [currentEvent, setCurrentEvent] = useState<EventInfo | null>(null);

  useEffect(() => {
    const getEventDetails = () => {
      const events = [
        { days: [1, 2, 3, 4, 5], startHour: 8, endHour: 9, name: 'Power Hour', category: ['Strategy', 'Q&A'] },
        { days: [1], startHour: 19, endHour: 20, name: 'Negotiation Masterclass', category: ['Negotiation', 'Live Class'] },
        { days: [2], startHour: 19, endHour: 20, name: 'Contractor School', category: ['Business', 'Contractors'] },
        { days: [3], startHour: 19, endHour: 20, name: 'Sales & Marketing in the 21st Century', category: ['Sales', 'Marketing'] },
      ];
      const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const now = new Date();
      let nyDateString;
      try {
        nyDateString = now.toLocaleString('en-US', { timeZone: 'America/New_York' });
      } catch (e) {
        console.error("Timezone 'America/New_York' not supported, falling back to local time.", e);
        const offset = now.getTimezoneOffset() < 300 ? -4 : -5; 
        const estDate = new Date(now.getTime() + offset * 3600 * 1000);
        nyDateString = estDate.toLocaleString('en-US');
      }
      const nyCurrentDate = new Date(nyDateString);
      const nyDay = nyCurrentDate.getDay(); 
      const nyHour = nyCurrentDate.getHours();
      let liveEvent: EventInfo | null = null;
      let nextUpEvent: EventInfo | null = null;
      let minNextUpTime = Infinity;
      const todayInNY = new Date(nyCurrentDate.getFullYear(), nyCurrentDate.getMonth(), nyCurrentDate.getDate());

      for (const event of events) {
        if (event.days.includes(nyDay)) {
          const eventStartTime = new Date(todayInNY);
          eventStartTime.setHours(event.startHour, 0, 0, 0);
          const eventEndTime = new Date(todayInNY);
          eventEndTime.setHours(event.endHour, 0, 0, 0);
          if (nyCurrentDate >= eventStartTime && nyCurrentDate < eventEndTime) {
            liveEvent = {
              name: event.name,
              time: `LIVE NOW (${event.startHour}:00 - ${event.endHour}:00 EST/EDT)`,
              isLive: true, isNextUp: false, day: shortDays[nyDay], category: event.category,
              endTimeAbs: eventEndTime.getTime(),
            };
            break; 
          }
        }
      }

      if (!liveEvent) {
        let foundNextEventForTodayOrFuture = false;
        for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
          const currentCheckDayIndex = (nyDay + dayOffset) % 7;
          const currentCheckDate = new Date(todayInNY);
          currentCheckDate.setDate(todayInNY.getDate() + dayOffset);

          for (const event of events) {
            if (event.days.includes(currentCheckDayIndex)) {
              const eventStartTimeForThisIteration = new Date(currentCheckDate);
              eventStartTimeForThisIteration.setHours(event.startHour, 0, 0, 0);

              if (eventStartTimeForThisIteration > nyCurrentDate && eventStartTimeForThisIteration.getTime() < minNextUpTime) {
                minNextUpTime = eventStartTimeForThisIteration.getTime();
                nextUpEvent = {
                  name: event.name,
                  time: `${shortDays[currentCheckDayIndex]} at ${event.startHour}:00 EST/EDT`,
                  isLive: false,
                  isNextUp: true,
                  day: shortDays[currentCheckDayIndex],
                  category: event.category,
                };
                if (dayOffset === 0) { 
                  foundNextEventForTodayOrFuture = true;
                }
              }
            }
          }
          if (foundNextEventForTodayOrFuture || (nextUpEvent && dayOffset > 0)) {
            break;
          }
        }
      }
      setCurrentEvent(liveEvent || nextUpEvent);
    };

    getEventDetails();
    const interval = setInterval(getEventDetails, 30000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledWrapper>
      <div className="card">
        <div className="image" style={{ position: 'relative' }}> {/* Added inline style to force position relative */}
          <Image
            src="/Powerhour screenshot.png" 
            alt="Live Events Visual"
            fill 
            style={{ objectFit: 'cover' }} 
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
            className="header-image"
            priority 
          />
          <div className="status-overlay">
            {currentEvent?.isLive && <span className="status-text-live">Class is in Session</span>}
            {currentEvent?.isNextUp && !currentEvent?.isLive && <span className="status-text-next">Next Live Class Soon</span>}
            {!currentEvent && <span className="status-text-next">Check Schedule</span>} 
          </div>
          {currentEvent?.isLive && <div className="live-indicator"><span className="blinking-dot"></span>LIVE</div>}
          {currentEvent?.isNextUp && !currentEvent?.isLive && <div className="next-up-indicator">NEXT UP</div>}
        </div>
        <div className="red-bar" />
        <div className="content">
          <div className="avatar">
            <Image 
              src="/Helmet Logo for app.png"
              alt="a|p Logo"
              width={38} 
              height={38}
              className="rounded-full"
            />
          </div> 
          <div className="content__text">
            <span className="stream__title">
              Upcoming a|p Live Event
            </span>
            <div className="content__body">
              <span className="streamer__name">
                {currentEvent ? currentEvent.name : 'No upcoming events today'} 
              </span>
              {currentEvent && <span className="event">{currentEvent.time}</span>}
              {!currentEvent && <span className="event">Please check full schedule.</span>}
            </div>
            {currentEvent && (
              <span className="categories">
                {currentEvent.category.map(cat => (
                  <a className="categories__btn" href="#" key={cat}>{cat}</a>
                ))}
              </span>
            )}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem; 

  .card {
    width: 100%; 
    height: 100%;
    background: #101014; 
    position: relative;
    color: #333; 
    display: flex;
    flex-direction: column;
    border-radius: 12px; 
    box-shadow: 0 6px 20px rgba(0,0,0,0.25);
    overflow: hidden; 
  }

  .image {
    width: 100%;
    height: 220px; 
    position: relative; /* This is already here and should be sufficient */
    cursor: pointer;
    transition: all .2s ease;
    overflow: hidden; 
  }
  
  .image .header-image {
    border-top-left-radius: 12px; 
    border-top-right-radius: 12px; 
  }

  .status-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    z-index: 2; 
    background: rgba(0,0,0,0.2); 
  }
  .status-text-live, .status-text-next, .status-text {
    font-size: 1.75rem; 
    font-weight: 800; 
    color: #ffffff; 
    text-shadow: 0 2px 4px rgba(0,0,0,0.5); 
  }

  .live-indicator, .next-up-indicator {
    position: absolute;
    top: 12px; 
    left: 12px;
    font-weight: 700; 
    font-size: .7rem; 
    background-color: rgb(228, 33, 33);
    border-radius: 5px;
    padding: 3px 7px;
    color: white;
    display: flex;
    align-items: center;
    gap: 4px;
    z-index: 3; 
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }
  .next-up-indicator {
    background-color: #2563eb; 
  }

  @keyframes blinker {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.8); }
  }
  .blinking-dot {
    width: 6px; 
    height: 6px;
    background-color: white; 
    border-radius: 50%;
    animation: blinker 1.3s linear infinite;
  }
  
  .red-bar {
    width: 100%;
    height: 4px;
    background-color: red;
    flex-shrink: 0; 
  }

  .content { 
    display: flex;
    flex-direction: row;
    gap: 10px; 
    padding: 10px 14px 14px 14px; 
    flex-grow: 1; 
    background: linear-gradient(to bottom right, #E0F2FE, #E0E7FF, #EDE9FE);
    color: #334155; 
    overflow-y: auto; 
  }
  
  .dark .content {
    background: linear-gradient(to bottom right, rgba(7, 89, 133, 0.7), rgba(55, 65, 81, 0.7), rgba(67, 56, 77, 0.7));
    color: #e2e8f0; 
    border-top: 1px solid #3a3a3a; 
  }

  .avatar {
    width: 38px; 
    height: 38px;
    border-radius: 50%;
    cursor: pointer;
    background-color: transparent; 
    flex-shrink: 0;
    margin-top: -12px; 
    border: 2px solid #f0f2f5; 
    z-index: 1; 
    overflow: hidden; 
    display: flex; 
    align-items: center;
    justify-content: center;
  }
  .dark .avatar {
    border-color: #2d3748; 
  }
  .avatar img { 
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content__text {
    display: flex;
    flex-direction: column;
    gap: 8px; 
    width: calc(100% - 48px); 
    flex-grow: 1;
    justify-content: center; 
  }

  .content__body {
    display: flex;
    flex-direction: column;
    gap: 4px; 
  }

  .stream__title { 
    font-weight: 800; 
    white-space: normal; 
    cursor: pointer;
    color: #1e293b; 
    font-size: 2em; 
    line-height: 1.2;
    margin-bottom: 4px; 
  }

  .event { 
    cursor: pointer;
    font-size: 0.9em; 
    color: #475569; 
    opacity: 0.9;
  }

  .streamer__name { 
    font-weight: 700; 
    color: #2c3e50; 
    white-space: normal; 
    font-size: 1.5em; 
    line-height: 1.3; 
    margin-bottom: 2px;
  }

  .categories {
    white-space: nowrap;
    overflow-x: auto;
    margin-top: 10px; 
    padding-bottom: 2px; 
  }
  .categories::-webkit-scrollbar {
      height: 4px;
  }
  .categories::-webkit-scrollbar-thumb {
      background: #cbd5e1; 
  }
  .dark .categories::-webkit-scrollbar-thumb {
      background: #555;
  }


  .categories__btn {
    text-decoration: none;
    color: #334155; 
    opacity: 0.8;
    font-size: .7em; 
    background-color: rgba(0,0,0,0.03); 
    padding: 3px 9px;
    border-radius: 10px;
    margin-right: 6px;
    white-space: nowrap;
    transition: background-color 0.2s ease;
    border: 1px solid rgba(0,0,0,0.06);
  }
   .categories__btn:last-child {
    margin-right: 0;
  }

  .stream__title:hover {
    color: #0369a1; 
  }
  
  .event:hover {
    opacity: 1;
  }

  .categories__btn:hover {
    background-color: rgba(0,0,0,0.08); 
    opacity: 1;
  }
`;

export default LiveEventsOverviewCard;
