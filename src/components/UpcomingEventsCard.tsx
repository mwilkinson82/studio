// src/components/UpcomingEventsCard.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { getNextLiveEvent, formatInEST, type NextEventResult } from '@/lib/getNextLiveEvent'; // Ensure NextEventResult is exported or define here

export default function UpcomingEventsCard() {
  const [nextEvent, setNextEvent] = useState<NextEventResult | null>(null);
  const [currentEST, setCurrentEST] = useState<string>('');

  useEffect(() => {
    // Compute “now in EST” as a formatted string (e.g., “02:03 AM EDT”):
    const now = new Date();
    const nowESTString = formatInEST(now, 'hh:mm a zzz');
    setCurrentEST(nowESTString);

    // Compute the next event
    const evt = getNextLiveEvent();
    setNextEvent(evt);
  }, []); // Runs once on mount

  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-soft p-5 space-y-3"> {/* Changed to rounded-lg and p-5 */}
      <h3 className="text-lg font-semibold text-gray-700">Upcoming Intensives</h3> {/* Added text-gray-700 */}

      {nextEvent === null ? (
        <>
          <p className="text-gray-500 text-sm">No upcoming events found for this week.</p>
          {currentEST && <p className="text-gray-400 text-xs">Current EST: {currentEST}</p>}
        </>
      ) : (
        <>
          <p className="text-base font-medium text-gray-800">{nextEvent.name}</p> {/* Added text-gray-800 */}
          <p className="text-gray-600 text-sm">
            {formatInEST(nextEvent.start, 'EEEE, MMM d, hh:mm a zzz')}
            {' – '}
            {formatInEST(nextEvent.end, 'hh:mm a zzz')}
          </p>
          <a
            href="#"
            className="inline-block mt-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition" // Adjusted colors
          >
            Join Now
          </a>
        </>
      )}
    </div>
  );
}
