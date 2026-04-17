"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmileyCloud from "./SmileyCloud";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  {
    visual: "shield",
    value: "Licensed",
    line1: "Arizona Broker",
    line2: "BR548311000",
  },
  {
    visual: "stars",
    value: "4.9 / 5",
    line1: "120+ Google Reviews",
    line2: "5-Star Average",
  },
  {
    visual: "map",
    value: "15+",
    line1: "Years in Phoenix",
    line2: "& Tucson Markets",
  },
  {
    visual: "boutique",
    value: "Boutique",
    line1: "Not a 500-Door",
    line2: "Operation",
  },
];

function AwardVisual({ type }: { type: string }) {
  switch (type) {
    case "shield":
      return (
        <div className="w-[100px] h-[80px] rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(255,255,255,0.06)" }}>
          <svg viewBox="0 0 48 56" fill="none" className="w-12 h-14">
            <path d="M24 2L4 12V26C4 40 24 54 24 54S44 40 44 26V12L24 2Z" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5" />
            <path d="M17 28l5 5 9-9" stroke="#049DD9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "stars":
      return (
        <div className="flex gap-1 mb-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#F59E0B" />
            </svg>
          ))}
        </div>
      );
    case "map":
      return (
        <div className="w-[100px] h-[80px] mb-4 flex items-center justify-center">
          {/* Arizona state outline */}
          <svg viewBox="0 0 80 100" fill="none" className="w-16 h-20">
            <path
              d="M10 5 L70 5 L75 15 L78 35 L75 55 L70 75 L60 90 L45 98 L30 95 L18 85 L10 70 L8 50 L10 30 Z"
              fill="#049DD9"
              fillOpacity="0.3"
              stroke="white"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
            {/* Phoenix dot */}
            <circle cx="35" cy="38" r="4" fill="white" fillOpacity="0.9" />
            <circle cx="35" cy="38" r="7" fill="white" fillOpacity="0.2" />
            {/* Tucson dot */}
            <circle cx="38" cy="68" r="3" fill="white" fillOpacity="0.7" />
            <circle cx="38" cy="68" r="5.5" fill="white" fillOpacity="0.15" />
          </svg>
        </div>
      );
    case "boutique":
      return (
        <div className="w-[100px] h-[80px] rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(255,255,255,0.06)" }}>
          <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
            <circle cx="24" cy="18" r="8" stroke="white" strokeWidth="1.5" />
            <path d="M10 42c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M32 18c3.314 0 6 2.686 6 6" stroke="#049DD9" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );
    default:
      return null;
  }
}

export default function AwardsV7() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".award7-stat", {
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#0B2545" }}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* Smiley cloud — Pure PM signature element */}
      <div className="flex justify-center mb-12 relative">
        <SmileyCloud className="" size={60} />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((s) => (
            <div key={s.value} className="award7-stat text-center flex flex-col items-center">
              <AwardVisual type={s.visual} />
              <p className="font-[family-name:var(--font-heading)] font-extrabold text-[28px] lg:text-[34px] text-white mb-1">
                {s.value}
              </p>
              <p className="text-[13px] text-white/50 font-medium">{s.line1}</p>
              <p className="text-[12px] text-white/35">{s.line2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
