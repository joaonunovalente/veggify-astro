export const siteConfig = {
  name: "Veggify",
  tagline: "A blog template made for food influencers",
  title: "Veggify - Astro recipe blog template",
  description:
    "Veggify is a clean and organic CMS template for food bloggers and influencers. The simple layout and structure allows you to quickly create recipe posts, edit text, move images and adjust animations.",
  siteUrl: "https://veggify-astro.vercel.app",
  authorName: "Rebecca",
  email: "hello@example.com",
  language: "en",
  dateLocale: "en-US",
  locale: "en_US",
  socialImage: "/og-image.jpg",
};

/** Social icon row, rendered in the header and the footer. */
export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: "/icons/icon-instagram.svg" },
  { label: "YouTube", href: "https://www.youtube.com/", icon: "/icons/icon-youtube.svg" },
  { label: "Pinterest", href: "https://www.pinterest.com/", icon: "/icons/icon-pinterest.svg" },
  { label: "Twitter", href: "https://twitter.com/", icon: "/icons/icon-twitter.svg" },
  { label: "RSS", href: "/rss.xml", icon: "/icons/icon-rss.svg" },
];

/** Press-logo row, rendered on the home and about pages. */
export const featuredIn = {
  enabled: true,
  title: "Featured in",
  items: [
    {
      label: "The New York Times",
      href: "https://www.nytimes.com/",
      icon: "/logos/logo-nyt.svg",
    },
    { label: "VegNews", href: "https://vegnews.com/", icon: "/logos/logo-vegnews.svg" },
    { label: "BuzzFeed", href: "https://www.buzzfeed.com/", icon: "/logos/logo-buzzfeed.svg" },
    { label: "Huffpost", href: "https://www.huffpost.com/", icon: "/logos/logo-huffpost.svg" },
    {
      label: "Forks Over Knives",
      href: "https://www.forksoverknives.com/",
      icon: "/logos/logo-forks-over-knives.svg",
    },
  ],
};

/** Everything the site header renders. */
export const header = {
  navigation: [
    { label: "Recipes", href: "/recipes/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],
};

/** Everything the footer renders: link columns and the bottom credit row. */
export const footer = {
  navigation: {
    title: "Explore",
    links: [
      { label: "Recipes", href: "/recipes/" },
      { label: "About", href: "/about/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  adminNavigation: {
    title: "Admin",
    columns: true,
    links: [
      { label: "Style guide", href: "/admin/style-guide/" },
      { label: "Licenses", href: "/admin/licenses/" },
      { label: "Instructions", href: "/admin/instructions/" },
      { label: "Changelog", href: "/admin/changelog/" },
      { label: "Privacy policy", href: "/privacy-policy/" },
      { label: "401", href: "/401/" },
      { label: "404", href: "/404/" },
    ],
  },
  credits: {
    developerName: "Kevin Dakin",
    developerUrl: "https://www.kevindakin.com/",
  },
};
