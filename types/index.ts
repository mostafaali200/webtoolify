export type ToolCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ContentSection = {
  title: string;
  content: string;
};

export type ToolExample = {
  label: string;
  input: string;
  output: string;
};

export type UseCase = {
  title: string;
  description: string;
};

export type SEOTips = {
  idealTitleLength?: string;
  idealDescriptionLength?: string;
};

export type ToolDefinition = {
  id: string;
  name: string;
  slug: string;
  category: string;
  iconKey: string;
  shortDescription: string;
  longDescription: string;
  introduction: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  faq: FAQItem[];
  relatedTools: string[];
  featured: boolean;
  popular: boolean;
  schemaType: "SoftwareApplication" | "WebApplication";
  status: "published" | "draft";
  contentSections: ContentSection[];
  examples: ToolExample[];
  useCases: UseCase[];
  usageSteps: string[];
  toolComponentKey: string;
  bestPractices?: string[];
  commonMistakes?: string[];
  seoTips?: SEOTips;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  keywords: string[];
  relatedTools: string[];
  content: {
    introduction: string;
    sections: Array<{ title: string; content: string[] }>;
    conclusion: string;
    faq?: FAQItem[];
  };
};

export type NavigationItem = {
  label: string;
  href: string;
};