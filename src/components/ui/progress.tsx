"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, style, ...props }, ref) => { // Destructure style from props
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden rounded-full",
        className // Will receive h-4 and bg-[#e5e7eb] from QuestionCard for the track
      )}
      // Explicitly set background color via style for track, merging with passed style
      style={{ backgroundColor: '#e5e7eb', ...style }} 
      value={value}
      {...props} // Spread other props like aria-attributes
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 transition-all" 
        style={{
          backgroundColor: '#74B9FF', 
          transform: `translateX(-${100 - (value || 0)}%)`
        }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
