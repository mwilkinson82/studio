// src/app/(app)/hub/layout.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faReceipt,
  faFolder,
  faComment,
  faCalendar,
  faGear,
  faRightFromBracket,
  faBell,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Import IconDefinition

// SidebarLink Helper Component
function SidebarLink({ icon, label, href, exactPath }: { icon: IconDefinition; label: string; href: string; exactPath?: boolean }) {
  // const pathname = usePathname(); // Would need to import usePathname from 'next/navigation'
  // const isActive = exactPath ? pathname === href : pathname.startsWith(href);
  // For now, keeping it simple without active state, can be added later
  const linkClass = "flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"; // Reduced py

  return (
    <Link href={href} passHref legacyBehavior>
      <a className={linkClass}>
        <FontAwesomeIcon icon={icon} className="mr-3 w-5 h-5 text-center text-gray-500 group-hover:text-blue-600" />
        <span>{label}</span>
      </a>
    </Link>
  );
}

interface HubLayoutProps {
  children: React.ReactNode;
}

export default function HubLayout({ children }: HubLayoutProps) {
  // Placeholder for user and notification data
  const userName = "Marshall Wilkinson"; // Replace with actual user data
  const userAvatarUrl = "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"; // Replace
  const hasNotifications = true;

  return (
    <div className="flex h-screen overflow-hidden font-sans bg-gray-50"> {/* Added bg-gray-50 for overall page */}
      {/* Sidebar */}
      <aside className="w-60 h-full bg-white border-r border-gray-200 flex flex-col shadow-sm"> {/* Adjusted border and shadow */}
        {/* Top navigation */}
        <div className="px-4 py-6 space-y-1"> {/* Adjusted padding and spacing */}
          <div className="mb-6 px-2"> {/* Added px-2 for alignment */}
            <h1 className="text-xl font-semibold text-blue-700">Advisory Hub</h1> {/* Adjusted color */}
          </div>
          <nav className="space-y-1"> {/* Reduced space-y for tighter links */}
            <SidebarLink icon={faHouse} label="Dashboard" href="/hub" />
            <SidebarLink icon={faUser} label="Profile" href="/profile" />
            <SidebarLink icon={faReceipt} label="Purchase History" href="/history" /> {/* Corrected href */}
            <SidebarLink icon={faFolder} label="File Archive" href="/files" /> {/* Corrected href */}
            <SidebarLink icon={faComment} label="Chat" href="/chat" />
            <SidebarLink icon={faCalendar} label="Calendar" href="/calendar" />
          </nav>
        </div>

        {/* Spacer pushes the bottom buttons to the bottom of this flex column */}
        <div className="flex-grow" />

        {/* Bottom navigation */}
        <div className="px-4 py-4 border-t border-gray-200 space-y-1"> {/* Adjusted padding and spacing */}
          <SidebarLink icon={faGear} label="Settings" href="/settings" />
          {/* Sign Out Button - assuming it's a button not a link for now */}
          <button
            onClick={() => console.log('Sign Out')}
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 w-full group"
          >
            <FontAwesomeIcon icon={faRightFromBracket} className="mr-3 w-5 h-5 text-center text-gray-500 group-hover:text-blue-600" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 bg-white z-10 border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm"> {/* Adjusted padding and shadow */}
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Business Advisory Hub</h1> {/* Adjusted size and color */}
            <p className="text-gray-500 text-sm">
              Your centralized command center for business growth
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <FontAwesomeIcon icon={faBell} className="h-5 w-5"/> {/* Ensured icon size */}
              {hasNotifications && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full border-2 border-white"></span>
              )}
            </button>
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-200"> {/* Adjusted size */}
              <img
                src={userAvatarUrl}
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              id="insight-accelerator-fab"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center text-sm font-medium" // Adjusted colors and size
            >
              <span>Start Insight Accelerator</span>
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" /> {/* Adjusted icon size */}
            </button>
          </div>
        </header>

        {/* Content Slot: HubPage will render here */}
        <main className="flex-1 p-6 overflow-y-auto"> {/* Adjusted padding */}
          {children}
        </main>
      </div>
    </div>
  );
}
