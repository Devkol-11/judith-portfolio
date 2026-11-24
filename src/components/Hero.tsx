import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { profile } from "@/content/site";

export function Hero() {
  return (
    <div className="enter-drop">
      <section
        aria-labelledby="hero-name"
        style={{ "--tilt": "-0.6deg" } as React.CSSProperties}
        className="hero-exit sticker rounded-wobble-a bg-clay shadow-sticker-lg grid items-center gap-10 px-6 py-10 sm:px-10 sm:py-12 md:grid-cols-[1.25fr_1fr] lg:px-14"
      >
        <div className="order-2 md:order-1">
          <h1
            id="hero-name"
            className="font-display text-wine text-[clamp(2.75rem,7vw,5rem)] leading-[1.05] tracking-[-0.015em]"
          >
            {profile.name}
          </h1>
          <p className="mt-5 max-w-[46ch] text-[1.1875rem] leading-[1.55]">
            <strong className="font-extrabold">{profile.role}.</strong> {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="button-sticker bg-marigold px-6 py-3 font-extrabold">
              Hire me
            </a>
            <a href="#work" className="group link-ink inline-flex items-center gap-1.5 font-bold">
              See her work
              <ArrowDown
                size={18}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-200 ease-(--ease-out) group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>

        <div className="order-1 flex flex-col items-center md:order-2">
          <div
            style={{ "--tilt": "2deg" } as React.CSSProperties}
            className="sticker sticker-lift rounded-wobble-b bg-paper relative aspect-[4/5] w-full max-w-[18rem] overflow-hidden"
          >
            {profile.photo ? (
              <Image src={profile.photo} alt={`Portrait of ${profile.name}`} fill sizes="18rem" className="object-cover" priority />
            ) : (
              <div className="grid h-full place-items-center p-6 text-center">
                <p className="font-hand text-sepia text-2xl leading-tight">Her photo goes here</p>
              </div>
            )}
          </div>
          <p className="font-hand text-navy mt-4 -rotate-3 text-2xl">{profile.photoNote}</p>
        </div>
      </section>
    </div>
  );
}
