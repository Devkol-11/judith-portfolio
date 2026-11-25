"use client";

import Lenis from "lenis";
import { useEffect } from "react";

// Buttery, inertial page scrolling (Lenis). It moves the real page scroll, so
// the CSS scroll-driven section animations stay in sync. In-page links glide to
// their section (each section's scroll-margin keeps it clear of the 48px top
// bar). Off for reduced motion.
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      lerp: 0.085,
      autoRaf: true,
      anchors: { duration: 1.4 },
    });
    return () => lenis.destroy();
  }, []);

  return null;
}
