import type { Brand } from "@/content/site";

function Row({ brands, reverse }: { brands: Brand[]; reverse?: boolean }) {
  const chip = (brand: Brand, key: string, hidden?: boolean) => (
    <li key={key} aria-hidden={hidden || undefined} className="shrink-0 px-2">
      <span className="group flex items-center gap-3 rounded-full bg-white/80 py-2 pr-6 pl-2 shadow-[0_8px_30px_-14px_rgb(29_29_31/0.25)] ring-1 ring-black/5 backdrop-blur-md transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgb(255_95_162/0.6)] hover:ring-pop">
        {/* eslint-disable-next-line @next/next/no-img-element -- small static logo */}
        <img
          src={brand.logo}
          alt=""
          width={48}
          height={48}
          loading="lazy"
          className="size-11 rounded-full bg-white object-cover ring-1 ring-black/5 md:size-12"
        />
        <span className="text-sm font-medium whitespace-nowrap md:text-[0.95rem]">{brand.name}</span>
      </span>
    </li>
  );

  return (
    <div className="marquee-row overflow-hidden">
      {/* Four copies; the track slides by half its width, so the loop is seamless
          even on wide screens. Only the first copy is read by screen readers. */}
      <ul className={`marquee-track flex w-max py-3 ${reverse ? "marquee-reverse" : ""}`}>
        {[0, 1, 2, 3].flatMap((copy) => brands.map((b) => chip(b, `${b.name}-${copy}`, copy > 0)))}
      </ul>
    </div>
  );
}

type Stat = { value: string; label: string };

// Brands she has worked with: a pink headline, quick facts, and two rows of
// frosted logo chips gliding in opposite directions (paused on hover).
export function BrandMarquee({ brands, stats }: { brands: Brand[]; stats: Stat[] }) {
  const half = Math.ceil(brands.length / 2);
  return (
    <section id="brands" aria-labelledby="brands-heading" className="relative isolate scroll-mt-14 overflow-hidden bg-white py-24 md:py-36">
      {/* soft pink and pool-blue glows, echoing the hero water and the accent */}
      <span
        aria-hidden="true"
        className="absolute -top-40 -left-40 -z-10 size-[36rem] rounded-full bg-[radial-gradient(circle,rgb(255_95_162/0.16),transparent_65%)]"
      />
      <span
        aria-hidden="true"
        className="absolute -right-48 bottom-0 -z-10 size-[40rem] rounded-full bg-[radial-gradient(circle,rgb(120_180_240/0.18),transparent_65%)]"
      />

      <div className="reveal mx-auto max-w-4xl px-6 text-center">
        <p className="text-accent text-sm font-semibold tracking-wide">
          <span className="text-pop">&#10022;</span> {brands.length} brands and counting{" "}
          <span className="text-pop">&#10022;</span>
        </p>
        <h2
          id="brands-heading"
          className="mt-4 text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-[#e0307d]"
        >
          Brands I&rsquo;ve{" "}
          <span className="font-playfair tracking-[-0.02em] italic" style={{ fontWeight: 600 }}>
            created with.
          </span>
        </h2>
        <p className="text-mute mx-auto mt-5 max-w-lg text-lg md:text-xl">
          From global names to homegrown favourites, every story told with care.
        </p>

        <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-3 divide-x divide-black/8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse px-3">
              <dt className="text-mute mt-2 text-xs md:text-sm">{s.label}</dt>
              <dd className="text-[clamp(1.75rem,4vw,2.75rem)] leading-none font-semibold tracking-[-0.04em] tabular-nums">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="marquee mt-16 flex flex-col gap-3 md:mt-20">
        <Row brands={brands.slice(0, half)} />
        <Row brands={brands.slice(half)} reverse />
      </div>
    </section>
  );
}
