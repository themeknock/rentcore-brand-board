"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitReveal from "./SplitReveal";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const photo = photoRef.current;
    if (!section || !photo) return;

    // Parallax on Dale's photo
    gsap.to(photo, {
      yPercent: -8,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Fade in the right side content
    gsap.from(".about-content", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-36" style={{ background: "linear-gradient(180deg, var(--c-bg) 0%, var(--c-inp) 100%)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">

          {/* Left — Image with parallax */}
          <div>
            <div className="relative rounded-[28px] overflow-hidden" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}>
              <div ref={photoRef} className="scale-[1.12]">
                <img
                  src="/dale-figger.jpg"
                  alt="Dale Figger — Owner & Licensed Arizona Broker"
                  className="w-full h-[400px] lg:h-[480px] object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,32,48,0.7) 0%, transparent 50%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-[family-name:var(--font-heading)] font-bold text-white text-[22px] tracking-tight">Dale Figger</p>
                <p className="text-[14px] mt-1" style={{ color: "var(--c-mut)" }}>Owner & Licensed Arizona Broker</p>
              </div>
            </div>
          </div>

          {/* Right — Bio with text reveal */}
          <div className="about-content">
            <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>About Rent Core</span>

            <SplitReveal>
              <span className="block font-[family-name:var(--font-heading)] text-[32px] lg:text-[42px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
                An Ownership-Minded Approach
              </span>
              <span className="block font-[family-name:var(--font-heading)] text-[32px] lg:text-[42px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
                to Property Management
              </span>
            </SplitReveal>

            <p className="text-[16px] lg:text-[17px] leading-[1.8] mt-8 mb-10" style={{ color: "var(--c-body)" }}>
              Dale Figger, owner and licensed Arizona broker, has spent decades managing single-family investment portfolios across Phoenix and Tucson. He treats every property like his own — maximizing rental income, protecting long-term value, and delivering proactive, personalized service.
            </p>

            {/* Tagline callout */}
            <div className="p-6 lg:p-8 rounded-2xl" style={{ background: "var(--c-bg2)" }}>
              <p className="font-[family-name:var(--font-heading)] text-[18px] lg:text-[20px] font-bold leading-snug tracking-tight" style={{ color: "var(--c-head)" }}>
                &ldquo;We manage like owners, with you every step of the way.&rdquo;
              </p>
              <p className="text-[13px] mt-3" style={{ color: "var(--c-mut)" }}>— Dale Figger, Founder</p>
            </div>

            <a href="#hero" className="group inline-flex items-center gap-3 mt-8 px-8 py-4 text-white font-[family-name:var(--font-heading)] font-bold text-[15px] rounded-2xl transition-all hover:-translate-y-0.5" style={{ background: "var(--c-copr)", boxShadow: "0 10px 30px rgba(212,132,90,0.25)" }}>
              Get Your Free Analysis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
