import CanvasWrapper from "@/components/CanvasWrapper";
import ColorSystem from "@/components/ColorSystem";
import {
  Phone, ChevronRight, TrendingUp, Eye, MapPin, Megaphone, Shield, Wallet,
  Wrench, BarChart3, ClipboardCheck, Calculator, Settings, ArrowUpRight, Star,
} from "lucide-react";

/* ─── Section label ─── */
function Tag({ num, label }: { num: string; label: string }) {
  return (
    <p className="text-[11px] font-[family-name:var(--font-body)] font-semibold tracking-[0.3em] uppercase text-white/20 mb-6 ml-1">
      {num && <span className="text-[#F97316]/50 mr-2">{num}</span>}
      {label}
    </p>
  );
}

/* ─── Keystone SVG ─── */
function Keystone({ size = 20, color = "#F97316" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size * 1.08} viewBox="0 0 52 56" fill="none">
      <path d="M8 48L3 12C3 9.5 4.8 7.3 7.2 6.5L26 0L44.8 6.5C47.2 7.3 49 9.5 49 12L44 48C43.3 50.5 41 52 38.5 52H13.5C11 52 8.7 50.5 8 48Z" fill={color} />
    </svg>
  );
}

export default function Home() {
  return (
    <CanvasWrapper>
    <div className="min-h-screen bg-[#0d0d13] px-8 md:px-16 lg:px-20 py-12 md:py-20" style={{ width: "1800px" }}>
      <div className="max-w-[1500px] mx-auto">

        {/* ══ BOARD TITLE ══ */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-2">
            <Keystone size={28} />
            <h1 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white/80 tracking-tight">
              Rent<span className="text-[#F97316]">Core</span>
              <span className="text-white/25 font-normal ml-3">Brand Concept Board</span>
            </h1>
          </div>
          <p className="text-[13px] text-white/20 ml-[44px]">Prepared for Dale Figger · April 2026 · Pre-Launch</p>
        </div>

        {/* ══ 01 — BRAND STRATEGY ══ */}
        <Tag num="01" label="Brand Strategy" />
        <div className="card mb-16">
          <div className="h-1 bg-gradient-to-r from-[#1D4ED8] via-[#F97316] to-[#059669] rounded-t-[24px]" />
          <div className="p-12 md:p-16 lg:p-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-[#F97316]" />
              <span className="text-[#F97316] text-[11px] font-[family-name:var(--font-body)] font-semibold tracking-[0.2em] uppercase">Positioning</span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-[40px] md:text-[48px] font-extrabold text-[#0F172A] leading-[1.1] mb-8 max-w-[700px]">
              Investor-First<br />Property Management
            </h2>
            <p className="text-[16px] md:text-[17px] text-[#64748B] leading-[1.8] mb-14 max-w-[640px]">
              Rent Core exists for real estate investors who want their rental properties managed with the same rigor they&apos;d apply themselves — if they had the time. Every decision filters through one question: <span className="text-[#334155] font-medium">does this protect and grow rental income?</span>
            </p>
            <div className="w-full h-px bg-[#E2E8F0] mb-10" />
            <p className="text-[11px] font-[family-name:var(--font-body)] font-semibold tracking-[0.2em] uppercase text-[#94A3B8] mb-6">Target Audience</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Primary", desc: "Real estate investors owning 1–20 single-family rentals" },
                { title: "Local Investors", desc: "Phoenix & Tucson metro property owners" },
                { title: "Out-of-State", desc: "California, Washington, Illinois buyers investing in AZ" },
                { title: "Accidental Landlords", desc: "Inherited property, moved away, busy professionals" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-[#F8FAFC] border border-[#F1F5F9]">
                  <div className="w-2 h-2 rounded-full bg-[#1D4ED8] mt-[7px] shrink-0" />
                  <div>
                    <span className="font-[family-name:var(--font-heading)] font-bold text-[#0F172A] text-[14px] block mb-1">{item.title}</span>
                    <span className="text-[13px] text-[#64748B] leading-relaxed">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ 02 — COLOR SYSTEM ══ */}
        <Tag num="02" label="Color System" />
        <div className="mb-16">
          <ColorSystem />
        </div>

        {/* ══ 03 — TYPOGRAPHY ══ */}
        <Tag num="03" label="Typography" />
        <div className="card mb-16">
          <div className="h-1 bg-gradient-to-r from-[#0F172A] to-[#64748B] rounded-t-[24px]" />
          <div className="p-12 md:p-16 lg:p-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-[2px] bg-[#1D4ED8]" />
              <span className="text-[#1D4ED8] text-[11px] font-semibold tracking-[0.2em] uppercase">Recommended Pairing</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-14">
              {/* Heading font */}
              <div>
                <p className="text-[11px] text-[#94A3B8] font-semibold tracking-[0.2em] uppercase mb-5">Headings — Plus Jakarta Sans</p>
                <p className="font-[family-name:var(--font-heading)] text-[80px] font-extrabold text-[#0F172A] leading-none mb-5">Aa</p>
                <p className="font-[family-name:var(--font-heading)] text-[14px] text-[#CBD5E1] leading-relaxed mb-6">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789
                </p>
                <div className="flex gap-2">
                  {["600 Semi", "700 Bold", "800 Extra"].map((w) => (
                    <span key={w} className="px-4 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#F1F5F9] text-[#64748B] text-[12px] font-medium">{w}</span>
                  ))}
                </div>
              </div>
              {/* Body font */}
              <div>
                <p className="text-[11px] text-[#94A3B8] font-semibold tracking-[0.2em] uppercase mb-5">Body — Inter</p>
                <p className="font-[family-name:var(--font-body)] text-[80px] font-medium text-[#0F172A] leading-none mb-5">Aa</p>
                <p className="font-[family-name:var(--font-body)] text-[14px] text-[#CBD5E1] leading-relaxed mb-6">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789
                </p>
                <div className="flex gap-2">
                  {["400 Regular", "500 Medium", "600 Semi"].map((w) => (
                    <span key={w} className="px-4 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#F1F5F9] text-[#64748B] text-[12px] font-medium">{w}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-[#E2E8F0] mb-10" />
            <p className="text-[11px] text-[#94A3B8] font-semibold tracking-[0.2em] uppercase mb-8">Type Scale</p>
            <div className="space-y-6">
              <p className="font-[family-name:var(--font-heading)] text-[36px] font-extrabold text-[#0F172A] leading-tight">Maximize Your Rental Income.</p>
              <p className="font-[family-name:var(--font-heading)] text-[26px] font-bold text-[#0F172A]">Why Phoenix Investors Choose Rent Core</p>
              <p className="font-[family-name:var(--font-heading)] text-[18px] font-semibold text-[#0F172A]">Full-Service Leasing & Management</p>
              <p className="font-[family-name:var(--font-body)] text-[16px] text-[#64748B] leading-relaxed max-w-[580px]">Whether you own one rental home or twenty — we handle everything from tenant screening and leasing to rent collection, maintenance, and financial reporting.</p>
              <p className="font-[family-name:var(--font-body)] text-[13px] font-semibold tracking-[0.15em] uppercase text-[#F97316]">Why Rent Core</p>
            </div>
          </div>
        </div>

        {/* ══ 04 — LOGO CONCEPTS ══ */}
        <Tag num="04" label="Logo Concepts" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Option A */}
          <div className="card overflow-hidden">
            <div className="bg-gradient-to-br from-[#F8FAFC] to-white p-16 md:p-20 flex items-center justify-center">
              <h3 className="font-[family-name:var(--font-heading)] text-[56px] font-extrabold tracking-tight">
                <span className="text-[#1D4ED8]">Rent</span><span className="text-[#F97316]">Core</span>
              </h3>
            </div>
            <div className="p-10 md:p-12 border-t border-[#F1F5F9]">
              <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#0F172A] text-[18px] mb-3">The Confident Wordmark</h4>
              <p className="text-[14px] text-[#64748B] leading-relaxed mb-8">Clean, bold wordmark. &quot;Rent&quot; in blue, &quot;Core&quot; in orange. The name IS the brand — maximum simplicity, scales everywhere.</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center px-5 h-12 bg-white rounded-xl border border-[#E2E8F0]">
                  <span className="font-[family-name:var(--font-heading)] text-[14px] font-extrabold"><span className="text-[#1D4ED8]">Rent</span><span className="text-[#F97316]">Core</span></span>
                </div>
                <div className="flex items-center justify-center px-5 h-12 bg-[#0F172A] rounded-xl">
                  <span className="font-[family-name:var(--font-heading)] text-[14px] font-extrabold"><span className="text-white">Rent</span><span className="text-[#F97316]">Core</span></span>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-[#1D4ED8] rounded-xl">
                  <span className="font-[family-name:var(--font-heading)] text-[18px] font-extrabold text-white">RC</span>
                </div>
                <p className="text-[11px] text-[#CBD5E1] ml-2">Light · Dark · Favicon</p>
              </div>
            </div>
          </div>

          {/* Option B — Recommended */}
          <div className="card overflow-hidden ring-2 ring-[#F97316]/20">
            <div className="bg-gradient-to-br from-[#F8FAFC] to-white p-16 md:p-20 flex items-center justify-center relative">
              <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] text-[11px] font-semibold">★ Recommended</span>
              <div className="flex items-center gap-5">
                <Keystone size={52} />
                <span className="font-[family-name:var(--font-heading)] text-[48px] font-bold text-[#0F172A] tracking-tight">RentCore</span>
              </div>
            </div>
            <div className="p-10 md:p-12 border-t border-[#F1F5F9]">
              <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#0F172A] text-[18px] mb-3">The Keystone Mark</h4>
              <p className="text-[14px] text-[#64748B] leading-relaxed mb-8">Geometric keystone icon + wordmark. The keystone is the center stone in an arch — the piece that holds everything together.</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center gap-2 px-5 h-12 bg-white rounded-xl border border-[#E2E8F0]">
                  <Keystone size={14} /><span className="font-[family-name:var(--font-heading)] text-[13px] font-bold text-[#0F172A]">RentCore</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-5 h-12 bg-[#0F172A] rounded-xl">
                  <Keystone size={14} /><span className="font-[family-name:var(--font-heading)] text-[13px] font-bold text-white">RentCore</span>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-[#F97316] rounded-xl">
                  <Keystone size={22} color="white" />
                </div>
                <p className="text-[11px] text-[#CBD5E1] ml-2">Light · Dark · Favicon</p>
              </div>
            </div>
          </div>
        </div>

        {/* ══ 05 — BRAND VOICE ══ */}
        <Tag num="05" label="Brand Voice" />
        <div className="card mb-16">
          <div className="h-1 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-t-[24px]" />
          <div className="p-12 md:p-16 lg:p-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-[2px] bg-[#F97316]" />
              <span className="text-[#F97316] text-[11px] font-semibold tracking-[0.2em] uppercase">Voice Principles</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {[
                { p: "Confident", n: "Not Arrogant", ex: "We fill vacancies in 21 days or less." },
                { p: "Direct", n: "Not Cold", ex: "Your property is making you money or costing you money." },
                { p: "Investor-Fluent", n: "Not Jargon-Heavy", ex: "See how your rental income stacks up against the market." },
                { p: "Transparent", n: "Not Naive", ex: "8% management fee. No hidden charges. Here's what's included." },
                { p: "Local Authority", n: "Not Braggart", ex: "Gilbert rental demand is up 12% year-over-year." },
              ].map((v) => (
                <div key={v.p} className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#F1F5F9]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#1D4ED8]/10 flex items-center justify-center">
                        <span className="font-[family-name:var(--font-heading)] font-extrabold text-[#1D4ED8] text-[15px]">{v.p[0]}</span>
                      </div>
                      <span className="font-[family-name:var(--font-heading)] font-bold text-[#0F172A] text-[15px]">{v.p}</span>
                    </div>
                    <span className="text-[11px] text-[#94A3B8]">{v.n}</span>
                  </div>
                  <p className="text-[13px] text-[#64748B] italic leading-relaxed">&quot;{v.ex}&quot;</p>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-[#E2E8F0] mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border border-[#059669]/15 bg-[#059669]/[0.03]">
                <p className="text-[11px] font-bold text-[#059669] uppercase tracking-[0.15em] mb-5">✓ Always Use</p>
                <div className="space-y-3">
                  {['"Investor-first"', '"Your property, our priority"', '"Phoenix and Tucson metro"', '"Get your free rental analysis"', '"What\'s your property earning?"'].map((t) => (
                    <p key={t} className="text-[14px] text-[#334155] leading-relaxed">{t}</p>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-2xl border border-red-200/50 bg-red-50/30">
                <p className="text-[11px] font-bold text-red-400 uppercase tracking-[0.15em] mb-5">✗ Never Use</p>
                <div className="space-y-3">
                  {['"We\'re like family"', '"Best in class"', '"One-stop shop"', '"We go above and beyond"', '"Property management solutions"'].map((t) => (
                    <p key={t} className="text-[14px] text-[#94A3B8] line-through decoration-red-300/40 leading-relaxed">{t}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ 06 — HOMEPAGE DESIGN ══ */}
        <Tag num="06" label="Homepage Design Preview" />
        <div className="rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.12),0_16px_56px_rgba(0,0,0,0.16)] mb-16">
          {/* Browser chrome */}
          <div className="bg-[#1c1c28] px-5 py-3 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-6">
              <div className="bg-[#111118] rounded-lg px-4 py-1.5 text-[11px] text-white/30 font-mono">rentcorepm.com</div>
            </div>
          </div>

          <div className="bg-white">
            {/* Header */}
            <header className="px-10 md:px-16 py-5 flex items-center justify-between border-b border-[#F1F5F9]">
              <div className="flex items-center gap-2">
                <Keystone size={18} />
                <span className="font-[family-name:var(--font-heading)] text-[17px] font-bold text-[#0F172A]">RentCore</span>
              </div>
              <nav className="hidden md:flex items-center gap-8">
                {["Owners", "Services", "Areas", "About", "Contact"].map((i) => (
                  <span key={i} className="text-[14px] text-[#64748B]">{i}</span>
                ))}
              </nav>
              <div className="flex items-center gap-4">
                <span className="hidden md:flex items-center gap-2 text-[14px] text-[#334155]">
                  <Phone className="w-4 h-4" /> (602) 555-0180
                </span>
                <button className="px-5 py-2.5 bg-[#F97316] text-white text-[13px] font-[family-name:var(--font-heading)] font-bold rounded-xl shadow-md shadow-[#F97316]/20">
                  Get Rental Analysis
                </button>
              </div>
            </header>

            {/* Hero */}
            <section className="px-10 md:px-16 py-16 md:py-20">
              <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16 items-center">
                <div>
                  <h1 className="font-[family-name:var(--font-heading)] text-[32px] md:text-[44px] font-extrabold text-[#0F172A] leading-[1.08] mb-6">
                    Maximize Your Rental Income. <span className="text-[#1D4ED8]">Minimize the Headaches.</span>
                  </h1>
                  <p className="text-[15px] md:text-[17px] text-[#64748B] leading-[1.7] mb-8 max-w-[520px]">
                    Phoenix and Tucson&apos;s investor-first property management company. We handle your rentals so you can focus on building wealth.
                  </p>
                  <div className="flex items-center gap-2 mb-5">
                    {[0, 1, 2].map((i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                    <span className="text-[13px] text-[#64748B] ml-1">4.9 average · Trusted by Phoenix investors</span>
                  </div>
                  <span className="text-[#1D4ED8] text-[14px] font-medium inline-flex items-center gap-1">
                    See How It Works <ChevronRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Calculator */}
                <div className="bg-white rounded-2xl shadow-xl border border-[#E2E8F0] overflow-hidden">
                  <div className="h-1.5 bg-[#F97316]" />
                  <div className="p-8">
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#0F172A] text-[20px] mb-2">What&apos;s Your Property Worth?</h3>
                    <p className="text-[#94A3B8] text-[13px] mb-6">Free rental income estimate in 60 seconds.</p>
                    <div className="space-y-3">
                      <div className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[13px] text-[#94A3B8]">Enter your property address</div>
                      <div className="grid grid-cols-3 gap-3">
                        {["Beds", "Baths", "Type"].map((l) => (
                          <div key={l} className="px-3 py-3 rounded-xl border border-[#E2E8F0] text-[13px] text-[#94A3B8]">{l}</div>
                        ))}
                      </div>
                      <div className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[13px] text-[#94A3B8]">Full name</div>
                      <div className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[13px] text-[#94A3B8]">Email address</div>
                      <div className="w-full py-3.5 bg-[#F97316] text-white font-[family-name:var(--font-heading)] font-bold text-[13px] rounded-xl text-center shadow-lg shadow-[#F97316]/20">
                        Get My Free Analysis
                      </div>
                    </div>
                    <p className="text-center text-[11px] text-[#94A3B8] mt-3">No obligation · 60 seconds · Results emailed instantly</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Trust bar */}
            <section className="bg-[#F8FAFC] px-10 md:px-16 py-10 border-y border-[#F1F5F9]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[900px] mx-auto">
                {[
                  { n: "150+", l: "Doors Managed" },
                  { n: "98%", l: "Tenant Retention" },
                  { n: "15 Days", l: "Avg. Time to Lease" },
                  { n: "4.9 ★", l: "Investor Rating" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <p className="font-[family-name:var(--font-heading)] text-[28px] font-extrabold text-[#1D4ED8] mb-1">{s.n}</p>
                    <p className="text-[13px] text-[#64748B]">{s.l}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Rent Core */}
            <section className="px-10 md:px-16 py-16 md:py-20">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16">
                <div>
                  <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#F97316] mb-3">Why Rent Core</p>
                  <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[34px] font-bold text-[#0F172A] leading-tight mb-4">
                    Property Management Built Around Your Bottom Line
                  </h2>
                  <p className="text-[15px] text-[#64748B] leading-relaxed">
                    Most property managers treat your investment like a task list. We treat it like a portfolio.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: TrendingUp, title: "Investor-First Decisions", desc: "We analyze market rates monthly, optimize pricing, and minimize vacancy days." },
                    { icon: Eye, title: "Total Transparency", desc: "Real-time owner portal. Monthly financials. No hidden fees, ever." },
                    { icon: MapPin, title: "Phoenix Market Experts", desc: "We know the difference between renting in Gilbert vs. Glendale." },
                  ].map((c) => (
                    <div key={c.title} className="flex gap-4 p-5 rounded-2xl border border-[#F1F5F9] hover:border-[#E2E8F0] transition-colors">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center">
                        <c.icon className="w-5 h-5 text-[#F97316]" />
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[#0F172A] text-[15px] mb-1">{c.title}</h3>
                        <p className="text-[13px] text-[#64748B] leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Services */}
            <section className="bg-[#F8FAFC] px-10 md:px-16 py-16 md:py-20 border-y border-[#F1F5F9]">
              <div className="text-center mb-12">
                <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#F97316] mb-3">What We Do</p>
                <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[34px] font-bold text-[#0F172A]">
                  Everything Between &apos;Keys in Hand&apos;<br className="hidden md:block" /> and &apos;Rent in Your Account&apos;
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { icon: Megaphone, title: "Marketing & Leasing", desc: "Professional photos, multi-platform listings, and showings that fill vacancies fast." },
                  { icon: Shield, title: "Tenant Screening", desc: "Credit, income, rental history, and background checks. Tenants who pay and stay." },
                  { icon: Wallet, title: "Rent Collection", desc: "Automated collection with online payments. Funds in your account by the 10th." },
                  { icon: Wrench, title: "Maintenance", desc: "24/7 coordination with vetted, licensed vendors. Transparent pricing." },
                  { icon: BarChart3, title: "Financial Reporting", desc: "Monthly statements, year-end 1099s, and real-time portal access." },
                  { icon: ClipboardCheck, title: "Inspections & Compliance", desc: "Move-in/move-out inspections and AZ landlord-tenant law compliance." },
                ].map((s) => (
                  <div key={s.title} className="bg-white rounded-2xl p-6 border border-[#F1F5F9]">
                    <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-4">
                      <s.icon className="w-5 h-5 text-[#F97316]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[#0F172A] text-[15px] mb-2">{s.title}</h3>
                    <p className="text-[13px] text-[#64748B] leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="bg-gradient-to-br from-[#1D4ED8] to-[#1E40AF] px-10 md:px-16 py-16 md:py-20">
              <div className="max-w-[600px] mx-auto text-center">
                <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-extrabold text-white mb-4 leading-tight">
                  What Could Your Property Be Earning?
                </h2>
                <p className="text-[15px] text-white/60 mb-8 leading-relaxed">
                  Get a free rental analysis. No commitment. No obligation. Just clarity on your investment.
                </p>
                <button className="px-8 py-4 bg-white text-[#1D4ED8] font-[family-name:var(--font-heading)] font-bold text-[15px] rounded-xl shadow-xl">
                  Get Your Free Rental Analysis
                </button>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0F172A] px-10 md:px-16 py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Keystone size={16} />
                    <span className="font-[family-name:var(--font-heading)] text-[15px] font-bold text-white">RentCore</span>
                  </div>
                  <p className="text-[12px] text-white/35 leading-relaxed">Phoenix & Tucson&apos;s investor-first property management.</p>
                </div>
                {[
                  { t: "Owners", l: ["Why Rent Core", "Services", "Pricing", "Rental Analysis"] },
                  { t: "Tenants", l: ["Available Rentals", "Apply Online", "Tenant Portal", "Maintenance"] },
                  { t: "Company", l: ["About", "Areas Served", "Blog", "Contact"] },
                ].map((c) => (
                  <div key={c.t}>
                    <p className="font-[family-name:var(--font-heading)] font-semibold text-white text-[13px] mb-4">{c.t}</p>
                    <div className="space-y-2.5">
                      {c.l.map((l) => <p key={l} className="text-[12px] text-white/30">{l}</p>)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-8 border-t border-white/10 text-[11px] text-white/15">
                © 2026 Rent Core Property Management. All rights reserved.
              </div>
            </footer>
          </div>
        </div>

        {/* ══ BOARD FOOTER ══ */}
        <div className="text-center py-10">
          <p className="text-white/10 text-[11px]">Rent Core Brand Concept Board · April 2026</p>
        </div>
      </div>
    </div>
    </CanvasWrapper>
  );
}
