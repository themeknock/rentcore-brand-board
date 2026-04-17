"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PROPERTIES = [
  { img: "photo-1558036117-15d82a90b9b1", area: "Scottsdale", type: "4 Bed · 3 Bath · Single Family", rent: "$2,850/mo" },
  { img: "photo-1583608205776-bfd35f0d9f83", area: "Mesa", type: "3 Bed · 2 Bath · Single Family", rent: "$1,950/mo" },
  { img: "photo-1564013799919-ab600027ffc6", area: "Chandler", type: "4 Bed · 2.5 Bath · Single Family", rent: "$2,400/mo" },
  { img: "photo-1576941089067-2de3c901e126", area: "Gilbert", type: "3 Bed · 2 Bath · Single Family", rent: "$2,100/mo" },
  { img: "photo-1600585154340-be6161a56a0c", area: "Tempe", type: "3 Bed · 2 Bath · Single Family", rent: "$1,800/mo" },
  { img: "photo-1600047509807-ba8f99d2cdde", area: "Peoria", type: "4 Bed · 3 Bath · Single Family", rent: "$2,200/mo" },
];

export default function Properties() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll(".prop-card"), {
      y: 50, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: ref.current.querySelector(".prop-grid"), start: "top 85%", once: true },
    });
  }, { scope: ref });

  return (
    <section ref={ref} id="properties" className="py-16 lg:py-24" style={{ background: "var(--c-bg)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-10 lg:mb-14">
          <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>Our Portfolio</span>
          <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>Properties We Manage</h2>
          <p className="text-[17px] mt-5 max-w-[520px] mx-auto" style={{ color: "var(--c-body)" }}>Single-family investment properties across the Phoenix and Tucson metro areas.</p>
        </div>
        <div className="prop-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROPERTIES.map((p) => (
            <div key={p.area} className="prop-card group rounded-[20px] overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-2" style={{ border: "1px solid var(--c-bd)" }}>
              <div className="relative h-48 overflow-hidden">
                <img src={`https://images.unsplash.com/${p.img}?w=600&h=400&fit=crop`} alt={p.area} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-lg text-[11px] font-bold text-white" style={{ background: "var(--c-copr)" }}>{p.area}</span>
                </div>
              </div>
              <div className="px-5 py-4" style={{ background: "var(--c-card)" }}>
                <p className="font-[family-name:var(--font-heading)] font-bold text-[15px] tracking-tight" style={{ color: "var(--c-head)" }}>{p.type}</p>
                <p className="text-[13px] mt-1 font-semibold" style={{ color: "var(--c-sage)" }}>{p.rent}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-14 mb-4">
          <a href="#hero" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold transition-all hover:-translate-y-0.5" style={{ color: "var(--c-copr)", border: "1px solid var(--c-copr)", background: "transparent" }}>
            Get a free analysis for your property <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
