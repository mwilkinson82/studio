'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link'; // Using Next.js Link for navigation in the non-hub sidebar

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter(); // For programmatic navigation if needed
  const isHubPage = pathname === '/hub' || pathname.startsWith('/hub'); // Adjust if your hub path is different

  // State for the non-hub sidebar (if you have other pages that need a shell)
  const [otherPagesSidebarOpen, setOtherPagesSidebarOpen] = useState(true);

  console.log("NEW AppShell rendering. Pathname:", pathname, "IsHubPage:", isHubPage);

  if (isHubPage) {
    // For the hub page, render only its content to allow it to be full screen
    console.log("NEW AppShell: Rendering Hub Page (children only)");
    return <>{children}</>;
  }

  // For other pages, render a standard layout with a simple sidebar and header
  console.log("NEW AppShell: Rendering standard layout for non-hub page");
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header for non-hub pages */}
      <header style={{ backgroundColor: '#f0f0f0', padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ margin: 0 }}>Standard Page Header</h1>
        <button onClick={() => setOtherPagesSidebarOpen(!otherPagesSidebarOpen)}>
          Toggle Sidebar
        </button>
      </header>
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar for non-hub pages */}
        {otherPagesSidebarOpen && (
          <aside style={{ width: '200px', backgroundColor: '#e0e0e0', padding: '1rem', borderRight: '1px solid #ccc' }}>
            <h2 style={{marginTop: 0}}>Navigation</h2>
            <nav>
              <ul>
                <li><Link href="/hub">Hub</Link></li>
                {/* Add other links for non-hub pages here */}
                <li><Link href="/some-other-page">Other Page</Link></li>
              </ul>
            </nav>
          </aside>
        )}
        {/* Main content for non-hub pages */}
        <main style={{ flex: 1, padding: '1rem' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
