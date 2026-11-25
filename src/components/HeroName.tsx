import type { CSSProperties } from "react";

const at = (i: number) => ({ "--i": i }) as CSSProperties;

// Four-point sparkle
function Sparkle({ className, style }: { className: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`sparkle absolute ${className}`} style={style}>
      <path d="M12 0c.9 6.4 4.6 10.6 12 12-7.4 1.4-11.1 5.6-12 12-.9-6.4-4.6-10.6-12-12C7.4 10.6 11.1 6.4 12 0Z" />
    </svg>
  );
}

// "Judith" bounces in letter by letter; "Urevbu" twirls in as pink italic with a
// shimmer, a hand-drawn flourish underneath and sparkles around the name.
// All CSS; screen readers get the plain name.
export function HeroName({ first, last }: { first: string; last: string }) {
  return (
    <h1 className="hero-name relative mt-1 text-[clamp(3.5rem,10vw,8.5rem)] leading-[1.05] font-semibold tracking-[-0.045em]">
      <span className="sr-only">
        {first} {last}
      </span>
      <span aria-hidden="true" className="relative inline-block">
        <span className="inline-block whitespace-nowrap">
          {[...first].map((ch, i) => (
            <span key={i} className="bounce-letter inline-block" style={at(i)}>
              {ch}
            </span>
          ))}
        </span>{" "}
        <span className="relative inline-block pr-[0.08em] whitespace-nowrap">
          <span className="font-playfair text-[1.08em] font-semibold tracking-[-0.02em] italic">
            {[...last].map((ch, i) => (
              <span key={i} className="twirl-letter inline-block" style={at(i)}>
                {ch}
              </span>
            ))}
          </span>
          {/* hand-drawn flourish under the surname */}
          <svg
            viewBox="0 0 320 40"
            preserveAspectRatio="none"
            className="swash absolute -bottom-[0.08em] left-[2%] h-[0.28em] w-[96%] overflow-visible"
          >
            <path d="M4 26C58 6 112 34 168 18S262 2 316 20" />
          </svg>
        </span>

        <Sparkle className="-top-[0.12em] -left-[0.28em] size-[0.26em]" style={at(0)} />
        <Sparkle className="top-[0.02em] -right-[0.3em] size-[0.34em]" style={at(1)} />
        <Sparkle className="-right-[0.1em] bottom-[0.18em] size-[0.18em]" style={at(2)} />
        <Sparkle className="top-[0.08em] left-[46%] size-[0.14em]" style={at(3)} />
        <Sparkle className="-bottom-[0.18em] left-[12%] size-[0.16em]" style={at(4)} />
      </span>
    </h1>
  );
}
