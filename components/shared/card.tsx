import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm shadow-slate-950/5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80",
        className
      )}
    >
      {children}
    </div>
  );
}
