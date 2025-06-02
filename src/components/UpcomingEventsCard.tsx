// src/components/UpcomingEventsCard.tsx
'use client';

import { useEffect, useState } from 'react';
import { getNextLiveEvent, type EventInfo } from '@/lib/getNextLiveEvent';
import { formatInTimeZone } from 'date-fns-tz'; // Still useful for current time display

export function UpcomingEventsCard() {
  const [info, setInfo] = useState<EventInfo>(null);
  const [currentTimeEST, setCurrentTimeEST] = useState<string>('');

  useEffect(() => {
    const updateEventInfo = () => {
      const next = getNextLiveEvent();
      setInfo(next);
      setCurrentTimeEST(formatInTimeZone(new Date(), 'America/New_York', 'h:mm aa zzz'));
    };
    
    updateEventInfo();
    const intervalId = setInterval(updateEventInfo, 60000); 

    return () => clearInterval(intervalId);
  }, []);

  if (!info) {
    return (
      <div className="bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-6 w-64 h-48 flex flex-col justify-center items-center">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Upcoming Intensives</h3>
        <p className="text-gray-500 text-sm">Checking schedule...</p>
        {currentTimeEST && <p className="text-xs text-gray-400 mt-2">EST: {currentTimeEST}</p>}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-6 w-64">
      <h3 className="text-lg font-semibold mb-1 text-gray-700">Upcoming Intensives</h3>
      {currentTimeEST && <p className="text-xs text-gray-400 mb-4">EST: {currentTimeEST}</p>}

      {info.status === 'live' ? (
        <div className="flex flex-col items-start space-y-2">
          <span className="text-xs text-red-500 font-semibold px-2 py-0.5 bg-red-100 rounded-full">LIVE NOW</span>
          <span className="text-gray-800 font-medium pt-1">{info.name}</span>
          <span className="text-gray-500 text-xs">
            Ends at {info.endsAtFormatted} {/* USE FORMATTED STRING */}
          </span>
          <button 
            className="mt-2 w-full bg-green-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors duration-200"
            onClick={() => console.log('Join Now clicked for', info.name)}
          >
            Join Now
          </button>
        </div>
      ) : ( // Upcoming
        <div className="flex flex-col items-start space-y-2">
          <span className="text-gray-600 text-sm">Next:</span>
          <span className="text-gray-800 font-medium">{info.name}</span>
          <span className="text-gray-500 text-xs">
            Starts at {info.startsAtFormatted} {/* USE FORMATTED STRING */}
          </span>
        </div>
      )}
    </div>
  );
}
