import { getCollection } from "astro:content";
import { siteConfig } from "@/config/site";
import { recipeHref, visibleRecipes, type Recipe } from "@/lib/recipes";

/** How many of the most recent recipes the feed carries. */
const FEED_LIMIT = 20;

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/** RSS 2.0 requires RFC 822 dates, e.g. "Mon, 28 Sep 2026 00:00:00 GMT". */
const toRfc822 = (date: Date) => date.toUTCString();

/**
 * Newest first, which is what feed readers assume. Recipes without a `date`
 * keep their CMS order and sort last, so adding a date never reshuffles the
 * rest of the feed.
 */
const byNewest = (a: Recipe, b: Recipe) => {
  const aTime = a.data.date?.getTime();
  const bTime = b.data.date?.getTime();
  if (aTime === undefined) return bTime === undefined ? 0 : 1;
  if (bTime === undefined) return -1;
  return bTime - aTime;
};

export async function GET() {
  const recipes = visibleRecipes(await getCollection("recipes"))
    .sort(byNewest)
    .slice(0, FEED_LIMIT);

  const items = recipes
    .map((recipe) => {
      const url = new URL(recipeHref(recipe), siteConfig.siteUrl).toString();
      const pubDate = recipe.data.date
        ? `\n  <pubDate>${toRfc822(recipe.data.date)}</pubDate>`
        : "";
      return `<item>
  <title>${escapeXml(recipe.data.title)}</title>
  <link>${escapeXml(url)}</link>
  <guid isPermaLink="true">${escapeXml(url)}</guid>${pubDate}
  <description>${escapeXml(recipe.data.excerpt)}</description>
</item>`;
    })
    .join("\n");

  const feedUrl = new URL("/rss.xml", siteConfig.siteUrl).toString();
  // Derived from the newest item rather than the build clock, so rebuilding an
  // unchanged site doesn't tell readers the content changed. Omitted when no
  // recipe has a date, keeping builds deterministic.
  const newest = recipes.find((recipe) => recipe.data.date)?.data.date;
  const lastBuildDate = newest ? `\n  <lastBuildDate>${toRfc822(newest)}</lastBuildDate>` : "";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(siteConfig.name)}</title>
  <link>${escapeXml(siteConfig.siteUrl)}</link>
  <description>${escapeXml(siteConfig.description)}</description>
  <language>${escapeXml(siteConfig.language)}</language>
  <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />${lastBuildDate}
${items}
</channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
