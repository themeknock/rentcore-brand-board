"use client";

import { useRef } from "react";
import { Shield, Clock, Home, Scale, ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitReveal from "./SplitReveal";

gsap.registerPlugin(ScrollTrigger);

const GUARANTEES = [
  {
    icon: Clock,
    title: "60-Day Leasing Guarantee",
    desc: "We find a qualified tenant within 60 days — or your first month's management fee is waived. No excuses, no fine print.",
    detail: "Covers marketing, showings, screening, and placement",
    accent: "var(--c-sage)",
  },
  {
    icon: Shield,
    title: "Eviction Protection",
    desc: "If a tenant we placed needs to be evicted, we cover the filing costs. You're protected from day one.",
    detail: "Applies to all tenants placed by Rent Core",
    accent: "var(--c-copr)",
  },
  {
    icon: Home,
    title: "Rent Deposit Guarantee",
    desc: "Tenant breaks their lease early? We find a replacement at no additional leasing fee. Your income stays protected.",
    detail: "Replacement search begins within 48 hours",
    accent: "var(--c-sage)",
  },
  {
    icon: Scale,
    title: "Compliance Guarantee",
    desc: "Full Arizona landlord-tenant law compliance on every lease, every notice, every process. You stay legally protected.",
    detail: "Updated for all current AZ statutes",
    accent: "var(--c-copr)",
  },
];

const PROCESS_POINTS = [
  "Free rental analysis — see what your property could earn",
  "We handle leasing, screening, rent collection & maintenance",
  "Real-time portal access and monthly financial reports",
];

export default function HowItWorks() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = cardsRef.current;
    const strip = stripRef.current;
    if (!cards) return;

    // Stagger guarantee cards
    gsap.from(cards.children, {
      y: 50,
      opacity: 0,
      scale: 0.97,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: cards,
        start: "top 88%",
        once: true,
      },
    });

    // Process strip entrance
    if (strip) {
      gsap.from(strip, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: strip,
          start: "top 90%",
          once: true,
        },
      });
    }
  });

  return (
    <section id="how" className="py-20 lg:py-32 relative overflow-hidden" style={{ background: "var(--c-bg2)" }}>
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03] pointer-events-none" style={{ background: "radial-gradient(circle, var(--c-sage), transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative">
        {/* Header with split reveal */}
        <div className="text-center mb-14 lg:mb-20">
          <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>Our Guarantees</span>
          <SplitReveal className="flex flex-col items-center">
            <span className="block font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
              Your Investment,
            </span>
            <span className="block font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight gradient-text">
              Protected.
            </span>
          </SplitReveal>
          <p className="text-[17px] mt-5 max-w-[520px] mx-auto leading-relaxed" style={{ color: "var(--c-body)" }}>
            Real guarantees backed by action — not just words on a page.
          </p>
        </div>

        {/* Guarantee Grid — 2x2 on desktop */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-14 lg:mb-20">
          {GUARANTEES.map((g) => (
            <div
              key={g.title}
              className="group relative rounded-[24px] p-7 lg:p-9 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--c-card)",
                border: "1px solid var(--c-bd)",
                boxShadow: "var(--c-card-shadow)",
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: `color-mix(in srgb, ${g.accent} 12%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${g.accent} 20%, transparent)`,
                }}
              >
                <g.icon className="w-6 h-6" style={{ color: g.accent }} />
              </div>

              {/* Content */}
              <h3
                className="font-[family-name:var(--font-heading)] font-extrabold text-[20px] lg:text-[22px] mb-3 tracking-tight"
                style={{ color: "var(--c-head)" }}
              >
                {g.title}
              </h3>
              <p className="text-[15px] leading-[1.75] mb-4" style={{ color: "var(--c-body)" }}>
                {g.desc}
              </p>

              {/* Detail tag */}
              <span
                className="inline-block text-[12px] font-medium px-3 py-1.5 rounded-lg"
                style={{
                  color: g.accent,
                  background: `color-mix(in srgb, ${g.accent} 8%, transparent)`,
                }}
              >
                {g.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Process strip — subtle, secondary */}
        <div
          ref={stripRef}
          className="rounded-[20px] p-7 lg:p-10 lg:flex lg:items-center lg:justify-between gap-8"
          style={{
            background: "var(--c-card)",
            border: "1px solid var(--c-bd)",
          }}
        >
          <div className="mb-6 lg:mb-0 lg:max-w-[320px] shrink-0">
            <h3 className="font-[family-name:var(--font-heading)] font-extrabold text-[20px] lg:text-[24px] tracking-tight mb-2" style={{ color: "var(--c-head)" }}>
              How It Works
            </h3>
            <p className="text-[14px] leading-relaxed" style={{ color: "var(--c-body)" }}>
              Three steps. Full transparency. You stay in control.
            </p>
          </div>

          <div className="flex-1 space-y-3">
            {PROCESS_POINTS.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--c-sage)" }} />
                <p className="text-[15px] leading-snug" style={{ color: "var(--c-head)" }}>{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 lg:mt-0 shrink-0">
            <a
              href="#hero"
              className="group inline-flex items-center gap-3 px-7 py-3.5 text-white font-[family-name:var(--font-heading)] font-bold text-[14px] rounded-2xl transition-all hover:-translate-y-0.5 whitespace-nowrap"
              style={{ background: "var(--c-copr)", boxShadow: "0 8px 24px rgba(212,132,90,0.25)" }}
            >
              Free Analysis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
