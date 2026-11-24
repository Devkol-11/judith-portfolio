import { siInstagram, siYoutube } from "simple-icons";
import type { Platform } from "@/content/site";

const icons = { instagram: siInstagram, youtube: siYoutube };

export function BrandIcon({ platform, className }: { platform: Platform; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d={icons[platform].path} />
    </svg>
  );
}
