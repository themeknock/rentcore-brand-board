"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#3E8C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10l10-7 10 7v11a2 2 0 01-2 2H6a2 2 0 01-2-2V10z" />
        <polyline points="10 28 10 16 18 16 18 28" />
      </svg>
    ),
    title: "Faster Leasing",
    body: "Average 12-day placement. Professional marketing, thorough screening, and quick turnaround to minimize vacancy.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#3E8C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Strong Tenant Placement",
    body: "Background checks, credit verification, employment and rental history. We find tenants who pay on time and take care of your property.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#3E8C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H9l-4 4V5a2 2 0 012-2h12a2 2 0 012 2v10z" />
      </svg>
    ),
    title: "Consistent Communication",
    body: "When you call, you reach Dale — the licensed broker who actually manages your investment. Not a helpdesk. Not a call center.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#3E8C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Long-Term Asset Protection",
    body: "We don't just manage properties — we improve them. Proactive maintenance, regular inspections, and strategic upgrades to protect your investment.",
  },
];

export default function FeaturesV8() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".feat8-item", {
      scrollTrigger: { trigger: ref.current, start: "top 78%" },
      y: 30, opacity: 0, duration: 0.7, stagger: 0.12,
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <h2
          className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[38px] font-extrabold tracking-tight uppercase mb-16 text-center"
          style={{ color: "#0B2545" }}
        >
          What Sets Us Apart
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {FEATURES.map((f) => (
            <div key={f.title} className="feat8-item flex items-start gap-5">
              <div className="shrink-0 mt-1">{f.icon}</div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[16px] uppercase tracking-wide mb-2" style={{ color: "#0B2545" }}>
                  {f.title}
                </h3>
                <p className="text-[14px] leading-[1.8]" style={{ color: "#4A4A4A" }}>
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
