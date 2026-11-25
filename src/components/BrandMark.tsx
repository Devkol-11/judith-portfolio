import type { Brand } from "@/content/site";
import { cn } from "@/lib/cn";

// A brand as a round badge: its logo when one exists, otherwise its initials.
export function BrandMark({ brand, className }: { brand: Brand; className?: string }) {
  if (brand.logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- small static logo
      <img
        src={brand.logo}
        alt={brand.name}
        title={brand.name}
        width={56}
        height={56}
        className={cn("size-14 rounded-full bg-white object-cover ring-1 ring-black/5", className)}
      />
    );
  }
  const initials = brand.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return (
    <span
      title={brand.name}
      className={cn(
        "bg-pop/15 text-accent grid size-14 place-items-center rounded-full text-sm font-semibold ring-1 ring-black/5",
        className,
      )}
    >
      <span aria-hidden="true">{initials}</span>
      <span className="sr-only">{brand.name}</span>
    </span>
  );
}
