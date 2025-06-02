// src/app/(app)/layout.tsx
'use client';

import React from 'react';
import ClientOnlyAppShell from '@/components/core/ClientOnlyAppShell';
// DO NOT export metadata from a 'use client' component.
// Global styles should be in src/app/layout.tsx or src/app/globals.css imported by the root layout.

export default function AppGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClientOnlyAppShell>
      {children}
    </ClientOnlyAppShell>
  );
}
