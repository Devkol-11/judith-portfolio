"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { brands, type Brand, type Reel } from "@/content/site";
import { instagramEmbed } from "@/lib/video";
import { BrandMark } from "./BrandMark";

// Player window: Instagram's official embed on the left, the story on the
// right. Native <dialog>, so Escape and focus handling come for free; the
// player only loads while open.
export function ReelPlayer({ reel, onClose }: { reel: Reel | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (reel && !dialog.open) {
      dialog.showModal();
      // showModal focuses the first focusable element (Instagram's iframe, where
      // keys belong to Instagram); move focus to Close so Escape works at once
      closeRef.current?.focus();
    }
    if (!reel && dialog.open) dialog.close();
  }, [reel]);

  const brand: Brand | null = reel?.brand ? brands[reel.brand] : null;
  const embed = reel ? instagramEmbed(reel.url) : null;

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-label={reel ? `Playing ${reel.title}` : "Reel player"}
      className="player m-auto max-h-[92dvh] w-[min(94vw,56rem)] max-w-none overflow-hidden bg-white p-0 backdrop:bg-[rgb(20_20_30/0.55)] backdrop:backdrop-blur-md"
    >
      {reel && (
        <div className="grid md:grid-cols-[minmax(0,25rem)_1fr]">
          <div className="bg-mist h-[min(78dvh,44rem)] md:h-[min(86dvh,46rem)]">
            {embed && (
              <iframe
                src={embed}
                title={`${reel.title} on Instagram`}
                allow="autoplay; encrypted-media; picture-in-picture"
                className="h-full w-full"
              />
            )}
          </div>

          <div className="flex flex-col p-7 md:p-10">
            <div className="flex items-center justify-between">
              {brand ? (
                <div className="flex items-center gap-3">
                  {brand.logo && <BrandMark brand={brand} className="size-11" />}
                  <div>
                    <p className="text-mute text-xs">Made with</p>
                    <p className="font-semibold">{brand.name}</p>
                  </div>
                </div>
              ) : (
                <p className="text-mute text-sm">Shot and edited by Judith</p>
              )}
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close player"
                className="hover:bg-mist grid size-10 cursor-pointer place-items-center rounded-full transition-colors"
              >
                <X size={20} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{reel.title}</h3>
            <p className="text-mute mt-4 text-lg leading-relaxed">{reel.description}</p>
            <p className="text-mute mt-6 text-sm">Instagram reel · {reel.year}</p>

            <a
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pop text-ink mt-8 inline-flex w-fit items-center gap-1.5 rounded-full px-6 py-3 font-semibold transition-transform duration-150 active:scale-[0.97] md:mt-auto"
            >
              Open on Instagram
              <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </dialog>
  );
}
