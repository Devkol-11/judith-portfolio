import Image from "next/image";
import type { CSSProperties } from "react";
import { siInstagram } from "simple-icons";

const at = (i: number) => ({ "--i": i }) as CSSProperties;

function Sparkle({ className, style }: { className: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`sparkle absolute ${className}`} style={style}>
      <path d="M12 0c.9 6.4 4.6 10.6 12 12-7.4 1.4-11.1 5.6-12 12-.9-6.4-4.6-10.6-12-12C7.4 10.6 11.1 6.4 12 0Z" />
    </svg>
  );
}

// Her portrait in a circle: a pink glow behind, a thin pink ring around it,
// sparkles, and a small floating Instagram badge. Rises in after her name,
// then drifts gently.
export function HeroPortrait({
  name,
  instagram,
}: {
  name: string;
  instagram?: { handle: string; followers: string; url: string };
}) {
  return (
    <div className="portrait-in relative mx-auto w-[min(68vw,17rem)] md:w-full md:max-w-[22rem] lg:max-w-[25rem]">
      <div className="portrait-float relative">
        {/* glow */}
        <span
          aria-hidden="true"
          className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,rgb(255_95_162/0.35),transparent_68%)] blur-2xl"
        />
        {/* thin pink ring around the circle */}
        <span aria-hidden="true" className="border-pop/50 absolute -inset-3 rounded-full border-[1.5px] md:-inset-4" />
        <div className="relative aspect-square overflow-hidden rounded-full bg-[#d98aa5] shadow-[0_40px_80px_-40px_rgb(224_48_125/0.6)] ring-[6px] ring-white/80">
          <Image
            src="/images/judith-circle.jpg"
            alt={`Portrait of ${name}`}
            fill
            priority
            sizes="(min-width: 1024px) 25rem, (min-width: 768px) 22rem, 68vw"
            className="object-cover"
          />
        </div>

        <Sparkle className="-top-2 -left-6 size-7 md:-left-8 md:size-9" style={at(1)} />
        <Sparkle className="top-1/3 -right-7 size-5 md:-right-9 md:size-6" style={at(3)} />
        <Sparkle className="-bottom-5 right-1/4 size-4" style={at(5)} />

        {instagram && (
          <a
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 -left-4 flex items-center gap-2.5 rounded-full bg-white/85 py-1.5 pr-4 pl-1.5 text-left shadow-[0_16px_40px_-16px_rgb(29_29_31/0.35)] ring-1 ring-black/5 backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5 md:-left-12"
          >
            <span className="grid size-8 place-items-center rounded-full bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)] text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
                <path d={siInstagram.path} />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold">{instagram.followers}</span>
              <span className="text-mute block text-[0.7rem]">followers</span>
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
