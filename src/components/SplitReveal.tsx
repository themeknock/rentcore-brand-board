"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Premium heading reveal — each direct child slides up from behind a mask.
 * Wrap each visual line in a <span style={{display:'block'}}> for line-by-line stagger.
 * Or pass a single child for a simple masked slide-up.
 */
export default function SplitReveal({
  children,
  className = "",
  stagger = 0.13,
  distance = 60,
  duration = 1,
  start = "top 88%",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  distance?: number;
  duration?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.children.length > 1 ? el.children : [el];

    gsap.from(targets, {
      y: distance,
      opacity: 0,
      duration,
      stagger,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: el,
        start,
        once: true,
      },
    });
  }, { scope: ref });

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      {children}
    </div>
  );
}
