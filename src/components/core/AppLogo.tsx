import type { SVGProps } from 'react';

export function AppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100" // Adjusted viewBox for potentially wider text
      fill="currentColor" // Changed fill to currentColor for text
      aria-hidden="true"
      {...props}
    >
      {/* Simple text representation of a|p - styling might need adjustment */}
      <text 
        x="50" 
        y="60" // Adjusted y for better vertical centering of text
        fontSize="40" // Adjust font size as needed
        textAnchor="middle" 
        fontFamily="Arial, sans-serif" // Specify a common font family
        fontWeight="bold" // Make it bold to match typical logo weight
      >
        a|p
      </text>
    </svg>
  );
}
