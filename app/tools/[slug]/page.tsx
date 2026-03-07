import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { ToolPageLayout } from "@/components/tools/tool-page-layout";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema, toolSchema, breadcrumbSchema } from "@/lib/schema";
import { getPublishedTools, getToolBySlug } from "@/lib/content";
import { getToolComponent } from "@/lib/tool-registry";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPublishedTools().map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) return {};

  return buildMetadata({
    title: tool.seoTitle,
    description: tool.seoDescription,
    path: `/tools/${tool.slug}`,
    keywords: tool.keywords
  });
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const ToolComponent = getToolComponent(tool.toolComponentKey);

  if (!ToolComponent) {
    notFound();
  }

  return (
    <>
      <JsonLd data={toolSchema(tool)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Tools", item: "/tools" },
          { name: tool.name, item: `/tools/${tool.slug}` }
        ])}
      />
      <JsonLd data={faqSchema(tool.faq)} />
      <ToolPageLayout tool={tool} toolUi={<ToolComponent tool={tool} />} />
    </>
  );
}