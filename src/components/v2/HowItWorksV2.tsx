"use client";

import { useRef } from "react";
import { Calculator, Settings, ArrowUpRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { step: "01", icon: Calculator, title: "Get Your Rental Analysis", desc: "Free market analysis of your property — no obligation.", color: "#1D4ED8", side: "left" as const },
  { step: "02", icon: Settings, title: "We Take Over the Workload", desc: "Leasing, screening, rent collection, maintenance — handled.", color: "#F97316", side: "right" as const },
  { step: "03", icon: ArrowUpRight, title: "You Stay Informed", desc: "Monthly reports, real-time portal, full transparency.", color: "#059669", side: "left" as const },
];

export default function HowItWorksV2() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate center line
    gsap.from(".timeline-line", {
      scaleY: 0,
      transformOrigin: "top",
      ease: "none",
      scrollTrigger: { trigger: ref.current, start: "top 70%", end: "bottom 60%", scrub: true },
    });

    // Animate cards from their side
    gsap.utils.toArray<HTMLElement>(".tl-card-left").forEach((el) => {
      gsap.from(el, {
        x: -60, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    });
    gsap.utils.toArray<HTMLElement>(".tl-card-right").forEach((el) => {
      gsap.from(el, {
        x: 60, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    });
  }, { scope: ref });

  return (
    <section ref={ref} id="how" className="py-24 lg:py-36" style={{ background: "linear-gradient(180deg, #fff 0%, #f8faff 100%)" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "#F97316" }}>How It Works</span>
          <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "#0F172A" }}>
            Three Steps to <span className="gradient-text">Stress-Free</span><br className="hidden sm:block" /> Property Management
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 timeline-line" style={{ background: "linear-gradient(to bottom, #1D4ED8, #F97316, #059669)" }} />

          {/* Left line — mobile */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px timeline-line" style={{ background: "linear-gradient(to bottom, #1D4ED8, #F97316, #059669)" }} />

          <div className="space-y-12 lg:space-y-20">
            {STEPS.map((step) => (
              <div key={step.step} className="relative">
                {/* Desktop: alternating layout */}
                <div className={`hidden lg:grid grid-cols-[1fr_80px_1fr] items-center`}>
                  {/* Left content or empty */}
                  <div className={step.side === "left" ? `tl-card-left pr-12` : ""}>
                    {step.side === "left" && (
                      <div className="rounded-[24px] p-8 bg-white text-right" style={{ border: "1px solid #F1F5F9", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ml-auto" style={{ background: step.color, boxShadow: `0 6px 20px ${step.color}30` }}>
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-[family-name:var(--font-heading)] font-bold text-[20px] mb-2 tracking-tight" style={{ color: "#0F172A" }}>{step.title}</h3>
                        <p className="text-[15px] leading-relaxed" style={{ color: "#64748B" }}>{step.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-[13px] font-bold font-[family-name:var(--font-heading)] z-10" style={{ background: step.color, boxShadow: `0 0 0 6px white, 0 6px 20px ${step.color}30` }}>
                      {step.step}
                    </div>
                  </div>

                  {/* Right content or empty */}
                  <div className={step.side === "right" ? `tl-card-right pl-12` : ""}>
                    {step.side === "right" && (
                      <div className="rounded-[24px] p-8 bg-white" style={{ border: "1px solid #F1F5F9", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: step.color, boxShadow: `0 6px 20px ${step.color}30` }}>
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-[family-name:var(--font-heading)] font-bold text-[20px] mb-2 tracking-tight" style={{ color: "#0F172A" }}>{step.title}</h3>
                        <p className="text-[15px] leading-relaxed" style={{ color: "#64748B" }}>{step.desc}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile: left-aligned */}
                <div className="lg:hidden flex gap-6">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-[13px] font-bold font-[family-name:var(--font-heading)] z-10" style={{ background: step.color, boxShadow: `0 0 0 4px white, 0 4px 12px ${step.color}30` }}>
                      {step.step}
                    </div>
                  </div>
                  <div className={`tl-card-${step.side} rounded-[24px] p-6 bg-white flex-1`} style={{ border: "1px solid #F1F5F9", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: step.color, boxShadow: `0 4px 12px ${step.color}30` }}>
                      <step.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[18px] mb-2 tracking-tight" style={{ color: "#0F172A" }}>{step.title}</h3>
                    <p className="text-[14px] leading-relaxed" style={{ color: "#64748B" }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="#hero" className="group inline-flex items-center gap-3 px-8 py-4 text-white font-[family-name:var(--font-heading)] font-bold text-[15px] rounded-2xl transition-all hover:-translate-y-0.5" style={{ background: "#F97316", boxShadow: "0 10px 30px rgba(249,115,22,0.25)" }}>
            Get Your Free Rental Analysis
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
