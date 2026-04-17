"use client";

import { useEffect, useRef, useState } from "react";
import {
  Star, ArrowRight, Phone, Menu, X, TrendingUp, Eye, MapPin,
  Megaphone, Shield, Wallet, Wrench, BarChart3, ClipboardCheck,
  Calculator, Settings, ArrowUpRight, ChevronLeft, ChevronRight,
  Mail, Quote,
} from "lucide-react";

/* ═══ KEYSTONE SVG ═══ */
function KS({ size = 20, color = "#F97316" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size * 1.08} viewBox="0 0 52 56" fill="none">
      <path d="M8 48L3 12C3 9.5 4.8 7.3 7.2 6.5L26 0L44.8 6.5C47.2 7.3 49 9.5 49 12L44 48C43.3 50.5 41 52 38.5 52H13.5C11 52 8.7 50.5 8 48Z" fill={color} />
    </svg>
  );
}

/* ═══ SCROLL REVEAL HOOK ═══ */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("revealed"); obs.unobserve(el); }
    }, { threshold: 0.08, rootMargin: "0px 0px -60px 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal-item ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ═══ PARALLAX HERO ═══ */
function CinematicHero() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: ReturnType<typeof gsap.context> | undefined;

    const init = async () => {
      const gsapModule = await import("gsap");
      const stModule = await import("gsap/ScrollTrigger");
      const g = gsapModule.default;
      g.registerPlugin(stModule.ScrollTrigger);

      ctx = g.context(() => {
        const tl = g.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=250%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        /* ── Phase 1: Initial content fades out (0 → 0.25) ── */
        tl.to("[data-hero-badge]", { opacity: 0, y: -30, duration: 0.15 }, 0);
        tl.to("[data-hero-h1]", { opacity: 0, y: -60, duration: 0.2 }, 0.05);
        tl.to("[data-hero-sub]", { opacity: 0, y: -40, duration: 0.15 }, 0.08);
        tl.to("[data-hero-ctas]", { opacity: 0, y: -30, duration: 0.15 }, 0.1);
        tl.to("[data-hero-proof]", { opacity: 0, y: -20, duration: 0.1 }, 0.12);
        tl.to("[data-hero-scroll]", { opacity: 0, duration: 0.1 }, 0);

        /* ── Phase 2: House scales up + shifts (0.15 → 0.6) ── */
        tl.to("[data-hero-house]", {
          scale: 1.35,
          y: -60,
          duration: 0.45,
          ease: "power1.inOut",
        }, 0.15);

        /* Sky parallax — slower */
        tl.to("[data-hero-sky]", {
          y: -80,
          scale: 1.1,
          duration: 0.5,
        }, 0.15);

        /* Darken overlay slightly during scale */
        tl.to("[data-hero-overlay]", {
          opacity: 0.4,
          duration: 0.3,
        }, 0.2);

        /* ── Phase 3: Massive text rises from bottom (0.35 → 0.7) ── */
        tl.fromTo("[data-hero-bigtext]", {
          y: 400,
          opacity: 0,
        }, {
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        }, 0.35);

        /* ── Phase 4: Hold (0.7 → 0.85) ── */
        /* Nothing — let the user absorb the composition */

        /* ── Phase 5: Everything fades to reveal next section (0.85 → 1) ── */
        tl.to("[data-hero-bigtext]", { opacity: 0, y: -80, duration: 0.15 }, 0.85);
        tl.to("[data-hero-house]", { opacity: 0, duration: 0.15 }, 0.85);
        tl.to("[data-hero-sky]", { opacity: 0, duration: 0.15 }, 0.87);

      }, wrapperRef);
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <div ref={wrapperRef}>
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "100vh", background: "#070b14" }}
      >
        {/* ── Layer 1: Sky / Background ── */}
        <div data-hero-sky className="absolute inset-0 will-change-transform">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=85"
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.6 }}
          />
          {/* Warm color wash */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(29,78,216,0.15) 0%, rgba(249,115,22,0.1) 100%)" }} />
        </div>

        {/* ── Layer 2: Gradient overlay ── */}
        <div
          data-hero-overlay
          className="absolute inset-0"
          style={{
            opacity: 0.6,
            background: "linear-gradient(180deg, rgba(7,11,20,0.2) 0%, rgba(7,11,20,0.5) 40%, rgba(7,11,20,0.85) 100%)",
          }}
        />

        {/* ── Layer 3: House / Property ── */}
        <div data-hero-house className="absolute inset-0 will-change-transform flex items-end justify-center">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1200&fit=crop&q=85"
            alt="Luxury property"
            className="w-full object-cover"
            style={{
              height: "75vh",
              objectPosition: "center 30%",
              maskImage: "linear-gradient(to top, rgba(0,0,0,1) 60%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 60%, transparent 100%)",
            }}
          />
        </div>

        {/* ── Layer 4: Ambient glow orbs ── */}
        <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(29,78,216,0.1)" }} />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none" style={{ background: "rgba(249,115,22,0.07)" }} />

        {/* ── Layer 5: Initial hero content ── */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-6 max-w-5xl mx-auto">
            {/* Badge */}
            <div data-hero-badge className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-10" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#059669" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#059669" }} />
              </span>
              <span className="text-[14px] font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>Now serving Phoenix & Tucson metro</span>
            </div>

            {/* Heading */}
            <h1 data-hero-h1 className="font-[family-name:var(--font-heading)] text-[46px] sm:text-[62px] lg:text-[82px] font-extrabold text-white leading-[1.02] tracking-[-0.03em] mb-7">
              Still Managing<br />Your Own Property?
            </h1>

            {/* Sub */}
            <p data-hero-sub className="text-[18px] lg:text-[21px] leading-[1.6] mb-11 max-w-[560px] mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
              We manage like owners, with you every step of the way. Full-service property management for Phoenix &amp; Tucson investors.
            </p>

            {/* CTAs */}
            <div data-hero-ctas className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <a href="#calc" className="group inline-flex items-center gap-3 px-9 py-5 text-white font-[family-name:var(--font-heading)] font-bold text-[16px] rounded-2xl transition-all hover:-translate-y-0.5" style={{ background: "#F97316", boxShadow: "0 8px 32px rgba(249,115,22,0.35)" }}>
                Get Free Rental Analysis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#how" className="inline-flex items-center gap-2 px-7 py-5 font-medium text-[16px] rounded-2xl transition-all" style={{ color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.15)" }}>
                How It Works
              </a>
            </div>

            {/* Social proof */}
            <div data-hero-proof className="inline-flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {["photo-1507003211169-0a1dd7228f2d","photo-1494790108377-be9c29b29330","photo-1472099645785-5658abf4ff4e","photo-1438761681033-6461ffad8d80"].map((id, i) => (
                  <img key={i} src={`https://images.unsplash.com/${id}?w=80&h=80&fit=crop&crop=face`} alt="" width={36} height={36} className="rounded-full object-cover w-9 h-9" style={{ border: "2px solid rgba(255,255,255,0.2)" }} loading="lazy" />
                ))}
              </div>
              <div className="w-px h-7" style={{ background: "rgba(255,255,255,0.15)" }} />
              <div className="text-left">
                <div className="flex mb-0.5">{[0,1,2,3,4].map((i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}</div>
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}><span style={{ color: "rgba(255,255,255,0.7)" }}>4.9</span> from 120+ investors</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Layer 6: MASSIVE TEXT with background-clip mask ── */}
        <div
          data-hero-bigtext
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
          style={{ opacity: 0 }}
        >
          <h2
            className="font-[family-name:var(--font-heading)] font-[900] text-center leading-[0.85] tracking-[-0.04em] select-none"
            style={{
              fontSize: "clamp(80px, 18vw, 280px)",
              backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=90')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              filter: "brightness(1.3) contrast(1.1)",
            }}
          >
            RENT<br />CORE
          </h2>
          {/* Tagline below the big text */}
          <p
            className="absolute bottom-[16%] left-1/2 -translate-x-1/2 font-[family-name:var(--font-heading)] text-[15px] lg:text-[19px] font-medium tracking-[0.2em] uppercase text-center whitespace-nowrap"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            We manage like owners
          </p>
        </div>

        {/* Scroll indicator */}
        <div data-hero-scroll className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.25)" }}>Scroll</span>
          <div className="w-5 h-8 rounded-full flex items-start justify-center p-1" style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
            <div className="w-1 h-2 rounded-full animate-bounce" style={{ background: "rgba(255,255,255,0.4)" }} />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══ TRUST BAR ═══ */
