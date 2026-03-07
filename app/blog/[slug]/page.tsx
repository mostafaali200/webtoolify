import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/shared/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { blogPosts } from "@/data/blog-posts";
import { buildMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { formatDate } from "@/lib/utils";
import { getRelatedTools } from "@/lib/content";
import { ToolGrid } from "@/components/tools/tool-grid";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) notFound();

  const relatedTools = getRelatedTools(post.relatedTools);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: post.title, item: `/blog/${post.slug}` }
        ])}
      />
      {post.content.faq ? <JsonLd data={faqSchema(post.content.faq)} /> : null}

      <article className="py-12 sm:py-16">
        <Container className="max-w-4xl space-y-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title }
            ]}
          />

          <header className="space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
              <span>{post.category}</span>
              <span>•</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              {post.title}
            </h1>

            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              {post.description}
            </p>
          </header>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">In this article</h2>
            <ol className="mt-4 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {post.content.sections.map((section, index) => (
                <li key={section.title}>
                  <a href={`#section-${index + 1}`} className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </section>

          <div className="space-y-8 text-base leading-8 text-slate-700 dark:text-slate-200">
            <p>{post.content.introduction}</p>

            {post.content.sections.map((section, index) => (
              <section key={section.title} id={`section-${index + 1}`} className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                  {section.title}
                </h2>

                {section.content.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-900/60">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Key takeaway</h2>
              <p className="mt-3 text-sm leading-8 text-slate-600 dark:text-slate-300">
                {post.content.conclusion}
              </p>
            </section>
          </div>

          {relatedTools.length ? (
            <section className="space-y-6 border-t border-slate-200 pt-10 dark:border-slate-800">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Related tools</h2>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Move from the concept directly into implementation with these matching utilities.
                </p>
              </div>
              <ToolGrid tools={relatedTools} />
            </section>
          ) : null}

          <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 dark:border-emerald-900/40 dark:from-emerald-950/30 dark:to-slate-950">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Continue exploring WebToolify
            </h2>
            <p className="mt-3 text-sm leading-8 text-slate-600 dark:text-slate-300">
              The strongest results usually come from combining practical tools with better publishing decisions. Browse
              more tools or continue reading the blog to strengthen your workflow.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/tools"
                className="inline-flex rounded-2xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
              >
                Browse tools
              </Link>
              <Link
                href="/blog"
                className="inline-flex rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
              >
                Back to blog
              </Link>
            </div>
          </section>
        </Container>
      </article>
    </>
  );
}