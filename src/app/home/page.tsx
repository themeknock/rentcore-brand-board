"use client";

import { useState, useEffect } from "react";
import {
  Star, ArrowRight, Phone, Menu, X, TrendingUp, Eye, MapPin,
  Megaphone, Shield, Wallet, Wrench, BarChart3, ClipboardCheck,
  Calculator, Settings, ArrowUpRight, Check, Mail,
} from "lucide-react";

/* ─── Wordmark Logo — Dale approved Option A (Apr 12) ─── */
function Logo({ size = 22 }: { size?: number }) {
  return (
    <span className="font-[family-name:var(--font-heading)] font-extrabold tracking-tight" style={{ fontSize: `${size}px` }}>
      <span style={{ color: "#1D4ED8" }}>Rent</span>
      <span style={{ color: "#F97316" }}>Core</span>
    </span>
  );
}

/* SR removed — opacity:0 initial state causes invisible sections in static export */

/* ═══════════════════════════════════════
   HEADER
   ═══════════════════════════════════════ */
function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 20); window.addEventListener("scroll", h, { passive: true }); return () => window.removeEventListener("scroll", h); }, []);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: scrolled ? "rgba(255,255,255,0.95)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid #F1F5F9" : "none" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12"><div className="flex items-center justify-between h-[72px] lg:h-[80px]">
        <a href="/home" className="flex items-center"><Logo size={22} /></a>
        <nav className="hidden lg:flex items-center gap-8">{["Owners","Services","Pricing","Areas","About"].map(l => <a key={l} href={`#${l.toLowerCase()}`} className="text-[14px] font-medium transition-colors" style={{ color: "#64748B" }}>{l}</a>)}</nav>
        <div className="flex items-center gap-4">
          <a href="tel:+16025550180" className="hidden md:flex items-center gap-2 text-[14px] font-medium" style={{ color: "#334155" }}><Phone className="w-4 h-4" />(602) 555-0180</a>
          <a href="#hero" className="hidden sm:inline-flex px-5 py-2.5 text-white text-[13px] font-[family-name:var(--font-heading)] font-bold rounded-xl transition-all hover:-translate-y-0.5" style={{ background: "#F97316", boxShadow: "0 4px 12px rgba(249,115,22,0.25)" }}>Get Rental Analysis</a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-xl cursor-pointer">{open ? <X className="w-5 h-5" style={{ color: "#334155" }} /> : <Menu className="w-5 h-5" style={{ color: "#334155" }} />}</button>
        </div>
      </div></div>
    </header>
  );
}

