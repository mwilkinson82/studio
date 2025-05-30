// src/app/(app)/hub/page.tsx (Temporary Drastically Simplified Version)
'use client';
import React from 'react';

// Remove all other imports like Head, Script, Lottie, lucide-icons, QuestionnaireFlowComponent for this test.

const UltraHubPage = () => {
  console.log("MINIMAL UltraHubPage is rendering now.");

  return (
    <div style={{ padding: '20px', border: '3px solid green', backgroundColor: 'lightgreen' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Minimal Hub Page Content</h1>
      <p>If you see this, the hub page itself is rendering within its parent layout (AppShell).</p>
    </div>
  );
};

export default UltraHubPage;
