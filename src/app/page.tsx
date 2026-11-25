import { ArrowUp, Mail } from "lucide-react";
import { siInstagram } from "simple-icons";
import { Fragment } from "react";
import { BrandMarquee } from "@/components/BrandMarquee";
import { HeroName } from "@/components/HeroName";
import { WorkSection } from "@/components/WorkSection";
import { WaterBackground } from "@/components/WaterBackground";
import { brands, contact, profile, reels, type Brand } from "@/content/site";

const order = (i: number) => ({ "--i": i }) as React.CSSProperties;

// Each word rises from behind its own baseline, one after another.
// `start` offsets the stagger so separate lines continue the same flow;
// `step` is the gap between words (smaller for long sentences).
function FlowText({
  text,
  start,
  step = 0.5,
  emphasis,
}: {
  text: string;
  start: number;
  step?: number;
  /** Words to set in pink italic, e.g. "stop scrolling." */
  emphasis?: string;
}) {
  const words = text.split(" ");
  const em = emphasis ? emphasis.split(" ") : [];
  const emStart = em.length ? words.findIndex((_, i) => em.every((w, k) => words[i + k] === w)) : -1;
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <Fragment key={i}>
            <span className="flow-mask">
              <span
                className={
                  emStart >= 0 && i >= emStart && i < emStart + em.length
                    ? "flow-word font-playfair text-[1.08em] tracking-[-0.01em] text-[#e0307d] italic"
                    : "flow-word"
                }
                style={{ "--w": start + i * step } as React.CSSProperties}
              >
                {word}
              </span>
            </span>
            {i < words.length - 1 && " "}
          </Fragment>
        ))}
      </span>
    </>
  );
}

