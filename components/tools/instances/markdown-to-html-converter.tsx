"use client";

import { useMemo, useState } from "react";
import type { ToolDefinition } from "@/types";
import { CopyButton } from "@/components/tools/copy-button";
import { EmptyState } from "@/components/tools/empty-state";
import { ResetButton } from "@/components/tools/reset-button";
import { ToolShell } from "@/components/tools/tool-shell";
import { ValidationMessage } from "@/components/tools/validation-message";

import { markdownToHtml } from "@/lib/tool-logic";

export function MarkdownToHtmlConverterTool({ tool }: { tool: ToolDefinition }) {
  const [input, setInput] = useState("# Hello\n\nThis is **bold** text.");

  const result = useMemo(() => markdownToHtml(input), [input]);

  return (
    <ToolShell
      title={tool.name}
      description="Turn lightweight Markdown syntax into HTML for publishing and documentation workflows."
      form={<div className="space-y-4"><textarea value={input} onChange={(e) => setInput(e.target.value)} rows={10} className="w-full rounded-2xl border border-slate-200 px-4 py-3 font-mono text-sm dark:border-slate-700 dark:bg-slate-950" /><div className="flex gap-3"><ResetButton onClick={() => setInput("")} /></div></div>}
      result={result ? <div className="space-y-4"><div className="flex items-center justify-between"><h3 className="text-lg font-semibold">HTML output</h3><CopyButton value={result} /></div><pre className="overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm text-slate-100">{result}</pre></div> : <EmptyState title="Add markdown content" description="Write or paste Markdown to see HTML output instantly." />}
    />
  );
}
