"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle, Shield, Headphones, Server, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* Cloud SVG decoration — Pure PM signature element */
function CloudDecor({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 70" fill="none">
      <path d="M100 55H20c-8.284 0-15-6.716-15-15 0-7.18 5.04-13.178 11.773-14.67C18.578 14.79 28.186 7 39.5 7c9.07 0 17.02 4.86 21.37 12.12C63.52 17.1 66.87 16 70.5 16c9.665 0 17.5 7.835 17.5 17.5 0 .85-.06 1.69-.18 2.51C95.87 37.67 102 44.84 102 53.5c0 .5-.028 1.003-.08 1.5H100Z" fill="white" fillOpacity="0.08" />
      <path d="M100 55H20c-8.284 0-15-6.716-15-15 0-7.18 5.04-13.178 11.773-14.67C18.578 14.79 28.186 7 39.5 7c9.07 0 17.02 4.86 21.37 12.12C63.52 17.1 66.87 16 70.5 16c9.665 0 17.5 7.835 17.5 17.5 0 .85-.06 1.69-.18 2.51C95.87 37.67 102 44.84 102 53.5c0 .5-.028 1.003-.08 1.5H100Z" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
    </svg>
  );
}

export default function HeroV5() {
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hv5-1", { y: 30, opacity: 0, duration: 0.8 })
      .from(".hv5-2", { y: 30, opacity: 0, duration: 0.9 }, "-=0.6")
      .from(".hv5-3", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".hv5-4", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
      .from(".hv5-5", { y: 15, opacity: 0, duration: 0.7 }, "-=0.4")
      .from(".hv5-card", { y: 40, opacity: 0, scale: 0.97, duration: 1 }, "-=0.8");

    const s = ref.current;
    if (!s) return;
    gsap.to(".hv5-bg", { yPercent: 20, ease: "none", scrollTrigger: { trigger: s, start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".hv5-cloud1", { x: 30, y: -10, ease: "none", scrollTrigger: { trigger: s, start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".hv5-cloud2", { x: -20, y: -15, ease: "none", scrollTrigger: { trigger: s, start: "top top", end: "bottom top", scrub: true } });
  }, { scope: ref });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[94vh] flex items-center overflow-hidden"
      style={{ background: "#1A2030" }}
    >
      {/* Background — Arizona cityscape, VISIBLE (like Pure PM) */}
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=1080&fit=crop&q=80"
        alt=""
        className="hv5-bg absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.3 }}
        loading="eager"
      />
      {/* Gradient overlay — keeps text readable but photo visible */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1A2030 0%, rgba(26,32,48,0.85) 40%, rgba(26,32,48,0.6) 100%)" }} />

      {/* Decorative quarter-circle — top right (Pure PM) */}
      <svg className="absolute top-0 right-0 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] z-[1]" viewBox="0 0 400 400" fill="none">
        <path d="M400 0C400 220.914 220.914 400 0 400L0 0L400 0Z" fill="#5B8F8B" fillOpacity="0.06" />
        <path d="M400 0C400 220.914 220.914 400 0 400" stroke="#5B8F8B" strokeOpacity="0.1" strokeWidth="1.5" />
      </svg>
      {/* Small quarter-circle — bottom left */}
      <svg className="absolute bottom-0 left-0 w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] z-[1]" viewBox="0 0 200 200" fill="none">
        <path d="M0 200C0 89.543 89.543 0 200 0L200 200L0 200Z" fill="#5B8F8B" fillOpacity="0.04" />
      </svg>

      {/* Cloud decorations (Pure PM signature) */}
      <CloudDecor className="hv5-cloud1 absolute top-[12%] left-[8%] w-[100px] lg:w-[140px] z-[1]" />
      <CloudDecor className="hv5-cloud2 absolute top-[25%] right-[15%] w-[80px] lg:w-[110px] z-[1]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10" style={{ background: "linear-gradient(to bottom, transparent, #1A2030)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-28 lg:pt-36 pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="hv5-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8" style={{ background: "rgba(34,40,56,0.8)", backdropFilter: "blur(12px)", border: "1px solid rgba(46,54,72,0.6)" }}>
              <Shield className="w-3.5 h-3.5 text-[#5B8F8B]" />
              <span className="text-[13px] font-medium text-[#B0B8C8]">Licensed Arizona Broker &middot; Phoenix &amp; Tucson</span>
            </div>

            <h1 className="hv5-2 font-[family-name:var(--font-heading)] text-[40px] sm:text-[50px] lg:text-[58px] xl:text-[66px] font-extrabold leading-[1.06] tracking-tight mb-7 text-white">
              Still Managing<br />Your Own<br />Property?
            </h1>

            <p className="hv5-3 text-[18px] lg:text-[20px] leading-[1.75] mb-10 max-w-[480px] text-[#B0B8C8]">
              It doesn&apos;t have to stay that way. We step in to take over the workload &mdash; without taking away your control.
            </p>

            <div className="hv5-4 flex flex-wrap items-center gap-4 mb-12">
              <a href="#pricing" className="group inline-flex items-center gap-3 px-8 py-4 text-white font-[family-name:var(--font-heading)] font-bold text-[15px] rounded-full transition-all hover:-translate-y-0.5" style={{ background: "#D4845A", boxShadow: "0 10px 30px rgba(212,132,90,0.3)" }}>
                What Will Your Property Earn?
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+16025550180" className="inline-flex items-center gap-2 px-6 py-4 text-[14px] font-semibold rounded-full transition-all hover:-translate-y-0.5 text-[#5B8F8B]" style={{ border: "1.5px solid #5B8F8B" }}>
                Call Dale Directly
              </a>
            </div>

            {/* Credential strip */}
            <div className="hv5-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                { icon: Shield, text: "Licensed AZ Broker" },
                { icon: Headphones, text: "Direct Access to Dale" },
                { icon: Server, text: "Rentec-Powered" },
                { icon: MapPin, text: "15+ Years Local" },
              ].map((c) => (
                <div key={c.text} className="flex items-center gap-2">
                  <c.icon className="w-3.5 h-3.5 text-[#5B8F8B]" />
                  <span className="text-[12px] font-medium text-[#6E7A8E]">{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form card */}
          <div className="hv5-card">
            <div className="relative bg-white rounded-[28px] overflow-hidden" style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.5)" }}>
              <div className="h-1.5" style={{ background: "linear-gradient(to right, #5B8F8B, #7AB5B0)" }} />
              <div className="p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-[#5B8F8B]/10">
                      <CheckCircle className="w-8 h-8 text-[#5B8F8B]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[22px] tracking-tight mb-2 text-[#1A2030]">We&apos;ll Be in Touch</h3>
                    <p className="text-[15px] leading-relaxed text-[#6E7A8E]">Expect a personalized rental analysis from Dale within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[22px] tracking-tight mb-1 text-[#1A2030]">What Will Your Property Earn?</h3>
                    <p className="text-[14px] mb-7 text-[#6E7A8E]">Get a clear, data-based rental analysis and a plan to maximize your investment.</p>
                    <form className="space-y-3.5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                      <input type="text" placeholder="Property address" required className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all bg-[#F4F5F2] text-[#1A2030] placeholder:text-[#94A3B8]" style={{ border: "1px solid #DFE2DC" }} />
                      <input type="email" placeholder="Email address" required className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all bg-[#F4F5F2] text-[#1A2030] placeholder:text-[#94A3B8]" style={{ border: "1px solid #DFE2DC" }} />
                      <button type="submit" className="w-full py-4 text-white font-[family-name:var(--font-heading)] font-bold text-[15px] rounded-full transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer" style={{ background: "#D4845A", boxShadow: "0 8px 24px rgba(212,132,90,0.25)" }}>
                        See What It Could Earn
                      </button>
                    </form>
                    <p className="text-center text-[12px] mt-4 text-[#94A3B8]">No obligation &middot; Personalized analysis from Dale within 24 hours</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
