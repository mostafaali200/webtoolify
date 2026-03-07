"use client";

import { useMemo, useState } from "react";
import type { ToolDefinition } from "@/types";
import { CopyButton } from "@/components/tools/copy-button";
import { EmptyState } from "@/components/tools/empty-state";
import { ResetButton } from "@/components/tools/reset-button";
import { ToolShell } from "@/components/tools/tool-shell";
import { ValidationMessage } from "@/components/tools/validation-message";

type RobotsTxtGeneratorToolProps = {
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

function normalizePathList(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => (line.startsWith("/") ? line : `/${line}`));
}

export function RobotsTxtGeneratorTool({ tool }: RobotsTxtGeneratorToolProps) {
  const [userAgent, setUserAgent] = useState("*");
  const [disallowAdmin, setDisallowAdmin] = useState(true);
  const [disallowSearch, setDisallowSearch] = useState(false);
  const [customDisallow, setCustomDisallow] = useState("");
  const [customAllow, setCustomAllow] = useState("");
  const [sitemap, setSitemap] = useState("");

  const disallowPaths = useMemo(() => {
    const base: string[] = [];

    if (disallowAdmin) base.push("/admin/");
    if (disallowSearch) base.push("/search");

    return [...base, ...normalizePathList(customDisallow)];
  }, [customDisallow, disallowAdmin, disallowSearch]);

  const allowPaths = useMemo(() => normalizePathList(customAllow), [customAllow]);

  const hasValidSitemap = !sitemap.trim() || isValidAbsoluteUrl(sitemap.trim());

  const result = useMemo(() => {
    const lines: string[] = [`User-agent: ${userAgent.trim() || "*"}`];

    if (allowPaths.length) {
      allowPaths.forEach((path) => lines.push(`Allow: ${path}`));
    }

    if (disallowPaths.length) {
      disallowPaths.forEach((path) => lines.push(`Disallow: ${path}`));
    }

    if (!allowPaths.length && !disallowPaths.length) {
      lines.push("Allow: /");
    }

    if (sitemap.trim()) {
      lines.push("", `Sitemap: ${sitemap.trim()}`);
    }

    return lines.join("\n");
  }, [userAgent, allowPaths, disallowPaths, sitemap]);

  const validationMessage = useMemo(() => {
    if (!hasValidSitemap) {
      return {
        type: "error" as const,
        message: "The sitemap URL should be a full absolute URL starting with https:// or http://."
      };
    }

    if (!disallowPaths.length && !allowPaths.length) {
      return {
        type: "success" as const,
        message: "This robots.txt allows full crawling. Make sure that is intentional."
      };
    }

    return {
      type: "success" as const,
      message:
        "Review the final paths carefully. robots.txt manages crawler behavior but does not protect private content."
    };
  }, [allowPaths.length, disallowPaths.length, hasValidSitemap]);

  function resetAll() {
    setUserAgent("*");
    setDisallowAdmin(true);
    setDisallowSearch(false);
    setCustomDisallow("");
    setCustomAllow("");
    setSitemap("");
  }

  return (
    <ToolShell
      title={tool.name}
      description="Generate a practical robots.txt file with common directives, custom paths, and sitemap support."
      form={
        <div className="space-y-5">
          <label className="block space-y-2">
            <span className="text-sm font-medium">User-agent</span>
            <input
              value={userAgent}
              onChange={(e) => setUserAgent(e.target.value)}
              placeholder="*"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>

          <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700">
            <input
              type="checkbox"
              checked={disallowAdmin}
              onChange={(e) => setDisallowAdmin(e.target.checked)}
            />
            <span className="text-sm font-medium">Disallow admin area</span>
          </label>

          <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700">
            <input
              type="checkbox"
              checked={disallowSearch}
              onChange={(e) => setDisallowSearch(e.target.checked)}
            />
            <span className="text-sm font-medium">Disallow internal search pages</span>
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium">Custom disallow paths</span>
            <textarea
              value={customDisallow}
              onChange={(e) => setCustomDisallow(e.target.value)}
              rows={4}
              placeholder={"/private/\n/tmp/\n/checkout/"}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 font-mono text-sm dark:border-slate-700 dark:bg-slate-950"
            />
            <p className="text-xs leading-6 text-slate-500 dark:text-slate-400">
              Add one path per line. Example: /private/
            </p>
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium">Custom allow paths</span>
            <textarea
              value={customAllow}
              onChange={(e) => setCustomAllow(e.target.value)}
              rows={3}
              placeholder={"/blog/\n/docs/"}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 font-mono text-sm dark:border-slate-700 dark:bg-slate-950"
            />
            <p className="text-xs leading-6 text-slate-500 dark:text-slate-400">
              Optional. Add one allowed path per line.
            </p>
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium">Sitemap URL</span>
            <input
              value={sitemap}
              onChange={(e) => setSitemap(e.target.value)}
              placeholder="https://example.com/sitemap.xml"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>

          <ValidationMessage type={validationMessage.type} message={validationMessage.message} />

          <div className="flex gap-3">
            <ResetButton onClick={resetAll} />
          </div>
        </div>
      }
      result={
        result ? (
          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
              <h3 className="text-sm font-semibold text-slate-950 dark:text-white">Output summary</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {disallowPaths.length} disallow directive{disallowPaths.length === 1 ? "" : "s"}
                , {allowPaths.length} allow directive{allowPaths.length === 1 ? "" : "s"}
                {sitemap.trim() ? ", plus one sitemap reference." : "."}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Generated robots.txt</h3>
              <CopyButton value={result} />
            </div>

            <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm text-slate-100">
              {result}
            </pre>
          </div>
        ) : (
          <EmptyState
            title="No robots.txt output yet"
            description="Choose your crawl directives and optional sitemap URL to generate the file."
          />
        )
      }
    />
  );
}