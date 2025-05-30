'use client';

import React, { useEffect } from 'react';

interface WistiaPlayerProps {
  videoId: string;
  className?: string; 
  autoPlay?: boolean;
  muted?: boolean;
  controlsVisibleOnLoad?: boolean;
  // Add other Wistia options as props if needed, e.g., endVideoBehavior
}

export function WistiaPlayer({ 
  videoId, 
  className,
  autoPlay = false,
  muted, 
  controlsVisibleOnLoad = true,
}: WistiaPlayerProps) {
  if (!videoId) return null;

  const actualMuted = autoPlay ? (muted === undefined ? true : muted) : (muted === undefined ? false : muted);

  const wistiaOptions: any = {
    videoFoam: true,
    playerColor: "74B9FF", // Your brand color
    controlsVisibleOnLoad: controlsVisibleOnLoad,
    // seo: false, // This is often a default or handled differently with E-v1.js
  };

  if (autoPlay) {
    wistiaOptions.autoPlay = "muted"; // Wistia often uses "muted" string for this option for JS embeds
                                     // or autoPlay: true and muted: true separately.
                                     // Let's try autoPlay: "muted" first.
                                     // If that doesn't work, we can try autoPlay:true, muted:actualMuted
  } else if (actualMuted) {
    wistiaOptions.muted = true;
  }
  // Example: wistiaOptions.endVideoBehavior = "reset";

  // This effect hook is to ensure Wistia's scripts re-scan if the videoId or options change dynamically,
  // though E-v1.js is usually good at picking up new embeds on its own.
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any)._wq) {
      (window as any)._wq.push({ id: "_all", onReady: function(video: any) {
        // console.log("Wistia video ready (all):", video);
      }});
    }
    // Trigger a Wistia scan manually if needed, though usually not required for async embeds
    // if (typeof window !== 'undefined' && (window as any).Wistia && (window as any).Wistia.scan) {
    //  (window as any).Wistia.scan();
    // }
  }, [videoId]);

  return (
    <div 
      className={className || "wistia_responsive_padding"} 
      style={{ padding: "56.25% 0 0 0", position: "relative", background: "#111" }} // Darker fallback bg
    >
      <div 
        className="wistia_responsive_wrapper" 
        style={{ height: "100%", left: 0, position: "absolute", top: 0, width: "100%" }}
      >
        <div 
          className={`wistia_embed wistia_async_${videoId}`}
          data-wistia-options={JSON.stringify(wistiaOptions)} // Pass options via data attribute
          style={{ height: "100%", width: "100%", position: "relative" }}
        >
          &nbsp; {/* Placeholder, Wistia will replace this div */}
        </div>
      </div>
    </div>
  );
}
