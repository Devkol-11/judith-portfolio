// All of her details live here. Edit this file to update the site.
//
// Brand logos live in /public/images/brands/ as square PNGs (shown as
// circles). A brand without a logo shows its name instead.

export type Brand = {
  name: string;
  logo?: string;
  /** Show this brand in the hero's "Brands I've worked with" row */
  featured?: boolean;
};

export const brands = {
  beautyHut: { name: "Beauty Hut", logo: "/images/brands/beauty-hut.png", featured: true },
  buchiMix: { name: "Buchi Mix", logo: "/images/brands/buchi-mix.png", featured: true },
  burgerKing: { name: "Burger King", logo: "/images/brands/burger-king.png", featured: true },
  goldenPenny: { name: "Golden Penny Foods", logo: "/images/brands/golden-penny.png", featured: true },
  johnvents: { name: "Johnvents Foods", logo: "/images/brands/johnvents.png", featured: true },
  lg: { name: "LG", logo: "/images/brands/lg.png", featured: true },
  mamador: { name: "Mamador", logo: "/images/brands/mamador.png", featured: true },
  nankid: { name: "Nestlé NANKID", logo: "/images/brands/nankid.png", featured: true },
  pepsodent: { name: "Pepsodent", logo: "/images/brands/pepsodent.png", featured: true },
  travelXperia: { name: "Travel Xperia", logo: "/images/brands/travel-xperia.png", featured: true },
  anker: { name: "Anker", logo: "/images/brands/anker.png", featured: true },
  ayoola: { name: "Ayoola Foods", logo: "/images/brands/ayoola-foods.png", featured: true },
  addme: { name: "Addme", logo: "/images/brands/addme.png", featured: true },
  jtb: { name: "Judith The Brand", logo: "/images/brands/judith-the-brand.png", featured: true },
} satisfies Record<string, Brand>;

export type BrandKey = keyof typeof brands;

export type Reel = {
  title: string;
  /** Instagram reel link */
  url: string;
  /** Year posted (decoded from the link) */
  year: string;
  /** Brand she made it with (read from the reel's collaborators and caption) */
  brand: BrandKey;
  description: string;
};

export const profile = {
  name: "Judith Urevbu",
  role: "Video editor & content creator",
  /** Big hero line; `headlineEmphasis` is set in pink italic */
  headline: "I turn brands and everyday moments into stories people stop scrolling for.",
  headlineEmphasis: "stop scrolling for.",
  /** Supporting line under the headline, also used as the page description */
  intro:
    "Video editor and content creator shooting and editing short-form video for brands, from the first idea to the final cut.",
};

export const contact = {
  email: "judithurevbu@gmail.com",
  availability: "Open to brand collaborations",
  socials: [
    {
      label: "Instagram",
      handle: "@judimplez",
      url: "https://www.instagram.com/judimplez/",
      /** As shown on her Instagram profile on 2026-11-25; update now and then */
      followers: "174K",
    },
  ],
};

export const reels: Reel[] = [
  {
    title: "Low battery? Not today",
    url: "https://www.instagram.com/reel/DdhAt7qK1FY/",
    year: "2026",
    brand: "anker",
    description:
      "A day out with the Soundcore R50i earbuds and a MagGo power bank: music on, battery worries off.",
  },
  {
    title: "Bedtime hunger",
    url: "https://www.instagram.com/reel/DcdQ7MGKe6t/",
    year: "2026",
    brand: "nankid",
    description: "A playful bedtime moment for NANKID 4: the drink to make before the kids suddenly get hungry.",
  },
  {
    title: "They grew overnight",
    url: "https://www.instagram.com/reel/DcIrE2WqL6U/",
    year: "2026",
    brand: "nankid",
    description: "A short, heartfelt point-of-view piece on how fast children grow, made for NANKID 4.",
  },
  {
    title: "School-morning routine",
    url: "https://www.instagram.com/reel/DYElNQCqzZ1/",
    year: "2026",
    brand: "nankid",
    description:
      "Breakfast, giggles and a cup they actually finish: NANKID OPTIPRO 4 woven into a warm school-morning story.",
  },
  {
    title: "Christmas pizza night",
    url: "https://www.instagram.com/reel/DSmgOsUCvPL/",
    year: "2025",
    brand: "ayoola",
    description: "Making pizza with the kids using Ayoola Potato Flour, for the Ayoola 12 Days to Christmas Challenge.",
  },
  {
    title: "The Holiday Edit",
    url: "https://www.instagram.com/reel/DSCU2ePCIPW/",
    year: "2025",
    brand: "jtb",
    description: "Launch film for the Cozy Me Up pajamas, Judith The Brand's holiday collection.",
  },
  {
    title: "The gift of ease",
    url: "https://www.instagram.com/reel/DDzncqnNlQC/",
    year: "2024",
    brand: "addme",
    description: "A festive date-night story for Addme, showing stress-free holiday cooking.",
  },
  {
    title: "The Amalfi Edit",
    url: "https://www.instagram.com/reel/DaPl3e0NlkS/",
    year: "2026",
    brand: "jtb",
    description: "A sunlit launch film for The Amalfi Edit, Judith The Brand's summer collection.",
  },
];
