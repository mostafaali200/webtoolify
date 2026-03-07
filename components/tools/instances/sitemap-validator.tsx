"use client";

import { useMemo, useState } from "react";
import type { ToolDefinition } from "@/types";
import { CopyButton } from "@/components/tools/copy-button";
import { EmptyState } from "@/components/tools/empty-state";
import { ResetButton } from "@/components/tools/reset-button";
import { ToolShell } from "@/components/tools/tool-shell";
import { ValidationMessage } from "@/components/tools/validation-message";

import { validateXml } from "@/lib/tool-logic";

export function SitemapValidatorTool({ tool }: { tool: ToolDefinition }) {
  const [xml, setXml] = useState("");

  const result = useMemo(() => validateXml(xml), [xml]);

  return (
    <ToolShell
      title={tool.name}
      description="Perform a quick structural check on sitemap XML before deeper testing."
      form={<div className="space-y-4"><textarea value={xml} onChange={(e) => setXml(e.target.value)} rows={10} placeholder="<urlset>...</urlset>" className="w-full rounded-2xl border border-slate-200 px-4 py-3 font-mono text-sm dark:border-slate-700 dark:bg-slate-950" /><div className="flex gap-3"><ResetButton onClick={() => setXml("")} /></div></div>}
      result={xml ? <div className="space-y-4"><ValidationMessage type={result.valid ? "success" : "error"} message={result.message} /><pre className="overflow-x-auto rounded-2xl bg-slate-950 p-4 text-xs text-slate-100">{xml}</pre></div> : <EmptyState title="Paste sitemap XML" description="This validator checks for expected sitemap containers and location tags as a quick QA step." />}
    />
  );
}
