"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import type { Reel } from "@/content/site";
import { cn } from "@/lib/cn";
import { ReelCard } from "./ReelCard";
import { ReelPlayer } from "./ReelPlayer";

const PER_PAGE = 8;

// Selected work: a staggered grid of 9:16 reel posters, 8 per page, and a
// player window that opens on click.
export function WorkSection({ reels }: { reels: Reel[] }) {
  const [open, setOpen] = useState<Reel | null>(null);
  const [page, setPage] = useState(0);
  const headingRef = useRef<HTMLDivElement>(null);
  const pages = Math.ceil(reels.length / PER_PAGE);
  const shown = reels.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  function goTo(next: number) {
    if (next < 0 || next >= pages || next === page) return;
    setPage(next);
    // glide back to the start of the section (scroll-margin keeps it clear of the top bar)
    headingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="work" aria-labelledby="work-heading" className="band-in bg-mist scroll-mt-14">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
        <div ref={headingRef} className="reveal mx-auto max-w-2xl scroll-mt-24 text-center">
          <h2 id="work-heading" className="text-[clamp(2.75rem,6vw,4.75rem)] leading-none font-semibold tracking-[-0.045em]">
            Selected{" "}
            <span className="font-playfair text-[#e0307d] italic" style={{ fontWeight: 600 }}>
              work.
            </span>
          </h2>
          <p className="text-mute mx-auto mt-5 max-w-md text-lg">
            Short-form stories for brands, shot and edited from first frame to final cut. Tap any reel to watch.
          </p>
        </div>

        <ul key={page} className="mt-16 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {shown.map((reel, i) => (
            <li key={reel.url} className="reel-in lg:even:translate-y-14" style={{ "--i": i } as React.CSSProperties}>
              <ReelCard reel={reel} priority={page === 0 && i < 4} onOpen={() => setOpen(reel)} />
            </li>
          ))}
        </ul>

        {pages > 1 && (
          <nav aria-label="Work pages" className="mt-16 flex items-center justify-center gap-2 lg:mt-28">
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              disabled={page === 0}
              aria-label="Previous page"
              className="grid size-11 cursor-pointer place-items-center rounded-full bg-white ring-1 ring-black/5 transition-opacity hover:ring-black/15 disabled:cursor-default disabled:opacity-35"
            >
              <ChevronLeft size={18} strokeWidth={2} aria-hidden="true" />
            </button>
            {Array.from({ length: pages }, (_, n) => (
              <button
                key={n}
                type="button"
                onClick={() => goTo(n)}
                aria-label={`Page ${n + 1}`}
                aria-current={n === page ? "page" : undefined}
                className={cn(
                  "size-11 cursor-pointer rounded-full text-sm font-semibold tabular-nums transition-[background-color,color,box-shadow] duration-200",
                  n === page
                    ? "bg-pop text-ink shadow-[0_10px_24px_-10px_rgb(255_95_162/0.9)]"
                    : "text-ink/70 hover:text-ink bg-white ring-1 ring-black/5 hover:ring-black/15",
                )}
              >
                {n + 1}
              </button>
            ))}
            <button
              type="button"
              onClick={() => goTo(page + 1)}
              disabled={page === pages - 1}
              aria-label="Next page"
              className="grid size-11 cursor-pointer place-items-center rounded-full bg-white ring-1 ring-black/5 transition-opacity hover:ring-black/15 disabled:cursor-default disabled:opacity-35"
            >
              <ChevronRight size={18} strokeWidth={2} aria-hidden="true" />
            </button>
          </nav>
        )}
      </div>

      <ReelPlayer reel={open} onClose={() => setOpen(null)} />
    </section>
  );
}
