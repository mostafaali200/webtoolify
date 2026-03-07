import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/shared/container";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service - WebToolify",
  description:
    "Review the terms governing the use of WebToolify tools, content, and future platform features.",
  path: "/terms-of-service"
});

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        description="These terms explain the general conditions governing the use of WebToolify and its tools."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
      />

      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl space-y-10 text-sm leading-8 text-slate-600 dark:text-slate-300">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Acceptance of terms
            </h2>

            <p>
              By accessing or using WebToolify, you agree to these terms of service. If you do not
              agree with any part of these terms, you should not use the platform.
            </p>

            <p>
              These terms are intended to provide a general framework for use of the website, its
              tools, its educational content, and any future product features that may be added
              over time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Permitted use
            </h2>

            <p>
              WebToolify is provided for lawful informational, educational, and workflow-support
              purposes. Users may access the tools and content to support publishing, technical SEO,
              content operations, and related website tasks.
            </p>

            <p>
              You agree not to use the platform in ways that disrupt the service, abuse the tools,
              attempt unauthorized access, or violate applicable laws and regulations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Generated output and user responsibility
            </h2>

            <p>
              WebToolify provides generators, validators, converters, and educational guidance, but
              all generated output should be reviewed before use in any live environment.
            </p>

            <p>
              Users remain fully responsible for reviewing, testing, validating, and implementing
              any generated content, code, metadata, or technical recommendations on their own
              websites or applications.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Intellectual property
            </h2>

            <p>
              The platform design, branding, text, structure, and original content of WebToolify
              are protected by applicable intellectual property principles. Users may use generated
              outputs for their own workflows, but they may not copy, republish, or redistribute the
              platform itself in a misleading or unauthorized way.
            </p>

            <p>
              References to third-party technologies, standards, or platforms remain the property of
              their respective owners.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              No warranties
            </h2>

            <p>
              WebToolify is provided on an "as is" and "as available" basis. No guarantees are made
              regarding uninterrupted availability, complete accuracy, search performance outcomes,
              or fitness for a particular purpose.
            </p>

            <p>
              The platform aims to be helpful and reliable, but users should always verify outputs
              and recommendations independently before deployment.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Limitation of liability
            </h2>

            <p>
              To the fullest extent permitted by applicable law, WebToolify shall not be liable for
              losses, damages, or interruptions arising from the use of the platform, the inability
              to use the platform, or reliance on generated outputs or educational content.
            </p>

            <p>
              This includes, without limitation, technical issues, content errors, search
              performance changes, implementation mistakes, or third-party service failures.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Future platform features
            </h2>

            <p>
              WebToolify may expand in the future with additional functionality such as user
              accounts, saved projects, API integrations, dashboards, or premium features. If such
              features are introduced, these terms may be updated to reflect the new product model
              and related responsibilities.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Changes to these terms
            </h2>

            <p>
              These terms may be updated from time to time as the platform evolves. Continued use of
              WebToolify after updates are published constitutes acceptance of the revised terms.
            </p>
          </section>
        </Container>
      </section>
    </>
  );
}