"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, Shield, Headphones, Server, MapPin, Check, X, ChevronDown, Phone, Mail, DollarSign, Megaphone, Wrench, Wallet, BarChart3, ShieldCheck, Home, CreditCard, Clock, FileText, ExternalLink, BookOpen } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* ── Dale's final colors ── */
const C = {
  black: "#000000",
  charcoal: "#212121",
  gray: "#80898C",
  darkTeal: "#0D272B",
  rust: "#7F2A17",
  teal: "#478984",
  white: "#FFFFFF",
  offwhite: "#F5F5F3",
  border: "#E8E8E8",
};

/* ── Content ── */
const heroSub = "Where expert-level property management meets investor-focused service. Let us show you how easy managing your assets can actually be.";

const introCopy = "You know how to manage your property. You\u2019ve handled the tenants, the maintenance calls, and the day-to-day decisions. But at some point, it starts to take more time than it\u2019s worth. That\u2019s where we come in. At Rent Core, we step in to take over the workload \u2014 without taking away your control. You stay informed, your property stays protected, and your time becomes your own again.";

const daleBio = "Dale Figger, owner and licensed Arizona broker, specializes in single-family investment properties. With decades of experience managing investor portfolios in Phoenix and Tucson, Dale maximizes rental income while protecting long-term property value. Treating each property with the care he would his own, Dale ensures steady returns, reliable tenants, and personalized, proactive service.";

const tagline = "We manage like owners, with you every step of the way.";

const services = [
  { title: "Full-Service Management", sub: "Hands-on, not hands-off.", body: "From tenant placement to lease renewals, maintenance coordination to financial reporting. Every property gets personal attention.", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80" },
  { title: "Transparent Financials", sub: "Your money. Your visibility.", body: "Real-time Rentec portal access, monthly statements, year-end 1099s. You see every dollar \u2014 no surprises, no hidden fees.", img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=80" },
  { title: "Proactive Maintenance", sub: "We protect your asset.", body: "Regular inspections, vendor coordination, emergency response. We don\u2019t just manage \u2014 we improve properties.", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80" },
  { title: "Direct Communication", sub: "Talk to the decision maker.", body: "When you call, you reach Dale \u2014 the licensed broker who manages your investment. Not a helpdesk, not a call center.", img: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=1200&q=80" },
];

const reviews = [
  { q: "Vacancy rate dropped and rent increased 11%. Dale treats every property like it\u2019s his own. Should have done this sooner.", name: "Michael C.", detail: "Phoenix \u00B7 3 properties", rating: 5 },
  { q: "I manage from California and Dale\u2019s team handles everything. Monthly reports, maintenance \u2014 I haven\u2019t had a single headache since switching.", name: "Sarah M.", detail: "Out-of-state \u00B7 2 properties", rating: 5 },
  { q: "The transparency sold us. We see everything in the Rentec portal. No surprises, no hidden fees. This is how property management should work.", name: "David T.", detail: "Tucson \u00B7 5 properties", rating: 5 },
  { q: "Inherited a home, had no idea how to be a landlord. They found a tenant in 12 days and I haven\u2019t worried since. Dale walked me through everything personally.", name: "James W.", detail: "Phoenix \u00B7 1 property", rating: 5 },
  { q: "Other PM companies just collect fees. Dale actually cares about the property. The difference is night and day. Boutique service with professional systems.", name: "Rachel K.", detail: "Scottsdale \u00B7 2 properties", rating: 5 },
];

const guarantees = [
  { title: "60-Day Leasing Guarantee", body: "Vacancy filled within 60 days or your first month\u2019s management fee is waived.", detail: "Covers marketing, showings, screening, and placement" },
  { title: "Eviction Protection", body: "If a tenant we placed needs to be evicted, we cover the filing costs.", detail: "Applies to all tenants placed by Rent Core" },
  { title: "Rent Deposit Guarantee", body: "Tenant breaks their lease early? We find a replacement at no additional leasing fee.", detail: "Replacement search begins within 48 hours" },
  { title: "Compliance Guarantee", body: "Full Arizona landlord-tenant law compliance on every lease, every notice, every process.", detail: "Updated for all current AZ statutes" },
];

const compRows = [
  { task: "Find & screen tenants", self: false, rc: true },
  { task: "Collect rent on time", self: false, rc: true },
  { task: "Handle midnight maintenance calls", self: false, rc: true },
  { task: "Keep up with AZ landlord-tenant law", self: false, rc: true },
  { task: "Monthly financial statements & 1099s", self: false, rc: true },
  { task: "Coordinate vendor repairs & inspections", self: false, rc: true },
  { task: "Your evenings & weekends free", self: false, rc: true },
  { task: "Full control & transparency", self: true, rc: true },
];

const faqs = [
  { q: "How much does property management cost?", a: "Our management fee is 9% of monthly rent collected (minimum $125/month). You only pay when your property is occupied and generating income \u2014 no vacancy fees." },
  { q: "What areas do you serve?", a: "We manage single-family rental properties across the Phoenix metro (Scottsdale, Mesa, Chandler, Gilbert, Tempe, Peoria, Surprise, and more) and the Tucson metro area." },
  { q: "I live out of state. Can you still manage my property?", a: "Absolutely. Many of our clients are out-of-state investors. You get full portal access, monthly reports, and direct communication \u2014 just like being next door." },
  { q: "How quickly can you find a tenant?", a: "Our average time to lease is 15 days. We use professional photography, multi-platform marketing, and thorough screening to place reliable tenants fast." },
  { q: "What happens if a tenant stops paying rent?", a: "We handle the entire process \u2014 from late notices to legal proceedings if necessary. Our eviction protection guarantee covers filing costs for tenants we placed." },
  { q: "Can I see how my property is performing?", a: "Yes. Our owner portal gives you 24/7 access to financials, maintenance requests, tenant details, and documents. You also receive monthly statements and year-end 1099s." },
  { q: "Do I lose control of my property?", a: "Not at all. You set the guidelines \u2014 we execute. Every major decision (repairs over a threshold, lease terms, rent adjustments) is run by you first." },
  { q: "How do I get started?", a: "Start with a free rental analysis. We\u2019ll evaluate your property, show you what it could earn, and walk you through our onboarding process \u2014 no obligation." },
];

const phoenixAreas = ["Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler", "Gilbert", "Glendale", "Peoria", "Surprise", "Goodyear", "Avondale", "Buckeye", "Queen Creek", "Maricopa"];
const tucsonAreas = ["Tucson", "Oro Valley", "Marana", "Sahuarita", "Vail", "Green Valley"];

/* ── Helpers ── */
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
      ))}
    </div>
  );
}

