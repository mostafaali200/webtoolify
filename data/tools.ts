import type { ToolDefinition } from "@/types";

export const tools: ToolDefinition[] = [
  {
    id: "meta-tag-generator",
    name: "Meta Tag Generator",
    slug: "meta-tag-generator",
    category: "seo-generators",
    iconKey: "badge-info",
    shortDescription: "Generate HTML meta tags for titles, descriptions, and canonicals.",
    longDescription:
      "Create polished title, description, keyword, and canonical tags for pages that need cleaner on-page SEO implementation.",
    introduction:
      "This tool helps teams produce clean meta tag output quickly while keeping content-focused guidance on the same page.",
    seoTitle: "Meta Tag Generator - Create Title, Description, and Canonical Tags",
    seoDescription:
      "Generate optimized title, description, keyword, and canonical meta tags with a production-ready SEO utility.",
    keywords: ["meta tag generator", "meta title generator", "meta description generator"],
    faq: [
      {
        question: "Should every page have unique meta tags?",
        answer:
          "Yes. Unique titles and descriptions help users and search engines distinguish between pages more clearly."
      },
      {
        question: "Do keywords meta tags still matter?",
        answer:
          "They are not a primary modern ranking signal, but some teams still use them internally or for legacy workflows."
      }
    ],
    relatedTools: ["canonical-tag-generator", "open-graph-preview-tool"],
    featured: true,
    popular: true,
    schemaType: "WebApplication",
    status: "published",
    usageSteps: [
      "Write a page title that reflects user intent.",
      "Add a concise description that matches the visible page.",
      "Optionally include keywords and canonical URL, then copy the output."
    ],
    contentSections: [
      {
        title: "Why this tool matters",
        content:
          "Meta tags set expectations before the click and help establish a page's primary topic. A practical generator reduces formatting errors and encourages better publishing discipline."
      },
      {
        title: "Implementation notes",
        content:
          "Keep titles distinct, descriptions useful, and canonical URLs absolute. Avoid using generated tags as a substitute for strong on-page content."
      }
    ],
    examples: [
      {
        label: "Marketing page",
        input: "A concise feature page title and description",
        output: "Ready-to-paste title, description, and canonical tags"
      }
    ],
    useCases: [
      {
        title: "Content publishing",
        description: "Prepare unique page metadata before new blog posts or landing pages go live."
      }
    ],
    bestPractices: [
      "Write a unique title for every important page.",
      "Match the meta description to the visible page content and user intent.",
      "Use canonical tags only when you have a clear preferred URL.",
      "Keep metadata persuasive without becoming vague or misleading."
    ],
    commonMistakes: [
      "Using the same title across multiple pages.",
      "Writing titles that are too long and get truncated in search.",
      "Stuffing keywords unnaturally into the description.",
      "Adding canonicals that point to the wrong or non-final URL."
    ],
    seoTips: {
      idealTitleLength:
        "Around 50 to 60 characters is usually a strong target for search result titles.",
      idealDescriptionLength:
        "Around 140 to 155 characters is often a practical range for readable, useful descriptions."
    },
    toolComponentKey: "meta-tag-generator"
  },
  {
    id: "robots-txt-generator",
    name: "Robots.txt Generator",
    slug: "robots-txt-generator",
    category: "seo-generators",
    iconKey: "file-code-2",
    shortDescription: "Create a clean robots.txt baseline for public websites.",
    longDescription:
      "Generate a practical robots.txt file that helps guide compliant crawlers and reference your sitemap.",
    introduction:
      "robots.txt should be simple, intentional, and easy to review. This tool provides a maintainable starting point for most sites.",
    seoTitle: "Robots.txt Generator - Create a Crawl Directive File",
    seoDescription:
      "Build a clean robots.txt file with sitemap reference and common crawl directives.",
    keywords: ["robots.txt generator", "crawl directives", "technical seo"],
    faq: [
      {
        question: "Does robots.txt protect private content?",
        answer:
          "No. It is a crawl-management file and should not be treated as a security layer."
      },
      {
        question: "Should I include the sitemap line?",
        answer:
          "Yes, when available. It helps crawlers discover your sitemap location faster."
      }
    ],
    relatedTools: ["sitemap-validator", "canonical-tag-generator"],
    featured: true,
    popular: true,
    schemaType: "WebApplication",
    status: "published",
    usageSteps: [
      "Choose which paths to disallow.",
      "Add your sitemap URL if available.",
      "Review the generated file before deployment."
    ],
    contentSections: [
      {
        title: "Crawl efficiency",
        content:
          "A focused robots.txt can prevent compliant bots from spending crawl budget on duplicate or low-value sections."
      },
      {
        title: "Common mistakes",
        content:
          "Avoid blocking resources required for rendering important pages, and do not rely on robots.txt to hide confidential content."
      }
    ],
    examples: [
      {
        label: "Standard website",
        input: "Disallow admin area and include sitemap URL",
        output: "A lightweight robots.txt file"
      }
    ],
    useCases: [
      {
        title: "Technical SEO launch checklist",
        description: "Prepare core crawl directives during site launch or migration."
      }
    ],
    bestPractices: [
      "Keep robots.txt simple and intentional.",
      "Reference the sitemap when one exists.",
      "Review blocked paths carefully before deploying changes.",
      "Treat robots.txt as crawl guidance, not as a privacy control."
    ],
    commonMistakes: [
      "Blocking resources needed for rendering key pages.",
      "Using robots.txt to try to protect private or sensitive content.",
      "Forgetting to update the sitemap reference after migrations.",
      "Disallowing important sections by accident."
    ],
    seoTips: {
      idealDescriptionLength:
        "Use short, direct crawl directives and keep the file easy to audit."
    },
    toolComponentKey: "robots-txt-generator"
  },
  {
    id: "slug-generator",
    name: "Slug Generator",
    slug: "slug-generator",
    category: "text-utilities",
    iconKey: "link-2",
    shortDescription: "Turn titles and phrases into clean, readable URL slugs.",
    longDescription:
      "Generate simple, consistent slugs that improve readability and publishing workflows across content and landing pages.",
    introduction:
      "A stable slug improves clarity for people, analytics, and internal linking systems.",
    seoTitle: "Slug Generator - Create SEO-Friendly URL Slugs",
    seoDescription:
      "Convert titles into clean, consistent, SEO-friendly slugs for articles, pages, and campaigns.",
    keywords: ["slug generator", "seo slug", "url slug tool"],
    faq: [
      {
        question: "Should slugs be short?",
        answer: "Usually yes. Keep them concise while preserving meaning."
      },
      {
        question: "Should I change an old slug?",
        answer:
          "Only with care. If a URL is already live, plan redirects and update internal links."
      }
    ],
    relatedTools: ["text-case-converter", "meta-tag-generator"],
    featured: true,
    popular: true,
    schemaType: "WebApplication",
    status: "published",
    usageSteps: [
      "Paste your title or heading.",
      "Review the generated slug.",
      "Use the output in your route or CMS."
    ],
    contentSections: [
      {
        title: "Good slug principles",
        content:
          "Readable slugs are easier to share, easier to maintain, and clearer in analytics and search results."
      },
      {
        title: "Stability over perfection",
        content:
          "Do not constantly rewrite URL structures. A stable, understandable slug is often better than a theoretically perfect one."
      }
    ],
    examples: [
      {
        label: "Blog article",
        input: "How to Create SEO-Friendly Slugs",
        output: "how-to-create-seo-friendly-slugs"
      }
    ],
    useCases: [
      {
        title: "Content teams",
        description: "Standardize URL generation across blog, docs, and landing page workflows."
      }
    ],
    bestPractices: [
      "Keep slugs concise, readable, and closely tied to the page topic.",
      "Use lowercase words separated by hyphens.",
      "Prefer stable URLs over constant optimization changes.",
      "Make sure internal links reflect the final published slug."
    ],
    commonMistakes: [
      "Creating slugs that are too long or repetitive.",
      "Changing published slugs without redirects.",
      "Using unclear or meaningless words in URLs.",
      "Letting the slug drift away from the actual page topic."
    ],
    seoTips: {
      idealTitleLength:
        "A slug should be short enough to stay readable, but descriptive enough to reflect the page topic."
    },
    toolComponentKey: "slug-generator"
  },
  {
    id: "faq-schema-generator",
    name: "FAQ Schema Generator",
    slug: "faq-schema-generator",
    category: "seo-generators",
    iconKey: "braces",
    shortDescription: "Generate FAQ JSON-LD markup from visible Q&A content.",
    longDescription:
      "Create structured FAQ schema that mirrors helpful on-page questions and answers in a clean JSON-LD format.",
    introduction:
      "This tool supports FAQ content workflows by combining authoring convenience with markup consistency.",
    seoTitle: "FAQ Schema Generator - Create FAQ JSON-LD",
    seoDescription: "Generate FAQPage JSON-LD markup from helpful visible questions and answers.",
    keywords: ["faq schema generator", "faq json ld", "structured data tool"],
    faq: [
      {
        question: "Should FAQ schema match visible content?",
        answer:
          "Yes. Your structured data should reflect what users can actually read on the page."
      },
      {
        question: "Can I add many questions?",
        answer:
          "You can, but keep them useful and relevant. The markup should serve users, not clutter the page."
      }
    ],
    relatedTools: ["meta-tag-generator", "canonical-tag-generator"],
    featured: true,
    popular: false,
    schemaType: "WebApplication",
    status: "published",
    usageSteps: [
      "Add at least one question and answer pair.",
      "Review the JSON-LD output.",
      "Embed it only on pages that show the same FAQ content."
    ],
    contentSections: [
      {
        title: "Structured clarity",
        content:
          "FAQ markup helps machines interpret page structure while giving editors a repeatable content pattern."
      },
      {
        title: "Quality guidance",
        content:
          "Use FAQs to answer meaningful questions, not to pad pages with repetitive or thin text."
      }
    ],
    examples: [
      {
        label: "Service page FAQ",
        input: "Two user questions with direct answers",
        output: "A compact FAQPage JSON-LD block"
      }
    ],
    useCases: [
      {
        title: "Informational pages",
        description: "Add clear question-and-answer structure to educational or service pages."
      }
    ],
    bestPractices: [
      "Make sure every question and answer is visible on the page itself.",
      "Answer real user questions directly and clearly.",
      "Keep the FAQ focused on the specific page topic.",
      "Use structured data to support useful content, not to decorate weak content."
    ],
    commonMistakes: [
      "Adding schema that does not match the visible page content.",
      "Using repetitive or low-value questions just to increase length.",
      "Writing answers that are too vague to help users.",
      "Treating FAQ schema as a substitute for real page quality."
    ],
    seoTips: {
      idealDescriptionLength:
        "Keep answers concise, direct, and aligned with real user intent."
    },
    toolComponentKey: "faq-schema-generator"
  },
  {
    id: "open-graph-preview-tool",
    name: "Open Graph Preview Tool",
    slug: "open-graph-preview-tool",
    category: "seo-generators",
    iconKey: "globe",
    shortDescription: "Preview key Open Graph content and generate og tags.",
    longDescription:
      "Draft social sharing metadata with a quick visual preview and copy-ready Open Graph tag output.",
    introduction:
      "Social previews should be intentional. This tool helps you evaluate how titles, descriptions, and URLs read before sharing.",
    seoTitle: "Open Graph Preview Tool - Preview and Generate OG Tags",
    seoDescription:
      "Preview Open Graph titles and descriptions, then copy the matching OG meta tags.",
    keywords: ["open graph preview", "og tags generator", "social meta tags"],
    faq: [
      {
        question: "Is Open Graph different from SEO metadata?",
        answer:
          "Yes. It primarily affects social sharing previews, though the messaging should remain consistent."
      },
      {
        question: "Do I need images too?",
        answer:
          "In production, yes. This starter utility focuses on the textual core of the social card."
      }
    ],
    relatedTools: ["meta-tag-generator", "canonical-tag-generator"],
    featured: true,
    popular: true,
    schemaType: "WebApplication",
    status: "published",
    usageSteps: [
      "Enter the sharing title and description.",
      "Adjust the URL and site name.",
      "Copy the generated tags into your page template."
    ],
    contentSections: [
      {
        title: "Why previews matter",
        content:
          "A strong social preview improves clarity when links are shared across channels and teams."
      },
      {
        title: "Keep messaging aligned",
        content:
          "Your social metadata should support the same promise made by the page title and visible content."
      }
    ],
    examples: [
      {
        label: "Shared article",
        input: "Title, description, URL, site name",
        output: "Text preview and OG tag block"
      }
    ],
    useCases: [
      {
        title: "Campaign launches",
        description: "Check social messaging before posting product or content links."
      }
    ],
    bestPractices: [
      "Keep social copy aligned with the actual page message.",
      "Use clear titles and descriptions that encourage confident clicks.",
      "Add a strong OG image in production environments.",
      "Review previews before posting links publicly."
    ],
    commonMistakes: [
      "Using social titles that overpromise compared to the page itself.",
      "Leaving the site name or URL inconsistent across templates.",
      "Ignoring image requirements for modern social previews.",
      "Writing text that is too long and gets cut off in cards."
    ],
    seoTips: {
      idealTitleLength:
        "Short, clear social titles often perform better than long, overloaded copy.",
      idealDescriptionLength:
        "Keep descriptions concise enough to remain readable in social previews."
    },
    toolComponentKey: "open-graph-preview-tool"
  },
  {
    id: "keyword-density-checker",
    name: "Keyword Density Checker",
    slug: "keyword-density-checker",
    category: "content-tools",
    iconKey: "chart-column-big",
    shortDescription: "Measure how often a keyword appears in your content.",
    longDescription:
      "Analyze rough keyword frequency and density to support content review without drifting into over-optimization.",
    introduction:
      "This tool provides a lightweight editorial check so teams can spot repetition and maintain natural language.",
    seoTitle: "Keyword Density Checker - Analyze Keyword Frequency",
    seoDescription:
      "Check approximate keyword occurrences, total words, and density in article or landing page copy.",
    keywords: ["keyword density checker", "content optimization tool", "seo content audit"],
    faq: [
      {
        question: "Is there a perfect keyword density?",
        answer:
          "No universal number exists. Readability, intent alignment, and topical completeness matter more."
      },
      {
        question: "Can density checks replace content strategy?",
        answer: "No. Use them as a QA signal, not the main writing strategy."
      }
    ],
    relatedTools: ["meta-tag-generator", "markdown-to-html-converter"],
    featured: false,
    popular: true,
    schemaType: "WebApplication",
    status: "published",
    usageSteps: [
      "Paste the text you want to review.",
      "Enter your target keyword or phrase.",
      "Review the count, total words, and estimated density."
    ],
    contentSections: [
      {
        title: "Editorial balance",
        content:
          "Density checks are most useful when they reveal accidental repetition or weak variation in phrasing."
      },
      {
        title: "Content quality first",
        content:
          "Natural language, topical completeness, and direct usefulness should guide optimization decisions."
      }
    ],
    examples: [
      {
        label: "Blog draft",
        input: "An article body and one target keyword",
        output: "Occurrences, total words, and estimated density"
      }
    ],
    useCases: [
      {
        title: "Content review",
        description: "Support editorial QA for blog content, service pages, and documentation."
      }
    ],
    bestPractices: [
      "Use density as a review signal, not a writing target.",
      "Focus on readability, relevance, and topical depth first.",
      "Check whether repetition feels natural to a human reader.",
      "Review density alongside internal linking, headings, and content structure."
    ],
    commonMistakes: [
      "Trying to force an exact keyword density percentage.",
      "Repeating one phrase unnaturally throughout the page.",
      "Ignoring search intent while focusing only on counts.",
      "Using density scores as a substitute for content quality."
    ],
    seoTips: {
      idealDescriptionLength:
        "There is no perfect density score; the best content usually sounds natural while covering the topic thoroughly."
    },
    toolComponentKey: "keyword-density-checker"
  },
  {
    id: "text-case-converter",
    name: "Text Case Converter",
    slug: "text-case-converter",
    category: "text-utilities",
    iconKey: "type",
    shortDescription:
      "Convert text between uppercase, lowercase, title case, and sentence case.",
    longDescription:
      "Format text faster for content editing, UI labels, data cleaning, and publishing workflows.",
    introduction:
      "A simple formatting utility becomes surprisingly valuable when reused across many operational tasks.",
    seoTitle: "Text Case Converter - Uppercase, Lowercase, Title Case, Sentence Case",
    seoDescription:
      "Convert text across common case styles instantly for content, UI, and publishing workflows.",
    keywords: ["text case converter", "title case", "sentence case"],
    faq: [
      {
        question: "Can this help with UI copy?",
        answer: "Yes. It is useful for labels, headings, buttons, and editorial cleanup."
      },
      {
        question: "Should title case be used everywhere?",
        answer: "No. Follow the style system of your product or publication."
      }
    ],
    relatedTools: ["slug-generator", "markdown-to-html-converter"],
    featured: false,
    popular: true,
    schemaType: "WebApplication",
    status: "published",
    usageSteps: [
      "Paste or type your text.",
      "Review each generated case style.",
      "Copy the one that matches your workflow."
    ],
    contentSections: [
      {
        title: "Micro-workflow efficiency",
        content:
          "Small formatting tasks add up. Reusable text utilities reduce friction in content and product work."
      },
      {
        title: "Consistent style",
        content:
          "Using a single formatting tool helps teams standardize headings, labels, and reusable copy."
      }
    ],
    examples: [
      {
        label: "UI string cleanup",
        input: "welcome to webtoolify",
        output: "Welcome To Webtoolify"
      }
    ],
    useCases: [
      {
        title: "Content operations",
        description: "Quickly reformat headings, labels, or imported text snippets."
      }
    ],
    bestPractices: [
      "Follow the style guide used by your publication or product.",
      "Use sentence case or title case consistently across templates.",
      "Review automated formatting before publishing important copy."
    ],
    commonMistakes: [
      "Applying title case everywhere without checking brand style.",
      "Assuming automatic case conversion always preserves intended meaning.",
      "Using inconsistent heading capitalization across pages."
    ],
    toolComponentKey: "text-case-converter"
  },
  {
    id: "markdown-to-html-converter",
    name: "Markdown to HTML Converter",
    slug: "markdown-to-html-converter",
    category: "content-tools",
    iconKey: "book-open-text",
    shortDescription: "Convert Markdown syntax into HTML output for publishing.",
    longDescription:
      "Transform lightweight Markdown formatting into HTML that can be reused in content systems and publishing pipelines.",
    introduction:
      "This utility supports teams that draft in Markdown but publish in HTML-first environments.",
    seoTitle: "Markdown to HTML Converter - Convert Markdown Online",
    seoDescription:
      "Convert headings, emphasis, links, and lists from Markdown into simple HTML output.",
    keywords: ["markdown to html", "markdown converter", "content formatting tool"],
    faq: [
      {
        question: "Is this a full Markdown parser?",
        answer:
          "No. It is a practical lightweight converter for common syntax patterns in this starter project."
      },
      {
        question: "Can I extend it later?",
        answer:
          "Yes. The logic is isolated so you can replace it with a richer parser when needed."
      }
    ],
    relatedTools: ["text-case-converter", "keyword-density-checker"],
    featured: false,
    popular: false,
    schemaType: "WebApplication",
    status: "published",
    usageSteps: [
      "Paste your Markdown content.",
      "Review the generated HTML output.",
      "Copy the markup into your publishing flow."
    ],
    contentSections: [
      {
        title: "Format portability",
        content:
          "Markdown is fast to write, while HTML remains useful for many publishing systems. Converting cleanly bridges those workflows."
      },
      {
        title: "Extensibility",
        content:
          "The logic layer is intentionally replaceable so you can adopt a full parser later without rewriting the page shell."
      }
    ],
    examples: [
      {
        label: "Simple article snippet",
        input: "# Title\n\n**Bold** text",
        output: "<h1>Title</h1> ..."
      }
    ],
    useCases: [
      {
        title: "Docs workflow",
        description: "Turn Markdown notes into HTML snippets for CMS, docs, or email systems."
      }
    ],
    bestPractices: [
      "Review converted HTML before publishing it in production systems.",
      "Use clean Markdown structure to improve output consistency.",
      "Replace lightweight conversion with a stronger parser if your workflow grows more complex."
    ],
    commonMistakes: [
      "Assuming every Markdown pattern is fully supported.",
      "Publishing generated HTML without a quick visual review.",
      "Using inconsistent heading structure in the source Markdown."
    ],
    toolComponentKey: "markdown-to-html-converter"
  },
  {
    id: "sitemap-validator",
    name: "Sitemap Validator",
    slug: "sitemap-validator",
    category: "validators",
    iconKey: "file-search",
    shortDescription: "Run a quick structural check on sitemap XML.",
    longDescription:
      "Validate the basic shape of sitemap XML before deeper testing or publishing checks.",
    introduction:
      "A lightweight validator helps catch obvious structure issues early in the publishing pipeline.",
    seoTitle: "Sitemap Validator - Check Basic Sitemap XML Structure",
    seoDescription: "Validate sitemap XML structure with a fast quality check before deployment.",
    keywords: ["sitemap validator", "sitemap xml checker", "technical seo validator"],
    faq: [
      {
        question: "Does this replace a full XML parser?",
        answer:
          "No. It is a first-pass validator intended for workflow convenience in this version."
      },
      {
        question: "What should a sitemap include?",
        answer:
          "At minimum, valid sitemap containers and location entries for intended URLs."
      }
    ],
    relatedTools: ["robots-txt-generator", "canonical-tag-generator"],
    featured: false,
    popular: false,
    schemaType: "WebApplication",
    status: "published",
    usageSteps: [
      "Paste your sitemap XML.",
      "Run the quick validation check.",
      "Review the message and fix obvious structural gaps."
    ],
    contentSections: [
      {
        title: "QA before publishing",
        content:
          "Basic validation protects teams from shipping incomplete XML structures that waste debugging time later."
      },
      {
        title: "Next-step testing",
        content:
          "Use this as an early workflow filter before running full-scale crawler or XML validation checks."
      }
    ],
    examples: [
      {
        label: "XML review",
        input: "<urlset> ... <loc>https://example.com</loc> ...",
        output: "A pass/fail structural message"
      }
    ],
    useCases: [
      {
        title: "Migration QA",
        description: "Check sitemap snippets during launch, migration, or export validation."
      }
    ],
    bestPractices: [
      "Validate sitemap structure before deployment.",
      "Make sure URLs included in the sitemap are intentional and index-worthy.",
      "Keep your sitemap aligned with canonical URLs and crawl strategy."
    ],
    commonMistakes: [
      "Publishing malformed XML after migrations or exports.",
      "Including placeholder or broken URLs in the sitemap.",
      "Treating a quick structural check as a full technical audit."
    ],
    toolComponentKey: "sitemap-validator"
  },
  {
    id: "canonical-tag-generator",
    name: "Canonical Tag Generator",
    slug: "canonical-tag-generator",
    category: "seo-generators",
    iconKey: "scan-search",
    shortDescription: "Generate canonical link tags for preferred URLs.",
    longDescription:
      "Create canonical tags that clarify the preferred version of a page across duplicates, variants, and tracking URLs.",
    introduction:
      "Canonical tags are small, but they play a major role in duplicate management and signal consolidation.",
    seoTitle: "Canonical Tag Generator - Create Preferred URL Tags",
    seoDescription:
      "Generate canonical link tags for preferred page URLs and duplication management.",
    keywords: ["canonical tag generator", "preferred url", "duplicate content"],
    faq: [
      {
        question: "Should canonical tags use absolute URLs?",
        answer:
          "Yes. Absolute URLs reduce ambiguity and are the safer implementation choice."
      },
      {
        question: "Can I point canonicals across domains?",
        answer:
          "Sometimes, but use them carefully and make sure the content relationship is intentional."
      }
    ],
    relatedTools: ["meta-tag-generator", "open-graph-preview-tool"],
    featured: true,
    popular: true,
    schemaType: "WebApplication",
    status: "published",
    usageSteps: [
      "Enter the preferred absolute URL.",
      "Choose whether the reference is cross-domain.",
      "Copy the generated canonical tag."
    ],
    contentSections: [
      {
        title: "Duplicate signal management",
        content:
          "Canonical tags help consolidate ranking signals when multiple URLs can surface the same or closely related content."
      },
      {
        title: "Implementation caution",
        content:
          "Do not rely on canonicals alone when redirects or better URL architecture would solve the problem more directly."
      }
    ],
    examples: [
      {
        label: "Tracked campaign URL",
        input: "https://example.com/page",
        output: '<link rel="canonical" href="https://example.com/page" />'
      }
    ],
    useCases: [
      {
        title: "Template cleanup",
        description:
          "Reduce duplicate URL ambiguity across filters, parameters, and campaign links."
      }
    ],
    bestPractices: [
      "Use one canonical per indexable page.",
      "Point to the final preferred URL, not a temporary or tracking variant.",
      "Use absolute URLs to reduce ambiguity.",
      "Review canonical logic during migrations, filtering, and template changes."
    ],
    commonMistakes: [
      "Canonicalizing to the wrong page.",
      "Using canonicals where redirects would solve the problem better.",
      "Forgetting to update canonicals after URL changes.",
      "Mixing inconsistent canonical targets across similar pages."
    ],
    seoTips: {
      idealDescriptionLength:
        "Canonicals work best when they support a clear URL strategy and consistent internal linking."
    },
    toolComponentKey: "canonical-tag-generator"
  }
];