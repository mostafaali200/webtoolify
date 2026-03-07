import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/shared/container";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About - WebToolify",
  description:
    "Learn the vision behind WebToolify, why the platform exists, and how it combines practical tools with educational content.",
  path: "/about"
});

export default function Page() {
  return (
    <>
      <PageHero
        title="About WebToolify"
        description="Understand the purpose behind the platform and the philosophy guiding its tools and content."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl space-y-10 text-sm leading-8 text-slate-600 dark:text-slate-300">

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
              What WebToolify is
            </h2>
            <p>
              WebToolify is designed as a practical platform that combines useful web utilities
              with educational content. Instead of offering isolated tools, the goal is to build a
              connected ecosystem where guides, explanations, and utilities support each other.
            </p>
            <p>
              Each tool is paired with content that explains the concept behind it. This approach
              helps users understand not only how to generate something like a meta tag or robots
              file, but also why those elements matter in real publishing workflows.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
              Why the platform exists
            </h2>
            <p>
              Many utility websites provide quick generators but very little explanation. WebToolify
              takes a different approach by combining tools with structured knowledge so users can
              move from learning to implementation without leaving the platform.
            </p>
            <p>
              The focus is on clarity, usefulness, and long-term maintainability. Every page is
              designed to remain understandable to both people and search engines, which helps the
              platform scale without becoming chaotic or difficult to maintain.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
              Platform philosophy
            </h2>
            <p>
              WebToolify is structured more like a product than a static website. The architecture
              allows the platform to expand gradually with new utilities, deeper educational
              resources, and more advanced features over time.
            </p>
            <p>
              The project emphasizes clean architecture, reusable components, and scalable design
              patterns so the platform can grow into a larger ecosystem rather than remaining a
              collection of disconnected pages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
              Future direction
            </h2>
            <p>
              The current version focuses on foundational SEO, publishing, and text utilities. In
              future iterations the platform may expand with API-driven tools, user dashboards,
              saved workflows, multilingual support, and more advanced publishing utilities.
            </p>
            <p>
              The long-term goal is to make WebToolify a reliable workspace for people who build,
              publish, and manage websites.
            </p>
          </section>

        </Container>
      </section>
    </>
  );
}