/* ═══════════════════════════════════════
   FULL PAGE
   ═══════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <style>{`
        html, body { overflow: auto !important; height: auto !important; background: #fff !important; color: #0F172A !important; }
        input::placeholder, select { color: #94A3B8 !important; }
        .gradient-text { background: linear-gradient(135deg, #1D4ED8, #3B82F6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .reveal { animation: revUp 0.7s ease-out both; }
        @keyframes revUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        ::selection { background: #1D4ED8; color: white; }
      `}</style>

      <SiteHeader />

      <main>
        {/* ═══ HERO ═══ */}
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#f8faff" }}>
          <div className="absolute top-[5%] right-[10%] w-[600px] h-[600px] rounded-full blur-[100px]" style={{ background: "rgba(29,78,216,0.06)" }} />
          <div className="absolute bottom-[5%] left-[5%] w-[500px] h-[500px] rounded-full blur-[100px]" style={{ background: "rgba(249,115,22,0.05)" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-28 lg:pt-36 pb-16 lg:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="reveal inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-10" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.5)" }}>
                  <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#059669" }} /><span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#059669" }} /></span>
                  <span className="text-[13px] font-medium" style={{ color: "#475569" }}>Now serving Phoenix & Tucson metro</span>
                </div>
                <h1 className="reveal font-[family-name:var(--font-heading)] text-[38px] sm:text-[50px] lg:text-[62px] xl:text-[70px] font-extrabold leading-[1.05] tracking-tight mb-8" style={{ color: "#0F172A", animationDelay: "0.1s" }}>
                  Still Managing Your Own Property? <span className="gradient-text">It Doesn&apos;t Have to Stay That Way.</span>
                </h1>
                <p className="reveal text-[17px] lg:text-[19px] leading-[1.75] mb-10 max-w-[520px]" style={{ color: "#64748B", animationDelay: "0.2s" }}>
                  You know how to manage your property — but at some point, it starts to take more time than it&apos;s worth. That&apos;s where we come in. We manage like owners, with you every step of the way.
                </p>
                <div className="reveal flex flex-wrap items-center gap-4 mb-10" style={{ animationDelay: "0.3s" }}>
                  <a href="#hero" className="group inline-flex items-center gap-3 px-8 py-4 text-white font-[family-name:var(--font-heading)] font-bold text-[15px] rounded-2xl transition-all hover:-translate-y-0.5" style={{ background: "#0F172A", boxShadow: "0 10px 30px rgba(15,23,42,0.2)" }}>Get Free Rental Analysis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>
                  <a href="#how" className="inline-flex items-center gap-2 px-6 py-4 font-medium text-[15px] rounded-2xl transition-all hover:bg-gray-100" style={{ color: "#475569" }}>See How It Works</a>
                </div>
                <div className="reveal flex items-center gap-4" style={{ animationDelay: "0.4s" }}>
                  <div className="flex -space-x-2.5">{["photo-1507003211169-0a1dd7228f2d","photo-1494790108377-be9c29b29330","photo-1472099645785-5658abf4ff4e","photo-1438761681033-6461ffad8d80"].map((id,i) => <img key={i} src={`https://images.unsplash.com/${id}?w=80&h=80&fit=crop&crop=face`} alt="" width={36} height={36} className="rounded-full object-cover w-9 h-9" style={{ border: "2px solid white" }} loading="lazy" />)}</div>
                  <div className="w-px h-8" style={{ background: "#E2E8F0" }} />
                  <div><div className="flex mb-0.5">{[0,1,2,3,4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}</div><span className="text-[12px]" style={{ color: "#94A3B8" }}><span className="font-semibold" style={{ color: "#475569" }}>4.9</span> from 120+ investors</span></div>
                </div>
              </div>
              {/* Calculator */}
              <div className="reveal" style={{ animationDelay: "0.3s" }}>
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-[180px] h-[180px] rounded-3xl overflow-hidden hidden xl:block" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}><img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop" alt="" className="object-cover w-full h-full" loading="lazy" /></div>
                  <div className="relative bg-white rounded-[28px] overflow-hidden" style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.03), 0 8px 40px rgba(0,0,0,0.08), 0 24px 80px rgba(0,0,0,0.05)" }}>
                    <div className="h-1.5" style={{ background: "linear-gradient(to right, #F97316, #fb923c, #EA580C)" }} />
                    <div className="p-8 lg:p-10">
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[22px] tracking-tight mb-1" style={{ color: "#0F172A" }}>What&apos;s Your Property Worth?</h3>
                      <p className="text-[14px] mb-7" style={{ color: "#94A3B8" }}>Free rental income estimate in 60 seconds.</p>
                      <form className="space-y-3.5" onSubmit={e => e.preventDefault()}>
                        <input type="text" placeholder="Enter your property address" className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid #E2E8F0", color: "#0F172A", background: "#F8FAFC" }} />
                        <div className="grid grid-cols-3 gap-3">{["Bedrooms","Bathrooms","Type"].map(l => <select key={l} defaultValue="" className="px-4 py-4 rounded-2xl text-[14px] outline-none transition-all appearance-none" style={{ border: "1px solid #E2E8F0", color: "#64748B", background: "#F8FAFC" }}><option value="" disabled>{l}</option><option>1</option><option>2</option><option>3</option></select>)}</div>
                        <div className="grid grid-cols-2 gap-3">
                          <input type="text" placeholder="Full name" className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid #E2E8F0", background: "#F8FAFC", color: "#0F172A" }} />
                          <input type="email" placeholder="Email" className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid #E2E8F0", background: "#F8FAFC", color: "#0F172A" }} />
                        </div>
                        <button type="submit" className="w-full py-4 text-white font-[family-name:var(--font-heading)] font-bold text-[15px] rounded-2xl transition-all hover:-translate-y-0.5 cursor-pointer" style={{ background: "#F97316", boxShadow: "0 8px 24px rgba(249,115,22,0.25)" }}>Get My Free Analysis</button>
                      </form>
                      <p className="text-center text-[12px] mt-4" style={{ color: "#94A3B8" }}>No obligation · 60 seconds · Results emailed instantly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TRUST BAR ═══ */}
        
        <section style={{ background: "linear-gradient(to right, #F8FAFC, #fff, #F8FAFC)", borderTop: "1px solid #F1F5F9", borderBottom: "1px solid #F1F5F9" }}>
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
              {[{ v: "150+", l: "Doors Managed" }, { v: "98%", l: "Tenant Retention" }, { v: "15 Days", l: "Avg. Lease Time" }, { v: "4.9 ★", l: "Investor Rating" }].map((s, i) => (
                <div key={s.l} className="text-center" style={{ borderRight: i < 3 ? "1px solid #F1F5F9" : "none" }}>
                  <p className="font-[family-name:var(--font-heading)] text-[36px] lg:text-[42px] font-extrabold leading-none mb-2 tracking-tight" style={{ color: "#0F172A" }}>{s.v}</p>
                  <p className="text-[14px]" style={{ color: "#94A3B8" }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        

        {/* ═══ WHY RENT CORE ═══ */}
        
        <section id="owners" className="py-24 lg:py-36" style={{ background: "linear-gradient(180deg, #fff 0%, #f8faff 50%, #fff 100%)" }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-16 lg:mb-24">
              <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "#F97316" }}>Why Rent Core</span>
              <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight max-w-[750px] mx-auto" style={{ color: "#0F172A" }}>Your Time Is Worth More Than <span className="gradient-text">Managing Tenants</span></h2>
              <p className="text-[17px] lg:text-[19px] leading-[1.7] mt-6 max-w-[620px] mx-auto" style={{ color: "#64748B" }}>If managing your property is starting to feel like a second job, it may be time to hand it off.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { icon: TrendingUp, title: "We Take Over the Workload", desc: "At Rent Core Property Management, we step in to take over the workload — without taking away your control. You stay informed, your property stays protected, and your time becomes your own again.", stat: "+12%", statLabel: "avg. rent increase", color: "#1D4ED8" },
                { icon: Eye, title: "Focus on Growing, Not Managing", desc: "We handle the day-to-day operations while keeping you informed — so you can focus on growing your portfolio, not managing it. You didn't invest in real estate to answer maintenance calls or coordinate repairs.", stat: "24/7", statLabel: "portal access", color: "#F97316" },
                { icon: MapPin, title: "A Simple Transition", desc: "Many of our clients started by managing their own properties. Over time, the calls, coordination, and constant oversight became more work than expected. We make the transition simple — taking over the daily responsibilities while keeping everything running smoothly and transparently.", stat: "15+", statLabel: "years in AZ", color: "#059669" },
              ].map(card => (
                <div key={card.title} className="group relative rounded-[28px] p-8 lg:p-10 bg-white transition-all duration-300 hover:-translate-y-1 cursor-default" style={{ border: "1px solid #F1F5F9", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                  <div className="absolute top-8 right-8 text-right"><p className="font-[family-name:var(--font-heading)] font-extrabold text-[28px] tracking-tight" style={{ color: card.color }}>{card.stat}</p><p className="text-[11px] font-medium" style={{ color: "#94A3B8" }}>{card.statLabel}</p></div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7" style={{ background: `${card.color}18` }}><card.icon className="w-6 h-6" style={{ color: card.color }} /></div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[20px] mb-3 tracking-tight" style={{ color: "#0F172A" }}>{card.title}</h3>
                  <p className="text-[15px] leading-[1.7] mb-6" style={{ color: "#64748B" }}>{card.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium" style={{ color: "#94A3B8" }}>Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></span>
                </div>
              ))}
            </div>
          </div>
        </section>
        

        {/* ═══ SERVICES ═══ */}
        
        <section id="services" className="relative py-24 lg:py-36 overflow-hidden" style={{ background: "#0F172A" }}>
          <div className="absolute top-0 right-[20%] w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: "rgba(29,78,216,0.07)" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-16 lg:mb-20">
              <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "#F97316" }}>What We Do</span>
              <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold text-white leading-[1.1] tracking-tight">Everything Between<br className="hidden sm:block" /> <span style={{ color: "rgba(255,255,255,0.35)" }}>&apos;Keys in Hand&apos;</span> and <span style={{ color: "rgba(255,255,255,0.35)" }}>&apos;Rent in Your Account&apos;</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {[
                { icon: Megaphone, title: "Marketing & Leasing", desc: "Professional photos, multi-platform listings, and showings that fill vacancies fast. Average time to lease: 15 days." },
                { icon: Shield, title: "Tenant Screening", desc: "Credit checks, income verification, rental history, and background screening. We find tenants who pay on time and stay long." },
                { icon: Wallet, title: "Rent Collection", desc: "Automated rent collection with online tenant payments. Funds deposited to your account by the 10th of every month." },
                { icon: Wrench, title: "Maintenance", desc: "24/7 maintenance coordination with vetted, licensed vendors. Transparent pricing on every repair — no markups." },
                { icon: BarChart3, title: "Financial Reporting", desc: "Monthly owner statements, year-end 1099s, and real-time portal access. Your accountant will thank you." },
                { icon: ClipboardCheck, title: "Inspections & Compliance", desc: "Move-in/move-out inspections, routine checks, and AZ landlord-tenant law compliance." },
              ].map(svc => (
                <div key={svc.title} className="rounded-[24px] p-8 lg:p-9 transition-all duration-300 hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: "rgba(249,115,22,0.18)" }}><svc.icon className="w-5 h-5" style={{ color: "#F97316" }} /></div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-white text-[18px] mb-3 tracking-tight">{svc.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        

        {/* ═══ PRICING ═══ */}
        
        <section id="pricing" className="py-24 lg:py-36" style={{ background: "#fff" }}>
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-16 lg:mb-20">
              <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "#F97316" }}>Pricing</span>
              <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "#0F172A" }}>Simple, Transparent Pricing</h2>
              <p className="text-[17px] lg:text-[19px] leading-[1.7] mt-6 max-w-[620px] mx-auto" style={{ color: "#64748B" }}>We provide full service, hands-on property management designed to eliminate the stress of ownership — our pricing reflects the level of service and communication most investors don&apos;t get elsewhere.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
              <div className="rounded-[28px] overflow-hidden" style={{ border: "1px solid #F1F5F9", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <div className="p-8 lg:p-10" style={{ background: "#0F172A" }}>
                  <p className="text-[13px] font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>Management Fee</p>
                  <div className="flex items-baseline gap-2"><span className="font-[family-name:var(--font-heading)] text-[52px] font-extrabold text-white tracking-tight">9%</span><span className="text-[16px]" style={{ color: "rgba(255,255,255,0.5)" }}>of monthly rent</span></div>
                  <p className="text-[14px] mt-2" style={{ color: "rgba(255,255,255,0.35)" }}>Minimum $125 per month</p>
                </div>
                <div className="bg-white">
                  {[{ l: "Leasing Fee (tenant placement)", v: "75% of one month's rent" }, { l: "Lease Renewal Fee", v: "$300" }, { l: "Maintenance Work Order Fee", v: "$50 / quarter" }, { l: "Lease Setup / Admin Fee", v: "$195" }].map((fee, i) => (
                    <div key={fee.l} className="flex items-center justify-between px-8 lg:px-10 py-5" style={{ borderBottom: i < 3 ? "1px solid #F1F5F9" : "none" }}>
                      <span className="text-[14px] font-medium" style={{ color: "#334155" }}>{fee.l}</span>
                      <span className="font-[family-name:var(--font-heading)] font-bold text-[15px] shrink-0 ml-4" style={{ color: "#0F172A" }}>{fee.v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[22px] mb-2 tracking-tight" style={{ color: "#0F172A" }}>What&apos;s Included</h3>
                <p className="text-[15px] mb-8" style={{ color: "#64748B" }}>Every service included in your management fee — no surprise charges.</p>
                <div className="space-y-4">
                  {["Marketing & tenant placement","Tenant screening & background checks","Rent collection & disbursement","24/7 maintenance coordination","Monthly financial statements","Year-end 1099 tax documents","Owner portal access","Move-in/move-out inspections","Lease enforcement & compliance","Personalized, proactive communication"].map(item => (
                    <div key={item} className="flex items-start gap-3"><div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: "#05966912" }}><Check className="w-3.5 h-3.5" style={{ color: "#059669" }} /></div><span className="text-[15px]" style={{ color: "#334155" }}>{item}</span></div>
                  ))}
                </div>
                <div className="mt-10 p-6 rounded-2xl" style={{ background: "#F8FAFC", border: "1px solid #F1F5F9" }}>
                  <p className="text-[14px] leading-[1.7]" style={{ color: "#64748B" }}><span className="font-semibold" style={{ color: "#334155" }}>No hidden fees.</span> You only pay management fees when your property is occupied and generating income.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* ═══ HOW IT WORKS ═══ */}
        
        <section id="how" className="py-24 lg:py-36" style={{ background: "linear-gradient(180deg, #fff 0%, #f8faff 100%)" }}>
          <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-16 lg:mb-24">
              <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "#F97316" }}>How It Works</span>
              <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "#0F172A" }}>Three Steps to <span className="gradient-text">Stress-Free</span><br className="hidden sm:block" /> Property Management</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
              <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px" style={{ background: "linear-gradient(to right, #E2E8F0, rgba(29,78,216,0.2), #E2E8F0)" }} />
              {[
                { step: "01", icon: Calculator, title: "Get Your Rental Analysis", desc: "Tell us about your property. We analyze the local market and show you what your rental income should be — completely free, no obligation." },
                { step: "02", icon: Settings, title: "We Take Over the Workload", desc: "We step in to take over the workload — without taking away your control. Leasing, screening, rent collection, maintenance — all handled." },
                { step: "03", icon: ArrowUpRight, title: "You Stay Informed", desc: "You stay informed, your property stays protected, and your time becomes your own again. Monthly reports, real-time portal, full transparency." },
              ].map(s => (
                <div key={s.step} className="text-center relative">
                  <div className="relative inline-block mb-8">
                    <div className="w-24 h-24 rounded-[28px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, #F8FAFC, #fff)", border: "1px solid #F1F5F9", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}><s.icon className="w-9 h-9" style={{ color: "#94A3B8" }} /></div>
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-xl text-white text-[12px] font-bold flex items-center justify-center font-[family-name:var(--font-heading)]" style={{ background: "#F97316", boxShadow: "0 4px 12px rgba(249,115,22,0.3)" }}>{s.step}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[20px] mb-3 tracking-tight" style={{ color: "#0F172A" }}>{s.title}</h3>
                  <p className="text-[15px] leading-[1.7] max-w-[300px] mx-auto" style={{ color: "#64748B" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        

        {/* ═══ ABOUT ═══ */}
        
        <section id="about" className="py-24 lg:py-36" style={{ background: "linear-gradient(180deg, #fff 0%, #F8FAFC 100%)" }}>
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
              <div className="relative rounded-[28px] overflow-hidden" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&crop=face" alt="Dale Figger" className="w-full h-[400px] lg:h-[480px] object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 50%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-8"><p className="font-[family-name:var(--font-heading)] font-bold text-white text-[22px] tracking-tight">Dale Figger</p><p className="text-[14px] mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>Owner & Licensed Arizona Broker</p></div>
              </div>
              <div>
                <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "#F97316" }}>About Rent Core</span>
                <h2 className="font-[family-name:var(--font-heading)] text-[32px] lg:text-[42px] font-extrabold leading-[1.1] tracking-tight mb-8" style={{ color: "#0F172A" }}>An Ownership-Minded Approach to Property Management</h2>
                <div className="space-y-5 mb-10">
                  <p className="text-[16px] lg:text-[17px] leading-[1.8]" style={{ color: "#475569" }}>Dale Figger, owner and licensed Arizona broker, specializes in single-family investment properties. With decades of experience managing investor portfolios, Dale maximizes rental income while protecting long-term property value.</p>
                  <p className="text-[16px] lg:text-[17px] leading-[1.8]" style={{ color: "#475569" }}>Treating each property with the care he would his own, Dale ensures steady returns, reliable tenants, and personalized, proactive service. Investors in Phoenix and Tucson trust Dale&apos;s ownership-minded approach to property management.</p>
                </div>
                <div className="p-6 lg:p-8 rounded-2xl" style={{ background: "#0F172A" }}>
                  <p className="font-[family-name:var(--font-heading)] text-[18px] lg:text-[20px] font-bold text-white leading-snug tracking-tight">&ldquo;We manage like owners, with you every step of the way.&rdquo;</p>
                  <p className="text-[13px] mt-3" style={{ color: "rgba(255,255,255,0.4)" }}>— Dale Figger, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* ═══ AREAS SERVED ═══ */}
        
        <section id="areas" className="relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1920&h=1080&fit=crop&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.88)" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "#F97316" }}>Where We Serve</span>
                <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold text-white leading-[1.08] tracking-tight mb-6">Phoenix + Tucson Metro.<br /><span style={{ color: "rgba(255,255,255,0.4)" }}>Block by Block.</span></h2>
                <p className="text-[17px] leading-[1.75] max-w-[460px] mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>We manage single-family rentals across both metros. Scottsdale golf community or Mesa starter home — we know the market.</p>
                <div className="flex items-center gap-4">{["photo-1600585154340-be6161a56a0c","photo-1564013799919-ab600027ffc6","photo-1600607687939-ce8a6c25118c"].map(id => <img key={id} src={`https://images.unsplash.com/${id}?w=160&h=100&fit=crop`} alt="" className="w-20 h-14 rounded-xl object-cover" style={{ opacity: 0.7 }} loading="lazy" />)}</div>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Phoenix Metro</p>
                <div className="flex flex-wrap gap-2.5 mb-8">{["Phoenix","Scottsdale","Tempe","Mesa","Chandler","Gilbert","Glendale","Peoria","Surprise","Goodyear","Avondale","Buckeye","Queen Creek","Maricopa"].map(c => <span key={c} className="px-4 py-2.5 rounded-full text-[13px] font-medium cursor-pointer transition-all duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.12)" }}>{c}</span>)}</div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Tucson Metro</p>
                <div className="flex flex-wrap gap-2.5">{["Tucson","Oro Valley","Marana","Sahuarita","Vail","Green Valley"].map(c => <span key={c} className="px-4 py-2.5 rounded-full text-[13px] font-medium cursor-pointer transition-all duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.12)" }}>{c}</span>)}</div>
              </div>
            </div>
          </div>
        </section>
        

        {/* ═══ RESOURCES ═══ */}
        
        <section className="py-24 lg:py-36" style={{ background: "linear-gradient(180deg, #fff 0%, #f8faff 100%)" }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-14 lg:mb-20">
              <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "#F97316" }}>Investor Resources</span>
              <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "#0F172A" }}>Insights for <span className="gradient-text">Smarter</span> Investments</h2>
              <p className="text-[17px] mt-5 max-w-[480px] mx-auto" style={{ color: "#64748B" }}>Market reports, tax strategies, and tips for Phoenix and Tucson investors.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { cat: "Market Data", catC: "#1D4ED8", title: "Phoenix Rental Market Report: Q1 2026", desc: "Average rents, vacancy rates, and demand trends across Phoenix metro.", img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=700&h=450&fit=crop" },
                { cat: "Guide", catC: "#059669", title: "Out-of-State Investing in Arizona", desc: "Tax implications, management considerations, and why Phoenix attracts out-of-state capital.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&h=450&fit=crop" },
                { cat: "Education", catC: "#F97316", title: "5 Hidden Costs That Kill Your Rental ROI", desc: "The fees and expenses most landlords overlook — and how professional management eliminates them.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&h=450&fit=crop" },
              ].map(post => (
                <article key={post.title} className="group rounded-[24px] overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1.5 cursor-pointer" style={{ border: "1px solid #F1F5F9", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                  <div className="relative h-52 overflow-hidden"><img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" /><div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.15), transparent)" }} /></div>
                  <div className="p-7 lg:p-8">
                    <span className="inline-block px-3 py-1 rounded-lg text-[11px] font-semibold mb-4" style={{ color: post.catC, background: `${post.catC}15` }}>{post.cat}</span>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[17px] mb-3 leading-snug tracking-tight" style={{ color: "#0F172A" }}>{post.title}</h3>
                    <p className="text-[14px] leading-relaxed" style={{ color: "#64748B" }}>{post.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        

        {/* ═══ FINAL CTA ═══ */}
        
        <section id="cta" className="relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.93)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]" style={{ background: "rgba(29,78,216,0.1)" }} />
          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-36 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#F97316" }} /><span className="text-[12px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>Free rental analysis — no commitment</span></div>
            <h2 className="font-[family-name:var(--font-heading)] text-[36px] sm:text-[44px] lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight mb-7">It Doesn&apos;t Have to Stay That Way.</h2>
            <p className="text-[18px] lg:text-[20px] leading-[1.7] mb-12 max-w-[540px] mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>If managing your property is starting to feel like a second job, it may be time to hand it off. Get a free rental analysis — no commitment.</p>
            <a href="#hero" className="group inline-flex items-center gap-3 px-9 py-5 bg-white font-[family-name:var(--font-heading)] font-bold text-[16px] rounded-2xl transition-all hover:-translate-y-0.5" style={{ color: "#0F172A", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>Get Your Free Rental Analysis <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></a>
            <p className="text-[14px] mt-8" style={{ color: "rgba(255,255,255,0.25)" }}>Or call us: <a href="tel:+16025550180" className="underline underline-offset-4" style={{ color: "rgba(255,255,255,0.4)" }}>(602) 555-0180</a></p>
          </div>
        </section>
        
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: "#0F172A" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14 mb-14">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center mb-5"><span className="font-[family-name:var(--font-heading)] text-[20px] font-extrabold tracking-tight"><span style={{ color: "#1D4ED8" }}>Rent</span><span style={{ color: "#F97316" }}>Core</span></span></div>
              <p className="text-[14px] leading-relaxed mb-6 max-w-[280px]" style={{ color: "rgba(255,255,255,0.4)" }}>We manage like owners, with you every step of the way.</p>
              <div className="space-y-3">
                <a href="tel:+16025550180" className="flex items-center gap-2.5 text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}><Phone className="w-4 h-4 shrink-0" />(602) 555-0180</a>
                <a href="mailto:info@rentcorepm.com" className="flex items-center gap-2.5 text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}><Mail className="w-4 h-4 shrink-0" />info@rentcorepm.com</a>
              </div>
            </div>
            {[{ t: "Owners", l: ["Why Rent Core","Services","Pricing","Rental Analysis","Owner Portal"] }, { t: "Tenants", l: ["Available Rentals","Apply Online","Tenant Portal","Maintenance"] }, { t: "Company", l: ["About Us","Areas Served","Blog","Contact","Careers"] }].map(col => (
              <div key={col.t}><p className="font-[family-name:var(--font-heading)] font-semibold text-white text-[14px] mb-5">{col.t}</p><div className="space-y-3">{col.l.map(link => <a key={link} href="#" className="block text-[13px]" style={{ color: "rgba(255,255,255,0.35)" }}>{link}</a>)}</div></div>
            ))}
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.2)" }}>© 2026 Rent Core Property Management. All rights reserved.</p>
            <div className="flex items-center gap-6"><a href="#" className="text-[12px]" style={{ color: "rgba(255,255,255,0.2)" }}>Privacy Policy</a><a href="#" className="text-[12px]" style={{ color: "rgba(255,255,255,0.2)" }}>Terms of Service</a></div>
          </div>
        </div>
      </footer>
    </>
  );
}
