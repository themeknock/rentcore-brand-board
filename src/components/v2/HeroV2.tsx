"use client";

import { useRef, useState } from "react";
import { Star, ArrowRight, Play, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroV2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    // Parallax on background image
    gsap.to(".hero-v2-bg", {
      y: 120,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Entrance timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hv2-1", { y: 30, opacity: 0, duration: 0.8 })
      .from(".hv2-2", { y: 30, opacity: 0, duration: 0.9 }, "-=0.6")
      .from(".hv2-3", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".hv2-4", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
      .from(".hv2-5", { y: 15, opacity: 0, duration: 0.7 }, "-=0.4")
      .from(".hv2-card", { y: 40, opacity: 0, scale: 0.97, duration: 1 }, "-=0.8");
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=1080&fit=crop&q=80"
        alt=""
        className="hero-v2-bg absolute inset-0 w-full h-[120%] object-cover will-change-transform"
        style={{ top: "-10%" }}
        loading="eager"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,23,42,0.50) 0%, rgba(15,23,42,0.75) 100%)" }} />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.65' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <div className="hv2-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#059669" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#059669" }} />
              </span>
              <span className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>Phoenix & Tucson metro</span>
            </div>

            <h1 className="hv2-2 font-[family-name:var(--font-heading)] text-[38px] sm:text-[50px] lg:text-[60px] xl:text-[68px] font-extrabold leading-[1.05] tracking-tight text-white mb-8">
              Stop Managing.
              <br />
              <span style={{ color: "#F97316" }}>Start Earning.</span>
            </h1>

            <div className="hv2-3 space-y-3.5 mb-10">
              {[
                "We handle tenants, maintenance & rent collection",
                "You keep full control with real-time reporting",
                "Only 9% monthly — no hidden fees",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "#059669" }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-[16px] lg:text-[17px]" style={{ color: "rgba(255,255,255,0.75)" }}>{point}</span>
                </div>
              ))}
            </div>

            <div className="hv2-4 flex flex-wrap items-center gap-4 mb-10">
              <a href="#pricing" className="group inline-flex items-center gap-3 px-8 py-4 text-white font-[family-name:var(--font-heading)] font-bold text-[15px] rounded-2xl transition-all hover:-translate-y-0.5" style={{ background: "#F97316", boxShadow: "0 10px 30px rgba(249,115,22,0.35)" }}>
                See Pricing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#how" className="group inline-flex items-center gap-2.5 px-6 py-4 font-medium text-[15px] rounded-2xl transition-all" style={{ color: "rgba(255,255,255,0.7)" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </div>
                How It Works
              </a>
            </div>

            {/* Social proof */}
            <div className="hv2-5 flex items-center gap-4">
              <div className="flex mb-0.5">
                {[0,1,2,3,4].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span className="font-semibold" style={{ color: "rgba(255,255,255,0.8)" }}>4.9</span> from 120+ investors
              </span>
              <div className="w-px h-5" style={{ background: "rgba(255,255,255,0.15)" }} />
              <span className="text-[13px] italic" style={{ color: "rgba(255,255,255,0.45)" }}>
                &ldquo;Made our transition effortless.&rdquo;
              </span>
            </div>
          </div>

          {/* Right — Form Card */}
          <div className="hv2-card">
            <div className="relative bg-white rounded-[28px] overflow-hidden" style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 25px 60px rgba(0,0,0,0.3), 0 40px 100px rgba(0,0,0,0.15)" }}>
              <div className="h-1.5" style={{ background: "linear-gradient(to right, #F97316, #fb923c, #EA580C)" }} />
              <div className="p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "#05966915" }}>
                      <CheckCircle className="w-8 h-8" style={{ color: "#059669" }} />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[22px] tracking-tight mb-2" style={{ color: "#0F172A" }}>You&apos;re All Set!</h3>
                    <p className="text-[15px] leading-relaxed" style={{ color: "#64748B" }}>We&apos;ll email your personalized rental analysis within 24 hours.</p>
                    <p className="text-[13px] mt-4" style={{ color: "#94A3B8" }}>Check your inbox for results from RentCore.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[22px] tracking-tight mb-1" style={{ color: "#0F172A" }}>Free Rental Analysis</h3>
                    <p className="text-[14px] mb-7" style={{ color: "#94A3B8" }}>We&apos;ll analyze your property and email you what it could earn.</p>
                    <form className="space-y-3.5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                      <input type="text" placeholder="Property address" required className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid #E2E8F0", color: "#0F172A", background: "#F8FAFC" }} onFocus={(e) => { e.target.style.borderColor = "#1D4ED8"; e.target.style.boxShadow = "0 0 0 4px rgba(29,78,216,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }} />
                      <input type="email" placeholder="Email address" required className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid #E2E8F0", color: "#0F172A", background: "#F8FAFC" }} onFocus={(e) => { e.target.style.borderColor = "#1D4ED8"; e.target.style.boxShadow = "0 0 0 4px rgba(29,78,216,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }} />
                      <button type="submit" className="w-full py-4 text-white font-[family-name:var(--font-heading)] font-bold text-[15px] rounded-2xl transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer" style={{ background: "#F97316", boxShadow: "0 8px 24px rgba(249,115,22,0.25)" }}>
                        Get My Free Analysis
                      </button>
                    </form>
                    <p className="text-center text-[12px] mt-4" style={{ color: "#94A3B8" }}>No obligation · Results emailed within 24 hours</p>
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
