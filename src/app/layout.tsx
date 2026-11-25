import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "lenis/dist/lenis.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { profile } from "@/content/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

// Elegant italic used only for "Urevbu" in the hero
const playfair = Playfair_Display({
  variable: "--font-playfair-src",
  subsets: ["latin"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.intro,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-dvh">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