export default function Home() {
  const instagram = contact.socials.find((s) => s.label === "Instagram");
  const featured: Brand[] = Object.values(brands).filter((b: Brand) => b.featured && b.logo);
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <>
      {/* Transparent over the water; turns frosted once the hero has scrolled away */}
      <header className="nav-glass fixed inset-x-0 top-0 z-20">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-end px-6 text-sm">
          <nav aria-label="Site" className="flex items-center gap-7">
            <a href="#work" className="text-ink/75 hover:text-ink transition-colors">
              Work
            </a>
            <a
              href="#contact"
              className="bg-pop text-ink rounded-full px-4 py-1.5 font-medium transition-transform duration-150 active:scale-[0.97]"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero: full screen, water light behind (also under the top bar); her name bounces and twirls in */}
        <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-[linear-gradient(180deg,#eef6fd_0%,#ffffff_85%)] pt-14">
          <WaterBackground />

          <div className="hero-exit mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-16 text-center">
            <p className="text-mute text-xl md:text-2xl">
              <FlowText text="Welcome, I’m" start={0} />
            </p>
            <HeroName first={firstName} last={lastName} />
            <p className="text-ink mt-9 max-w-[22ch] text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.25] font-medium tracking-[-0.025em] text-balance">
              <FlowText text={profile.headline} emphasis={profile.headlineEmphasis} start={9} step={0.22} />
            </p>
            <p className="fade-in text-mute mt-5 max-w-md text-base md:text-lg" style={order(15)}>
              {profile.intro}
            </p>
          </div>

          <a
            href="#brands-heading"
            className="fade-in text-mute hover:text-ink mx-auto mb-8 flex flex-col items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors"
            style={order(17)}
          >
            Scroll
            <span className="scroll-cue bg-ink/15 relative h-10 w-px overflow-hidden" aria-hidden="true" />
          </a>
        </section>

        <BrandMarquee
          brands={featured}
          stats={[
            { value: String(featured.length), label: "brands" },
            { value: String(reels.length), label: "featured reels" },
            ...(instagram ? [{ value: instagram.followers, label: "Instagram followers" }] : []),
          ]}
        />

        {/* Work */}
        <WorkSection reels={reels} />

        {/* Closing scene: pink water behind the invitation and the footer */}
        {/* darker grey here keeps small text readable on the pink (4.9:1) */}
        <div className="relative isolate overflow-hidden [--color-mute:#5e5e63]">
          <WaterBackground tint="pink" fade="top" />

          <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-14">
            <div className="reveal mx-auto flex max-w-4xl flex-col items-center px-6 pt-40 pb-28 text-center md:pt-52 md:pb-36">
              <p className="inline-flex items-center gap-2.5 rounded-full bg-white/70 px-4 py-1.5 text-sm font-medium shadow-sm ring-1 ring-black/5 backdrop-blur">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="bg-pop absolute inline-flex size-full animate-ping rounded-full opacity-70 motion-reduce:animate-none" />
                  <span className="bg-pop relative inline-flex size-2 rounded-full" />
                </span>
                {contact.availability}
              </p>

              <h2
                id="contact-heading"
                className="mt-7 text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] font-semibold tracking-[-0.045em]"
              >
                Let&rsquo;s create something{" "}
                <span className="font-playfair tracking-[-0.02em] text-[#e0307d] italic" style={{ fontWeight: 600 }}>
                  beautiful.
                </span>
              </h2>
              <p className="text-mute mx-auto mt-6 max-w-lg text-lg md:text-xl">
                Tell me about your brand, the story you want to tell and your timeline.
              </p>

              <div className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
                <a
                  href={`mailto:${contact.email}`}
                  className="bg-pop text-ink inline-flex items-center gap-2.5 rounded-full px-6 py-4 text-base font-semibold shadow-[0_16px_40px_-14px_rgb(255_95_162/0.9)] transition-transform duration-150 hover:-translate-y-0.5 active:scale-[0.97] sm:px-7 sm:text-lg"
                >
                  <Mail size={20} strokeWidth={2} aria-hidden="true" />
                  {contact.email}
                </a>
                {instagram && (
                  <a
                    href={instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full bg-white/80 py-2 pr-6 pl-2 shadow-[0_8px_24px_-12px_rgb(29_29_31/0.3)] ring-1 ring-black/5 backdrop-blur transition-[translate,box-shadow] duration-200 hover:-translate-y-0.5 hover:ring-pop"
                  >
                    <span className="grid size-10 place-items-center rounded-full bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)] text-white">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-[18px]">
                        <path d={siInstagram.path} />
                      </svg>
                    </span>
                    <span className="text-left leading-tight">
                      <span className="block font-semibold">{instagram.handle}</span>
                      <span className="text-mute block text-xs">{instagram.followers} followers on Instagram</span>
                    </span>
                  </a>
                )}
              </div>
            </div>
          </section>

          <footer className="border-t border-white/70 bg-white/55 backdrop-blur-md">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
              <div>
                <p className="text-2xl font-semibold tracking-[-0.03em]">
                  {firstName}{" "}
                  <span className="font-playfair tracking-[-0.01em] text-[#e0307d] italic" style={{ fontWeight: 600 }}>
                    {lastName}
                  </span>
                </p>
                <p className="text-mute mt-2 max-w-xs text-sm leading-relaxed">
                  {profile.role}, telling short-form stories for brands people love.
                </p>
              </div>

              <nav aria-label="Footer">
                <p className="text-mute text-xs font-medium tracking-[0.14em] uppercase">Explore</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {[
                    ["Brands", "#brands"],
                    ["Selected work", "#work"],
                    ["Contact", "#contact"],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-accent transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <p className="text-mute text-xs font-medium tracking-[0.14em] uppercase">Say hello</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  <li>
                    <a href={`mailto:${contact.email}`} className="hover:text-accent transition-colors">
                      {contact.email}
                    </a>
                  </li>
                  {instagram && (
                    <li>
                      <a
                        href={instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                      >
                        Instagram {instagram.handle}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <div className="border-t border-black/5">
              <div className="text-mute mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs">
                <span>
                  © 2026 {profile.name} <span className="text-pop">&#10022;</span> Made with care
                </span>
                <a href="#top" className="group hover:text-ink inline-flex items-center gap-1.5 transition-colors">
                  Back to top
                  <ArrowUp
                    size={14}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
