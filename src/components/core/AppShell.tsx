// src/components/core/AppShell.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faReceipt,
  // faFolder, // Not used in this specific AppShell snippet
  // faComment, // Not used
  // faCalendar, // Not used
  // faGear, // Not used
  // faRightFromBracket, // Not used
  // faBell, // Not used
  // faArrowRight, // Not used
} from '@fortawesome/free-solid-svg-icons';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isHubRoute =
    pathname === '/hub' || pathname.startsWith('/hub/');

  if (isHubRoute) {
    return <>{children}</>;
  }

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Standard Page Header</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-500 hover:text-blue transition-colors duration-300"
        >
          Toggle Sidebar
        </button>
      </header>

      <div className="flex flex-1">
        {sidebarOpen && (
          <aside className="w-60 bg-white border-r border-gray-100 p-6 space-y-6">
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link href="/hub" passHref legacyBehavior>
                    <a className="flex items-center text-gray-700 hover:text-blue transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={faHouse}
                        className="mr-3 w-5 text-center"
                      />
                      Hub
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/profile" passHref legacyBehavior>
                    <a className="flex items-center text-gray-700 hover:text-blue transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="mr-3 w-5 text-center"
                      />
                      Profile
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/history" passHref legacyBehavior>
                    <a className="flex items-center text-gray-700 hover:text-blue transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={faReceipt}
                        className="mr-3 w-5 text-center"
                      />
                      Purchase History
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
        )}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
