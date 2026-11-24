import { Mail } from "lucide-react";
import { contact } from "@/content/site";
import { BrandIcon } from "./BrandIcon";

export function ContactPanel() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{ "--tilt": "0.5deg" } as React.CSSProperties}
      className="reveal-panel sticker rounded-wobble-c bg-wine text-paper shadow-sticker-lg scroll-mt-8 px-6 py-10 sm:px-12 sm:py-14"
    >
      <h2
        id="contact-heading"
        className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1] tracking-[-0.01em]"
      >
        {contact.heading}
      </h2>
      <p className="mt-4 max-w-[60ch]">{contact.blurb}</p>

      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4 font-bold">
        <li className="inline-flex items-center gap-2">
          <Mail size={20} strokeWidth={2} aria-hidden="true" className="text-marigold" />
          {contact.email ? (
            <a href={`mailto:${contact.email}`} className="link-ink text-marigold">
              {contact.email}
            </a>
          ) : (
            <span>Email coming soon</span>
          )}
        </li>
        {contact.socials.map((social) => (
          <li key={social.platform} className="group inline-flex items-center gap-2">
            <BrandIcon
              platform={social.platform}
              className="text-marigold size-5 transition-transform duration-200 ease-(--ease-out) group-hover:-rotate-12 group-hover:scale-110"
            />
            {social.url ? (
              <a href={social.url} target="_blank" rel="noopener noreferrer" className="link-ink text-marigold">
                {social.label}
              </a>
            ) : (
              <span>{social.label} coming soon</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
