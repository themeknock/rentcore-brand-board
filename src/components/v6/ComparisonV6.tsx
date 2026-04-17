"use client";

import { useRef } from "react";
import { Check, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ROWS = [
  { task: "Find & screen tenants", self: false, rc: true },
  { task: "Collect rent on time", self: false, rc: true },
  { task: "Handle midnight maintenance calls", self: false, rc: true },
  { task: "Keep up with AZ landlord-tenant law", self: false, rc: true },
  { task: "Monthly financial statements & 1099s", self: false, rc: true },
  { task: "Coordinate vendor repairs & inspections", self: false, rc: true },
  { task: "Your evenings & weekends free", self: false, rc: true },
  { task: "Full control & transparency", self: true, rc: true },
];

export default function ComparisonV6() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const s = ref.current;
    if (!s) return;
    gsap.from(".cmp-row", { x: -30, opacity: 0, duration: 0.5, stagger: 0.06, ease: "power3.out", immediateRender: false, scrollTrigger: { trigger: s, start: "top 80%", once: true } });
  }, { scope: ref });

  return (
    <section ref={ref} className="py-28 lg:py-36 relative overflow-hidden" style={{ background: "var(--c-bg)" }}>
      {/* Decorative quarter circle */}
      <svg className="absolute top-0 left-0 w-[160px] h-[160px] lg:w-[240px] lg:h-[240px]" viewBox="0 0 240 240" fill="none">
        <path d="M0 0C0 132.548 107.452 240 240 240L240 0L0 0Z" fill="var(--c-sage)" fillOpacity="0.04" />
      </svg>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
          {/* Left — narrative */}
          <div>
            <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-sage)" }}>The Difference</span>
            <h2 className="font-[family-name:var(--font-heading)] text-[30px] lg:text-[40px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--c-head)" }}>
              Self-Managing vs.{" "}
              <span className="gradient-text">Rent Core</span>
            </h2>
            <p className="text-[17px] leading-[1.75] mb-8" style={{ color: "var(--c-body)" }}>
              You know how to manage your property. But at some point, it starts to take more time than it&apos;s worth. Here&apos;s what changes when you hand it off.
            </p>
            {/* Lifestyle image — couple relaxing (time freedom) */}
            <div className="rounded-[20px] overflow-hidden h-[200px]" style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}>
              <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=300&fit=crop" alt="Couple enjoying free time" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          {/* Right — table */}
          <div className="rounded-[24px] overflow-hidden" style={{ border: "1px solid var(--c-bd)", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div className="grid grid-cols-[1fr_90px_90px] sm:grid-cols-[1fr_120px_120px]" style={{ background: "var(--c-inp)" }}>
              <div className="px-5 py-3.5" />
              <div className="px-3 py-3.5 text-center" style={{ borderLeft: "1px solid var(--c-bd)" }}>
                <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: "var(--c-mut)" }}>Self</p>
              </div>
              <div className="px-3 py-3.5 text-center" style={{ borderLeft: "1px solid var(--c-bd)", background: "var(--c-sage)" }}>
                <p className="text-[11px] font-bold uppercase tracking-wider text-white">Rent Core</p>
              </div>
            </div>
            {ROWS.map((row, i) => (
              <div key={row.task} className="cmp-row grid grid-cols-[1fr_90px_90px] sm:grid-cols-[1fr_120px_120px]" style={{ background: i % 2 === 0 ? "var(--c-card)" : "var(--c-inp)", borderTop: "1px solid var(--c-bd)" }}>
                <div className="px-5 py-3.5 flex items-center">
                  <span className="text-[13px] font-medium" style={{ color: "var(--c-head)" }}>{row.task}</span>
                </div>
                <div className="px-3 py-3.5 flex items-center justify-center" style={{ borderLeft: "1px solid var(--c-bd)" }}>
                  {row.self ? <Check className="w-4 h-4" style={{ color: "var(--c-sage)" }} /> : <X className="w-4 h-4" style={{ color: "var(--c-copr)" }} />}
                </div>
                <div className="px-3 py-3.5 flex items-center justify-center" style={{ borderLeft: "1px solid var(--c-bd)" }}>
                  <Check className="w-4 h-4" style={{ color: "var(--c-sage)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-[15px] mt-10" style={{ color: "var(--c-mut)" }}>
          Keep full control — without the full-time job.
        </p>
      </div>
    </section>
  );
}
