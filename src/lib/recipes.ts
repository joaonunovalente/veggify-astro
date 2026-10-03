import type { CollectionEntry } from "astro:content";
import { categories, categorySlug, type Category } from "@/config/categories";

export type Recipe = CollectionEntry<"recipes">;
export { categories, categorySlug, type Category };

/**
 * Canonical CMS order, extracted from the legacy export (`recipes.html` page 1
 * lists the first 9, `recipes_ca6c56ae_page=2.html` the remaining 3, and the
 * featured recipe is excluded from listings). Every listing sorts by this so
 * the Astro port renders the exact same order as the original template.
 */
export const recipeOrder = [
  "pineapple-smoked-jackfruit-pizza",
  "air-fryer-steak-fries",
  "quick-strawberry-shortcake-cupcakes",
  "chickpea-salad-with-lemon-tahini-dressing",
  "blueberry-banana-french-toast",
  "strawberry-parfait",
  "stuffed-avocados",
  "butternut-squash-pumpkin-soup",
  "breakfast-toast-3-different-ways",
  "orange-zest-mimosa",
  "quick-and-easy-peanut-butter-pancakes",
  "strawberry-caprese-summer-salad",
  "cocktails-for-beginners",
];

const orderIndex = new Map(recipeOrder.map((slug, index) => [slug, index]));

export const categoryHref = (category: string) => `/categories/${categorySlug(category)}/`;

export const recipeSlug = (recipe: Recipe) => recipe.id.replace(/\.md$/, "");

export const recipeHref = (recipe: Recipe) => `/recipes/${recipeSlug(recipe)}/`;

export const byCmsOrder = (a: Recipe, b: Recipe) =>
  (orderIndex.get(recipeSlug(a)) ?? 99) - (orderIndex.get(recipeSlug(b)) ?? 99);

export const visibleRecipes = (recipes: Recipe[]) =>
  recipes.filter((recipe) => !recipe.data.draft).sort(byCmsOrder);

export const getRecipeBySlug = (recipes: Recipe[], slug: string) =>
  recipes.find((recipe) => recipeSlug(recipe) === slug);

export const getFeatured = (recipes: Recipe[], limit = 1) =>
  visibleRecipes(recipes)
    .filter((recipe) => recipe.data.featured)
    .slice(0, limit);

/** Non-featured recipes in CMS order: exactly what the legacy listing shows. */
export const getListedRecipes = (recipes: Recipe[]) =>
  visibleRecipes(recipes).filter((recipe) => !recipe.data.featured);

/** Listing page size: the legacy template shows 9 recipes on page 1. */
export const PAGE_SIZE = 9;

export const getRecipesByCategory = (recipes: Recipe[], category: string) =>
  visibleRecipes(recipes).filter((recipe) => recipe.data.category === category);

/** Explicit per-recipe "Other recipes" sidebar, matching the legacy pages. */
export const getRelated = (recipes: Recipe[], current: Recipe) =>
  (current.data.related ?? [])
    .map((slug) => getRecipeBySlug(recipes, slug))
    .filter((recipe): recipe is Recipe => recipe !== undefined);

/** Categories in configured order, with recipe counts. Empty ones are dropped. */
export const getCategoryList = (recipes: Recipe[]) => {
  const visible = visibleRecipes(recipes);

  return categories
    .map((category) => ({
      name: category,
      slug: categorySlug(category),
      count: visible.filter((recipe) => recipe.data.category === category).length,
    }))
    .filter((entry) => entry.count > 0);
};
