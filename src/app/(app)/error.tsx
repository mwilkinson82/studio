// src/app/error.tsx
'use client';

import { useEffect } from 'react';

export default function RootError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Root error boundary caught:", error);
  }, [error]);

  return (
    <div className="flex h-full items-center justify-center p-4" style={{minHeight: '100vh', backgroundColor: 'lightcoral'}}>
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Oops — something went wrong at the root! (app/error.tsx)</h1>
        <p className="mb-6 text-gray-600">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-[#635BFF] text-white rounded-full hover:bg-[#4a3fcc] transition"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
