export function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ");
}

export function countWords(text: string) {
  const words = text.toLowerCase().match(/\b[\p{L}\p{N}'-]+\b/gu);
  return words?.length ?? 0;
}

export function keywordDensity(text: string, keyword: string) {
  const cleanText = stripHtml(text).toLowerCase();
  const cleanKeyword = keyword.toLowerCase().trim();

  if (!cleanText || !cleanKeyword) {
    return {
      count: 0,
      totalWords: countWords(cleanText),
      density: 0
    };
  }

  const keywordPattern = new RegExp(
    cleanKeyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    "gu"
  );

  const count = (cleanText.match(keywordPattern) ?? []).length;
  const totalWords = countWords(cleanText);
  const density = totalWords > 0 ? Number(((count / totalWords) * 100).toFixed(2)) : 0;

  return { count, totalWords, density };
}

export function markdownToHtml(markdown: string) {
  if (!markdown.trim()) return "";

  return markdown
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/gim, "<em>$1</em>")
    .replace(/`(.*?)`/gim, "<code>$1</code>")
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')
    .replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>")
    .replace(/^\- (.*)$/gim, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/gims, "<ul>$1</ul>")
    .replace(/\n{2,}/g, "</p><p>")
    .replace(/\n/g, "<br />")
    .replace(/^(?!<h\d|<ul|<li|<blockquote|<p)(.+)$/gim, "<p>$1</p>");
}

export function toTitleCase(text: string) {
  return text.replace(/\w\S*/g, (word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
}

export function toSentenceCase(text: string) {
  const lower = text.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export function validateXml(xml: string) {
  const trimmed = xml.trim();

  if (!trimmed) {
    return {
      valid: false,
      message: "The sitemap input is empty."
    };
  }

  const hasXmlLikeStructure = trimmed.startsWith("<");
  const hasUrlSet = trimmed.includes("<urlset") || trimmed.includes("<sitemapindex");
  const hasLoc = trimmed.includes("<loc>");

  if (!hasXmlLikeStructure) {
    return {
      valid: false,
      message: "The input does not appear to be valid XML."
    };
  }

  if (!hasUrlSet || !hasLoc) {
    return {
      valid: false,
      message:
        "The sitemap appears to be missing required <urlset>/<sitemapindex> or <loc> elements."
    };
  }

  return {
    valid: true,
    message: "The sitemap includes the expected top-level XML structure and location entries."
  };
}