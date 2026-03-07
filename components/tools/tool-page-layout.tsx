import type { ReactNode } from "react";
import type { ToolDefinition } from "@/types";
import { Container } from "@/components/shared/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ToolFAQSection } from "./tool-sections";
import { RelatedToolsSection } from "./tool-sections";
import { getCategoryBySlug } from "@/lib/content";

type ToolPageLayoutProps = {
  tool: ToolDefinition;
  toolUi: ReactNode;
};

export function ToolPageLayout({ tool, toolUi }: ToolPageLayoutProps) {
  const category = getCategoryBySlug(tool.category);

  return (
    <div className="py-12 sm:py-16">
      <Container className="space-y-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: tool.name }
          ]}
        />

        <section className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-400">
              {category?.name ?? tool.category}
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              {tool.name}
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {tool.longDescription}
            </p>

            <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {tool.introduction}
            </p>
          </div>

          {toolUi}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">How to use</h2>
            <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {tool.usageSteps.map((step, index) => (
                <li key={step}>
                  <span className="mr-2 font-semibold text-slate-950 dark:text-white">
                    {index + 1}.
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">Use cases</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {tool.useCases.map((item) => (
                <li key={item.title}>
                  <span className="block font-semibold text-slate-950 dark:text-white">
                    {item.title}
                  </span>
                  {item.description}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">Examples</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {tool.examples.map((example) => (
                <div key={example.label}>
                  <p className="font-semibold text-slate-950 dark:text-white">{example.label}</p>
                  <p>
                    <span className="font-medium">Input:</span> {example.input}
                  </p>
                  <p>
                    <span className="font-medium">Output:</span> {example.output}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          {tool.contentSections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-8 text-slate-600 dark:text-slate-300">
                {section.content}
              </p>
            </div>
          ))}
        </section>

        {tool.seoTips?.idealTitleLength ||
        tool.seoTips?.idealDescriptionLength ||
        tool.commonMistakes?.length ? (
          <section className="grid gap-6 lg:grid-cols-3">
            {tool.seoTips?.idealTitleLength ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h2 className="text-lg font-semibold text-slate-950 dark:text-white">
                  Ideal title length
                </h2>
                <p className="mt-3 text-sm leading-8 text-slate-600 dark:text-slate-300">
                  {tool.seoTips.idealTitleLength}
                </p>
              </div>
            ) : null}

            {tool.seoTips?.idealDescriptionLength ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h2 className="text-lg font-semibold text-slate-950 dark:text-white">
                  Ideal meta description length
                </h2>
                <p className="mt-3 text-sm leading-8 text-slate-600 dark:text-slate-300">
                  {tool.seoTips.idealDescriptionLength}
                </p>
              </div>
            ) : null}

            {tool.commonMistakes?.length ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h2 className="text-lg font-semibold text-slate-950 dark:text-white">
                  Common mistakes
                </h2>
                <ul className="mt-3 space-y-2 text-sm leading-8 text-slate-600 dark:text-slate-300">
                  {tool.commonMistakes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>
        ) : null}

        {tool.bestPractices?.length ? (
          <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Best practices
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-8 text-slate-600 dark:text-slate-300">
              {tool.bestPractices.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <ToolFAQSection items={tool.faq} />
        <RelatedToolsSection slugs={tool.relatedTools} />
      </Container>
    </div>
  );
}