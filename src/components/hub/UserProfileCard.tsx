'use client'; // Keep client directive if it uses client-side hooks like useState, useEffect, or event handlers

import React from 'react';
// Removed styled-components import as new design uses Tailwind primarily
// import Image from 'next/image'; // Add if using Next/Image for avatar

// Using the User interface from HubPage.tsx for consistency, can be defined here or imported
interface User {
  name?: string | null;
  avatarUrl?: string | null;
  role?: string | null; // Role was in old card, new one has 'Premium Member'
}

// Simple hook for user data, similar to HubPage for now
// In a real app, this might take user as a prop or use a global context
const useInternalUser = (): { user: User | null } => {
  return { user: { name: 'Alex Morgan', role: 'Premium Member', avatarUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg' } };
};

const UserProfileCard = () => {
  const { user } = useInternalUser(); // Use internal hook or accept user as prop

  return (
    // The root div will take w-full h-full from its parent in HubPage.tsx
    // The internal structure and styling comes directly from your new HTML for profile-card
    // p-5, bg-white, rounded-bento, shadow-bento will be applied by the parent div in HubPage.tsx
    // So this component just needs to render its internal content properly.
    <div className="flex flex-col justify-between h-full w-full"> {/* Ensure it fills height and allows content distribution */}
      <div> {/* Top part with avatar and info */}
        <div className="flex items-center mb-4">
          {user?.avatarUrl ? (
            <img src={user.avatarUrl} alt={user.name || 'User'} className="w-12 h-12 rounded-full mr-3" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-apple-purple text-white flex items-center justify-center text-xl font-semibold mr-3">
              {user?.name?.charAt(0) || 'A'}
            </div>
          )}
          <div>
            <h3 className="font-medium text-gray-700">{user?.name || 'User Name'}</h3>
            <p className="text-sm text-gray-500">{user?.role || 'Member Status'}</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-500">Next Session</span>
            <span className="text-apple-blue font-medium cursor-pointer hover:underline">Calendar</span> {/* Made Calendar clickable */}
          </div>
          <p className="font-medium text-gray-700">May 30, 2023 • 10:00 AM</p> {/* This is static, will need to be dynamic */} 
        </div>
      </div>
      
      {/* Button at the bottom */}
      <button className="w-full bg-gray-900 text-white rounded-xl py-2 text-sm font-medium hover:bg-gray-800 transition-colors mt-auto">
        View Profile
      </button>
    </div>
  );
}

export default UserProfileCard;
