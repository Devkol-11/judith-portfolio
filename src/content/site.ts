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
  // Brands from her reels without a logo file: named in the player, no badge on the card
  ofmax: { name: "Of Max Homes" },
  thermocool: { name: "Haier Thermocool" },
} satisfies Record<string, Brand>;

export type BrandKey = keyof typeof brands;

export type Reel = {
  title: string;
  /** Instagram reel link */
  url: string;
  /** Year posted (decoded from the link) */
  year: string;
  /** Brand she made it with (read from the reel's collaborators and caption); omit for her own work */
  brand?: BrandKey;
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
    title: "Lace and light",
    url: "https://www.instagram.com/reel/Dd9Rb75IfMt/",
    year: "2026",
    description: "Bridal content shoot",
  },
  {
    title: "Low battery? Not today",
    url: "https://www.instagram.com/reel/DdhAt7qK1FY/",
    year: "2026",
    brand: "anker",
    description: "Anker on-the-go lifestyle",
  },
  {
    title: "Bedtime hunger",
    url: "https://www.instagram.com/reel/DcdQ7MGKe6t/",
    year: "2026",
    brand: "nankid",
    description: "NANKID bedtime moments",
  },
  {
    title: "They grew overnight",
    url: "https://www.instagram.com/reel/DcIrE2WqL6U/",
    year: "2026",
    brand: "nankid",
    description: "NANKID growing-up story",
  },
  {
    title: "School-morning routine",
    url: "https://www.instagram.com/reel/DYElNQCqzZ1/",
    year: "2026",
    brand: "nankid",
    description: "NANKID school-morning routine",
  },
  {
    title: "Christmas pizza night",
    url: "https://www.instagram.com/reel/DSmgOsUCvPL/",
    year: "2025",
    brand: "ayoola",
    description: "Ayoola festive family kitchen",
  },
  {
    title: "The Holiday Edit",
    url: "https://www.instagram.com/reel/DSCU2ePCIPW/",
    year: "2025",
    brand: "jtb",
    description: "JTB holiday pajama campaign",
  },
  {
    title: "The gift of ease",
    url: "https://www.instagram.com/reel/DDzncqnNlQC/",
    year: "2024",
    brand: "addme",
    description: "Addme holiday date night",
  },
  {
    title: "The Amalfi Edit",
    url: "https://www.instagram.com/reel/DaPl3e0NlkS/",
    year: "2026",
    brand: "jtb",
    description: "JTB summer collection launch",
  },
  {
    title: "Calm weekday reset",
    url: "https://www.instagram.com/reel/DecOrkWqMXR/",
    year: "2026",
    description: "Weekday self-care reset",
  },
  {
    title: "The Chocoh challenge",
    url: "https://www.instagram.com/reel/DeW7kn3qZso/",
    year: "2026",
    brand: "goldenPenny",
    description: "Golden Penny creative challenge",
  },
  {
    title: "Lunchbox morning routine",
    url: "https://www.instagram.com/reel/DeHnRfqqFOV/",
    year: "2026",
    description: "Lunchbox mom lifestyle",
  },
  {
    title: "Holiday with the kids",
    url: "https://www.instagram.com/reel/DcjQzE_K1Nv/",
    year: "2026",
    brand: "pepsodent",
    description: "Pepsodent holiday family fun",
  },
  {
    title: "Things that make me feel rich",
    url: "https://www.instagram.com/reel/DZhWS7wKqnA/",
    year: "2026",
    brand: "johnvents",
    description: "Everyday luxury lifestyle",
  },
  {
    title: "Countertop glow-up",
    url: "https://www.instagram.com/reel/DSdMa9LiqCK/",
    year: "2025",
    brand: "ofmax",
    description: "Kitchen décor glow-up",
  },
  {
    title: "One less worry",
    url: "https://www.instagram.com/reel/DP0r70YCCLk/",
    year: "2025",
    brand: "thermocool",
    description: "Thermocool busy-mom lifestyle",
  },
  {
    title: "Six months of you",
    url: "https://www.instagram.com/reel/DdygibBgo_z/",
    year: "2026",
    description: "Baby milestone shoot",
  },
  {
    title: "Mrs Dapson's entrance",
    url: "https://www.instagram.com/reel/DdKA0RQo9eE/",
    year: "2026",
    description: "Wedding guest glam",
  },
  {
    title: "An asoebi slay",
    url: "https://www.instagram.com/reel/Dc8YWxJKziU/",
    year: "2026",
    description: "Asoebi owambe glam",
  },
];
