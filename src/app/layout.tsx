// 'use client'; // This is a Server Component, client directive not needed here.

import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local'; 
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AppRouterLayout from "@/components/core/AppRouterLayout";
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';

const geistSans = localFont({
  src: [
    { path: '../fonts/Geist-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../fonts/Geist-ExtraLight.woff2', weight: '200', style: 'normal' },
    { path: '../fonts/Geist-Light.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/Geist-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Geist-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/Geist-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/Geist-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/Geist-ExtraBold.woff2', weight: '800', style: 'normal' },
    { path: '../fonts/Geist-Black.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = localFont({
  src: [
    { path: '../fonts/GeistMono-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../fonts/GeistMono-Light.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/GeistMono-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/GeistMono-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/GeistMono-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/GeistMono-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/GeistMono-Black.woff2', weight: '900', style: 'normal' },
    { path: '../fonts/GeistMono-UltraLight.woff2', weight: '200', style: 'normal' }, // Mapped UltraLight to 200
    { path: '../fonts/GeistMono-UltraBlack.woff2', weight: '900', style: 'normal' }, // Mapped UltraBlack to 900 (CSS standard max)
  ],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'a|p', 
  description: 'Expert Advisory Consulting Services.',
};

export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <AppRouterLayout>
            {children}
          </AppRouterLayout>
          <Toaster />
        </StyledComponentsRegistry>
        {/* Any other scripts like Google Analytics etc. can go here */}
      </body>
    </html>
  )
}
