// src/components/core/ClientOnlyAppShell.tsx
'use client';

import React from 'react';
import CustomLoader from '@/components/core/CustomLoader';
import { AppShell } from '@/components/core/AppShell';

interface ClientOnlyAppShellProps {
  children: React.ReactNode;
}

export default function ClientOnlyAppShell({
  children,
}: ClientOnlyAppShellProps) {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <CustomLoader />;
  }

  return <AppShell>{children}</AppShell>;
}