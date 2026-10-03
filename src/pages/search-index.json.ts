import { getCollection } from "astro:content";
import { recipeHref, visibleRecipes } from "@/lib/recipes";

/**
 * Static search index consumed by search page. Holds recipe metadata only.
 */
export async function GET() {
  const recipes = visibleRecipes(await getCollection("recipes"));
  const index = recipes.map((recipe) => ({
    title: recipe.data.title,
    excerpt: recipe.data.excerpt,
    href: recipeHref(recipe),
    category: recipe.data.category,
    totalTime: recipe.data.totalTime,
  }));

  return new Response(JSON.stringify(index), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}
