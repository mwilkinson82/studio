// File: src/app/(app)/layout.tsx
'use client'; // ensures this layout is treated as a client component

import React from 'react';
import ClientOnlyAppShell from '@/components/core/ClientOnlyAppShell';

export default function AppGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // We only return the AppShell wrapper. DO NOT output <html> or <body> here.
    <ClientOnlyAppShell>
      {children}
    </ClientOnlyAppShell>
  );
}
