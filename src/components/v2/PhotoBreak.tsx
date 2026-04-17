"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function PhotoBreak() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const img = ref.current?.querySelector(".pb-img");
    if (!img) return;

    gsap.fromTo(img,
      { y: "-15%" },
      {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, { scope: ref });

  return (
    <section ref={ref} className="relative h-[300px] lg:h-[400px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&h=800&fit=crop&q=80"
        alt="Arizona property"
        className="pb-img absolute inset-0 w-full h-[140%] object-cover will-change-transform"
        style={{ top: "-20%" }}
        loading="lazy"
      />
      <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.25)" }} />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-[11px] lg:text-[12px] font-semibold tracking-[0.25em] uppercase text-white" style={{ opacity: 0.6 }}>
          Trusted by Phoenix & Tucson property investors
        </p>
      </div>
    </section>
  );
}
