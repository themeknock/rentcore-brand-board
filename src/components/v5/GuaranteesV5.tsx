"use client";

import { useRef } from "react";
import { Shield, Clock, Home, Scale, CheckCircle2, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitReveal from "../SplitReveal";

gsap.registerPlugin(ScrollTrigger);

const GUARANTEES = [
  { icon: Clock, title: "60-Day Leasing Guarantee", desc: "Vacancy filled within 60 days or your first month\u2019s management fee is waived.", detail: "Covers marketing, showings, screening, and placement" },
  { icon: Shield, title: "Eviction Protection", desc: "If a tenant we placed needs to be evicted, we cover the filing costs.", detail: "Applies to all tenants placed by Rent Core" },
  { icon: Home, title: "Rent Deposit Guarantee", desc: "Tenant breaks their lease early? We find a replacement at no additional leasing fee.", detail: "Replacement search begins within 48 hours" },
  { icon: Scale, title: "Compliance Guarantee", desc: "Full Arizona landlord-tenant law compliance on every lease, every notice, every process.", detail: "Updated for all current AZ statutes" },
];

export default function GuaranteesV5() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const c = cardsRef.current;
    if (!c) return;
    gsap.from(c.children, { y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", immediateRender: false, scrollTrigger: { trigger: c, start: "top 88%", once: true } });
  });

  return (
    <section id="how" className="py-24 lg:py-36 relative overflow-hidden" style={{ background: "var(--c-bg2)" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03] pointer-events-none" style={{ background: "radial-gradient(circle, var(--c-sage), transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative">
        <div className="text-center mb-14 lg:mb-20">
          <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-sage)" }}>Our Guarantees</span>
          <SplitReveal className="flex flex-col items-center">
            <span className="block font-[family-name:var(--font-heading)] text-[32px] lg:text-[46px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
              Your Investment,
            </span>
            <span className="block font-[family-name:var(--font-heading)] text-[32px] lg:text-[46px] font-extrabold leading-[1.1] tracking-tight gradient-text">
              Protected.
            </span>
          </SplitReveal>
          <p className="text-[17px] mt-5 max-w-[480px] mx-auto leading-relaxed" style={{ color: "var(--c-body)" }}>
            Real guarantees backed by action &mdash; not just words on a page.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-14 lg:mb-20">
          {GUARANTEES.map((g) => (
            <div key={g.title} className="group rounded-[24px] p-7 lg:p-9 transition-all duration-300 hover:-translate-y-1" style={{ background: "var(--c-card)", border: "1px solid var(--c-bd)", boxShadow: "var(--c-card-shadow)" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: "rgba(91,143,139,0.1)", border: "1px solid rgba(91,143,139,0.15)" }}>
                <g.icon className="w-5 h-5" style={{ color: "var(--c-sage)" }} />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-extrabold text-[20px] mb-3 tracking-tight" style={{ color: "var(--c-head)" }}>{g.title}</h3>
              <p className="text-[15px] leading-[1.75] mb-4" style={{ color: "var(--c-body)" }}>{g.desc}</p>
              <span className="inline-block text-[12px] font-medium px-3 py-1.5 rounded-lg" style={{ color: "var(--c-sage)", background: "rgba(91,143,139,0.08)" }}>{g.detail}</span>
            </div>
          ))}
        </div>

        {/* Process strip */}
        <div className="rounded-[20px] p-7 lg:p-10 lg:flex lg:items-center lg:justify-between gap-8" style={{ background: "var(--c-card)", border: "1px solid var(--c-bd)" }}>
          <div className="mb-6 lg:mb-0 lg:max-w-[320px] shrink-0">
            <h3 className="font-[family-name:var(--font-heading)] font-extrabold text-[20px] lg:text-[24px] tracking-tight mb-2" style={{ color: "var(--c-head)" }}>How It Works</h3>
            <p className="text-[14px] leading-relaxed" style={{ color: "var(--c-body)" }}>Three steps. Full transparency. You stay in control.</p>
          </div>
          <div className="flex-1 space-y-3">
            {[
              "Tell us about your property \u2014 we\u2019ll show you what it could earn",
              "We handle leasing, screening, rent collection & maintenance",
              "Real-time portal access and monthly financial reports",
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--c-sage)" }} />
                <p className="text-[15px] leading-snug" style={{ color: "var(--c-head)" }}>{p}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 lg:mt-0 shrink-0">
            <a href="#hero" className="group inline-flex items-center gap-3 px-7 py-3.5 text-white font-[family-name:var(--font-heading)] font-bold text-[14px] rounded-2xl transition-all hover:-translate-y-0.5 whitespace-nowrap" style={{ background: "var(--c-copr)", boxShadow: "0 8px 24px rgba(212,132,90,0.25)" }}>
              See What It Could Earn <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
