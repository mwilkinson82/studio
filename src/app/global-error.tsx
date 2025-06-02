// src/app/global-error.tsx
'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error caught:", error);
  }, [error]);

  return (
    <div style={{ padding: '20px', border: '2px solid darkred', margin: '20px', backgroundColor: 'lightpink', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2>A critical error occurred! (global-error.tsx)</h2>
      <p>Error Message: {error.message}</p>
      <button onClick={() => reset()} style={{ padding: '10px', marginTop: '10px' }}>
        Try to reload the page
      </button>
    </div>
  );
}
