"use client";

import { useState } from "react";
import { ArrowRight, Phone, Mail, Shield, DollarSign, Users, Eye, Handshake, Clock, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

/* ═══ HEADER (reused from main site style) ═══ */
function PageHeader() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] text-center py-1.5 transition-colors duration-500" style={{ background: "var(--c-license-bg)", borderBottom: "1px solid var(--c-bd)" }}>
        <p className="text-[11px] font-medium" style={{ color: "var(--c-mut)" }}>Designated Broker: Dale Figger · License # BR548311000</p>
      </div>
      <header className="fixed top-[30px] left-0 right-0 z-50" style={{ background: "var(--c-header-bg)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--c-bd)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-[96px] lg:h-[104px]">
            <a href="/" className="flex items-center">
              <img src="/logo-circle.png" alt="RentCore Property Management" style={{ width: "80px", height: "80px" }} />
            </a>
            {/* Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {[{ label: "How It Works", href: "#how-it-works" }, { label: "Benefits", href: "#benefits" }, { label: "Submit Referral", href: "#referral-form" }, { label: "FAQ", href: "#faq" }, { label: "Home", href: "/" }].map((link) => (
                <a key={link.label} href={link.href} className="text-[14px] font-medium transition-colors" style={{ color: "var(--c-mut)" }}>{link.label}</a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a href="tel:+16025550180" className="hidden md:flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--c-mut)" }}>
                <Phone className="w-4 h-4" />(602) 555-0180
              </a>
              <a href="#referral-form" className="hidden sm:inline-flex px-5 py-2.5 text-white text-[13px] font-[family-name:var(--font-heading)] font-bold rounded-xl transition-all hover:-translate-y-0.5" style={{ background: "var(--c-copr)", boxShadow: "0 4px 16px rgba(212,132,90,0.4)" }}>
                Submit a Referral
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

/* ═══ FAQ ITEM ═══ */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--c-bd)" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer transition-colors" style={{ background: open ? "var(--c-card)" : "transparent" }}>
        <span className="font-[family-name:var(--font-heading)] font-bold text-[15px] pr-4" style={{ color: "var(--c-head)" }}>{q}</span>
        {open ? <ChevronUp className="w-5 h-5 shrink-0" style={{ color: "var(--c-mut)" }} /> : <ChevronDown className="w-5 h-5 shrink-0" style={{ color: "var(--c-mut)" }} />}
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-[14px] leading-[1.7]" style={{ color: "var(--c-body)" }}>{a}</p>
        </div>
      )}
    </div>
  );
}

