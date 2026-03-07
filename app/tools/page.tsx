import { Container } from "@/components/shared/container";
import { FilterableToolCatalog } from "@/components/tools/filterable-tool-catalog";
import { PageHero } from "@/components/layout/page-hero";
import { toolCategories } from "@/data/tool-categories";
import { buildMetadata } from "@/lib/metadata";
import { getPublishedTools } from "@/lib/content";

export const metadata = buildMetadata({
  title: "All Tools - SEO Generators, Validators, and Web Utilities",
  description: "Browse all WebToolify tools with category filters, internal search, and content-rich utility pages.",
  path: "/tools"
});

export default function ToolsPage() {
  const tools = getPublishedTools();

  return (
    <>
      <PageHero
        title="All tools"
        description="Explore reusable SEO generators, validators, and text utilities designed for fast workflows and long-term platform growth."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tools" }]}
      />
      <section className="py-12 sm:py-16">
        <Container className="space-y-8">
          <div className="max-w-4xl text-sm leading-8 text-slate-600 dark:text-slate-300">
            <p>
              This page is intentionally built as a searchable, filterable catalog. Every new published tool can appear
              here automatically once it is registered in the central data layer, which keeps the platform maintainable
              as the library grows.
            </p>
          </div>
          <FilterableToolCatalog tools={tools} categories={toolCategories} />
        </Container>
      </section>
    </>
  );
}
