'use client';

import React from 'react';
// We can add Link from next/link if these items become navigable

interface NewSidebarProps {
  userName?: string;
}

const NewSidebar = ({ userName = 'Alex' }: NewSidebarProps) => {
  // The inline styles from your HTML are very specific with absolute positioning and fixed sizes.
  // This component will replicate that structure.
  // Note: For responsiveness and maintainability, using Tailwind classes or a more structured CSS approach
  // would be preferable in the long run, but for now, this is a direct translation.

  // Helper for icon placeholders - replace with actual icons (e.g., FontAwesome, Lucide) later
  const IconPlaceholder = ({ color, width, height, iconWidth, iconHeight, top = 0, left = 0 }: any) => (
    <div style={{ width, height, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', overflow: 'hidden' }}>
      <div style={{ width: iconWidth, height: iconHeight, position: 'relative', background: 'rgba(0, 0, 0, 0)', overflow: 'hidden' }}>
        <div style={{ width: iconWidth, height: iconHeight, left, top, position: 'absolute', background: color }} />
      </div>
    </div>
  );

  const navItemStyle = { color: '#4B5563', fontSize: 16, fontFamily: 'Geist', fontWeight: '400', lineHeight: '16px', wordWrap: 'break-word' as 'break-word' };
  const activeNavItemStyle = { ...navItemStyle, color: '#111827' };

  return (
    <div style={{ width: '256px', height: '100%', position: 'relative', background: 'white', borderRight: '1px #F3F4F6 solid' }}>
      {/* Header */}
      <div style={{ width: 207, height: 56, left: 24, top: 24, position: 'absolute' }}>
        <div style={{ width: 170, height: 31, left: 0, top: 0, position: 'absolute', color: '#111827', fontSize: 24, fontFamily: 'Geist', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word' }}>A|P</div>
        <div style={{ width: 129, height: 18, left: 0, top: 37, position: 'absolute', color: '#6B7280', fontSize: 14, fontFamily: 'Geist', fontWeight: '400', lineHeight: '14px', wordWrap: 'break-word' }}>Welcome back, {userName}</div>
      </div>

      {/* Navigation Section - Grouped similar items for clarity */}
      <div style={{ width: 207, position: 'absolute', left: 24, top: 112 }}> {/* Outer container for nav items */}
        {/* Dashboard (Active) */}
        <div style={{ width: 207, height: 48, position: 'relative', marginBottom: 8 /* 56-48 */ }}>
          <div style={{ width: 207, height: 48, left: 0, top: 0, position: 'absolute', background: '#F3F4F6', borderRadius: 12 }}>
            <div style={{ width: 20, height: 20, left: 12, top: 14, position: 'absolute' }}>
              <IconPlaceholder color="#111827" width={18} height={16} iconWidth={18} iconHeight={16} />
            </div>
            <div style={{ width: 81.50, height: 24, left: 44, top: 12, position: 'absolute' }}>
              <div style={{ ...activeNavItemStyle, width: 80, height: 21, left: 0, top: 1, position: 'absolute' }}>Dashboard</div>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div style={{ width: 207, height: 48, position: 'relative', marginBottom: 8 }}>
          <div style={{ width: 14, height: 16, left: 12, top: 14, position: 'absolute' }}>
            <IconPlaceholder color="#4B5563" width={14} height={16} iconWidth={14} iconHeight={16} />
          </div>
          <div style={{ ...navItemStyle, width: 48, height: 21, left: 44, top: 13, position: 'absolute' }}>Profile</div>
        </div>

        {/* Purchase History */}
        <div style={{ width: 207, height: 48, position: 'relative', marginBottom: 8 }}>
          <div style={{ width: 12, height: 16, left: 12, top: 14, position: 'absolute' }}>
             <IconPlaceholder color="#4B5563" width={12} height={16} iconWidth={12} iconHeight={16} />
          </div>
          <div style={{ ...navItemStyle, width: 125, height: 21, left: 44, top: 13, position: 'absolute' }}>Purchase History</div>
        </div>

        {/* File Archive */}
        <div style={{ width: 207, height: 48, position: 'relative', marginBottom: 8 }}>
          <div style={{ width: 16, height: 16, left: 12, top: 14, position: 'absolute' }}>
            <IconPlaceholder color="#4B5563" width={16} height={14} iconWidth={16} iconHeight={14} top={1} />
          </div>
          <div style={{ ...navItemStyle, width: 85, height: 21, left: 44, top: 13, position: 'absolute' }}>File Archive</div>
        </div>

        {/* Chat */}
        <div style={{ width: 207, height: 48, position: 'relative', marginBottom: 8 }}>
          <div style={{ width: 16, height: 16, left: 12, top: 14, position: 'absolute' }}>
            <IconPlaceholder color="#4B5563" width={16} height={16} iconWidth={16} iconHeight={16} />
          </div>
          <div style={{ ...navItemStyle, width: 36, height: 21, left: 44, top: 13, position: 'absolute' }}>Chat</div>
        </div>

        {/* Calendar */}
        <div style={{ width: 207, height: 48, position: 'relative' }}>
          <div style={{ width: 14, height: 16, left: 12, top: 14, position: 'absolute' }}>
            <IconPlaceholder color="#4B5563" width={14} height={16} iconWidth={14} iconHeight={16} />
          </div>
          <div style={{ ...navItemStyle, width: 67, height: 21, left: 44, top: 13, position: 'absolute' }}>Calendar</div>
        </div>
      </div>

      {/* Footer Nav Items - Adjusted top to be relative to bottom of viewport or container */}
      <div style={{ width: 207, height: 121, left: 24, bottom: 24, position: 'absolute', borderTop: '1px #F3F4F6 solid', paddingTop: '24px' }}>
        <div style={{ width: 207, height: 48, position: 'relative', marginBottom: 8 }}>
          <div style={{ width: 16, height: 16, left: 12, top: 14, position: 'absolute' }}>
            <IconPlaceholder color="#4B5563" width={15.08} height={16} iconWidth={15.08} iconHeight={16} left={0.46}/>
          </div>
          <div style={{ ...navItemStyle, width: 61, height: 21, left: 44, top: 13, position: 'absolute' }}>Settings</div>
        </div>
        <div style={{ width: 207, height: 48, position: 'relative' }}>
          <div style={{ width: 16, height: 16, left: 12, top: 14, position: 'absolute' }}>
            <IconPlaceholder color="#4B5563" width={16} height={14} iconWidth={16} iconHeight={14} top={1}/>
          </div>
          <div style={{ ...navItemStyle, width: 64, height: 21, left: 44, top: 13, position: 'absolute' }}>Sign Out</div>
        </div>
      </div>
    </div>
  );
}

export default NewSidebar;
