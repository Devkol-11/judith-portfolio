// All of her details live here. Empty strings are placeholders: the page shows
// a "coming soon" state until a real value is filled in.

export type Platform = "youtube" | "instagram";

export type Video = {
  title: string;
  description: string;
  platform: Platform;
  /** Link to the video on YouTube or Instagram */
  url: string;
  /** Path under /public, e.g. "/videos/brand-film.jpg" */
  thumbnail: string;
  /** Optional short note, e.g. client name or running time */
  meta?: string;
};

export const profile = {
  name: "Her Name",
  role: "Video editor",
  intro:
    "One or two sentences about her editing style and the kind of videos she cuts. Placeholder until her bio is ready.",
  /** Path under /public, e.g. "/images/portrait.jpg" */
  photo: "",
  photoNote: "hi, that's me",
};

export const contact = {
  heading: "Let's make something together",
  blurb:
    "Placeholder: one sentence on how to hire her, what to include in a message, and how soon she replies.",
  email: "",
  socials: [
    { platform: "instagram" as Platform, label: "Instagram", url: "" },
    { platform: "youtube" as Platform, label: "YouTube", url: "" },
  ],
};

const placeholderDescription =
  "Short description of the video: what it is, who it was for, and what she did on it.";

export const videos: Video[] = [
  { title: "Video title", description: placeholderDescription, platform: "youtube", url: "", thumbnail: "", meta: "Client or length" },
  { title: "Video title", description: placeholderDescription, platform: "instagram", url: "", thumbnail: "", meta: "Client or length" },
  { title: "Video title", description: placeholderDescription, platform: "youtube", url: "", thumbnail: "", meta: "Client or length" },
  { title: "Video title", description: placeholderDescription, platform: "instagram", url: "", thumbnail: "", meta: "Client or length" },
  { title: "Video title", description: placeholderDescription, platform: "youtube", url: "", thumbnail: "", meta: "Client or length" },
];
