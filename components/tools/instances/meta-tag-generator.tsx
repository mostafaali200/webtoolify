"use client";

import { useMemo, useState } from "react";
import type { ToolDefinition } from "@/types";
import { CopyButton } from "@/components/tools/copy-button";
import { EmptyState } from "@/components/tools/empty-state";
import { ResetButton } from "@/components/tools/reset-button";
import { ToolShell } from "@/components/tools/tool-shell";
import { ValidationMessage } from "@/components/tools/validation-message";

type MetaTagGeneratorToolProps = {
  tool: ToolDefinition;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function isValidAbsoluteUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function getTitleStatus(length: number) {
  if (length === 0) return "neutral";
  if (length < 30) return "warning";
  if (length <= 60) return "good";
  if (length <= 70) return "warning";
  return "error";
}

function getDescriptionStatus(length: number) {
  if (length === 0) return "neutral";
  if (length < 70) return "warning";
  if (length <= 155) return "good";
  if (length <= 160) return "warning";
  return "error";
}

function getStatusClasses(status: "neutral" | "good" | "warning" | "error") {
  if (status === "good") return "text-emerald-600 dark:text-emerald-400";
  if (status === "warning") return "text-amber-600 dark:text-amber-400";
  if (status === "error") return "text-rose-600 dark:text-rose-400";
  return "text-slate-500 dark:text-slate-400";
}

export function MetaTagGeneratorTool({ tool }: MetaTagGeneratorToolProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [canonical, setCanonical] = useState("");
  const [siteName, setSiteName] = useState("WebToolify");
  const [includeSocialTags, setIncludeSocialTags] = useState(true);

  const titleLength = title.trim().length;
  const descriptionLength = description.trim().length;

  const titleStatus = getTitleStatus(titleLength);
  const descriptionStatus = getDescriptionStatus(descriptionLength);

  const canonicalProvided = canonical.trim().length > 0;
  const canonicalValid = !canonicalProvided || isValidAbsoluteUrl(canonical.trim());

  const hasRequiredContent = title.trim() || description.trim();

  const result = useMemo(() => {
    if (!hasRequiredContent) return "";

    const safeTitle = escapeHtml(title.trim());
    const safeDescription = escapeHtml(description.trim());
    const safeKeywords = escapeHtml(keywords.trim());
    const safeCanonical = escapeHtml(canonical.trim());
    const safeSiteName = escapeHtml(siteName.trim());

    const lines = [
      safeTitle ? `<title>${safeTitle}</title>` : "",
      safeDescription ? `<meta name="description" content="${safeDescription}" />` : "",
      safeKeywords ? `<meta name="keywords" content="${safeKeywords}" />` : "",
      safeCanonical ? `<link rel="canonical" href="${safeCanonical}" />` : ""
    ];

    if (includeSocialTags) {
      lines.push(
        safeTitle ? `<meta property="og:title" content="${safeTitle}" />` : "",
        safeDescription ? `<meta property="og:description" content="${safeDescription}" />` : "",
        safeCanonical ? `<meta property="og:url" content="${safeCanonical}" />` : "",
        safeSiteName ? `<meta property="og:site_name" content="${safeSiteName}" />` : "",
        `<meta property="og:type" content="website" />`,
        safeTitle ? `<meta name="twitter:title" content="${safeTitle}" />` : "",
        safeDescription ? `<meta name="twitter:description" content="${safeDescription}" />` : "",
        `<meta name="twitter:card" content="summary_large_image" />`
      );
    }

    return lines.filter(Boolean).join("\n");
  }, [title, description, keywords, canonical, siteName, includeSocialTags, hasRequiredContent]);

  const primaryMessage = useMemo(() => {
    if (!hasRequiredContent) return null;

    if (!canonicalValid) {
      return {
        type: "error" as const,
        message: "Use a full absolute canonical URL starting with https:// or http://."
      };
    }

    if (titleLength > 70 || descriptionLength > 160) {
      return {
        type: "error" as const,
        message: "The title or description is too long. Tighten the copy to improve snippet readability."
      };
    }

    if ((titleLength > 0 && titleLength < 30) || (descriptionLength > 0 && descriptionLength < 70)) {
      return {
        type: "success" as const,
        message: "The tags are valid, but you may be able to make the snippet more descriptive for better click appeal."
      };
    }

    return {
      type: "success" as const,
      message: "Your metadata looks balanced. Keep the visible page content aligned with these tags."
    };
  }, [canonicalValid, descriptionLength, hasRequiredContent, titleLength]);

  return (
    <ToolShell
      title={tool.name}
      description="Generate production-ready title, description, canonical, Open Graph, and Twitter tags with live snippet guidance."
      form={
        <div className="space-y-5">
          <label className="block space-y-2">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium">Meta title</span>
              <span className={`text-xs font-medium ${getStatusClasses(titleStatus)}`}>
                {titleLength}/60 recommended
              </span>
            </div>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Meta title for your page"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>

          <label className="block space-y-2">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium">Meta description</span>
              <span className={`text-xs font-medium ${getStatusClasses(descriptionStatus)}`}>
                {descriptionLength}/155 recommended
              </span>
            </div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Describe the page clearly and give users a reason to click."
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium">Keywords (optional)</span>
            <input
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="seo, web tools, generators"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium">Canonical URL (optional)</span>
            <input
              value={canonical}
              onChange={(e) => setCanonical(e.target.value)}
              placeholder="https://example.com/page"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium">Site name (optional)</span>
            <input
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              placeholder="WebToolify"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>

          <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700">
            <input
              type="checkbox"
              checked={includeSocialTags}
              onChange={(e) => setIncludeSocialTags(e.target.checked)}
            />
            <span className="text-sm font-medium">Include Open Graph and Twitter tags</span>
          </label>

          {primaryMessage ? (
            <ValidationMessage type={primaryMessage.type} message={primaryMessage.message} />
          ) : null}

          <div className="flex gap-3">
            <ResetButton
              onClick={() => {
                setTitle("");
                setDescription("");
                setKeywords("");
                setCanonical("");
                setSiteName("WebToolify");
                setIncludeSocialTags(true);
              }}
            />
          </div>
        </div>
      }
      result={
        result ? (
          <div className="space-y-5">
            <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-950">
              <p className="truncate text-sm text-emerald-700 dark:text-emerald-400">
                {canonical || "https://example.com/page"}
              </p>
              <h3 className="line-clamp-2 text-2xl font-medium text-blue-700 dark:text-blue-400">
                {title || "Your meta title will appear here"}
              </h3>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                {description || "Your meta description preview will appear here as you write."}
              </p>
            </div>

            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">Generated output</h3>
              <CopyButton value={result} />
            </div>

            <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm text-slate-100">
              {result}
            </pre>
          </div>
        ) : (
          <EmptyState
            title="No tags generated yet"
            description="Add at least a title or description to generate metadata and preview the snippet."
          />
        )
      }
    />
  );
}