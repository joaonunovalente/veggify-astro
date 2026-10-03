/**
 * The homepage body: the static copy and switches for the blocks that sit
 * around the recipe content.
 *
 * Recipe content itself comes from the `recipes` collection, not from
 * config. The about teaser below is the homepage's own block — it is not
 * the `/about/` page, which is driven by the `about` export in
 * @/config/about — so its copy is deliberately separate and can be
 * shorter and more pitched than the full bio.
 */

export const home = {
  // About teaser ---------------------------------------------------------
  // The closing block above the press-logo row. Set `enabled` to false to
  // drop it from the homepage; the press-logo row below is independent and
  // is driven by `featuredIn` in @/config/site.
  about: {
    /** Set to false to hide the whole teaser from the homepage. */
    enabled: true,

    heading: "Vegan foodie who loves to experiment with recipes",
    /** Paragraphs under the heading, in order. */
    text: [
      "I'm Rebecca — a home cook who turns seasonal vegetables into plant-based recipes that actually work on a weeknight. Everything here is tested in my own kitchen.",
      "New recipes, cooking tips and honest product recommendations go out in my weekly newsletter, and I'm always up for a collaboration.",
    ],

    /** Primary call to action. Set `buttonLabel` to "" to hide it. */
    buttonLabel: "About me",
    buttonHref: "/about/",
    /**
     * Secondary action beside the main button. Empty
     * `secondaryButtonLabel` hides it.
     */
    secondaryButtonLabel: "Browse recipes",
    secondaryButtonHref: "/recipes/",

    image: "/images/about-photo.jpg",
    imageAlt: "Cooking in kitchen at stove",
  },
};
