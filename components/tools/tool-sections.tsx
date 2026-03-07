import Link from "next/link";
import { getRelatedTools } from "@/lib/content";
import type { FAQItem } from "@/types";
import { SectionHeading } from "@/components/shared/section-heading";
import { ToolGrid } from "./tool-grid";

export function ToolFAQSection({ items }: { items: FAQItem[] }) {
  return (
    <section className="space-y-8">
      <SectionHeading title="Frequently asked questions" description="Helpful answers that add context beyond the generator itself." />
      <div className="grid gap-4">
        {items.map((item) => (
          <details key={item.question} className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 dark:text-white">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-8 text-slate-600 dark:text-slate-300">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function RelatedToolsSection({ slugs }: { slugs: string[] }) {
  const items = getRelatedTools(slugs);
  if (!items.length) return null;

  return (
    <section className="space-y-8">
      <SectionHeading
        title="Related tools"
        description="Move between adjacent workflows without losing context."
      />
      <ToolGrid tools={items} />
      <Link href="/tools" className="inline-flex text-sm font-semibold text-emerald-600 transition hover:text-emerald-500 dark:text-emerald-400">
        Browse all tools
      </Link>
    </section>
  );
}
