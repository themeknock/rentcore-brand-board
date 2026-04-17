"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 800,
  stagger = false,
  staggerDelay = 100,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  stagger?: boolean;
  staggerDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const fromVars: Record<string, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    if (stagger) {
      gsap.from(el.children, {
        ...fromVars[direction],
        opacity: 0,
        duration: duration / 1000,
        delay: delay / 1000,
        stagger: staggerDelay / 1000,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });
    } else {
      gsap.from(el, {
        ...fromVars[direction],
        opacity: 0,
        duration: duration / 1000,
        delay: delay / 1000,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });
    }
  }, { scope: ref });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
