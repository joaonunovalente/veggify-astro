/**
 * The site's categories. Every recipe belongs to exactly one of these.
 * Order matters: it is the order used on the home page and categories index.
 */
export const categories = ["Entrees", "Breakfast", "Lunch", "Desserts", "Sides", "Drinks"] as const;

export type Category = (typeof categories)[number];

export const categorySlug = (category: string) =>
  category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

/** Tag colours. Foreground values are darkened to meet WCAG AA (4.5:1) against their backgrounds. */
export const categoryStyles: Record<Category, { color: string; background: string }> = {
  Entrees: { color: "#4a6f1a", background: "#f0f5c4" },
  Breakfast: { color: "#3c3a8f", background: "#efedfa" },
  Lunch: { color: "#186e6e", background: "#e5f7f3" },
  Desserts: { color: "#326e92", background: "#e8f5fa" },
  Sides: { color: "#9a4b00", background: "#feefc9" },
  Drinks: { color: "#b03228", background: "#ffeae3" },
};

/** One line per category, shown on its archive page and in listings. */
export const categoryDescriptions: Record<Category, string> = {
  Entrees: "Hearty plant-based mains, from pizzas to slow-simmered soups.",
  Breakfast: "Slow mornings, toast three ways, pancakes and french toast.",
  Lunch: "Fresh salads and bowls for the middle of the day.",
  Desserts: "Cupcakes, parfaits and other sweet endings.",
  Sides: "Fries, avocados and everything alongside.",
  Drinks: "Mimosas, cocktails and other sippable things.",
};