/* ═══ FULL PAGE ═══ */
export default function AgentReferralProgram() {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("");

  return (
    <div style={{ background: "var(--c-bg)" }}>
      <Header />

      <main>
        {/* ═══ HERO ═══ */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: "var(--c-bg)" }}>
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.25 }} loading="eager" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(170deg, var(--c-bg) 0%, transparent 40%, var(--c-bg) 100%)` }} />
          <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full blur-[140px]" style={{ background: "rgba(91,143,139,0.14)" }} />
          <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full blur-[120px]" style={{ background: "rgba(212,132,90,0.10)" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-40 lg:pt-48 pb-16 lg:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8" style={{ background: "var(--c-badge-bg)", backdropFilter: "blur(12px)", border: "1px solid var(--c-bd)" }}>
                  <Handshake className="w-4 h-4" style={{ color: "var(--c-sage)" }} />
                  <span className="text-[13px] font-medium" style={{ color: "var(--c-body)" }}>Agent Referral Program</span>
                </div>

                <h1 className="font-[family-name:var(--font-heading)] text-[38px] sm:text-[48px] lg:text-[58px] xl:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-8" style={{ color: "var(--c-head)" }}>
                  Refer. We Manage.{" "}
                  <span style={{ color: "var(--c-copr)" }}>You Earn.</span>
                </h1>

                <p className="text-[17px] lg:text-[19px] leading-[1.75] mb-8 max-w-[460px]" style={{ color: "var(--c-body)" }}>
                  Send us your investor clients. We manage their properties. You earn a referral fee. Simple.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <a href="#referral-form" className="group inline-flex items-center gap-3 px-8 py-4 text-white font-[family-name:var(--font-heading)] font-bold text-[15px] rounded-2xl transition-all hover:-translate-y-0.5" style={{ background: "var(--c-copr)", boxShadow: "0 10px 30px rgba(212,132,90,0.35)" }}>
                    Submit a Referral <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="tel:+16025550180" className="inline-flex items-center gap-2 px-6 py-4 font-medium text-[15px] rounded-2xl transition-all" style={{ color: "var(--c-body)" }}>
                    <Phone className="w-4 h-4" /> Call (602) 555-0180
                  </a>
                </div>

                <div className="flex items-center gap-6">
                  {[{ v: "Uncapped", l: "Referral Fees" }, { v: "48hr", l: "Response Time" }, { v: "100%", l: "Transparency" }].map((s) => (
                    <div key={s.l} className="text-center">
                      <p className="font-[family-name:var(--font-heading)] text-[22px] font-extrabold tracking-tight" style={{ color: "var(--c-sage)" }}>{s.v}</p>
                      <p className="text-[11px]" style={{ color: "var(--c-mut)" }}>{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Trust card (scannable, not readable) */}
              <div className="rounded-[28px] overflow-hidden" style={{ background: "var(--c-card)", border: "1px solid var(--c-bd)", boxShadow: "0 25px 60px rgba(0,0,0,0.3)" }}>
                {/* Top — bold promise */}
                <div className="px-8 pt-8 pb-6 text-center" style={{ borderBottom: "1px solid var(--c-bd)" }}>
                  <Shield className="w-10 h-10 mx-auto mb-4" style={{ color: "var(--c-sage)" }} />
                  <h3 className="font-[family-name:var(--font-heading)] font-extrabold text-[22px] tracking-tight mb-1" style={{ color: "var(--c-head)" }}>Your Clients Stay Yours</h3>
                  <p className="text-[13px]" style={{ color: "var(--c-mut)" }}>Our #1 promise — no exceptions</p>
                </div>
                {/* Scannable checklist */}
                <div className="px-8 py-6 space-y-4">
                  {[
                    { icon: Shield, text: "No soliciting your clients — ever" },
                    { icon: Eye, text: "Full visibility on property status" },
                    { icon: Handshake, text: "Buy/sell leads go back to you" },
                    { icon: DollarSign, text: "Uncapped referral fees, paid fast" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--c-inp)", border: "1px solid var(--c-bd)" }}>
                        <item.icon className="w-4 h-4" style={{ color: "var(--c-sage)" }} />
                      </div>
                      <span className="text-[14px] font-medium" style={{ color: "var(--c-head)" }}>{item.text}</span>
                    </div>
                  ))}
                </div>
                {/* Bottom CTA */}
                <div className="px-8 pb-8">
                  <a href="#referral-form" className="block w-full py-4 text-center text-white font-[family-name:var(--font-heading)] font-bold text-[15px] rounded-2xl transition-all hover:-translate-y-0.5 cursor-pointer" style={{ background: "var(--c-sage)" }}>
                    Submit Your First Referral
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS ═══ */}
        <section id="how-it-works" className="py-20 lg:py-28" style={{ background: "var(--c-bg2)" }}>
          <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-14 lg:mb-20">
              <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>How It Works</span>
              <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
                Three Simple Steps
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              {[
                { step: "01", icon: Mail, title: "Submit Referral", desc: "2-minute form. Client + property details.", color: "var(--c-sage)" },
                { step: "02", icon: Users, title: "We Manage", desc: "Leasing, tenants, maintenance — handled.", color: "var(--c-copr)" },
                { step: "03", icon: DollarSign, title: "You Earn", desc: "Contract signed = you get paid. No cap.", color: "var(--c-sage)" },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="relative inline-block mb-8">
                    <div className="w-20 h-20 rounded-[24px] flex items-center justify-center" style={{ background: s.color }}>
                      <s.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-lg text-white text-[11px] font-bold flex items-center justify-center font-[family-name:var(--font-heading)]" style={{ background: s.color, boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>{s.step}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[20px] mb-3 tracking-tight" style={{ color: "var(--c-head)" }}>{s.title}</h3>
                  <p className="text-[15px] leading-[1.7] max-w-[300px] mx-auto" style={{ color: "var(--c-body)" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ BENEFITS ═══ */}
        <section id="benefits" className="py-20 lg:py-28" style={{ background: "var(--c-bg)" }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-14 lg:mb-20">
              <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>Why Agents Choose Us</span>
              <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
                Built for <span className="gradient-text">Mutual Growth</span>
              </h2>
              <p className="text-[17px] mt-5 max-w-[520px] mx-auto" style={{ color: "var(--c-body)" }}>A referral program designed to protect your relationships and grow your income.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {[
                { icon: DollarSign, title: "Uncapped Fees", desc: "No limits. Every signed contract = money in your pocket." },
                { icon: Clock, title: "Paid Fast", desc: "Agreement signed → fee processed. No waiting." },
                { icon: Shield, title: "Client Protection", desc: "We never solicit your clients. Ever. Period." },
                { icon: Eye, title: "Full Transparency", desc: "Property updates sent to you. Stay in the loop." },
                { icon: Handshake, title: "Reverse Referrals", desc: "Client wants to buy/sell? We send them back to you." },
                { icon: Users, title: "Direct Contact", desc: "Your own point person. No call centers." },
              ].map((b) => (
                <div key={b.title} className="rounded-[24px] p-8 lg:p-9 transition-all duration-300 hover:-translate-y-1" style={{ background: "var(--c-card)", border: "1px solid var(--c-bd)" }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: "var(--c-inp)", border: "1px solid var(--c-bd)" }}>
                    <b.icon className="w-5 h-5" style={{ color: "var(--c-copr)" }} />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[18px] mb-3 tracking-tight" style={{ color: "var(--c-head)" }}>{b.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "var(--c-body)" }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ REFERRAL FORM ═══ */}
        <section id="referral-form" className="py-20 lg:py-28" style={{ background: "var(--c-bg2)" }}>
          <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-12 lg:mb-16">
              <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>Submit a Referral</span>
              <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[44px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
                Ready to Refer?
              </h2>
              <p className="text-[17px] mt-5 max-w-[480px] mx-auto" style={{ color: "var(--c-body)" }}>Fill out the form below and we&apos;ll be in touch within 48 hours.</p>
            </div>

            {submitted ? (
              <div className="rounded-[28px] p-10 lg:p-14 text-center" style={{ background: "var(--c-card)", border: "1px solid var(--c-bd)" }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(91,143,139,0.15)" }}>
                  <CheckCircle className="w-10 h-10" style={{ color: "var(--c-sage)" }} />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[26px] tracking-tight mb-3" style={{ color: "var(--c-head)" }}>Referral Submitted!</h3>
                <p className="text-[16px] leading-relaxed max-w-[400px] mx-auto" style={{ color: "var(--c-body)" }}>Thank you for your referral. Our team will review the details and reach out to you within 48 hours.</p>
                <a href="/" className="inline-flex items-center gap-2 mt-8 text-[14px] font-semibold" style={{ color: "var(--c-copr)" }}>Back to Home <ArrowRight className="w-4 h-4" /></a>
              </div>
            ) : (
              <form className="rounded-[28px] overflow-hidden" style={{ background: "var(--c-card)", border: "1px solid var(--c-bd)" }} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="h-1.5" style={{ background: "linear-gradient(to right, var(--c-sage), var(--c-copr))" }} />
                <div className="p-8 lg:p-10 space-y-8">

                  {/* Agent Info */}
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[18px] mb-5 tracking-tight flex items-center gap-2" style={{ color: "var(--c-head)" }}>
                      <span className="w-7 h-7 rounded-lg text-white text-[11px] font-bold flex items-center justify-center" style={{ background: "var(--c-sage)" }}>1</span>
                      Your Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <input type="text" placeholder="Full Name *" required className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid var(--c-bd)", color: "var(--c-head)", background: "var(--c-inp)" }} />
                      <input type="email" placeholder="Email Address *" required className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid var(--c-bd)", color: "var(--c-head)", background: "var(--c-inp)" }} />
                      <input type="tel" placeholder="Phone Number *" required className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid var(--c-bd)", color: "var(--c-head)", background: "var(--c-inp)" }} />
                      <input type="text" placeholder="Brokerage / Company" className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid var(--c-bd)", color: "var(--c-head)", background: "var(--c-inp)" }} />
                    </div>
                  </div>

                  {/* Property Info */}
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[18px] mb-5 tracking-tight flex items-center gap-2" style={{ color: "var(--c-head)" }}>
                      <span className="w-7 h-7 rounded-lg text-white text-[11px] font-bold flex items-center justify-center" style={{ background: "var(--c-copr)" }}>2</span>
                      Property Details
                    </h3>
                    <div className="grid grid-cols-1 gap-3.5">
                      <input type="text" placeholder="Property Address *" required className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid var(--c-bd)", color: "var(--c-head)", background: "var(--c-inp)" }} />
                      <div className="grid grid-cols-3 gap-3.5">
                        <input type="text" placeholder="City *" required className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid var(--c-bd)", color: "var(--c-head)", background: "var(--c-inp)" }} />
                        <input type="text" placeholder="State" defaultValue="AZ" className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid var(--c-bd)", color: "var(--c-head)", background: "var(--c-inp)" }} />
                        <input type="text" placeholder="Zip Code" className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid var(--c-bd)", color: "var(--c-head)", background: "var(--c-inp)" }} />
                      </div>
                      <div>
                        <p className="text-[13px] font-medium mb-3" style={{ color: "var(--c-mut)" }}>Service Required</p>
                        <div className="flex flex-wrap gap-2.5">
                          {["Property Management", "Leasing", "Tenant Placement", "All Services"].map((s) => (
                            <button key={s} type="button" onClick={() => setService(s)} className="px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all cursor-pointer" style={{ background: service === s ? "var(--c-sage)" : "var(--c-inp)", color: service === s ? "white" : "var(--c-body)", border: service === s ? "1px solid var(--c-sage)" : "1px solid var(--c-bd)" }}>
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Client Info */}
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[18px] mb-5 tracking-tight flex items-center gap-2" style={{ color: "var(--c-head)" }}>
                      <span className="w-7 h-7 rounded-lg text-white text-[11px] font-bold flex items-center justify-center" style={{ background: "var(--c-sage)" }}>3</span>
                      Client Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      <input type="text" placeholder="Client Full Name *" required className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid var(--c-bd)", color: "var(--c-head)", background: "var(--c-inp)" }} />
                      <input type="email" placeholder="Client Email" className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid var(--c-bd)", color: "var(--c-head)", background: "var(--c-inp)" }} />
                      <input type="tel" placeholder="Client Phone" className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all" style={{ border: "1px solid var(--c-bd)", color: "var(--c-head)", background: "var(--c-inp)" }} />
                    </div>
                  </div>

                  {/* Comments */}
                  <div>
                    <textarea placeholder="Additional comments or notes..." rows={4} className="w-full px-5 py-4 rounded-2xl text-[15px] outline-none transition-all resize-none" style={{ border: "1px solid var(--c-bd)", color: "var(--c-head)", background: "var(--c-inp)" }} />
                  </div>

                  {/* Submit */}
                  <button type="submit" className="w-full py-4 text-white font-[family-name:var(--font-heading)] font-bold text-[16px] rounded-2xl transition-all hover:-translate-y-0.5 cursor-pointer" style={{ background: "var(--c-copr)", boxShadow: "0 10px 30px rgba(212,132,90,0.3)" }}>
                    Submit Referral
                  </button>
                  <p className="text-center text-[12px]" style={{ color: "var(--c-mut)" }}>We&apos;ll contact you within 48 hours to confirm receipt and next steps.</p>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section id="faq" className="py-20 lg:py-28" style={{ background: "var(--c-bg)" }}>
          <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-12 lg:mb-16">
              <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>FAQ</span>
              <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[44px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
                Common Questions
              </h2>
            </div>
            <div className="space-y-3">
              <FaqItem q="Will you try to sell or list my client's property?" a="Absolutely not. We are a property management company — not a competing brokerage. When your client is ready to buy or sell, we refer them directly back to you." />
              <FaqItem q="How much is the referral fee?" a="Our referral fees are competitive and uncapped. The exact amount depends on the management contract terms. Contact us for current referral fee details." />
              <FaqItem q="How quickly will I get paid?" a="Referral fees are processed promptly once the management agreement is signed and the property is onboarded. Typically within 30 days of contract execution." />
              <FaqItem q="What areas do you serve?" a="We manage single-family rental properties across the Phoenix metro (Scottsdale, Mesa, Chandler, Gilbert, Tempe, Peoria, and more) and Tucson metro areas." />
              <FaqItem q="Will I be kept in the loop on my client's property?" a="Yes. We provide updates and keep you informed about the property status. Transparency with our referring agents is a core part of our program." />
              <FaqItem q="What services do you offer?" a="Full-service property management including marketing & leasing, tenant screening, rent collection, 24/7 maintenance coordination, financial reporting, inspections, and compliance." />
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: "rgba(20,26,40,0.93)" }} />
          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-[32px] sm:text-[40px] lg:text-[50px] font-extrabold text-white leading-[1.08] tracking-tight mb-6">
              Start Earning From Your Referrals Today
            </h2>
            <p className="text-[17px] lg:text-[19px] leading-[1.7] mb-10 max-w-[500px] mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Partner with Rent Core and turn your investor connections into ongoing income — without losing the client.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#referral-form" className="group inline-flex items-center gap-3 px-9 py-5 text-white font-[family-name:var(--font-heading)] font-bold text-[16px] rounded-2xl transition-all hover:-translate-y-0.5" style={{ background: "#D4845A", boxShadow: "0 20px 40px rgba(212,132,90,0.3)" }}>
                Submit a Referral <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+16025550180" className="inline-flex items-center gap-2 text-[15px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                <Phone className="w-4 h-4" /> Or call (602) 555-0180
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
