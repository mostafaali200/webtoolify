"use client";

import { useMemo, useState } from "react";
import type { ToolDefinition } from "@/types";
import { CopyButton } from "@/components/tools/copy-button";
import { EmptyState } from "@/components/tools/empty-state";
import { ResetButton } from "@/components/tools/reset-button";
import { ToolShell } from "@/components/tools/tool-shell";
import { ValidationMessage } from "@/components/tools/validation-message";

import { keywordDensity } from "@/lib/tool-logic";

export function KeywordDensityCheckerTool({ tool }: { tool: ToolDefinition }) {
  const [text, setText] = useState("");
  const [keyword, setKeyword] = useState("");

  const stats = useMemo(() => keywordDensity(text, keyword), [text, keyword]);

  return (
    <ToolShell
      title={tool.name}
      description="Check how frequently a target keyword appears relative to total word count."
      form={
        <div className="space-y-4">
          <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Target keyword" className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950" />
          <textarea value={text} onChange={(e) => setText(e.target.value)} rows={8} placeholder="Paste article or page copy" className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950" />
          <div className="flex gap-3"><ResetButton onClick={() => { setText(""); setKeyword(""); }} /></div>
        </div>
      }
      result={text && keyword ? <div className="space-y-4"><div className="grid gap-4 sm:grid-cols-3">{[
        ["Occurrences", String(stats.count)],
        ["Total words", String(stats.totalWords)],
        ["Density", `${stats.density}%`]
      ].map(([label, value]) => <div key={label} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700"><p className="text-sm text-slate-500">{label}</p><p className="mt-2 text-2xl font-semibold">{value}</p></div>)}</div>{stats.density > 4 ? <ValidationMessage type="error" message="Density looks high. Consider improving naturalness and semantic variety rather than repeating the same phrase." /> : <ValidationMessage type="success" message="Density looks reasonable for a general content review, but always prioritize readability and intent." />}</div> : <EmptyState title="Paste text to analyze" description="Add a target keyword and your text content to calculate frequency and approximate density." />}
    />
  );
}
