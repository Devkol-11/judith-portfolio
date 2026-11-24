import type { Metadata } from "next";
import { Caprasimo, Caveat, Nunito } from "next/font/google";
import { profile } from "@/content/site";
import "./globals.css";

const caprasimo = Caprasimo({
  variable: "--font-caprasimo",
  weight: "400",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: `${profile.name} is a video editor. See her work on YouTube and Instagram and get in touch.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${caprasimo.variable} ${nunito.variable} ${caveat.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
