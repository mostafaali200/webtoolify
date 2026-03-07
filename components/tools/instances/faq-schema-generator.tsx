"use client";

import { useMemo, useState } from "react";
import type { ToolDefinition } from "@/types";
import { CopyButton } from "@/components/tools/copy-button";
import { EmptyState } from "@/components/tools/empty-state";
import { ResetButton } from "@/components/tools/reset-button";
import { ToolShell } from "@/components/tools/tool-shell";
import { ValidationMessage } from "@/components/tools/validation-message";

type FAQSchemaGeneratorToolProps = {
  tool: ToolDefinition;
};

type FAQFormItem = {
  id: string;
  question: string;
  answer: string;
};

function createFaqItem(id: number): FAQFormItem {
  return {
    id: `faq-${id}`,
    question: "",
    answer: ""
  };
}

export function FAQSchemaGeneratorTool({ tool }: FAQSchemaGeneratorToolProps) {
  const [items, setItems] = useState<FAQFormItem[]>([createFaqItem(1), createFaqItem(2)]);
  const [includeScriptTag, setIncludeScriptTag] = useState(false);

  const filledItems = useMemo(() => {
    return items.filter((item) => item.question.trim() && item.answer.trim());
  }, [items]);

  const partiallyFilledItems = useMemo(() => {
    return items.filter(
      (item) =>
        (item.question.trim() && !item.answer.trim()) ||
        (!item.question.trim() && item.answer.trim())
    );
  }, [items]);

  const jsonObject = useMemo(() => {
    if (!filledItems.length) return null;

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: filledItems.map((item) => ({
        "@type": "Question",
        name: item.question.trim(),
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer.trim()
        }
      }))
    };
  }, [filledItems]);

  const jsonOutput = useMemo(() => {
    if (!jsonObject) return "";
    return JSON.stringify(jsonObject, null, 2);
  }, [jsonObject]);

  const result = useMemo(() => {
    if (!jsonOutput) return "";
    if (!includeScriptTag) return jsonOutput;

    return `<script type="application/ld+json">\n${jsonOutput}\n</script>`;
  }, [jsonOutput, includeScriptTag]);

  const canAddMore = items.length < 8;
  const canRemove = items.length > 1;

  function updateItem(id: string, field: "question" | "answer", value: string) {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  }

  function addItem() {
    setItems((current) => [...current, createFaqItem(current.length + 1)]);
  }

  function removeItem(id: string) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  function resetAll() {
    setItems([createFaqItem(1), createFaqItem(2)]);
    setIncludeScriptTag(false);
  }

  const validationMessage = useMemo(() => {
    if (!items.some((item) => item.question.trim() || item.answer.trim())) return null;

    if (partiallyFilledItems.length > 0) {
      return {
        type: "error" as const,
        message:
          "Every FAQ item should include both a question and an answer. Incomplete items are ignored in the output."
      };
    }

    return {
      type: "success" as const,
      message:
        "The generated schema looks valid. Make sure the same questions and answers are visible on the page itself."
    };
  }, [items, partiallyFilledItems.length]);

  return (
    <ToolShell
      title={tool.name}
      description="Generate FAQPage JSON-LD for visible question-and-answer content with flexible item management and copy-ready output."
      form={
        <div className="space-y-5">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="space-y-4 rounded-2xl border border-slate-200 p-4 dark:border-slate-700"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                  FAQ item {index + 1}
                </h3>

                {canRemove ? (
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-sm font-medium text-rose-600 transition hover:text-rose-500 dark:text-rose-400"
                  >
                    Remove
                  </button>
                ) : null}
              </div>

              <label className="block space-y-2">
                <span className="text-sm font-medium">Question</span>
                <input
                  value={item.question}
                  onChange={(e) => updateItem(item.id, "question", e.target.value)}
                  placeholder="What is FAQ schema?"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium">Answer</span>
                <textarea
                  value={item.answer}
                  onChange={(e) => updateItem(item.id, "answer", e.target.value)}
                  rows={4}
                  placeholder="FAQ schema is structured data that helps search engines understand question-and-answer content."
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
                />
              </label>
            </div>
          ))}

          <div className="flex flex-wrap gap-3">
            {canAddMore ? (
              <button
                type="button"
                onClick={addItem}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-200"
              >
                Add FAQ item
              </button>
            ) : null}

            <ResetButton onClick={resetAll} />
          </div>

          <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700">
            <input
              type="checkbox"
              checked={includeScriptTag}
              onChange={(e) => setIncludeScriptTag(e.target.checked)}
            />
            <span className="text-sm font-medium">Wrap output in script tag</span>
          </label>

          {validationMessage ? (
            <ValidationMessage
              type={validationMessage.type}
              message={validationMessage.message}
            />
          ) : null}
        </div>
      }
      result={
        result ? (
          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
              <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                Output summary
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {filledItems.length} valid FAQ item{filledItems.length === 1 ? "" : "s"} included
                in the generated schema.
              </p>
            </div>

            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">
                {includeScriptTag ? "Script output" : "JSON-LD output"}
              </h3>
              <CopyButton value={result} />
            </div>

            <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm text-slate-100">
              {result}
            </pre>
          </div>
        ) : (
          <EmptyState
            title="Schema output is empty"
            description="Add at least one complete question-and-answer pair to generate valid FAQ schema."
          />
        )
      }
    />
  );
}