function TrustBar() {
  return (
    <section style={{ background: "#fff", borderBottom: "1px solid #F1F5F9" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {[
            { val: "150+", label: "Doors Managed" },
            { val: "98%", label: "Tenant Retention" },
            { val: "15 Days", label: "Avg. Lease Time" },
            { val: "4.9", label: "Investor Rating", suffix: "★" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="text-center" style={i < 3 ? { borderRight: "1px solid #F1F5F9" } : {}}>
                <p className="font-[family-name:var(--font-heading)] text-[40px] lg:text-[48px] font-extrabold leading-none mb-2 tracking-tight" style={{ color: "#0F172A" }}>
                  {s.val}{s.suffix && <span style={{ color: "#F97316" }}>{s.suffix}</span>}
                </p>
                <p className="text-[14px]" style={{ color: "#94A3B8" }}>{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ WHY SECTION — Editorial Style ═══ */
function WhySection() {
  return (
    <section className="py-28 lg:py-40" style={{ background: "#FAFBFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-[13px] font-semibold tracking-[0.25em] uppercase" style={{ color: "#F97316" }}>Why Rent Core</span>
            <h2 className="font-[family-name:var(--font-heading)] text-[38px] lg:text-[56px] font-extrabold leading-[1.08] tracking-tight mt-5 max-w-[800px] mx-auto" style={{ color: "#0F172A" }}>
              Your Time Is Worth More Than Managing Tenants
            </h2>
            <p className="text-[18px] lg:text-[20px] leading-[1.7] mt-6 max-w-[600px] mx-auto" style={{ color: "#64748B" }}>
              You didn&apos;t invest in real estate to answer maintenance calls or coordinate repairs. We step in to take over the workload — without taking away your control.
            </p>
          </div>
        </Reveal>

        {/* Image + Text alternating rows — editorial style */}
        <div className="space-y-20 lg:space-y-32">
          {[
            {
              img: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=600&fit=crop",
              icon: TrendingUp, color: "#1D4ED8",
              title: "Ownership-Minded Management",
              desc: "We treat each property with the care we'd give our own. Market rate analysis, proactive maintenance, and vacancy minimization — every decision protects your long-term property value.",
              stat: "+12%", statLabel: "avg. rent increase",
              reverse: false,
            },
            {
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
              icon: Eye, color: "#F97316",
              title: "You Stay Informed, Always",
              desc: "Real-time owner portal. Monthly financial reports. You stay informed, your property stays protected, and your time becomes your own again.",
              stat: "24/7", statLabel: "portal access",
              reverse: true,
            },
            {
              img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
              icon: MapPin, color: "#059669",
              title: "A Simple Transition",
              desc: "Many of our clients started by managing their own properties. Over time, the calls, coordination, and constant oversight became more work than expected. We make the transition simple.",
              stat: "15+", statLabel: "years in Arizona",
              reverse: false,
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={100}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${item.reverse ? "lg:direction-rtl" : ""}`} style={item.reverse ? { direction: "rtl" } : {}}>
                {/* Image */}
                <div className="rounded-[32px] overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.1)", direction: "ltr" }}>
                  <img src={item.img} alt={item.title} className="w-full h-[400px] lg:h-[480px] object-cover" loading="lazy" />
                </div>
                {/* Text */}
                <div style={{ direction: "ltr" }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: `${item.color}12` }}>
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px] font-bold tracking-tight mb-4" style={{ color: "#0F172A" }}>
                    {item.title}
                  </h3>
                  <p className="text-[16px] lg:text-[17px] leading-[1.8] mb-8" style={{ color: "#64748B" }}>
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="font-[family-name:var(--font-heading)] text-[36px] font-extrabold" style={{ color: item.color }}>{item.stat}</span>
                    <span className="text-[13px] font-medium" style={{ color: "#94A3B8" }}>{item.statLabel}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ SERVICES — Full-bleed Image Cards ═══ */
function ServicesSection() {
  return (
    <section className="py-28 lg:py-40" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[13px] font-semibold tracking-[0.25em] uppercase" style={{ color: "#F97316" }}>What We Do</span>
            <h2 className="font-[family-name:var(--font-heading)] text-[38px] lg:text-[56px] font-extrabold leading-[1.08] tracking-tight mt-5" style={{ color: "#0F172A" }}>
              Full-Service Management
            </h2>
          </div>
        </Reveal>

        {/* 3 big image cards — like findrealestate Buy/Sell/Rent */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {[
            { title: "Leasing", desc: "Professional photos, multi-platform listings. Average 15 days to lease.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=800&fit=crop" },
            { title: "Management", desc: "Rent collection, maintenance, tenant relations. We handle everything.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop" },
            { title: "Reporting", desc: "Monthly statements, year-end 1099s, real-time portal. Full transparency.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=800&fit=crop" },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 120}>
              <div className="group relative rounded-[28px] overflow-hidden cursor-pointer" style={{ height: "480px" }}>
                <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <h3 className="font-[family-name:var(--font-heading)] text-[28px] font-bold text-white mb-2 tracking-tight">{card.title}</h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{card.desc}</p>
                  <span className="inline-flex items-center gap-2 mt-4 text-[14px] font-medium text-white group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Smaller service grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Shield, title: "Tenant Screening" },
            { icon: Wrench, title: "Maintenance" },
            { icon: ClipboardCheck, title: "Inspections" },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="flex items-center gap-4 p-6 rounded-2xl transition-all hover:-translate-y-0.5" style={{ background: "#F8FAFC", border: "1px solid #F1F5F9" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(249,115,22,0.1)" }}>
                  <s.icon className="w-5 h-5" style={{ color: "#F97316" }} />
                </div>
                <span className="font-[family-name:var(--font-heading)] font-semibold text-[15px]" style={{ color: "#0F172A" }}>{s.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ HOW IT WORKS — 3-Step Process ═══ */
function HowItWorks() {
  return (
    <section id="how" className="py-28 lg:py-40" style={{ background: "#FAFBFF" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-[13px] font-semibold tracking-[0.25em] uppercase" style={{ color: "#F97316" }}>How It Works</span>
            <h2 className="font-[family-name:var(--font-heading)] text-[38px] lg:text-[56px] font-extrabold leading-[1.08] tracking-tight mt-5" style={{ color: "#0F172A" }}>
              Three Simple Steps
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          <div className="hidden md:block absolute top-16 left-[18%] right-[18%] h-px" style={{ background: "linear-gradient(to right, #E2E8F0, rgba(249,115,22,0.3), #E2E8F0)" }} />
          {[
            { step: "01", icon: Calculator, title: "Get Your Analysis", desc: "Tell us about your property. We analyze the market and show you what your rental income should be — free." },
            { step: "02", icon: Settings, title: "We Handle Everything", desc: "From listing to screening to rent collection — we take over the day-to-day so you don't have to." },
            { step: "03", icon: ArrowUpRight, title: "You Earn, We Report", desc: "Watch your income hit your account monthly. Real-time reports, tax docs, and full transparency." },
          ].map((s, i) => (
            <Reveal key={s.step} delay={i * 150}>
              <div className="text-center relative">
                <div className="relative inline-block mb-8">
                  <div className="w-28 h-28 rounded-[32px] flex items-center justify-center" style={{ background: "#fff", border: "1px solid #F1F5F9", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                    <s.icon className="w-10 h-10" style={{ color: "#94A3B8" }} />
                  </div>
                  <span className="absolute -top-3 -right-3 w-9 h-9 rounded-xl text-white text-[13px] font-bold flex items-center justify-center font-[family-name:var(--font-heading)]" style={{ background: "#F97316", boxShadow: "0 4px 16px rgba(249,115,22,0.3)" }}>
                    {s.step}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[22px] mb-3 tracking-tight" style={{ color: "#0F172A" }}>{s.title}</h3>
                <p className="text-[15px] leading-[1.7] max-w-[280px] mx-auto" style={{ color: "#64748B" }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ TESTIMONIALS CAROUSEL ═══ */
function Testimonials() {
  const [active, setActive] = useState(0);
  const reviews = [
    { text: "Rent Core transformed how I think about my rental portfolio. Their monthly reports are institutional-quality, and my vacancy rate dropped to nearly zero.", name: "Michael Torres", role: "Owns 8 properties in Chandler" },
    { text: "As an out-of-state investor, I needed a team I could trust completely. Rent Core's transparency and communication exceeded every expectation.", name: "Sarah Chen", role: "California-based investor" },
    { text: "I was managing my own rentals for 5 years. Switching to Rent Core actually increased my net income because they price and maintain better than I did.", name: "David Okonkwo", role: "Owns 3 properties in Mesa" },
    { text: "The rental analysis alone was worth it — they found I was undercharging by $200/month. That's $2,400/year I was leaving on the table.", name: "Jennifer Walsh", role: "Accidental landlord, Scottsdale" },
  ];

  return (
    <section className="py-28 lg:py-40 overflow-hidden" style={{ background: "#0F172A" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[13px] font-semibold tracking-[0.25em] uppercase" style={{ color: "#F97316" }}>Testimonials</span>
            <h2 className="font-[family-name:var(--font-heading)] text-[38px] lg:text-[56px] font-extrabold leading-[1.08] tracking-tight mt-5 text-white">
              What Investors Say
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="text-center px-4 lg:px-16">
            <Quote className="w-10 h-10 mx-auto mb-8" style={{ color: "rgba(249,115,22,0.4)" }} />
            <p className="font-[family-name:var(--font-heading)] text-[22px] lg:text-[28px] font-medium text-white leading-[1.5] mb-10 min-h-[140px]" style={{ transition: "opacity 0.4s" }}>
              &ldquo;{reviews[active].text}&rdquo;
            </p>
            <p className="font-[family-name:var(--font-heading)] font-bold text-[16px] text-white">{reviews[active].name}</p>
            <p className="text-[14px] mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{reviews[active].role}</p>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className="w-2.5 h-2.5 rounded-full transition-all cursor-pointer" style={{ background: i === active ? "#F97316" : "rgba(255,255,255,0.15)" }} />
            ))}
          </div>

          {/* Arrows */}
          <button onClick={() => setActive((active - 1 + reviews.length) % reviews.length)} className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <ChevronLeft className="w-5 h-5" style={{ color: "rgba(255,255,255,0.5)" }} />
          </button>
          <button onClick={() => setActive((active + 1) % reviews.length)} className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <ChevronRight className="w-5 h-5" style={{ color: "rgba(255,255,255,0.5)" }} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══ RENTAL ANALYSIS CALCULATOR ═══ */
function RentalCalc() {
  return (
    <section id="calc" className="py-28 lg:py-40" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <span className="text-[13px] font-semibold tracking-[0.25em] uppercase" style={{ color: "#F97316" }}>Free Rental Analysis</span>
              <h2 className="font-[family-name:var(--font-heading)] text-[38px] lg:text-[50px] font-extrabold leading-[1.08] tracking-tight mt-5 mb-6" style={{ color: "#0F172A" }}>
                What&apos;s Your Property Worth?
              </h2>
              <p className="text-[17px] leading-[1.75] mb-10" style={{ color: "#64748B" }}>
                Get a free rental income estimate in 60 seconds. No commitment, no obligation — just clarity on what your investment should be earning.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {["photo-1507003211169-0a1dd7228f2d","photo-1494790108377-be9c29b29330","photo-1472099645785-5658abf4ff4e"].map((id, i) => (
                    <img key={i} src={`https://images.unsplash.com/${id}?w=80&h=80&fit=crop&crop=face`} alt="" width={36} height={36} className="rounded-full object-cover w-9 h-9" style={{ border: "2px solid white" }} loading="lazy" />
                  ))}
                </div>
                <div>
                  <div className="flex mb-0.5">{[0,1,2,3,4].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}</div>
                  <span className="text-[12px]" style={{ color: "#94A3B8" }}>Trusted by 120+ Phoenix investors</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-[28px] overflow-hidden" style={{ background: "#fff", boxShadow: "0 0 0 1px rgba(0,0,0,0.03), 0 8px 40px rgba(0,0,0,0.08), 0 24px 80px rgba(0,0,0,0.05)" }}>
              <div className="h-1.5" style={{ background: "linear-gradient(to right, #F97316, #fb923c, #EA580C)" }} />
              <div className="p-8 lg:p-10">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Property address" className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid #E2E8F0", background: "#F8FAFC", color: "#0F172A" }} />
                  <div className="grid grid-cols-3 gap-3">
                    {["Bedrooms","Bathrooms","Type"].map((l) => (
                      <select key={l} defaultValue="" className="px-4 py-4 rounded-2xl text-[14px] outline-none appearance-none" style={{ border: "1px solid #E2E8F0", background: "#F8FAFC", color: "#64748B" }}>
                        <option value="" disabled>{l}</option>
                        <option>1</option><option>2</option><option>3</option><option>4+</option>
                      </select>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Full name" className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none" style={{ border: "1px solid #E2E8F0", background: "#F8FAFC" }} />
                    <input type="email" placeholder="Email" className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none" style={{ border: "1px solid #E2E8F0", background: "#F8FAFC" }} />
                  </div>
                  <button type="submit" className="w-full py-4.5 text-white font-[family-name:var(--font-heading)] font-bold text-[16px] rounded-2xl transition-all hover:-translate-y-0.5 cursor-pointer" style={{ background: "#F97316", boxShadow: "0 8px 24px rgba(249,115,22,0.25)" }}>
                    Get My Free Analysis
                  </button>
                </form>
                <p className="text-center text-[12px] mt-4" style={{ color: "#94A3B8" }}>No obligation · 60 seconds · Results emailed instantly</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══ AREAS SERVED ═══ */
function Areas() {
  return (
    <section className="relative overflow-hidden">
      <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1920&h=1080&fit=crop&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.88)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div>
              <span className="text-[13px] font-semibold tracking-[0.25em] uppercase" style={{ color: "#F97316" }}>Where We Serve</span>
              <h2 className="font-[family-name:var(--font-heading)] text-[38px] lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight mt-5 mb-6">
                Phoenix + Tucson.<br /><span style={{ color: "rgba(255,255,255,0.35)" }}>Block by Block.</span>
              </h2>
              <p className="text-[17px] leading-[1.75] max-w-[420px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                We manage single-family rentals across both metros. Scottsdale golf community or Mesa starter home — we know the market.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: "rgba(255,255,255,0.25)" }}>Phoenix Metro</p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {["Phoenix","Scottsdale","Tempe","Mesa","Chandler","Gilbert","Glendale","Peoria","Surprise","Goodyear","Avondale","Buckeye","Queen Creek","Maricopa"].map((c) => (
                  <span key={c} className="px-4 py-2.5 rounded-full text-[13px] font-medium cursor-pointer transition-all duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.75)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    {c}
                  </span>
                ))}
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: "rgba(255,255,255,0.25)" }}>Tucson Metro</p>
              <div className="flex flex-wrap gap-2.5">
                {["Tucson","Oro Valley","Marana","Sahuarita","Vail","Green Valley"].map((c) => (
                  <span key={c} className="px-4 py-2.5 rounded-full text-[13px] font-medium cursor-pointer transition-all duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.75)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══ FINAL CTA ═══ */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.93)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]" style={{ background: "rgba(29,78,216,0.1)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-28 lg:py-40 text-center">
        <Reveal>
          <h2 className="font-[family-name:var(--font-heading)] text-[40px] sm:text-[52px] lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-tight mb-7">
            It Doesn&apos;t Have to Stay That Way.
          </h2>
          <p className="text-[19px] leading-[1.7] mb-12 max-w-[540px] mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            If managing your property is starting to feel like a second job, it may be time to hand it off. Get a free rental analysis — no commitment.
          </p>
          <a href="#calc" className="group inline-flex items-center gap-3 px-10 py-5 text-white font-[family-name:var(--font-heading)] font-bold text-[17px] rounded-2xl transition-all hover:-translate-y-0.5" style={{ background: "#F97316", boxShadow: "0 8px 32px rgba(249,115,22,0.35)" }}>
            Get Your Free Analysis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══ FOOTER ═══ */
function SiteFooter() {
  return (
    <footer style={{ background: "#0F172A" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14 mb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <KS size={20} />
              <span className="font-[family-name:var(--font-heading)] text-[18px] font-bold text-white">RentCore</span>
            </div>
            <p className="text-[14px] leading-relaxed mb-6 max-w-[280px]" style={{ color: "rgba(255,255,255,0.4)" }}>We manage like owners, with you every step of the way.</p>
            <div className="space-y-3">
              <a href="tel:+16025550180" className="flex items-center gap-2.5 text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}><Phone className="w-4 h-4 shrink-0" /> (602) 555-0180</a>
              <a href="mailto:info@rentcorepm.com" className="flex items-center gap-2.5 text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}><Mail className="w-4 h-4 shrink-0" /> info@rentcorepm.com</a>
            </div>
          </div>
          {[
            { t: "Owners", l: ["Why Rent Core","Services","Pricing","Rental Analysis","Owner Portal"] },
            { t: "Tenants", l: ["Available Rentals","Apply Online","Tenant Portal","Maintenance"] },
            { t: "Company", l: ["About Us","Areas Served","Blog","Contact","Careers"] },
          ].map((col) => (
            <div key={col.t}>
              <p className="font-[family-name:var(--font-heading)] font-semibold text-white text-[14px] mb-5">{col.t}</p>
              <div className="space-y-3">
                {col.l.map((link) => <a key={link} href="#" className="block text-[13px]" style={{ color: "rgba(255,255,255,0.35)" }}>{link}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.2)" }}>© 2026 Rent Core Property Management. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[12px]" style={{ color: "rgba(255,255,255,0.2)" }}>Privacy Policy</a>
            <a href="#" className="text-[12px]" style={{ color: "rgba(255,255,255,0.2)" }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══ HEADER ═══ */
function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: scrolled ? "rgba(255,255,255,0.95)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid #F1F5F9" : "none" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[76px]">
          <a href="/home-new" className="flex items-center gap-2.5">
            <KS size={22} />
            <span className="font-[family-name:var(--font-heading)] text-[19px] font-bold tracking-tight" style={{ color: scrolled ? "#0F172A" : "#fff" }}>RentCore</span>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {["Owners","Services","Areas","About","Contact"].map((l) => (
              <a key={l} href="#" className="text-[14px] font-medium transition-colors" style={{ color: scrolled ? "#64748B" : "rgba(255,255,255,0.7)" }}>{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:+16025550180" className="hidden md:flex items-center gap-2 text-[14px] font-medium transition-colors" style={{ color: scrolled ? "#334155" : "rgba(255,255,255,0.8)" }}>
              <Phone className="w-4 h-4" /> (602) 555-0180
            </a>
            <a href="#calc" className="hidden sm:inline-flex px-5 py-2.5 text-white text-[13px] font-[family-name:var(--font-heading)] font-bold rounded-xl transition-all hover:-translate-y-0.5" style={{ background: "#F97316", boxShadow: "0 4px 12px rgba(249,115,22,0.25)" }}>
              Get Rental Analysis
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-xl cursor-pointer">
              {menuOpen ? <X className="w-5 h-5" style={{ color: scrolled ? "#334155" : "#fff" }} /> : <Menu className="w-5 h-5" style={{ color: scrolled ? "#334155" : "#fff" }} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ═══ PAGE ═══ */
export default function HomeNew() {
  return (
    <>
      <style>{`
        .reveal-item {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-item.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-content {
          animation: heroIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <SiteHeader />
      <main>
        <CinematicHero />
        <TrustBar />
        <WhySection />
        <ServicesSection />
        <HowItWorks />
        <Testimonials />
        <RentalCalc />
        <Areas />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
