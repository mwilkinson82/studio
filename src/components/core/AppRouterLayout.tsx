'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import ClientOnlyAppShell from "@/components/core/ClientOnlyAppShell";

interface AppRouterLayoutProps {
  children: React.ReactNode;
}

export default function AppRouterLayout({ children }: AppRouterLayoutProps) {
  const pathname = usePathname();
  const isSplashPage = pathname === '/splash';

  if (isSplashPage) {
    return <>{children}</>; // Render splash page children directly
  }

  // For all other pages, use the AppShell
  return <ClientOnlyAppShell>{children}</ClientOnlyAppShell>;
}
