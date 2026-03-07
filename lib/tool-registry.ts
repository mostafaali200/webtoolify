import {
  BadgeInfo,
  BookOpenText,
  Braces,
  ChartColumnBig,
  FileCode2,
  FileSearch,
  Globe,
  Link2,
  ScanSearch,
  Type,
  type LucideIcon
} from "lucide-react";

import { CanonicalTagGeneratorTool } from "@/components/tools/instances/canonical-tag-generator";
import { FAQSchemaGeneratorTool } from "@/components/tools/instances/faq-schema-generator";
import { KeywordDensityCheckerTool } from "@/components/tools/instances/keyword-density-checker";
import { MarkdownToHtmlConverterTool } from "@/components/tools/instances/markdown-to-html-converter";
import { MetaTagGeneratorTool } from "@/components/tools/instances/meta-tag-generator";
import { OpenGraphPreviewTool } from "@/components/tools/instances/open-graph-preview-tool";
import { RobotsTxtGeneratorTool } from "@/components/tools/instances/robots-txt-generator";
import { SitemapValidatorTool } from "@/components/tools/instances/sitemap-validator";
import { SlugGeneratorTool } from "@/components/tools/instances/slug-generator";
import { TextCaseConverterTool } from "@/components/tools/instances/text-case-converter";

export const iconRegistry: Record<string, LucideIcon> = {
  "badge-info": BadgeInfo,
  "book-open-text": BookOpenText,
  braces: Braces,
  "chart-column-big": ChartColumnBig,
  "file-code-2": FileCode2,
  "file-search": FileSearch,
  globe: Globe,
  "link-2": Link2,
  "scan-search": ScanSearch,
  type: Type
};

export const toolComponentRegistry = {
  "canonical-tag-generator": CanonicalTagGeneratorTool,
  "faq-schema-generator": FAQSchemaGeneratorTool,
  "keyword-density-checker": KeywordDensityCheckerTool,
  "markdown-to-html-converter": MarkdownToHtmlConverterTool,
  "meta-tag-generator": MetaTagGeneratorTool,
  "open-graph-preview-tool": OpenGraphPreviewTool,
  "robots-txt-generator": RobotsTxtGeneratorTool,
  "sitemap-validator": SitemapValidatorTool,
  "slug-generator": SlugGeneratorTool,
  "text-case-converter": TextCaseConverterTool
};

export function getToolIcon(iconKey: string): LucideIcon {
  return iconRegistry[iconKey] ?? BadgeInfo;
}

export function getToolComponent(toolComponentKey: string) {
  return toolComponentRegistry[toolComponentKey as keyof typeof toolComponentRegistry];
}