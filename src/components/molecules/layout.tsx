import { ReactNode } from "react";
import { ThemeToggle } from "./theme-toggle";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background text-foreground">
      <ThemeToggle />

      {children}
    </div>
  );
}
