// src/components/core/UltraHubShell.tsx (Temporary Minimal Version for Testing)
'use client';
import React, { ReactNode } from 'react';

// Minimal UserProps to match what hub/page.tsx might pass
interface UserProps {
  name: string;
  isGuest?: boolean;
}

interface UltraHubShellProps {
  children: ReactNode;
  user?: UserProps; // Make user prop optional as hub/page.tsx might not pass it if simplified
}

export function UltraHubShell({
  children,
  user = { name: "Guest (Minimal Shell)", isGuest: true } // Default user
}: UltraHubShellProps) {
  console.log("MINIMAL UltraHubShell IS RENDERING with user:", user.name);

  return (
    <div style={{ border: '5px solid orangered', padding: '20px', minHeight: '100vh', backgroundColor: 'lightyellow' }}>
      <h1>UltraHubShell (Minimal Test Version)</h1>
      <p>User: {user.name}</p>
      <div style={{ border: '2px solid skyblue', padding: '20px', marginTop: '20px' }}>
        <h2>Page Content Area:</h2>
        {children}
      </div>
    </div>
  );
}
