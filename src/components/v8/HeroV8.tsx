"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroV8() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".h8-head", { y: 40, opacity: 0, duration: 1 })
      .from(".h8-sub", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".h8-cta", { y: 20, opacity: 0, duration: 0.7 }, "-=0.4");
  }, { scope: ref });

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop&q=85"
          alt="Arizona desert landscape"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.5))" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-[800px]">
        <h1 className="h8-head font-[family-name:var(--font-heading)] text-[40px] sm:text-[52px] lg:text-[64px] font-extrabold tracking-[0.04em] uppercase text-white leading-[1.1] mb-6">
          Welcome to<br />Rent Core.
        </h1>
        <p className="h8-sub text-[16px] lg:text-[18px] leading-relaxed text-white/70 max-w-[520px] mx-auto mb-10">
          Where expert-level property management meets investor-focused service.
          Let us show you how easy managing your assets can actually be.
        </p>
        <a
          href="#services"
          className="h8-cta inline-flex items-center px-8 py-4 text-[14px] font-bold tracking-wide uppercase rounded-sm transition-all hover:-translate-y-0.5"
          style={{ background: "#C4784A", color: "#FFFFFF" }}
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
