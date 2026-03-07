"use client";

import { useMemo, useState } from "react";
import type { ToolDefinition } from "@/types";
import { CopyButton } from "@/components/tools/copy-button";
import { EmptyState } from "@/components/tools/empty-state";
import { ResetButton } from "@/components/tools/reset-button";
import { ToolShell } from "@/components/tools/tool-shell";
import { ValidationMessage } from "@/components/tools/validation-message";

type OpenGraphPreviewToolProps = {
  tool: ToolDefinition;
};

function escapeAttribute(value: string) {
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

function getLengthTone(length: number, softLimit: number, hardLimit: number) {
  if (length === 0) return "text-slate-500 dark:text-slate-400";
  if (length <= softLimit) return "text-emerald-600 dark:text-emerald-400";
  if (length <= hardLimit) return "text-amber-600 dark:text-amber-400";
  return "text-rose-600 dark:text-rose-400";
}

export function OpenGraphPreviewTool({ tool }: OpenGraphPreviewToolProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("https://webtoolify.com");
  const [siteName, setSiteName] = useState("WebToolify");
  const [imageUrl, setImageUrl] = useState("");
  const [includeTwitterTags, setIncludeTwitterTags] = useState(true);

  const trimmedTitle = title.trim();
  const trimmedDescription = description.trim();
  const trimmedUrl = url.trim();
  const trimmedSiteName = siteName.trim();
  const trimmedImageUrl = imageUrl.trim();

  const hasCoreContent = trimmedTitle || trimmedDescription;
  const urlValid = !trimmedUrl || isValidAbsoluteUrl(trimmedUrl);
  const imageValid = !trimmedImageUrl || isValidAbsoluteUrl(trimmedImageUrl);

  const titleLength = trimmedTitle.length;
  const descriptionLength = trimmedDescription.length;

  const result = useMemo(() => {
    if (!hasCoreContent || !urlValid || !imageValid) return "";

    const safeTitle = escapeAttribute(trimmedTitle);
    const safeDescription = escapeAttribute(trimmedDescription);
    const safeUrl = escapeAttribute(trimmedUrl);
    const safeSiteName = escapeAttribute(trimmedSiteName);
    const safeImageUrl = escapeAttribute(trimmedImageUrl);

    const lines = [
      safeTitle ? `<meta property="og:title" content="${safeTitle}" />` : "",
      safeDescription ? `<meta property="og:description" content="${safeDescription}" />` : "",
      safeUrl ? `<meta property="og:url" content="${safeUrl}" />` : "",
      safeSiteName ? `<meta property="og:site_name" content="${safeSiteName}" />` : "",
      safeImageUrl ? `<meta property="og:image" content="${safeImageUrl}" />` : "",
      `<meta property="og:type" content="website" />`
    ];

    if (includeTwitterTags) {
      lines.push(
        safeTitle ? `<meta name="twitter:title" content="${safeTitle}" />` : "",
        safeDescription ? `<meta name="twitter:description" content="${safeDescription}" />` : "",
        safeImageUrl ? `<meta name="twitter:image" content="${safeImageUrl}" />` : "",
        `<meta name="twitter:card" content="summary_large_image" />`
      );
    }

    return lines.filter(Boolean).join("\n");
  }, [
    hasCoreContent,
    imageValid,
    includeTwitterTags,
    trimmedDescription,
    trimmedImageUrl,
    trimmedSiteName,
    trimmedTitle,
    trimmedUrl,
    urlValid
  ]);

  const validationMessage = useMemo(() => {
    if (!hasCoreContent) return null;

    if (!urlValid) {
      return {
        type: "error" as const,
        message: "Use a full page URL starting with https:// or http://."
      };
    }

    if (!imageValid) {
      return {
        type: "error" as const,
        message: "If you add an image URL, it should be a full absolute URL."
      };
    }

    if (titleLength > 95 || descriptionLength > 220) {
      return {
        type: "error" as const,
        message:
          "Your Open Graph copy is quite long. Shorter text usually creates cleaner social previews."
      };
    }

    return {
      type: "success" as const,
      message:
        "The social metadata looks valid. Keep the messaging aligned with the page title and visible content."
    };
  }, [descriptionLength, hasCoreContent, imageValid, titleLength, urlValid]);

  return (
    <ToolShell
      title={tool.name}
      description="Preview Open Graph content, validate URLs, and generate copy-ready OG and Twitter tags for social sharing."
      form={
        <div className="space-y-5">
          <label className="block space-y-2">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium">Open Graph title</span>
              <span className={`text-xs font-medium ${getLengthTone(titleLength, 60, 95)}`}>
                {titleLength} chars
              </span>
            </div>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Open Graph title"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>

          <label className="block space-y-2">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium">Open Graph description</span>
              <span className={`text-xs font-medium ${getLengthTone(descriptionLength, 160, 220)}`}>
                {descriptionLength} chars
              </span>
            </div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Write a clear social description that supports the page promise."
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium">Page URL</span>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/page"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium">Site name</span>
            <input
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              placeholder="WebToolify"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium">Image URL (optional)</span>
            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/og-image.jpg"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>

          <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700">
            <input
              type="checkbox"
              checked={includeTwitterTags}
              onChange={(e) => setIncludeTwitterTags(e.target.checked)}
            />
            <span className="text-sm font-medium">Include Twitter tags</span>
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
                setTitle("");
                setDescription("");
                setUrl("https://webtoolify.com");
                setSiteName("WebToolify");
                setImageUrl("");
                setIncludeTwitterTags(true);
              }}
            />
          </div>
        </div>
      }
      result={
        result ? (
          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {trimmedSiteName || "Site name"}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
                {trimmedTitle || "Title preview"}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {trimmedDescription || "Description preview"}
              </p>
              <p className="mt-3 truncate text-sm text-emerald-600 dark:text-emerald-400">
                {trimmedUrl || "https://example.com/page"}
              </p>
              {trimmedImageUrl ? (
                <p className="mt-2 truncate text-xs text-slate-500 dark:text-slate-400">
                  Image: {trimmedImageUrl}
                </p>
              ) : null}
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Generated tags</h3>
              <CopyButton value={result} />
            </div>

            <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm text-slate-100">
              {result}
            </pre>
          </div>
        ) : (
          <EmptyState
            title="Start with title and description"
            description="As you type, the social card preview and generated tags will update."
          />
        )
      }
    />
  );
}