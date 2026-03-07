"use client";

import { useMemo, useState } from "react";
import type { ToolDefinition } from "@/types";
import { CopyButton } from "@/components/tools/copy-button";
import { EmptyState } from "@/components/tools/empty-state";
import { ResetButton } from "@/components/tools/reset-button";
import { ToolShell } from "@/components/tools/tool-shell";
import { ValidationMessage } from "@/components/tools/validation-message";

import { toSentenceCase, toTitleCase } from "@/lib/tool-logic";

export function TextCaseConverterTool({ tool }: { tool: ToolDefinition }) {
  const [input, setInput] = useState("");

  const outputs = useMemo(() => ({
    uppercase: input.toUpperCase(),
    lowercase: input.toLowerCase(),
    title: toTitleCase(input),
    sentence: toSentenceCase(input)
  }), [input]);

  return (
    <ToolShell
      title={tool.name}
      description="Convert text instantly across common case formats for content and UI workflows."
      form={<div className="space-y-4"><textarea value={input} onChange={(e) => setInput(e.target.value)} rows={8} className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950" /><div className="flex gap-3"><ResetButton onClick={() => setInput("")} /></div></div>}
      result={input ? <div className="space-y-4">{Object.entries(outputs).map(([label, value]) => <div key={label} className="space-y-2 rounded-2xl border border-slate-200 p-4 dark:border-slate-700"><div className="flex items-center justify-between"><h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</h3><CopyButton value={value} /></div><p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{value}</p></div>)}</div> : <EmptyState title="Nothing to convert yet" description="Paste text once and copy the case style you need." />}
    />
  );
}
