import Image from "next/image";
import { Play } from "lucide-react";
import { brands, type Brand, type Reel } from "@/content/site";
import { reelCover } from "@/lib/video";
import { BrandMark } from "./BrandMark";

// A reel as a tall 9:16 poster: her real cover frame, the partner brand's logo
// and the description over a soft gradient. Hover zooms the frame and shows a
// pink play button. Clicking opens the player.
export function ReelCard({ reel, onOpen, priority }: { reel: Reel; onOpen: () => void; priority?: boolean }) {
  const brand: Brand = brands[reel.brand];
  const cover = reelCover(reel.url);

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Play “${reel.title}” with ${brand.name}`}
      className="group/reel bg-ink relative block aspect-9/16 w-full cursor-pointer overflow-hidden text-left text-white"
    >
      {cover && (
        <Image
          src={cover}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 46vw"
          className="reel-zoom object-cover"
        />
      )}

      {/* soft dark gradient so the words always read */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0/0.18)_0%,transparent_20%,transparent_50%,rgb(0_0_0/0.85)_100%)]"
      />

      <BrandMark brand={brand} className="absolute top-4 left-4 size-10 shadow-md md:size-11" />

      {/* play button appears on hover / focus */}
      <span
        aria-hidden="true"
        className="reel-play bg-pop text-ink absolute top-1/2 left-1/2 grid size-16 -translate-1/2 place-items-center rounded-full shadow-[0_12px_40px_-8px_rgb(255_95_162/0.9)]"
      >
        <Play size={22} strokeWidth={2} fill="currentColor" className="ml-1" />
      </span>

      <span className="absolute inset-x-0 bottom-0 p-3 text-[0.8125rem] leading-snug font-medium text-white/95 sm:p-4 sm:text-sm md:p-5 md:text-[0.95rem]">
        {reel.description}
      </span>
    </button>
  );
}
