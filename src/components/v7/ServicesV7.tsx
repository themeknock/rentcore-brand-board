"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GeoPattern from "./GeoPattern";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  { title: "Property Management\nMade Simple", body: "Our mission is to provide you with a simple, satisfying investing experience. From faster leasing to proactive maintenance, we handle the daily operations so you can focus on growing your portfolio.", cta: "Our Services", href: "#how", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop" },
  { title: "Full Transparency.\nZero Surprises.", body: "Real-time Rentec portal access, monthly financial statements, and direct communication with Dale. You see everything \u2014 no guesswork, no hidden fees, no call centers.", cta: "See the Portal", href: "#portal", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop" },
  { title: "Responsive Investor\nServices", body: "Maintenance coordination, compliance updates, and financial reporting. Access our full suite of investor resources anytime, from anywhere.", cta: "Investor Resources", href: "#resources", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop" },
];

export default function ServicesV7() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const s = ref.current;
    if (!s) return;
    gsap.from(".svc6-card", { y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", immediateRender: false, scrollTrigger: { trigger: s, start: "top 75%", once: true } });
  }, { scope: ref });

  return (
    <section ref={ref} id="services" className="py-32 lg:py-44 relative overflow-hidden" style={{ background: "#F4F8FC" }}>
      {/* Geometric mosaic pattern — right side (Pure PM signature) */}
      <GeoPattern className="absolute -right-8 top-1/2 -translate-y-1/2 w-[160px] lg:w-[260px] opacity-50" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start">
          {CARDS.map((card, i) => (
            <div key={card.title} className="svc6-card rounded-[28px] overflow-hidden transition-all duration-300 hover:-translate-y-2" style={{ background: "#0B2545", boxShadow: "0 12px 48px rgba(11,37,69,0.3)", marginTop: i === 0 ? "48px" : i === 1 ? "0px" : "24px" }}>
              <div className="h-[200px] overflow-hidden relative">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, #0B2545)" }} />
              </div>
              <div className="p-7 lg:p-8 -mt-6 relative">
                <h3 className="font-[family-name:var(--font-heading)] font-extrabold text-[20px] lg:text-[22px] leading-tight tracking-tight mb-4 whitespace-pre-line text-white">{card.title}</h3>
                <p className="text-[14px] leading-[1.75] mb-6 text-[#94A3B8]">{card.body}</p>
                <a href={card.href} className="inline-flex items-center px-5 py-2.5 text-[13px] font-bold rounded-full transition-all hover:-translate-y-0.5 text-[#049DD9]" style={{ border: "1.5px solid #049DD9" }}>{card.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
