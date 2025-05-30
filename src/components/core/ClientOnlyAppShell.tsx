'use client';

import * as React from 'react';
import { AppShell } from '@/components/core/AppShell';
import CustomLoader from '@/components/core/CustomLoader'; // Ensure CustomLoader is imported

interface ClientOnlyAppShellProps extends React.PropsWithChildren {}

export default function ClientOnlyAppShell(props: ClientOnlyAppShellProps) {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    console.log("ClientOnlyAppShell: useEffect, setting hasMounted = true");
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    console.log("ClientOnlyAppShell: Not mounted, rendering CustomLoader as placeholder.");
    return <CustomLoader />;
  }

  console.log("ClientOnlyAppShell: Mounted, rendering AppShell.");
  return <AppShell {...props} />;
}
