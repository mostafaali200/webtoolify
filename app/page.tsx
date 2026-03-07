import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { BlogCard } from "@/components/blog/blog-card";
import { CTASection } from "@/components/shared/cta-section";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SearchBar } from "@/components/tools/search-bar";
import { ToolGrid } from "@/components/tools/tool-grid";
import { toolCategories } from "@/data/tool-categories";
import { buildMetadata } from "@/lib/metadata";
import { getFeaturedTools, getLatestPosts, getPopularTools } from "@/lib/content";

export const metadata = buildMetadata({
  title: "WebToolify - Modern SEO and Web Utilities for Serious Publishing",
  description:
    "Explore scalable SEO generators, text utilities, validators, and content resources built like a real SaaS product.",
  path: "/"
});

export default function HomePage() {
  const featuredTools = getFeaturedTools();
  const popularTools = getPopularTools();
  const latestPosts = getLatestPosts();

  return (
    <>
      <section className="overflow-hidden border-b border-slate-200/70 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_38%),linear-gradient(to_bottom,_#f8fafc,_#ffffff)] py-20 dark:border-slate-800 dark:bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_36%),linear-gradient(to_bottom,_#020617,_#020617)] sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">
              SEO tools, content utilities, and technical helpers in one scalable platform
            </div>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                Build faster workflows with a modern utility platform made for serious websites.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                WebToolify combines clean UX, scalable architecture, strong SEO foundations, and reusable tool patterns
                so you can grow from utility site to real SaaS platform without a rewrite.
              </p>
            </div>
            <div className="max-w-2xl">
              <SearchBar />
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/tools" className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-slate-950">
                Explore all tools
              </Link>
              <Link href="/blog" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-200">
                Read the blog
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Sparkles, title: "Reusable tool engine", text: "Add new tools by registering config plus logic, not by rebuilding pages." },
              { icon: Zap, title: "Performance-first", text: "Server Components by default with light client-side interactivity only where needed." },
              { icon: ShieldCheck, title: "SEO-ready", text: "Metadata, JSON-LD, sitemap, robots, internal linking, and content-rich pages included." },
              { icon: ArrowRight, title: "SaaS-friendly growth", text: "Prepared for future auth, APIs, dashboards, and multilingual expansion." }
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
                <item.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <h2 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="space-y-10">
          <SectionHeading eyebrow="Featured" title="High-value tools that solve common SEO and content workflows" description="These are the strongest entry points for site owners, marketers, and developers who need practical results fast." />
          <ToolGrid tools={featuredTools} />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="space-y-10">
          <SectionHeading eyebrow="Categories" title="Browse tools by workflow" description="The architecture is intentionally data-driven, so categories, tools, and related links grow together without turning into a maintenance problem." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {toolCategories.map((category) => (
              <Link key={category.slug} href={`/tools/category/${category.slug}`} className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{category.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{category.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="space-y-10">
          <SectionHeading eyebrow="Popular" title="Popular tools for day-to-day publishing and technical QA" description="Clean interfaces, meaningful helper text, and reusable UX patterns make the suite feel consistent across every workflow." />
          <ToolGrid tools={popularTools} />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="space-y-10">
          <SectionHeading eyebrow="Blog" title="Practical SEO articles that support your tool usage" description="The blog is structured to strengthen topical authority, guide internal linking, and keep pages useful beyond the utility itself." />
          <div className="grid gap-6 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Build a trustworthy utility platform, not a thin tool directory"
        description="WebToolify is designed to scale into landing pages, comparison content, SaaS features, and API-backed tools while preserving maintainability."
        primaryHref="/tools"
        primaryLabel="Start with the tools"
        secondaryHref="/about"
        secondaryLabel="See the platform vision"
      />
    </>
  );
}
