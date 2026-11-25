"use client";

import { useState } from "react";
import type { Reel } from "@/content/site";
import { ReelCard } from "./ReelCard";
import { ReelPlayer } from "./ReelPlayer";

// Selected work: a staggered grid of 9:16 reel posters and a player window
// that opens on click.
export function WorkSection({ reels }: { reels: Reel[] }) {
  const [open, setOpen] = useState<Reel | null>(null);

  return (
    <section id="work" aria-labelledby="work-heading" className="band-in bg-mist scroll-mt-14">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
        <div className="reveal mx-auto max-w-2xl text-center">
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

        <ul className="mt-16 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {reels.map((reel, i) => (
            <li key={reel.url} className="reel-in lg:even:translate-y-14" style={{ "--i": i } as React.CSSProperties}>
              <ReelCard reel={reel} priority={i < 4} onOpen={() => setOpen(reel)} />
            </li>
          ))}
        </ul>
      </div>

      <ReelPlayer reel={open} onClose={() => setOpen(null)} />
    </section>
  );
}
