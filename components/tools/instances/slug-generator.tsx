"use client";

import { useMemo, useState } from "react";
import type { ToolDefinition } from "@/types";
import { CopyButton } from "@/components/tools/copy-button";
import { EmptyState } from "@/components/tools/empty-state";
import { ResetButton } from "@/components/tools/reset-button";
import { ToolShell } from "@/components/tools/tool-shell";
import { ValidationMessage } from "@/components/tools/validation-message";

import { slugify } from "@/lib/tool-logic";

type SlugGeneratorToolProps = {
  tool: ToolDefinition;
};

function countWords(value: string) {
  return value.trim() ? value.trim().split(/\s+/).length : 0;
}

export function SlugGeneratorTool({ tool }: SlugGeneratorToolProps) {
  const [input, setInput] = useState("");
  const [removeTrailingSlash, setRemoveTrailingSlash] = useState(true);

  const result = useMemo(() => {
    const slug = slugify(input);
    if (!slug) return "";
    return removeTrailingSlash ? slug.replace(/\/+$/, "") : slug;
  }, [input, removeTrailingSlash]);

  const inputWordCount = useMemo(() => countWords(input), [input]);
  const slugLength = result.length;

  const validationMessage = useMemo(() => {
    if (!input.trim()) return null;

    if (!result) {
      return {
        type: "error" as const,
        message:
          "The input did not produce a usable slug. Try using letters or numbers instead of symbols only."
      };
    }

    if (slugLength < 3) {
      return {
        type: "error" as const,
        message: "The generated slug is very short. Add more descriptive words for clarity."
      };
    }

    if (slugLength > 75) {
      return {
        type: "success" as const,
        message:
          "The slug is valid, but you may want to shorten it for readability and cleaner URLs."
      };
    }

    return {
      type: "success" as const,
      message:
        "The slug looks clean and readable. Keep published URLs stable unless you also manage redirects."
    };
  }, [input, result, slugLength]);

  return (
    <ToolShell
      title={tool.name}
      description="Convert titles, headings, and phrases into clean, SEO-friendly URL slugs with readable formatting."
      form={
        <div className="space-y-5">
          <label className="block space-y-2">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium">Source text</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {inputWordCount} word{inputWordCount === 1 ? "" : "s"}
              </span>
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={6}
              placeholder="How to Create SEO-Friendly Slugs"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>

          <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700">
            <input
              type="checkbox"
              checked={removeTrailingSlash}
              onChange={(e) => setRemoveTrailingSlash(e.target.checked)}
            />
            <span className="text-sm font-medium">Remove trailing slash</span>
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
                setInput("");
                setRemoveTrailingSlash(true);
              }}
            />
          </div>
        </div>
      }
      result={
        result ? (
          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
              <h3 className="text-sm font-semibold text-slate-950 dark:text-white">Slug summary</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {slugLength} character{slugLength === 1 ? "" : "s"} • lowercase • hyphen-separated
              </p>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Generated slug</h3>
              <CopyButton value={result} />
            </div>

            <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm text-slate-100">
              {result}
            </pre>
          </div>
        ) : (
          <EmptyState
            title="Slug preview will appear here"
            description="Paste a title, heading, or phrase to generate a clean URL slug."
          />
        )
      }
    />
  );
}