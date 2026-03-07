import { BlogCard } from "@/components/blog/blog-card";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { blogPosts } from "@/data/blog-posts";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "SEO Blog - Practical Guides for Search, Metadata, and Publishing",
  description:
    "Read practical articles that complement WebToolify tools and strengthen site-wide topical coverage.",
  path: "/blog"
});

export default function BlogPage() {
  const postCount = blogPosts.length;

  return (
    <>
      <PageHero
        title="Blog"
        description="Content-rich guides that support utility usage, improve topical depth, and strengthen internal linking across the platform."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="py-12 sm:py-16">
        <Container className="space-y-10">
          <div className="max-w-4xl space-y-5 text-sm leading-8 text-slate-600 dark:text-slate-300">
            <p>
              The WebToolify blog is designed to do more than publish standalone articles. It supports the tool
              ecosystem, strengthens topical relevance, and helps users understand the practical SEO decisions behind
              metadata, crawl directives, structured data, content formatting, and URL structure.
            </p>

            <p>
              Each guide is written to complement one or more tools, which improves internal linking quality and helps
              turn utility pages into stronger topic clusters instead of isolated pages. This structure is especially
              useful for long-term organic growth because it gives search engines clearer context around the platform.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Published guides</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{postCount}</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Primary focus</p>
              <p className="mt-3 text-base font-semibold text-slate-950 dark:text-white">
                Metadata, technical SEO, structured data, and publishing workflows
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Why this matters</p>
              <p className="mt-3 text-base font-semibold text-slate-950 dark:text-white">
                Better topical depth, stronger internal linking, and clearer search intent coverage
              </p>
            </div>
          </div>

          <SectionHeading
            eyebrow="Articles"
            title="Practical SEO guides connected to real tool workflows"
            description="These articles are intentionally paired with tools so readers can learn the concept, then use the matching utility immediately."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}