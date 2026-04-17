"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitReveal from "../SplitReveal";

gsap.registerPlugin(ScrollTrigger);

export default function WhyV5() {
  const ref = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const s = ref.current;
    const img = imgRef.current;
    if (!s || !img) return;
    gsap.to(img, { yPercent: -10, ease: "none", scrollTrigger: { trigger: s, start: "top bottom", end: "bottom top", scrub: true } });
  }, { scope: ref });

  return (
    <section ref={ref} id="why" className="py-32 lg:py-44 relative overflow-hidden" style={{ background: "var(--c-bg2)" }}>
      {/* Decorative quarter-circle — bottom right */}
      <svg className="absolute bottom-0 right-0 w-[180px] h-[180px] lg:w-[280px] lg:h-[280px]" viewBox="0 0 280 280" fill="none">
        <path d="M280 280C280 125.36 154.64 0 0 0L0 280L280 280Z" fill="var(--c-sage)" fillOpacity="0.04" />
        <path d="M280 280C280 125.36 154.64 0 0 0" stroke="var(--c-sage)" strokeOpacity="0.07" strokeWidth="1.5" />
      </svg>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image with parallax */}
          <div className="relative rounded-[28px] overflow-hidden h-[320px] lg:h-[460px]" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <div ref={imgRef} className="absolute inset-0 scale-[1.15]">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop" alt="Phoenix investment property" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--c-bg2) 0%, transparent 50%)" }} />
          </div>

          {/* Narrative */}
          <div>
            <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: "var(--c-sage)" }}>Why Rent Core</span>

            <SplitReveal>
              <span className="block font-[family-name:var(--font-heading)] text-[32px] lg:text-[44px] font-extrabold leading-[1.08] tracking-tight" style={{ color: "var(--c-head)" }}>
                You Won&apos;t Get
              </span>
              <span className="block font-[family-name:var(--font-heading)] text-[32px] lg:text-[44px] font-extrabold leading-[1.08] tracking-tight gradient-text">
                Lost Here.
              </span>
            </SplitReveal>

            <div className="mt-8 space-y-5">
              <p className="text-[17px] leading-[1.8]" style={{ color: "var(--c-body)" }}>
                We&apos;re not a 500-door operation where your property is just another line item. When you call, you reach Dale &mdash; the licensed broker who actually manages your investment. Not a helpdesk. Not a call center.
              </p>
              <p className="text-[17px] leading-[1.8]" style={{ color: "var(--c-body)" }}>
                Most of our clients started by managing their own properties. Over time, the calls, coordination, and constant oversight became more than expected. We make the transition simple &mdash; taking over the daily work while keeping you fully informed and in control.
              </p>
            </div>

            {/* Differentiators */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Direct communication with decision makers",
                "Focused, boutique-level service",
                "Rentec-powered professional systems",
                "Ownership-minded approach",
              ].map((d) => (
                <div key={d} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "var(--c-sage)" }} />
                  <p className="text-[14px] leading-snug font-medium" style={{ color: "var(--c-head)" }}>{d}</p>
                </div>
              ))}
            </div>

            {/* Outlined pill CTA (Pure PM style) */}
            <a
              href="#services"
              className="inline-flex items-center px-7 py-3.5 mt-10 text-[14px] font-bold rounded-full transition-all hover:-translate-y-0.5"
              style={{ color: "var(--c-sage)", border: "1.5px solid var(--c-sage)" }}
            >
              Property Management Services
            </a>
          </div>
        </div>
      </div>

      {/* Dotted connector line (Pure PM pattern) */}
      <div className="hidden lg:flex items-center justify-center mt-20">
        <svg width="2" height="80" viewBox="0 0 2 80" fill="none">
          <line x1="1" y1="0" x2="1" y2="80" stroke="var(--c-sage)" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 6" />
        </svg>
      </div>
    </section>
  );
}
