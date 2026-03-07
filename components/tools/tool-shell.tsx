"use client";

import type { ReactNode } from "react";
import { Card } from "@/components/shared/card";

type ToolShellProps = {
  title: string;
  description: string;
  form: ReactNode;
  result: ReactNode;
};

export function ToolShell({ title, description, form, result }: ToolShellProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
      <Card className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{title}</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
        </div>
        {form}
      </Card>
      <Card className="space-y-5">{result}</Card>
    </div>
  );
}
