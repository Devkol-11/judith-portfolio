import Image from "next/image";
import { Play } from "lucide-react";
import type { Video } from "@/content/site";
import { cn } from "@/lib/cn";
import { BrandIcon } from "./BrandIcon";

const platformLabel = { youtube: "YouTube", instagram: "Instagram" } as const;
const radii = ["rounded-wobble-a", "rounded-wobble-b", "rounded-wobble-c"];
const tilts = ["-1deg", "1.2deg", "-0.6deg", "0.8deg"];

export function WorkCard({ video, index }: { video: Video; index: number }) {
  const label = platformLabel[video.platform];
  const hasLink = video.url !== "";

  const body = (
    <>
      <div
        className={cn(
          "relative overflow-hidden rounded-wobble-b border-2 border-ink bg-blush",
          video.platform === "youtube" ? "aspect-video" : "aspect-[4/5]",
        )}
      >
        {video.thumbnail ? (
          <Image
            src={video.thumbnail}
            alt=""
            fill
            sizes="(min-width: 1024px) 22rem, (min-width: 768px) 45vw, 90vw"
            className="object-cover transition-transform duration-300 ease-(--ease-out) group-hover:scale-[1.04]"
          />
        ) : (
          <p className="font-hand text-sepia absolute inset-x-0 bottom-3 text-center text-xl">Thumbnail coming soon</p>
        )}

        <span className="bg-navy text-paper absolute top-1/2 left-1/2 grid size-14 -translate-1/2 place-items-center rounded-full border-2 border-ink shadow-sticker-sm transition-transform duration-200 ease-(--ease-out) group-hover:scale-110 group-hover:-rotate-6">
          <Play size={22} strokeWidth={2} fill="currentColor" aria-hidden="true" />
        </span>

        <span className="button-sticker bg-marigold absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 text-sm font-semibold tracking-[0.01em]">
          <BrandIcon platform={video.platform} className="size-4" />
          {label}
        </span>
      </div>

      <h3 className="font-display text-wine mt-5 text-[1.375rem] leading-[1.2]">{video.title}</h3>
      <p className="mt-2">{video.description}</p>
      <p className="text-sepia mt-3 text-sm font-semibold tracking-[0.01em]">
        {hasLink ? video.meta : "Link coming soon"}
      </p>
    </>
  );

  const shell = cn("group sticker sticker-lift bg-paper block p-4 pb-6 sm:p-5 sm:pb-7", radii[index % radii.length]);
  const tilt = { "--tilt": tilts[index % tilts.length] } as React.CSSProperties;

  if (!hasLink) {
    return (
      <article className={shell} style={tilt}>
        {body}
      </article>
    );
  }

  return (
    <article>
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch on ${label}: ${video.title}`}
        className={cn(shell, "sticker-press")}
        style={tilt}
      >
        {body}
      </a>
    </article>
  );
}
