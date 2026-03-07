import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/shared/container";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Disclaimer - WebToolify",
  description:
    "Read the WebToolify disclaimer regarding generated outputs, educational content, and user implementation responsibility.",
  path: "/disclaimer"
});

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        title="Disclaimer"
        description="Generated outputs and educational content should always be reviewed in the context of your own website and technical environment."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
      />

      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl space-y-10 text-sm leading-8 text-slate-600 dark:text-slate-300">

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Educational purpose
            </h2>

            <p>
              WebToolify provides practical web utilities, generators, and
              educational content intended to help users understand common web
              publishing concepts such as metadata, structured data, URL
              structure, and technical SEO practices.
            </p>

            <p>
              All information and generated outputs available on the platform
              are provided for general educational and informational purposes
              only.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              No professional advice
            </h2>

            <p>
              The tools and content provided on WebToolify should not be
              interpreted as legal, security, financial, or professional SEO
              advice. While the platform aims to provide accurate and helpful
              information, the implementation of any generated output is the
              sole responsibility of the user.
            </p>

            <p>
              Website owners and developers should always review generated code
              and recommendations within the context of their own technology
              stack, hosting environment, and business requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              No guarantees
            </h2>

            <p>
              WebToolify does not guarantee search engine rankings, traffic
              improvements, indexing outcomes, or technical performance
              results. Search engine behavior, algorithm updates, and website
              performance factors can vary widely across different sites and
              environments.
            </p>

            <p>
              Any implementation based on generated output or educational
              guidance should be tested and validated before being deployed in
              production environments.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Third-party platforms
            </h2>

            <p>
              WebToolify may reference external technologies, search engines,
              publishing platforms, or third-party services for educational
              purposes. These references do not imply endorsement, partnership,
              or affiliation unless explicitly stated.
            </p>

            <p>
              Users should review the official documentation and policies of
              any third-party platforms they rely on.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Platform responsibility
            </h2>

            <p>
              By using WebToolify, users acknowledge that they are responsible
              for reviewing, testing, and validating any generated output
              before applying it to their websites or applications.
            </p>

            <p>
              The platform is designed to assist with workflows and learning,
              but final implementation decisions always remain with the site
              owner or developer.
            </p>
          </section>

        </Container>
      </section>
    </>
  );
}