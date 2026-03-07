import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site-config";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { websiteSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} - Modern SEO & Web Utilities`,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  path: "/"
});

export default function RootLayout({ children }: Readonly<{ children: import("react").ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        <JsonLd data={websiteSchema()} />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
