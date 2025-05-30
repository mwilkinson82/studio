import type { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  // This console log is the ONLY thing besides returning children.
  console.log(">>> FORCED MINIMAL src/app/(app)/layout.tsx ACTIVE <<<");
  return <>{children}</>;
}