function SectionLabel({ text, color = C.teal }: { text: string; color?: string }) {
  return <p className="font-[family-name:var(--font-body)] text-[12px] tracking-[0.2em] uppercase mb-4" style={{ color }}>{text}</p>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-[family-name:var(--font-heading)] text-[32px] sm:text-[40px] lg:text-[48px] font-bold uppercase leading-[1.08] tracking-tight" style={{ color: C.black }}>{children}</h2>;
}

/* ── Main Page ── */
export default function V9() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [rent, setRent] = useState(1800);

  const mgmt = Math.max(rent * 0.09, 125);
  const leasing = rent * 0.75;
  const annual = mgmt * 12;
  const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".v9-h1", { y: 40, opacity: 0, duration: 1 })
      .from(".v9-h2", { y: 30, opacity: 0, duration: 0.9 }, "-=0.7")
      .from(".v9-h3", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".v9-h4", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5");

    // Parallax on hero image
    if (heroRef.current) {
      gsap.to(".v9-hero-img", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    }
  }, { scope: heroRef });

  return (
    <>
      {/* ═══ NAV ═══ */}
      <header className="sticky top-0 z-50" style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${C.border}` }}>
        {/* License bar */}
        <div className="flex items-center justify-center py-2" style={{ background: C.darkTeal }}>
          <p className="font-[family-name:var(--font-body)] text-[11px] text-white/70 tracking-wide">
            Designated Broker: Dale Figger &middot; License # BR548311000
          </p>
        </div>
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4">
          <a href="#hero" className="flex items-center gap-3">
            <Image src="/logo-circle.png" alt="RentCore" width={40} height={40} className="rounded-full" />
            <span className="font-[family-name:var(--font-heading)] text-[18px] font-bold uppercase tracking-[0.08em]" style={{ color: C.black }}>
              <span style={{ color: C.darkTeal }}>Rent</span>Core
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {["Why Us", "Services", "Pricing", "About", "Areas"].map((n) => (
              <a key={n} href={`#${n.toLowerCase().replace(/\s/g, "-")}`} className="font-[family-name:var(--font-body)] text-[13px] transition-colors hover:opacity-70" style={{ color: C.charcoal }}>{n}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-[family-name:var(--font-body)] text-[13px]" style={{ color: C.charcoal }}>For Investors</span>
            <span className="hidden sm:inline font-[family-name:var(--font-body)] text-[13px]" style={{ color: C.charcoal }}>For Tenants</span>
            <a href="#hero" className="font-[family-name:var(--font-body)] px-5 py-2.5 text-[13px] font-bold text-white uppercase tracking-wide transition-all hover:-translate-y-0.5" style={{ background: C.rust }}>
              Get Started
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* ═══ HERO — Full window image, no blue overlay ═══ */}
        <section ref={heroRef} id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=1920&h=1080&fit=crop&q=80"
            alt=""
            className="v9-hero-img absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 100%)" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full py-28 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              {/* Left */}
              <div>
                <p className="v9-h1 font-[family-name:var(--font-body)] text-[12px] uppercase tracking-[0.3em] mb-6 text-white/70">
                  Phoenix &amp; Tucson Property Management
                </p>
                <h1 className="v9-h1 font-[family-name:var(--font-heading)] text-[42px] sm:text-[52px] lg:text-[62px] font-bold uppercase leading-[1.06] tracking-tight mb-7 text-white">
                  Your Property.<br />Our Expertise.<br />Your Peace of Mind.
                </h1>
                <p className="v9-h2 font-[family-name:var(--font-body)] text-[17px] lg:text-[19px] leading-[1.75] mb-10 max-w-[480px] text-white/80">
                  {heroSub}
                </p>
                <div className="v9-h3 flex flex-wrap items-center gap-4 mb-10">
                  <a href="#pricing" className="font-[family-name:var(--font-body)] inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-[15px] uppercase tracking-wide transition-all hover:-translate-y-0.5" style={{ background: C.rust }}>
                    What Will It Earn?
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="tel:+16025550180" className="font-[family-name:var(--font-body)] inline-flex items-center gap-2 px-6 py-4 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5" style={{ border: "1.5px solid rgba(255,255,255,0.6)" }}>
                    Learn More
                  </a>
                </div>
                <div className="v9-h4 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {[
                    { icon: Shield, text: "Licensed AZ Broker" },
                    { icon: Headphones, text: "Direct Access to Dale" },
                    { icon: Server, text: "Rentec-Powered" },
                    { icon: MapPin, text: "15+ Years Local" },
                  ].map((c) => (
                    <div key={c.text} className="flex items-center gap-2">
                      <c.icon className="w-3.5 h-3.5" style={{ color: C.teal }} />
                      <span className="font-[family-name:var(--font-body)] text-[12px] font-medium text-white/60">{c.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Form */}
              <div className="v9-h4">
                <div className="rounded-[20px] overflow-hidden bg-white" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
                  <div className="h-1" style={{ background: C.rust }} />
                  <div className="p-8 lg:p-10">
                    {submitted ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: `${C.teal}15` }}>
                          <CheckCircle className="w-8 h-8" style={{ color: C.teal }} />
                        </div>
                        <h3 className="font-[family-name:var(--font-heading)] font-bold text-[20px] uppercase tracking-tight mb-2" style={{ color: C.black }}>We&apos;ll Be in Touch</h3>
                        <p className="font-[family-name:var(--font-body)] text-[14px]" style={{ color: C.gray }}>Expect a personalized rental analysis from Dale within 24 hours.</p>
                      </div>
                    ) : (
                      <>
                        <h3 className="font-[family-name:var(--font-heading)] font-bold text-[20px] uppercase tracking-tight mb-1" style={{ color: C.black }}>What Will Your Property Earn?</h3>
                        <p className="font-[family-name:var(--font-body)] text-[14px] mb-7" style={{ color: C.gray }}>Get a clear, data-based rental analysis and a plan to maximize your investment.</p>
                        <form className="space-y-3.5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                          <input type="text" placeholder="Property address" required className="font-[family-name:var(--font-body)] w-full px-5 py-4 rounded-xl text-[15px] outline-none" style={{ background: C.offwhite, border: `1px solid ${C.border}`, color: C.black }} />
                          <input type="email" placeholder="Email address" required className="font-[family-name:var(--font-body)] w-full px-5 py-4 rounded-xl text-[15px] outline-none" style={{ background: C.offwhite, border: `1px solid ${C.border}`, color: C.black }} />
                          <button type="submit" className="font-[family-name:var(--font-body)] w-full py-4 text-white font-bold text-[15px] uppercase tracking-wide cursor-pointer transition-all hover:-translate-y-0.5" style={{ background: C.rust }}>
                            See What It Could Earn
                          </button>
                        </form>
                        <p className="font-[family-name:var(--font-body)] text-center text-[12px] mt-4" style={{ color: C.gray }}>No obligation &middot; Personalized analysis from Dale within 24 hours</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CREDENTIAL BAR ═══ */}
        <div className="flex items-center justify-center gap-10 lg:gap-16 py-6" style={{ background: C.offwhite, borderBottom: `1px solid ${C.border}` }}>
          {[
            { v: "Licensed", l: "AZ Broker" },
            { v: "Direct Access", l: "To Dale" },
            { v: "Rentec", l: "Powered" },
            { v: "15+ Years", l: "Local Experience" },
          ].map((s, i) => (
            <div key={s.l} className="text-center" style={{ borderRight: i < 3 ? `1px solid ${C.border}` : "none", paddingRight: i < 3 ? "2.5rem" : 0 }}>
              <p className="font-[family-name:var(--font-heading)] text-[16px] font-bold uppercase" style={{ color: C.black }}>{s.v}</p>
              <p className="font-[family-name:var(--font-body)] text-[11px] uppercase tracking-[0.15em]" style={{ color: C.gray }}>{s.l}</p>
            </div>
          ))}
        </div>

        {/* ═══ INTRO — Editorial split ═══ */}
        <section className="py-20 lg:py-28" style={{ background: C.white }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_1.4fr] gap-12 lg:gap-20">
              <h2 className="font-[family-name:var(--font-heading)] text-[36px] lg:text-[48px] font-bold uppercase leading-[1.08] tracking-tight" style={{ color: C.black }}>
                We do<br />things a<br />little<br />different<br />around<br />here.
              </h2>
              <div>
                <p className="font-[family-name:var(--font-body)] text-[16px] lg:text-[18px] leading-[2] mb-8" style={{ color: C.charcoal }}>{introCopy}</p>
                <a href="#why-us" className="font-[family-name:var(--font-body)] inline-flex px-6 py-3 text-[14px] font-semibold tracking-wide transition-all hover:-translate-y-0.5" style={{ border: `1.5px solid ${C.black}`, color: C.black }}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CTA STRIPE ═══ */}
        <section className="py-14 text-center" style={{ background: C.offwhite }}>
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel text="Free Rental Analysis" />
            <h2 className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px] font-bold uppercase tracking-tight mb-4" style={{ color: C.black }}>
              What Will Your Property Earn?
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[16px] mb-8" style={{ color: C.charcoal }}>
              Get a clear, data-based rental analysis and a plan to maximize your investment.
            </p>
            <a href="#hero" className="font-[family-name:var(--font-body)] inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-[15px] uppercase tracking-wide transition-all hover:-translate-y-0.5" style={{ background: C.rust }}>
              See What It Could Earn
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ═══ SERVICES — Alternating image + text (Editorial) ═══ */}
        <section id="services" style={{ background: C.white }}>
          {services.map((s, i) => (
            <div key={s.title} className="grid grid-cols-1 lg:grid-cols-2" style={{ borderBottom: `1px solid ${C.border}` }}>
              {i % 2 === 0 ? (
                <>
                  <div className="px-8 lg:px-16 py-16 lg:py-20 flex flex-col justify-center">
                    <SectionLabel text="Our Services" />
                    <h3 className="font-[family-name:var(--font-heading)] text-[24px] lg:text-[30px] font-bold uppercase tracking-tight mb-2" style={{ color: C.black }}>{s.title}</h3>
                    <p className="font-[family-name:var(--font-body)] text-[14px] mb-4" style={{ color: C.teal }}>{s.sub}</p>
                    <p className="font-[family-name:var(--font-body)] text-[15px] leading-[1.9] mb-6" style={{ color: C.charcoal }}>{s.body}</p>
                    <a href="#pricing" className="font-[family-name:var(--font-body)] inline-flex px-6 py-3 text-[13px] font-bold uppercase text-white self-start transition-all hover:-translate-y-0.5" style={{ background: C.rust }}>
                      Learn More
                    </a>
                  </div>
                  <img src={s.img} alt={s.title} className="w-full h-full min-h-[300px] lg:min-h-[400px] object-cover" loading="lazy" />
                </>
              ) : (
                <>
                  <img src={s.img} alt={s.title} className="w-full h-full min-h-[300px] lg:min-h-[400px] object-cover order-2 lg:order-1" loading="lazy" />
                  <div className="px-8 lg:px-16 py-16 lg:py-20 flex flex-col justify-center order-1 lg:order-2">
                    <SectionLabel text="Our Services" />
                    <h3 className="font-[family-name:var(--font-heading)] text-[24px] lg:text-[30px] font-bold uppercase tracking-tight mb-2" style={{ color: C.black }}>{s.title}</h3>
                    <p className="font-[family-name:var(--font-body)] text-[14px] mb-4" style={{ color: C.teal }}>{s.sub}</p>
                    <p className="font-[family-name:var(--font-body)] text-[15px] leading-[1.9] mb-6" style={{ color: C.charcoal }}>{s.body}</p>
                    <a href="#pricing" className="font-[family-name:var(--font-body)] inline-flex px-6 py-3 text-[13px] font-bold uppercase text-white self-start transition-all hover:-translate-y-0.5" style={{ background: C.rust }}>
                      Learn More
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </section>

        {/* ═══ WE DO THINGS DIFFERENTLY — Dark teal block ═══ */}
        <section className="py-20 lg:py-28" style={{ background: C.darkTeal }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <SectionLabel text="Our Approach" color="rgba(71,137,132,0.7)" />
            <h2 className="font-[family-name:var(--font-heading)] text-[32px] lg:text-[44px] font-bold uppercase leading-[1.08] tracking-tight mb-6 text-white">
              We Do Things Differently.
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[16px] lg:text-[18px] leading-[2] max-w-[600px] text-white/70">
              You didn&apos;t invest in real estate to answer maintenance calls at midnight.
              If managing your property feels like a second job, it may be time to hand it off.
              We handle the day-to-day operations while keeping you informed &mdash; so you can focus
              on growing your portfolio, not managing it.
            </p>
          </div>
        </section>

        {/* ═══ WHY RENT CORE ═══ */}
        <section id="why-us" className="py-20 lg:py-28" style={{ background: C.white }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
              <div>
                <SectionLabel text="Why Rent Core" />
                <h2 className="font-[family-name:var(--font-heading)] text-[32px] lg:text-[44px] font-bold uppercase leading-[1.08] tracking-tight mb-6" style={{ color: C.black }}>
                  You Won&apos;t<br />Get Lost Here.
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.9] mb-6" style={{ color: C.charcoal }}>
                  We&apos;re not a 500-door operation where your property is just another line item. When you call, you reach Dale &mdash; the licensed broker who actually manages your investment. Not a helpdesk. Not a call center.
                </p>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.9]" style={{ color: C.charcoal }}>
                  Most of our clients started by managing their own properties. Over time, the calls, coordination, and constant oversight became more than expected. We make the transition simple &mdash; taking over the daily work while keeping you fully informed and in control.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { title: "Direct Communication", desc: "Talk to the decision maker, not a call center" },
                  { title: "Boutique Service", desc: "Focused, personalized attention for every property" },
                  { title: "Professional Systems", desc: "Rentec-powered tools for full transparency" },
                  { title: "Ownership Mindset", desc: "We don\u2019t just manage \u2014 we improve properties" },
                ].map((item) => (
                  <div key={item.title} className="p-6 rounded-xl" style={{ background: C.offwhite, border: `1px solid ${C.border}` }}>
                    <div className="w-3 h-3 rounded-full mb-4" style={{ background: C.teal }} />
                    <p className="font-[family-name:var(--font-heading)] text-[14px] font-bold uppercase tracking-wide mb-2" style={{ color: C.black }}>{item.title}</p>
                    <p className="font-[family-name:var(--font-body)] text-[13px] leading-relaxed" style={{ color: C.charcoal }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON ═══ */}
        <section className="py-16 lg:py-24" style={{ background: C.offwhite }}>
          <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-10">
              <SectionLabel text="The Difference" />
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[38px] font-bold uppercase tracking-tight" style={{ color: C.black }}>
                Self-Managing vs. <span style={{ color: C.teal }}>Rent Core</span>
              </h2>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
              <div className="grid grid-cols-[1fr_120px_120px]" style={{ background: C.white }}>
                <div className="px-6 py-4" />
                <div className="px-4 py-4 text-center" style={{ borderLeft: `1px solid ${C.border}` }}>
                  <p className="font-[family-name:var(--font-body)] text-[12px] font-bold uppercase tracking-wider" style={{ color: C.gray }}>Self</p>
                </div>
                <div className="px-4 py-4 text-center" style={{ borderLeft: `1px solid ${C.border}`, background: C.teal }}>
                  <p className="font-[family-name:var(--font-body)] text-[12px] font-bold uppercase tracking-wider text-white">Rent Core</p>
                </div>
              </div>
              {compRows.map((row, i) => (
                <div key={row.task} className="grid grid-cols-[1fr_120px_120px]" style={{ background: i % 2 === 0 ? C.offwhite : C.white, borderTop: `1px solid ${C.border}` }}>
                  <div className="px-6 py-4 flex items-center">
                    <span className="font-[family-name:var(--font-body)] text-[14px]" style={{ color: C.charcoal }}>{row.task}</span>
                  </div>
                  <div className="px-4 py-4 flex items-center justify-center" style={{ borderLeft: `1px solid ${C.border}` }}>
                    {row.self ? <Check className="w-5 h-5" style={{ color: C.teal }} /> : <X className="w-5 h-5" style={{ color: C.rust }} />}
                  </div>
                  <div className="px-4 py-4 flex items-center justify-center" style={{ borderLeft: `1px solid ${C.border}` }}>
                    <Check className="w-5 h-5" style={{ color: C.teal }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="font-[family-name:var(--font-body)] text-center text-[14px] mt-6" style={{ color: C.gray }}>
              Keep full control &mdash; without the full-time job.
            </p>
          </div>
        </section>

        {/* ═══ OWNER PORTAL ═══ */}
        <section className="py-20 lg:py-28" style={{ background: C.white }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <div>
                <SectionLabel text="Owner Portal" />
                <h2 className="font-[family-name:var(--font-heading)] text-[32px] lg:text-[44px] font-bold uppercase leading-[1.08] tracking-tight mb-6" style={{ color: C.black }}>
                  Your Properties.<br />One Dashboard.
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.9] mb-8" style={{ color: C.charcoal }}>
                  Real-time financials, maintenance tracking, and tenant updates &mdash; all in one place. No more chasing down paperwork.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: DollarSign, text: "Live rent collection & disbursement tracking" },
                    { icon: BarChart3, text: "Monthly statements & year-end 1099s" },
                    { icon: Wrench, text: "Maintenance requests with status updates" },
                    { icon: FileText, text: "Lease documents & tenant communication" },
                  ].map((f) => (
                    <div key={f.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${C.teal}10` }}>
                        <f.icon className="w-4 h-4" style={{ color: C.teal }} />
                      </div>
                      <p className="font-[family-name:var(--font-body)] text-[13px] leading-relaxed" style={{ color: C.charcoal }}>{f.text}</p>
                    </div>
                  ))}
                </div>
                <a href="#" className="font-[family-name:var(--font-body)] inline-flex items-center gap-2 px-6 py-3 text-[13px] font-bold uppercase text-white transition-all hover:-translate-y-0.5" style={{ background: C.teal }}>
                  <ExternalLink className="w-4 h-4" />
                  portal.rentcorepm.com
                </a>
              </div>
              {/* Portal preview */}
              <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}`, background: C.offwhite }}>
                <div className="px-6 py-4 flex items-center gap-2" style={{ background: C.darkTeal }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#28CA41" }} />
                  <p className="font-[family-name:var(--font-body)] text-[11px] text-white/50 ml-3">portal.rentcorepm.com</p>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "Monthly Revenue", value: "+8.2%", color: C.teal },
                    { label: "Occupancy Rate", value: "100%", color: C.teal },
                    { label: "Active Properties", value: "4", color: C.black },
                    { label: "YoY Revenue", value: "+12%", color: C.teal },
                  ].map((m) => (
                    <div key={m.label} className="flex items-center justify-between py-3" style={{ borderBottom: `1px solid ${C.border}` }}>
                      <span className="font-[family-name:var(--font-body)] text-[14px]" style={{ color: C.charcoal }}>{m.label}</span>
                      <span className="font-[family-name:var(--font-heading)] font-bold text-[18px]" style={{ color: m.color }}>{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TESTIMONIALS ═══ */}
        <section className="py-20 lg:py-28" style={{ background: C.offwhite }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-14">
              <SectionLabel text="Investor Reviews" />
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[38px] font-bold uppercase tracking-tight" style={{ color: C.black }}>
                What Investors Say
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[15px] mt-3" style={{ color: C.gray }}>4.9 average rating &middot; 120+ reviews on Google</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.slice(0, 3).map((r) => (
                <div key={r.name} className="p-7" style={{ borderBottom: `3px solid ${C.teal}`, background: C.offwhite }}>
                  <Stars />
                  <p className="font-[family-name:var(--font-body)] text-[15px] italic leading-[1.8] mt-4 mb-5" style={{ color: C.charcoal }}>&ldquo;{r.q}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold text-white" style={{ background: C.darkTeal }}>{r.name[0]}</div>
                    <div>
                      <p className="font-[family-name:var(--font-body)] text-[14px] font-bold" style={{ color: C.black }}>{r.name}</p>
                      <p className="font-[family-name:var(--font-body)] text-[12px]" style={{ color: C.gray }}>{r.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Extra reviews in smaller row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {reviews.slice(3).map((r) => (
                <div key={r.name} className="flex gap-4 p-5" style={{ background: C.offwhite }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold text-white shrink-0" style={{ background: C.darkTeal }}>{r.name[0]}</div>
                  <div>
                    <Stars />
                    <p className="font-[family-name:var(--font-body)] text-[14px] italic leading-[1.7] mt-2 mb-2" style={{ color: C.charcoal }}>&ldquo;{r.q}&rdquo;</p>
                    <p className="font-[family-name:var(--font-body)] text-[13px]"><span className="font-bold" style={{ color: C.black }}>{r.name}</span> <span style={{ color: C.gray }}>&middot; {r.detail}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PRICING ═══ */}
        <section id="pricing" className="py-20 lg:py-28" style={{ background: C.offwhite }}>
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <SectionLabel text="Pricing" />
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[42px] font-bold uppercase tracking-tight" style={{ color: C.black }}>
                Simple, Transparent Pricing
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[16px] mt-4 max-w-[500px] mx-auto" style={{ color: C.charcoal }}>
                Full-service management with transparent pricing. No hidden fees &mdash; ever.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-start">
              {/* Calculator */}
              <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}`, background: C.white }}>
                <div className="p-8">
                  <p className="font-[family-name:var(--font-body)] text-[12px] font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: C.gray }}>Enter Your Monthly Rent</p>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: C.teal }}>
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <input
                      type="number"
                      defaultValue={1800}
                      min={0}
                      className="font-[family-name:var(--font-body)] w-full pl-16 pr-24 py-5 rounded-xl text-[22px] font-bold outline-none"
                      style={{ background: C.offwhite, border: `1px solid ${C.border}`, color: C.black }}
                      onChange={(e) => setRent(parseFloat(e.target.value) || 0)}
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 font-[family-name:var(--font-body)] text-[14px]" style={{ color: C.gray }}>/ month</span>
                  </div>
                </div>

                {rent > 0 && (
                  <>
                    <div className="px-8 py-6" style={{ background: C.teal }}>
                      <p className="font-[family-name:var(--font-body)] text-[11px] font-semibold tracking-[0.15em] uppercase text-white/60">Your Monthly Management Fee</p>
                      <p className="font-[family-name:var(--font-heading)] text-[42px] font-bold text-white tracking-tight mt-1">${fmt(mgmt)}</p>
                    </div>
                    <div className="grid grid-cols-2" style={{ borderBottom: `1px solid ${C.border}` }}>
                      <div className="px-6 py-5 text-center" style={{ borderRight: `1px solid ${C.border}` }}>
                        <p className="font-[family-name:var(--font-body)] text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: C.gray }}>Monthly</p>
                        <p className="font-[family-name:var(--font-heading)] font-bold text-[20px] mt-1" style={{ color: C.black }}>${fmt(mgmt)}</p>
                      </div>
                      <div className="px-6 py-5 text-center">
                        <p className="font-[family-name:var(--font-body)] text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: C.gray }}>Annual Est.</p>
                        <p className="font-[family-name:var(--font-heading)] font-bold text-[20px] mt-1" style={{ color: C.teal }}>${fmt(annual)}</p>
                      </div>
                    </div>
                    <div className="px-8 py-4">
                      <p className="font-[family-name:var(--font-body)] text-[11px] font-semibold tracking-[0.1em] uppercase mb-3" style={{ color: C.gray }}>Additional Fees</p>
                      {[
                        { label: "Leasing Fee", sub: "75% of one month", value: `$${fmt(leasing)}` },
                        { label: "Lease Setup / Admin", sub: "", value: "$195.00" },
                        { label: "Lease Renewal", sub: "per renewal", value: "$300.00" },
                        { label: "Maintenance", sub: "per quarter", value: "$50.00" },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between py-3" style={{ borderBottom: `1px solid ${C.border}` }}>
                          <div>
                            <span className="font-[family-name:var(--font-body)] text-[14px]" style={{ color: C.charcoal }}>{row.label}</span>
                            {row.sub && <span className="font-[family-name:var(--font-body)] text-[12px] ml-2" style={{ color: C.gray }}>{row.sub}</span>}
                          </div>
                          <span className="font-[family-name:var(--font-heading)] font-bold text-[15px]" style={{ color: C.black }}>{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* What's included */}
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[22px] uppercase tracking-tight mb-2" style={{ color: C.black }}>What&apos;s Included</h3>
                <p className="font-[family-name:var(--font-body)] text-[15px] mb-8" style={{ color: C.charcoal }}>Everything in your management fee &mdash; no surprise charges.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { icon: Megaphone, title: "Marketing & Leasing", desc: "Listing, showings & tenant placement" },
                    { icon: Shield, title: "Tenant Screening", desc: "Background, credit & income checks" },
                    { icon: Wallet, title: "Rent Collection", desc: "Collection, tracking & disbursement" },
                    { icon: Wrench, title: "Maintenance", desc: "24/7 coordination & vendor management" },
                    { icon: BarChart3, title: "Financial Reporting", desc: "Monthly statements & 1099 tax docs" },
                    { icon: ShieldCheck, title: "Compliance", desc: "Lease enforcement & move-in/out reports" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3.5">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${C.teal}10`, border: `1px solid ${C.teal}20` }}>
                        <item.icon className="w-[18px] h-[18px]" style={{ color: C.teal }} />
                      </div>
                      <div>
                        <p className="font-[family-name:var(--font-body)] text-[14px] font-semibold" style={{ color: C.black }}>{item.title}</p>
                        <p className="font-[family-name:var(--font-body)] text-[13px]" style={{ color: C.gray }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-2 px-4 py-3 rounded-lg" style={{ background: `${C.teal}10`, border: `1px solid ${C.teal}25` }}>
                  <Check className="w-4 h-4 shrink-0" style={{ color: C.teal }} />
                  <p className="font-[family-name:var(--font-body)] text-[13px] font-medium" style={{ color: C.teal }}>No hidden fees &mdash; you only pay when your property is occupied.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ GUARANTEES ═══ */}
        <section className="py-20 lg:py-28" style={{ background: C.white }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-14">
              <SectionLabel text="Our Promise" />
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[38px] font-bold uppercase tracking-tight" style={{ color: C.black }}>
                Your Investment, Protected.
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[16px] mt-3 max-w-[500px] mx-auto" style={{ color: C.charcoal }}>
                Real guarantees backed by action &mdash; not just words on a page.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guarantees.map((g) => (
                <div key={g.title} className="p-7 rounded-xl" style={{ background: C.offwhite, border: `1px solid ${C.border}` }}>
                  <div className="w-3 h-3 rounded-full mb-4" style={{ background: C.teal }} />
                  <h3 className="font-[family-name:var(--font-heading)] text-[16px] font-bold uppercase tracking-wide mb-2" style={{ color: C.black }}>{g.title}</h3>
                  <p className="font-[family-name:var(--font-body)] text-[14px] leading-relaxed mb-3" style={{ color: C.charcoal }}>{g.body}</p>
                  <p className="font-[family-name:var(--font-body)] text-[12px]" style={{ color: C.gray }}>{g.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS ═══ */}
        <section className="py-16 lg:py-24" style={{ background: C.offwhite }}>
          <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-14">
              <SectionLabel text="Getting Started" />
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[38px] font-bold uppercase tracking-tight" style={{ color: C.black }}>
                Three Steps. Full Transparency.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { n: "01", title: "Tell Us About Your Property", desc: "We\u2019ll show you what it could earn with a free rental analysis." },
                { n: "02", title: "We Handle Everything", desc: "Leasing, screening, rent collection, maintenance \u2014 all managed." },
                { n: "03", title: "Stay Informed", desc: "Real-time portal access and monthly financial reports. Full control." },
              ].map((step) => (
                <div key={step.n} className="text-center">
                  <p className="font-[family-name:var(--font-heading)] text-[36px] font-bold mb-3" style={{ color: C.teal }}>{step.n}</p>
                  <h3 className="font-[family-name:var(--font-heading)] text-[15px] font-bold uppercase tracking-wide mb-3" style={{ color: C.black }}>{step.title}</h3>
                  <p className="font-[family-name:var(--font-body)] text-[14px] leading-relaxed" style={{ color: C.charcoal }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ ABOUT / DALE ═══ */}
        <section id="about" className="py-20 lg:py-28" style={{ background: C.white }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20">
              <div>
                <SectionLabel text="About" />
                <h2 className="font-[family-name:var(--font-heading)] text-[32px] lg:text-[44px] font-bold uppercase leading-[1.08] tracking-tight mb-3" style={{ color: C.black }}>
                  Meet Dale,<br />Founder of<br />Rent Core
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[12px] uppercase tracking-[0.15em] mb-6" style={{ color: C.teal }}>Licensed Arizona Broker &middot; BR548311000</p>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.9] mb-6" style={{ color: C.charcoal }}>{daleBio}</p>
                <p className="font-[family-name:var(--font-body)] text-[18px] italic" style={{ color: C.black }}>&ldquo;{tagline}&rdquo;</p>
              </div>
              <div className="rounded-xl overflow-hidden" style={{ minHeight: "350px" }}>
                <img src="/dale-figger-1776461333.jpg" alt="Dale Figger — Founder of Rent Core" className="w-full h-full min-h-[350px] object-cover object-top" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ AREAS ═══ */}
        <section id="areas" className="py-20 lg:py-28" style={{ background: C.offwhite }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-14">
              <SectionLabel text="Service Areas" />
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[38px] font-bold uppercase tracking-tight" style={{ color: C.black }}>
                Phoenix + Tucson Metro
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[15px] mt-3" style={{ color: C.charcoal }}>
                We manage single-family rentals across both metropolitan areas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-[16px] font-bold uppercase tracking-wide mb-4" style={{ color: C.black }}>Phoenix Metro</h3>
                <div className="flex flex-wrap gap-2">
                  {phoenixAreas.map((a) => (
                    <span key={a} className="font-[family-name:var(--font-body)] px-3 py-1.5 text-[13px] rounded" style={{ background: C.white, border: `1px solid ${C.border}`, color: C.charcoal }}>{a}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-[16px] font-bold uppercase tracking-wide mb-4" style={{ color: C.black }}>Tucson Metro</h3>
                <div className="flex flex-wrap gap-2">
                  {tucsonAreas.map((a) => (
                    <span key={a} className="font-[family-name:var(--font-body)] px-3 py-1.5 text-[13px] rounded" style={{ background: C.white, border: `1px solid ${C.border}`, color: C.charcoal }}>{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FOR TENANTS ═══ */}
        <section className="py-20 lg:py-28" style={{ background: C.white }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-14">
              <SectionLabel text="For Tenants" />
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[38px] font-bold uppercase tracking-tight" style={{ color: C.black }}>
                Renting Made Simple.
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[16px] mt-3 max-w-[500px] mx-auto" style={{ color: C.charcoal }}>
                We make your renting experience stress-free &mdash; from move-in to move-out.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: CreditCard, title: "Easy Online Payments", desc: "Pay rent from anywhere. Set up autopay and never worry about a late payment again." },
                { icon: Wrench, title: "Fast Maintenance Response", desc: "Submit a request online and our team coordinates repairs quickly with vetted vendors." },
                { icon: Home, title: "Your Tenant Portal", desc: "View your lease, track payments, and communicate with management \u2014 all in one place." },
              ].map((f) => (
                <div key={f.title} className="p-7 rounded-xl text-center" style={{ background: C.offwhite, border: `1px solid ${C.border}` }}>
                  <div className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center" style={{ background: `${C.teal}10` }}>
                    <f.icon className="w-6 h-6" style={{ color: C.teal }} />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-[15px] font-bold uppercase tracking-wide mb-3" style={{ color: C.black }}>{f.title}</h3>
                  <p className="font-[family-name:var(--font-body)] text-[14px] leading-relaxed" style={{ color: C.charcoal }}>{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Home, label: "Available Rentals", sub: "Browse properties" },
                { icon: CreditCard, label: "Pay Rent", sub: "Online payment" },
                { icon: Wrench, label: "Maintenance Request", sub: "Submit a ticket" },
                { icon: ExternalLink, label: "Tenant Portal", sub: "Log in" },
              ].map((a) => (
                <a key={a.label} href="#" className="group p-5 rounded-xl text-center transition-all hover:-translate-y-1" style={{ background: C.darkTeal }}>
                  <a.icon className="w-5 h-5 mx-auto mb-2 text-white/60" />
                  <p className="font-[family-name:var(--font-body)] text-[13px] font-bold text-white mb-1">{a.label}</p>
                  <p className="font-[family-name:var(--font-body)] text-[11px] text-white/50">{a.sub}</p>
                </a>
              ))}
            </div>
            <p className="font-[family-name:var(--font-body)] text-center text-[13px] mt-6" style={{ color: C.gray }}>
              Need help? Call <a href="tel:+16025550180" className="font-semibold" style={{ color: C.rust }}>(602) 555-0180</a>
            </p>
          </div>
        </section>

        {/* ═══ RESOURCES ═══ */}
        <section className="py-20 lg:py-28" style={{ background: C.offwhite }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-14">
              <SectionLabel text="Resources" />
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[38px] font-bold uppercase tracking-tight" style={{ color: C.black }}>
                Insights for Smarter Investments
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[15px] mt-3" style={{ color: C.charcoal }}>
                Market reports, tax strategies, and tips for Phoenix and Tucson investors.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Phoenix Rental Market Report: Q1 2026", tag: "Market Data", time: "5 min read", desc: "Average rents, vacancy rates, and demand trends across Phoenix metro \u2014 updated quarterly.", img: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=600&q=80" },
                { title: "Out-of-State Investing in Arizona", tag: "Guide", time: "5 min read", desc: "Tax implications, management considerations, and why Phoenix attracts out-of-state capital.", img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80" },
                { title: "5 Hidden Costs That Kill Your Rental ROI", tag: "Education", time: "5 min read", desc: "The fees and expenses most landlords overlook \u2014 and how professional management eliminates them.", img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&q=80" },
              ].map((r) => (
                <a key={r.title} href="#" className="group rounded-xl overflow-hidden transition-all hover:-translate-y-1" style={{ background: C.white, border: `1px solid ${C.border}` }}>
                  <img src={r.img} alt={r.title} className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-[family-name:var(--font-body)] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded" style={{ background: `${C.teal}10`, color: C.teal }}>{r.tag}</span>
                      <span className="font-[family-name:var(--font-body)] text-[11px]" style={{ color: C.gray }}>{r.time}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] text-[15px] font-bold uppercase tracking-wide mb-2" style={{ color: C.black }}>{r.title}</h3>
                    <p className="font-[family-name:var(--font-body)] text-[13px] leading-relaxed" style={{ color: C.charcoal }}>{r.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="py-20 lg:py-28" style={{ background: C.white }}>
          <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-14">
              <SectionLabel text="FAQ" />
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[38px] font-bold uppercase tracking-tight" style={{ color: C.black }}>
                Common Questions
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}`, background: openFaq === i ? C.offwhite : C.white }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                  >
                    <span className="font-[family-name:var(--font-heading)] font-bold text-[15px] pr-4 uppercase tracking-wide" style={{ color: C.black }}>{faq.q}</span>
                    <ChevronDown className="w-5 h-5 shrink-0 transition-transform duration-300" style={{ color: C.gray, transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="font-[family-name:var(--font-body)] text-[14px] leading-[1.7]" style={{ color: C.charcoal }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="py-20 lg:py-28 text-center" style={{ background: C.darkTeal }}>
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[40px] font-bold uppercase tracking-tight mb-4 text-white">
              Ready to See What Your<br />Property Can Earn?
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[16px] mb-8 text-white/70">
              Get a clear, data-based rental analysis. No obligation, no pressure &mdash; just answers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#hero" className="font-[family-name:var(--font-body)] inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-[15px] uppercase tracking-wide transition-all hover:-translate-y-0.5" style={{ background: C.rust }}>
                Get Your Free Report
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:+16025550180" className="font-[family-name:var(--font-body)] inline-flex items-center gap-2 px-6 py-4 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5" style={{ border: "1.5px solid rgba(255,255,255,0.5)" }}>
                <Phone className="w-4 h-4" />
                Call (602) 555-0180
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-14" style={{ background: C.black }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Image src="/logo-circle.png" alt="RentCore" width={36} height={36} className="rounded-full" />
                <span className="font-[family-name:var(--font-heading)] text-[18px] font-bold uppercase tracking-[0.08em] text-white">
                  <span style={{ color: C.teal }}>Rent</span>Core
                </span>
              </div>
              <p className="font-[family-name:var(--font-body)] text-[14px] italic text-white/50 mb-5">&ldquo;{tagline}&rdquo;</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-white/30" />
                  <span className="font-[family-name:var(--font-body)] text-[13px] text-white/50">(602) 555-0180</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-white/30" />
                  <span className="font-[family-name:var(--font-body)] text-[13px] text-white/50">info@rentcorepm.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-white/30" />
                  <span className="font-[family-name:var(--font-body)] text-[13px] text-white/50">Phoenix, AZ</span>
                </div>
              </div>
            </div>
            <div>
              <p className="font-[family-name:var(--font-body)] text-[12px] font-bold uppercase tracking-wider text-white/30 mb-4">Property Owners</p>
              {["Why Rent Core", "Services", "Pricing", "Free Rental Analysis", "Owner Portal Login"].map((l) => (
                <a key={l} href="#" className="font-[family-name:var(--font-body)] block text-[13px] text-white/50 mb-2 hover:text-white/80 transition-colors">{l}</a>
              ))}
            </div>
            <div>
              <p className="font-[family-name:var(--font-body)] text-[12px] font-bold uppercase tracking-wider text-white/30 mb-4">Tenants</p>
              {["Available Rentals", "Apply Online", "Tenant Portal Login", "Maintenance Request"].map((l) => (
                <a key={l} href="#" className="font-[family-name:var(--font-body)] block text-[13px] text-white/50 mb-2 hover:text-white/80 transition-colors">{l}</a>
              ))}
            </div>
            <div>
              <p className="font-[family-name:var(--font-body)] text-[12px] font-bold uppercase tracking-wider text-white/30 mb-4">Company</p>
              {["About Us", "Areas Served", "Resources", "Contact Us"].map((l) => (
                <a key={l} href="#" className="font-[family-name:var(--font-body)] block text-[13px] text-white/50 mb-2 hover:text-white/80 transition-colors">{l}</a>
              ))}
            </div>
          </div>

          {/* Compliance logos */}
          <div className="flex items-center justify-center gap-10 py-6 mb-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            {["MLS", "Equal Housing", "REALTOR\u00AE", "NARPM", "BBB"].map((l) => (
              <span key={l} className="font-[family-name:var(--font-body)] text-[10px] font-bold uppercase tracking-wider text-white/20">{l}</span>
            ))}
          </div>

          <div className="flex items-center justify-between text-white/20">
            <p className="font-[family-name:var(--font-body)] text-[12px]">&copy; 2026 Rent Core Property Management. All rights reserved.</p>
            <p className="font-[family-name:var(--font-body)] text-[12px]">Licensed Arizona Broker &middot; BR548311000</p>
          </div>
        </div>
      </footer>
    </>
  );
}
