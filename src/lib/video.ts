export function instagramId(url: string): string | null {
  const match = url.match(/instagram\.com\/(?:reel|reels|p|tv)\/([\w-]+)/);
  return match ? match[1] : null;
}

/** Instagram's official embed player for a reel */
export function instagramEmbed(url: string): string | null {
  const id = instagramId(url);
  return id ? `https://www.instagram.com/reel/${id}/embed/` : null;
}

/** Saved cover frame for a reel: /public/images/reels/<reel id>.jpg (9:16) */
export function reelCover(url: string): string | null {
  const id = instagramId(url);
  return id ? `/images/reels/${id}.jpg` : null;
}
