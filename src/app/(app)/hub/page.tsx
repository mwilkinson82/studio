// src/app/(app)/hub/page.tsx
'use client';

import React from 'react';
import { QuestionnaireForm } from '@/components/questionnaire/QuestionnaireForm'; // Corrected import
import { UpcomingEventsCard } from '@/components/UpcomingEventsCard'; // CHANGED IMPORT

export default function HubPage() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <QuestionnaireForm />
      </div>
      <div className="relative">
        {/* The positioning div might need adjustment if UpcomingEventsCard has fixed width like w-64 */}
        <div className="absolute top-0 right-0"> {/* Removed w-64, card itself defines width */}
          <UpcomingEventsCard />
        </div>
      </div>
    </div>
  );
}
