import { videos } from "@/content/site";
import { WorkCard } from "./WorkCard";

export function WorkGrid() {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-8">
      <h2
        id="work-heading"
        style={{ "--tilt": "-1.5deg" } as React.CSSProperties}
        className="reveal-heading sticker rounded-wobble-pill bg-paper font-display text-wine inline-block px-7 py-3 text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1] tracking-[-0.01em]"
      >
        Her work
      </h2>

      <div className="mt-10 columns-1 gap-8 md:columns-2 lg:columns-3">
        {videos.map((video, i) => (
          <div key={i} className="reveal-card mb-10 break-inside-avoid">
            <WorkCard video={video} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
