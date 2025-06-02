// src/components/common/WistiaPlayer.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

interface WistiaPlayerProps {
  videoId: string;
  className?: string;
}

export const WistiaPlayer: React.FC<WistiaPlayerProps> = ({ videoId, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptId = `wistia-script-${videoId}`;
  const styleId = `wistia-style-${videoId}`;

  useEffect(() => {
    if (!videoId || !containerRef.current) {
      return;
    }

    const currentContainer = containerRef.current;
    currentContainer.innerHTML = ''; // Clear previous embed

    // 1. Create and append video-specific script
    const videoScript = document.createElement('script');
    videoScript.id = scriptId;
    videoScript.src = `https://fast.wistia.com/embed/scripts/e-${videoId}.js`; // Adjusted to common Wistia embed script pattern
    videoScript.async = true;
    document.body.appendChild(videoScript);

    // 2. Create and append video-specific style
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    // Using a more generic approach for responsive player, Wistia's script should handle actual player rendering
    styleElement.innerHTML = `
      .wistia_embed[id~="wistia_${videoId}"] {
        display: block;
        height: 0;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        position: relative;
        width: 100%;
      }
      .wistia_embed[id~="wistia_${videoId}"] > div { /* The actual player div Wistia creates */
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
    `;
    document.head.appendChild(styleElement);
    
    // 3. Create the div Wistia's script will target.
    // Wistia's E-v1.js and the video-specific script usually look for a div with certain classes/IDs.
    // The class "wistia_async_{VIDEO_ID}" is a common pattern.
    const playerDiv = document.createElement('div');
    playerDiv.className = `wistia_responsive_padding ${className || ''}`; // Ensure responsiveness
    
    const videoPlaceholderDiv = document.createElement('div');
    videoPlaceholderDiv.className = `wistia_responsive_wrapper`;
    videoPlaceholderDiv.style.height = '100%';
    videoPlaceholderDiv.style.left = '0';
    videoPlaceholderDiv.style.position = 'absolute';
    videoPlaceholderDiv.style.top = '0';
    videoPlaceholderDiv.style.width = '100%';

    const wistiaEmbedDiv = document.createElement('div');
    wistiaEmbedDiv.className = `wistia_embed wistia_async_${videoId} videoFoam=true seo=false`; // Standard classes Wistia uses
    // width & height might be set by Wistia script, or use CSS for responsiveness
    wistiaEmbedDiv.style.width = "100%";
    wistiaEmbedDiv.style.height = "100%";


    videoPlaceholderDiv.appendChild(wistiaEmbedDiv);
    playerDiv.appendChild(videoPlaceholderDiv);
    currentContainer.appendChild(playerDiv);

    // Trigger Wistia's scan if it's already loaded
    if (typeof (window as any)._wq !== 'undefined') {
        (window as any)._wq.push({ id: '_all', onReady: function(video: any) {
          console.log("Wistia video ready (dynamically loaded):", video.hashedId());
        }});
    }


    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();
      
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) existingStyle.remove();
      
      // Clear the container's content
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }

      // Clean up Wistia's global state if possible (this is more advanced)
      // This part is tricky as Wistia doesn't offer a simple API to "unload" a specific video.
      // For now, removing the DOM elements is the primary cleanup.
    };
  }, [videoId, className]);

  return (
    <>
      <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="lazyOnload" async />
      <div ref={containerRef} className="w-full h-auto aspect-video">
        {/* Wistia player will be dynamically injected here */}
      </div>
    </>
  );
};