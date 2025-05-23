import type { SVGProps } from 'react';

export function AppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="5" />
      <path
        d="M35 50 Q50 35, 65 50 M35 65 Q50 50, 65 65"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
