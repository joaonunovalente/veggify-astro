/**
 * The about page: copy and images for `/about/`.
 *
 * Only the author name stays in `siteConfig` (`src/config/site.ts`) as
 * global identity, rendered as `{greetingPrefix} {siteConfig.authorName}!`.
 * Everything else — including the two bio paragraphs — lives here.
 * The press-logo row is still driven by `featuredIn` in `src/config/site.ts`.
 */

export interface AboutFact {
  image: string;
  imageAlt: string;
  title: string;
  text: string;
}

export const about = {
  // Visibility -----------------------------------------------------------
  // Set any of these to false to hide that section from `/about/`.
  // Hiding `profile` also hides its press-logo row. The quote band has its
  // own switch at `quote.enabled` below.
  /** Hero title + intro paragraph. */
  showHero: true,
  /** Profile image + author greeting/bio. */
  showProfile: true,
  /** The three-card "A little more about me" grid. */
  showFacts: true,

  // Hero ---------------------------------------------------------------
  heading: "About me",
  /** Single intro paragraph under the heading. Also feeds the page meta and the "About me" card in the recipe sidebar. */
  intro:
    "I'm Rebecca, a vegan foodie sharing simple plant-based recipes, kitchen tips, and honest product recommendations from my home kitchen.",

  // Profile ------------------------------------------------------------
  greetingPrefix: "Hey, my name is",
  /** Exactly two paragraphs under the greeting. */
  bio: [
    "Vegan foodie who loves to experiment with recipes. Weekly emails with the latest recipes, cooking tips and tricks and product recommendations!",
    "When I'm not in the kitchen, you'll find me at the farmers' market hunting for seasonal produce — everything I cook, test, and recommend is something I'd serve at my own table.",
  ] as [string, string],
  /**
   * Call-to-action under the bio. Set `buttonLabel` to "" to hide it.
   */
  buttonLabel: "Get in touch",
  buttonHref: "/contact/",
  /**
   * Secondary action beside the main button. Empty
   * `secondaryButtonLabel` hides it.
   */
  secondaryButtonLabel: "Browse recipes",
  secondaryButtonHref: "/recipes/",
  profileImage: "/images/about-photo-1.webp",
  profileImageAlt: "Woman cooking in kitchen",

  // Facts --------------------------------------------------------------
  /** Heading above the three cards. The grid is fixed at exactly three cards. */
  factsHeading: "A little more about me",
  facts: [
    {
      image: "/images/about-photo-2.webp",
      imageAlt: "Woman cooking in kitchen",
      title: "I’m always cooking",
      text: "I test new recipes every week, so there's always something fresh coming from my stove to yours.",
    },
    {
      image: "/images/about-photo-3.webp",
      imageAlt: "Zucchini in baking dish",
      title: "I’m plant-based",
      text: "Every recipe here is 100% plant-based, built around seasonal vegetables and simple pantry staples.",
    },
    {
      image: "/images/about-photo-4.webp",
      imageAlt: "Woman cooking in kitchen",
      title: "I love writing",
      text: "I share the stories, tips, and kitchen experiments behind each dish in my weekly newsletter.",
    },
  ] as [AboutFact, AboutFact, AboutFact],

  // Quote --------------------------------------------------------------
  quote: {
    /** Set to false to hide the quote band at the bottom of the page. */
    enabled: true,
    text: "Good food needs no rulebook — just fresh ingredients, a little curiosity, and someone to share it with.",
  },
};
