// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My ALP App (Root)', // More specific title
  description: 'ALP Platform with Supabase & Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
