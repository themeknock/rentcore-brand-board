"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* Cloud decoration — Pure PM signature */
function Cloud({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 70" fill="none">
      <path d="M100 55H20c-8.284 0-15-6.716-15-15 0-7.18 5.04-13.178 11.773-14.67C18.578 14.79 28.186 7 39.5 7c9.07 0 17.02 4.86 21.37 12.12C63.52 17.1 66.87 16 70.5 16c9.665 0 17.5 7.835 17.5 17.5 0 .85-.06 1.69-.18 2.51C95.87 37.67 102 44.84 102 53.5c0 .5-.028 1.003-.08 1.5H100Z" fill="white" fillOpacity="0.06" />
    </svg>
  );
}

export default function HeroV7() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".h7-cloud", { y: 20, opacity: 0, duration: 1.2 })
      .from(".h7-text", { y: 40, opacity: 0, duration: 0.9 }, "-=0.8")
      .from(".h7-body", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".h7-cta", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
      .from(".h7-photo", { x: 40, opacity: 0, duration: 1 }, "-=0.9");
  }, { scope: ref });

  return (
    <section ref={ref} id="hero" className="relative overflow-hidden" style={{ background: "#0B2545" }}>
      {/* Decorative quarter-circle — top right */}
      <svg className="absolute top-0 right-0 w-[250px] h-[250px] lg:w-[420px] lg:h-[420px]" viewBox="0 0 420 420" fill="none">
        <path d="M420 0C420 231.96 231.96 420 0 420L0 0L420 0Z" fill="#049DD9" fillOpacity="0.06" />
        <path d="M420 0C420 231.96 231.96 420 0 420" stroke="#049DD9" strokeOpacity="0.1" strokeWidth="1.5" />
      </svg>
      {/* Quarter-circle — bottom left */}
      <svg className="absolute bottom-0 left-0 w-[120px] h-[120px] lg:w-[180px] lg:h-[180px]" viewBox="0 0 180 180" fill="none">
        <path d="M0 180C0 80.589 80.589 0 180 0L180 180L0 180Z" fill="#049DD9" fillOpacity="0.04" />
      </svg>

      {/* Cloud decorations */}
      <Cloud className="h7-cloud absolute top-[15%] left-[6%] w-[110px] lg:w-[150px]" />
      <Cloud className="h7-cloud absolute bottom-[25%] left-[35%] w-[80px] lg:w-[100px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-36 lg:pt-44 pb-24 lg:pb-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Text only, Pure PM style */}
          <div className="relative z-10">
            <h1 className="h7-text font-[family-name:var(--font-heading)] text-[42px] sm:text-[52px] lg:text-[60px] xl:text-[68px] font-extrabold leading-[1.05] tracking-tight text-white mb-7">
              Rent Core<br />
              Property<br />
              Management
            </h1>

            <p className="h7-body text-[16px] lg:text-[18px] leading-[1.75] text-white/60 max-w-[480px] mb-10">
              Rent Core is where decades of Phoenix &amp; Tucson property management expertise meets boutique, investor-first service. We&apos;re focused, hands-on, and trusted by 120+ investors across Arizona.
            </p>

            <div className="h7-cta flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 text-[15px] font-bold rounded-full transition-all hover:-translate-y-0.5 text-white"
                style={{ background: "linear-gradient(135deg, #049DD9, #0D5FA6)" }}
              >
                What Will Your Property Earn?
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-7 py-3.5 text-[15px] font-medium rounded-full transition-all hover:-translate-y-0.5 text-white/80 hover:text-white"
                style={{ border: "1.5px solid rgba(255,255,255,0.25)" }}
              >
                Learn How It Works
              </a>
            </div>
          </div>

          {/* Right — Arizona cityscape photo, VISIBLE like Pure PM */}
          <div className="h7-photo relative">
            <div className="rounded-[24px] overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
              <img
                src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop&q=85"
                alt="Phoenix Arizona skyline"
                className="w-full h-[300px] lg:h-[420px] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
