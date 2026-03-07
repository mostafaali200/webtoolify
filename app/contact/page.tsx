import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/shared/container";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact - WebToolify",
  description:
    "Contact the WebToolify team for product questions, partnerships, feedback, or support.",
  path: "/contact"
});

export default function Page() {
  return (
    <>
      <PageHero
        title="Contact"
        description="Questions, feedback, or partnership ideas? The WebToolify team would love to hear from you."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl space-y-10 text-sm leading-8 text-slate-600 dark:text-slate-300">

          <section className="space-y-4">
            <p>
              WebToolify is built as a long-term platform focused on practical
              web utilities, publishing workflows, and SEO education. If you
              have questions about the tools, suggestions for improvements,
              partnership ideas, or general feedback, feel free to reach out.
            </p>

            <p>
              The easiest way to contact the team is via email. We try to review
              messages regularly and respond when appropriate.
            </p>
          </section>

          <section className="grid gap-6 sm:grid-cols-2">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-lg font-semibold text-slate-950 dark:text-white">
                General inquiries
              </h2>

              <p className="mt-3 text-sm leading-7">
                Questions about the platform, the tools, or how WebToolify
                works.
              </p>

              <a
                href="mailto:hello@webtoolify.com"
                className="mt-4 inline-block font-semibold text-emerald-600 dark:text-emerald-400"
              >
                hello@webtoolify.com
              </a>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-lg font-semibold text-slate-950 dark:text-white">
                Partnerships
              </h2>

              <p className="mt-3 text-sm leading-7">
                For collaborations, integrations, or partnership discussions
                related to the platform.
              </p>

              <a
                href="mailto:hello@webtoolify.com"
                className="mt-4 inline-block font-semibold text-emerald-600 dark:text-emerald-400"
              >
                hello@webtoolify.com
              </a>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-lg font-semibold text-slate-950 dark:text-white">
                Product feedback
              </h2>

              <p className="mt-3 text-sm leading-7">
                Found a bug or have an idea for a new tool? Feedback helps
                improve the platform.
              </p>

              <a
                href="mailto:hello@webtoolify.com"
                className="mt-4 inline-block font-semibold text-emerald-600 dark:text-emerald-400"
              >
                hello@webtoolify.com
              </a>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-lg font-semibold text-slate-950 dark:text-white">
                Future support
              </h2>

              <p className="mt-3 text-sm leading-7">
                In future versions, this page may include a dedicated contact
                form, support inbox, and collaboration workflow.
              </p>
            </div>

          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Why communication matters
            </h2>

            <p>
              Trustworthy platforms should make communication simple. WebToolify
              aims to remain transparent, accessible, and open to suggestions
              from developers, content teams, and website owners who use the
              tools.
            </p>

            <p>
              Even small pieces of feedback can help shape future tools,
              improve documentation, and guide the direction of the platform.
            </p>
          </section>

        </Container>
      </section>
    </>
  );
}