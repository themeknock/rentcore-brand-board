"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    // Parallax background
    gsap.to(bg, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Stagger content entrance
    gsap.from(".cta-anim", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="cta" className="relative overflow-hidden">
      <img ref={bgRef} src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=80" alt="" className="absolute inset-0 w-full h-full object-cover scale-[1.15]" loading="lazy" />
      <div className="absolute inset-0" style={{ background: "rgba(20,26,40,0.93)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]" style={{ background: "rgba(91,143,139,0.1)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-36 text-center">
        <div className="cta-anim inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: "rgba(34,40,56,0.8)", border: "1px solid rgba(46,54,72,0.5)" }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#D4845A" }} />
          <span className="text-[12px] font-medium" style={{ color: "#6E7A8E" }}>Free rental analysis — no commitment</span>
        </div>

        <h2 className="cta-anim font-[family-name:var(--font-heading)] text-[36px] sm:text-[44px] lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight mb-7">
          It Doesn&apos;t Have to Stay That Way.
        </h2>

        <p className="cta-anim text-[18px] lg:text-[20px] leading-[1.7] mb-12 max-w-[540px] mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
          If managing your property is starting to feel like a second job, it may be time to hand it off. Get a free rental analysis — no commitment.
        </p>

        <a href="#hero" className="cta-anim group inline-flex items-center gap-3 px-9 py-5 font-[family-name:var(--font-heading)] font-bold text-[16px] rounded-2xl transition-all hover:-translate-y-0.5 text-white" style={{ background: "#D4845A", boxShadow: "0 20px 40px rgba(212,132,90,0.3)" }}>
          Get Your Free Rental Analysis
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="cta-anim text-[14px] mt-8" style={{ color: "rgba(255,255,255,0.35)" }}>
          Or call us: <a href="tel:+16025550180" className="underline underline-offset-4" style={{ color: "rgba(255,255,255,0.5)" }}>(602) 555-0180</a>
        </p>
      </div>
    </section>
  );
}
