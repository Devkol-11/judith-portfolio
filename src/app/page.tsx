import { ContactPanel } from "@/components/ContactPanel";
import { Hero } from "@/components/Hero";
import { WorkGrid } from "@/components/WorkGrid";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-8 sm:px-6 md:gap-20 md:py-14">
      <Hero />
      <WorkGrid />
      <ContactPanel />
    </main>
  );
}
