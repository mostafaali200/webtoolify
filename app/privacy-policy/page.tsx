import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/shared/container";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy - WebToolify",
  description:
    "Learn how WebToolify handles analytics, basic usage data, and privacy protection.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="This page explains how WebToolify handles basic usage data, analytics, and user privacy."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" }
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl space-y-10 text-sm leading-8 text-slate-600 dark:text-slate-300">

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Overview
            </h2>

            <p>
              WebToolify is designed to provide practical web utilities and
              educational resources while respecting user privacy. Most tools
              on the platform operate directly in the browser and do not
              require account creation or personal information.
            </p>

            <p>
              This privacy policy explains what limited information may be
              collected, how it may be used, and the principles guiding data
              handling across the platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Information we may collect
            </h2>

            <p>
              WebToolify may collect basic technical information necessary to
              operate and improve the platform. This may include:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Anonymous usage statistics</li>
              <li>Device or browser type</li>
              <li>Pages visited on the site</li>
              <li>General traffic patterns</li>
            </ul>

            <p>
              This information is typically collected through privacy-friendly
              analytics tools and is used only to understand how the platform
              is used and how it can be improved.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Cookies and analytics
            </h2>

            <p>
              Like most websites, WebToolify may use cookies or similar
              technologies to support analytics and basic site functionality.
            </p>

            <p>
              Cookies may help measure page performance, understand visitor
              behavior, and improve the overall user experience. These cookies
              do not identify users personally.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Third-party services
            </h2>

            <p>
              The platform may integrate third-party services such as analytics
              providers, hosting platforms, or infrastructure tools. These
              services may process limited technical data required to operate
              the website.
            </p>

            <p>
              WebToolify does not sell personal information and aims to use
              reputable service providers that respect modern privacy
              standards.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Future platform features
            </h2>

            <p>
              Future versions of WebToolify may include features such as user
              accounts, saved workflows, dashboards, or API integrations.
            </p>

            <p>
              If these features are introduced, this privacy policy will be
              updated to clearly explain what information is collected, how it
              is stored, and how users can control their data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              User responsibility
            </h2>

            <p>
              Many tools on WebToolify process data locally in the browser.
              Users should avoid submitting sensitive or confidential
              information into online utilities unless they fully understand
              how that data is processed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Policy updates
            </h2>

            <p>
              This privacy policy may be updated periodically as the platform
              evolves. Any significant changes will be reflected on this page
              to maintain transparency with users.
            </p>
          </section>

        </Container>
      </section>
    </>
  );
}