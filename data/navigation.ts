import type { NavigationItem } from "@/types";

export const mainNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Categories", href: "/tools/category/seo-generators" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const footerNavigation = {
  product: [
    { label: "All Tools", href: "/tools" },
    { label: "SEO Generators", href: "/tools/category/seo-generators" },
    { label: "Text Utilities", href: "/tools/category/text-utilities" },
    { label: "Validators", href: "/tools/category/validators" }
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Disclaimer", href: "/disclaimer" }
  ]
};
