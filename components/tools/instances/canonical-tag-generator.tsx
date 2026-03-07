"use client";

import { useMemo, useState } from "react";
import type { ToolDefinition } from "@/types";
import { CopyButton } from "@/components/tools/copy-button";
import { EmptyState } from "@/components/tools/empty-state";
import { ResetButton } from "@/components/tools/reset-button";
import { ToolShell } from "@/components/tools/tool-shell";
import { ValidationMessage } from "@/components/tools/validation-message";

type CanonicalTagGeneratorToolProps = {
  tool: ToolDefinition;
};

function isValidAbsoluteUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function escapeAttribute(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function CanonicalTagGeneratorTool({ tool }: CanonicalTagGeneratorToolProps) {
  const [url, setUrl] = useState("");
  const [crossDomain, setCrossDomain] = useState(false);

  const trimmedUrl = url.trim();
  const hasUrl = trimmedUrl.length > 0;
  const isValidUrl = !hasUrl || isValidAbsoluteUrl(trimmedUrl);

  const result = useMemo(() => {
    if (!hasUrl || !isValidUrl) return "";
    return `<link rel="canonical" href="${escapeAttribute(trimmedUrl)}" />`;
  }, [hasUrl, isValidUrl, trimmedUrl]);

  const validationMessage = useMemo(() => {
    if (!hasUrl) return null;

    if (!isValidUrl) {
      return {
        type: "error" as const,
        message: "Use a full absolute canonical URL starting with https:// or http://."
      };
    }

    if (crossDomain) {
      return {
        type: "success" as const,
        message:
          "Cross-domain canonicals can be valid, but use them carefully and only when the relationship between pages is intentional."
      };
    }

    return {
      type: "success" as const,
      message:
        "Use one canonical per indexable page and keep it aligned with the final preferred URL."
    };
  }, [crossDomain, hasUrl, isValidUrl]);

  return (
    <ToolShell
      title={tool.name}
      description="Generate a clean canonical tag for the preferred version of a page and validate the destination URL."
      form={
        <div className="space-y-5">
          <label className="block space-y-2">
            <span className="text-sm font-medium">Preferred canonical URL</span>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/preferred-page"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>

          <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700">
            <input
              type="checkbox"
              checked={crossDomain}
              onChange={(e) => setCrossDomain(e.target.checked)}
            />
            <span className="text-sm font-medium">This is a cross-domain canonical</span>
          </label>

          {validationMessage ? (
            <ValidationMessage
              type={validationMessage.type}
              message={validationMessage.message}
            />
          ) : null}

          <div className="flex gap-3">
            <ResetButton
              onClick={() => {
                setUrl("");
                setCrossDomain(false);
              }}
            />
          </div>
        </div>
      }
      result={
        result ? (
          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
              <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                Canonical summary
              </h3>
              <p className="mt-2 break-all text-sm leading-7 text-slate-600 dark:text-slate-300">
                {trimmedUrl}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Canonical tag</h3>
              <CopyButton value={result} />
            </div>

            <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm text-slate-100">
              {result}
            </pre>
          </div>
        ) : (
          <EmptyState
            title="Add a preferred URL"
            description="Provide the canonical destination to generate a valid HTML tag."
          />
        )
      }
    />
  );
}