"use client";

import { useRef, useState } from "react";
import { Star, ArrowRight, Play, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    // Entry animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-anim-1", { y: 30, opacity: 0, duration: 0.8 })
      .from(".hero-anim-2", { y: 30, opacity: 0, duration: 0.9 }, "-=0.6")
      .from(".hero-anim-3", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".hero-anim-4", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
      .from(".hero-anim-5", { y: 15, opacity: 0, duration: 0.7 }, "-=0.4")
      .from(".hero-card-anim", { y: 40, opacity: 0, scale: 0.97, duration: 1 }, "-=0.8");

    // Parallax on scroll
    const section = containerRef.current;
    if (!section) return;
    gsap.to(".hero-bg-img", { yPercent: 20, ease: "none", scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".hero-orb-1", { y: 100, ease: "none", scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".hero-orb-2", { y: 60, ease: "none", scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".hero-card-anim", { y: -30, ease: "none", scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true } });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ background: "var(--c-bg)" }}
    >
      {/* Hero background image */}
      <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&q=80" alt="" className="hero-bg-img absolute inset-0 w-full h-full object-cover" style={{ opacity: "var(--c-hero-img, 0.35)" }} loading="eager" />
      <div className="absolute inset-0" style={{ background: `linear-gradient(170deg, var(--c-bg) 0%, color-mix(in srgb, var(--c-bg) 80%, transparent) 60%, var(--c-bg2) 100%)` }} />

      {/* Background orbs */}
      <div className="hero-orb-1 absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full blur-[140px]" style={{ background: "rgba(91,143,139,0.14)" }} />
      <div className="hero-orb-2 absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full blur-[120px]" style={{ background: "rgba(212,132,90,0.10)" }} />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-10" style={{ background: "linear-gradient(to bottom, transparent, var(--c-bg))" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-24 lg:pt-28 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <div className="hero-anim-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8" style={{ background: "var(--c-badge-bg)", backdropFilter: "blur(12px)", border: "1px solid var(--c-bd)" }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--c-ok)" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--c-ok)" }} />
              </span>
              <span className="text-[13px] font-medium" style={{ color: "var(--c-body)" }}>Phoenix & Tucson metro</span>
            </div>

            <h1 className="hero-anim-2 font-[family-name:var(--font-heading)] text-[38px] sm:text-[50px] lg:text-[60px] xl:text-[68px] font-extrabold leading-[1.05] tracking-tight mb-8" style={{ color: "var(--c-head)" }}>
              Stop Managing.
              <br />
              <span className="gradient-text">Start Earning.</span>
            </h1>

            {/* Scan points */}
            <div className="hero-anim-3 space-y-3.5 mb-10">
              {[
                "We handle tenants, maintenance & rent collection",
                "You keep full control with real-time reporting",
                "Only 9% monthly — no hidden fees",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--c-ok)" }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-[16px] lg:text-[17px]" style={{ color: "var(--c-body)" }}>{point}</span>
                </div>
              ))}
            </div>

            <div className="hero-anim-4 flex flex-wrap items-center gap-4 mb-10">
              <a href="#pricing" className="group inline-flex items-center gap-3 px-8 py-4 text-white font-[family-name:var(--font-heading)] font-bold text-[15px] rounded-2xl transition-all hover:-translate-y-0.5" style={{ background: "var(--c-copr)", boxShadow: "0 10px 30px rgba(212,132,90,0.25)" }}>
                See Pricing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#how" className="group inline-flex items-center gap-2.5 px-6 py-4 font-medium text-[15px] rounded-2xl transition-all hover:bg-[var(--c-card)]" style={{ color: "var(--c-body)" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--c-copr)", boxShadow: "0 4px 12px rgba(212,132,90,0.3)" }}>
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </div>
                How It Works
              </a>
            </div>

            {/* Social proof */}
            <div className="hero-anim-5 flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {["photo-1507003211169-0a1dd7228f2d","photo-1494790108377-be9c29b29330","photo-1472099645785-5658abf4ff4e","photo-1438761681033-6461ffad8d80"].map((id, i) => (
                  <img key={i} src={`https://images.unsplash.com/${id}?w=80&h=80&fit=crop&crop=face`} alt="" className="w-9 h-9 rounded-full object-cover shrink-0" style={{ border: "2px solid var(--c-bg)" }} loading="lazy" />
                ))}
              </div>
              <div className="w-px h-8" style={{ background: "var(--c-bd)" }} />
              <div>
                <div className="flex mb-0.5">
                  {[0,1,2,3,4].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <span className="text-[12px]" style={{ color: "var(--c-mut)" }}>
                  <span className="font-semibold" style={{ color: "var(--c-body)" }}>4.9</span> from 120+ investors
                </span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="hero-card-anim">
            <div className="relative">
              {/* Geometric accent behind card */}
              <div className="hidden lg:block absolute -bottom-16 -right-16 w-[300px] h-[300px] rounded-full" style={{ border: "1px solid rgba(91,143,139,0.08)", background: "rgba(91,143,139,0.02)" }} />
              <div className="hidden lg:block absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full" style={{ border: "1px solid rgba(212,132,90,0.06)" }} />

              <div className="relative bg-[var(--c-card)] rounded-[28px] overflow-hidden" style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.2), 0 8px 40px rgba(0,0,0,0.4), 0 24px 80px rgba(0,0,0,0.3)" }}>
                <div className="h-1.5" style={{ background: "linear-gradient(to right, #D4845A, #D4945A, #B56E45)" }} />
                <div className="p-8 lg:p-10">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "#6BBF8A15" }}>
                        <CheckCircle className="w-8 h-8" style={{ color: "var(--c-ok)" }} />
                      </div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[22px] tracking-tight mb-2" style={{ color: "var(--c-head)" }}>You&apos;re All Set!</h3>
                      <p className="text-[15px] leading-relaxed" style={{ color: "var(--c-body)" }}>We&apos;ll email your personalized rental analysis within 24 hours.</p>
                      <p className="text-[13px] mt-4" style={{ color: "var(--c-mut)" }}>Check your inbox (and spam folder) for results from RentCore.</p>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[22px] tracking-tight mb-1" style={{ color: "var(--c-head)" }}>Free Rental Analysis</h3>
                      <p className="text-[14px] mb-7" style={{ color: "var(--c-mut)" }}>We&apos;ll analyze your property and email you what it could earn.</p>
                      <form className="space-y-3.5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                        <input type="text" placeholder="Property address" required className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid var(--c-bd)", color: "var(--c-head)", background: "var(--c-inp)" }} onFocus={(e) => { e.target.style.borderColor = "#5B8F8B"; e.target.style.boxShadow = "0 0 0 4px rgba(91,143,139,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#2E3648"; e.target.style.boxShadow = "none"; }} />
                        <input type="email" placeholder="Email address" required className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid var(--c-bd)", color: "var(--c-head)", background: "var(--c-inp)" }} onFocus={(e) => { e.target.style.borderColor = "#5B8F8B"; e.target.style.boxShadow = "0 0 0 4px rgba(91,143,139,0.1)"; }} onBlur={(e) => { e.target.style.borderColor = "#2E3648"; e.target.style.boxShadow = "none"; }} />
                        <button type="submit" className="w-full py-4 text-white font-[family-name:var(--font-heading)] font-bold text-[15px] rounded-2xl transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer" style={{ background: "var(--c-copr)", boxShadow: "0 8px 24px rgba(212,132,90,0.25)" }}>
                          Get My Free Analysis
                        </button>
                      </form>
                      <p className="text-center text-[12px] mt-4" style={{ color: "var(--c-mut)" }}>No obligation · Results emailed within 24 hours</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
