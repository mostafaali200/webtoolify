import { notFound } from "next/navigation";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/layout/page-hero";
import { ToolGrid } from "@/components/tools/tool-grid";
import { buildMetadata } from "@/lib/metadata";
import { getCategoryBySlug, getToolsByCategory } from "@/lib/content";
import { toolCategories } from "@/data/tool-categories";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return toolCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) return {};

  return buildMetadata({
    title: category.seoTitle,
    description: category.seoDescription,
    path: `/tools/category/${category.slug}`
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  const tools = getToolsByCategory(category.slug);

  return (
    <>
      <PageHero
        title={category.name}
        description={category.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: category.name }
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container className="space-y-8">
          <div className="max-w-4xl text-sm leading-8 text-slate-600 dark:text-slate-300">
            <p>
              Category pages are useful for both people and search engines because they group related workflows,
              reduce navigation friction, and create stronger internal linking clusters around a shared topic.
            </p>
          </div>

          <ToolGrid tools={tools} />
        </Container>
      </section>
    </>
  );
}