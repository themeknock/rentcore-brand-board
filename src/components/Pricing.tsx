"use client";

import { useState } from "react";
import { Check, DollarSign, Megaphone, Shield, Wallet, Wrench, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/*
  Dale's exact pricing (provided Apr 13):
  - Management Fee: 9% of rent per month, minimum $125 per month
  - Leasing Fee (tenant placement): 75% of one months rent
  - Lease Renewal Fee: $300
  - Maintenance work order fee: $50 per quarter
  - Lease setup/Admin fee: $195

  Dale's statement: "We provide full service, hands-on property management
  designed to eliminate the stress of ownership — our pricing reflects the
  level of service and communication most investors don't get elsewhere."
*/

const INCLUDED = [
  "Marketing & tenant placement",
  "Tenant screening & background checks",
  "Rent collection & disbursement",
  "24/7 maintenance coordination",
  "Monthly financial statements",
  "Year-end 1099 tax documents",
  "Owner portal access",
  "Move-in/move-out inspections",
  "Lease enforcement & compliance",
  "Personalized, proactive communication",
];

export default function Pricing() {
  const [rent, setRent] = useState<number>(1800);
  const [showFees, setShowFees] = useState(true);

  const safeRent = Math.max(0, rent || 0);
  const mgmt = safeRent > 0 ? Math.max(safeRent * 0.09, 125) : 0;
  const leasing = safeRent * 0.75;
  const annual = mgmt * 12;
  const costPercent = safeRent > 0 ? ((mgmt / safeRent) * 100).toFixed(1) : "0";
  const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const isMin = safeRent > 0 && safeRent * 0.09 < 125;

  return (
    <section id="pricing" className="py-16 lg:py-24" style={{ background: "var(--c-bg)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>Pricing</span>
          <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-[17px] lg:text-[19px] leading-[1.7] mt-6 max-w-[620px] mx-auto" style={{ color: "var(--c-body)" }}>
            Full-service management with transparent pricing. No hidden fees — ever.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-start">

          {/* Left — Interactive Calculator */}
          <div className="rounded-[28px] overflow-hidden" style={{ border: "1px solid var(--c-bd)", boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}>

            {/* Input area */}
            <div className="p-8 lg:p-10" style={{ background: "var(--c-bg2)" }}>
              <p className="text-[12px] font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: "var(--c-mut)" }}>
                Enter Your Monthly Rent
              </p>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "var(--c-sage)", opacity: 0.8 }}>
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <input
                  type="number"
                  defaultValue={1800}
                  min={0}
                  className="w-full pl-16 pr-24 py-5 rounded-2xl text-[22px] font-bold outline-none transition-all"
                  style={{ background: "var(--c-inp)", border: "1px solid var(--c-bd)", color: "var(--c-head)" }}
                  onFocus={(e) => e.target.style.borderColor = "var(--c-sage)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--c-bd)"}
                  onChange={(e) => setRent(parseFloat(e.target.value) || 0)}
                />
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[14px]" style={{ color: "var(--c-mut)" }}>/ month</span>
              </div>
              <p className="text-[12px] mt-3" style={{ color: "var(--c-mut)" }}>
                Adjust to your rental amount — results update instantly
              </p>
            </div>

            {/* Monthly fee result */}
            {safeRent > 0 && (
              <>
                <div className="px-8 lg:px-10 py-7" style={{ background: "linear-gradient(135deg, #5B8F8B 0%, #5B8F8B 100%)" }}>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ color: "var(--c-body)" }}>Your Monthly Management Fee</p>
                      <AnimatePresence mode="wait">
                        <motion.p key={mgmt} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.25 }} className="font-[family-name:var(--font-heading)] text-[40px] lg:text-[48px] font-extrabold text-white tracking-tight leading-none mt-2">${fmt(mgmt)}</motion.p>
                      </AnimatePresence>
                    </div>
                    <div className="text-right pb-1">
                      <p className="text-[22px] font-bold text-white">{costPercent}%</p>
                      <p className="text-[11px]" style={{ color: "var(--c-mut)" }}>of rent</p>
                    </div>
                  </div>
                  {isMin && (
                    <p className="text-[12px] mt-3 px-3 py-1.5 rounded-lg inline-block" style={{ background: "rgba(46,54,72,0.5)", color: "var(--c-mut)" }}>
                      $125 minimum applied — 9% would be ${fmt(safeRent * 0.09)}
                    </p>
                  )}
                </div>

                {/* Monthly + Annual summary */}
                <div className="grid grid-cols-2" style={{ borderBottom: "1px solid var(--c-bd)" }}>
                  <div className="px-6 lg:px-8 py-5 text-center" style={{ borderRight: "1px solid var(--c-bd)" }}>
                    <p className="text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: "var(--c-mut)" }}>Monthly</p>
                    <p className="font-[family-name:var(--font-heading)] font-bold text-[20px] mt-1" style={{ color: "var(--c-head)" }}>${fmt(mgmt)}</p>
                  </div>
                  <div className="px-6 lg:px-8 py-5 text-center">
                    <p className="text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: "var(--c-mut)" }}>Annual Est.</p>
                    <p className="font-[family-name:var(--font-heading)] font-bold text-[20px] mt-1" style={{ color: "var(--c-ok)" }}>${fmt(annual)}</p>
                  </div>
                </div>

                {/* Additional fees toggle */}
                <div className="bg-[var(--c-card)]">
                  <button
                    onClick={() => setShowFees(!showFees)}
                    className="w-full px-8 lg:px-10 py-4 flex items-center justify-between text-left transition-colors hover:bg-[var(--c-inp)]"
                  >
                    <span className="text-[13px] font-semibold" style={{ color: "var(--c-body)" }}>Additional Fees</span>
                    <span className="text-[12px] font-medium px-3 py-1 rounded-full" style={{ background: "var(--c-bd)", color: "var(--c-body)" }}>
                      {showFees ? "Hide" : "Show"} details
                    </span>
                  </button>

                  {showFees && (
                    <div style={{ borderTop: "1px solid var(--c-bd)" }}>
                      <div className="px-8 lg:px-10 pt-4 pb-2">
                        <p className="text-[10px] font-semibold tracking-[0.15em] uppercase" style={{ color: "var(--c-mut)" }}>One-Time</p>
                      </div>
                      {[
                        { label: "Leasing Fee", sub: "75% of one month", value: `$${fmt(leasing)}` },
                        { label: "Lease Setup / Admin", sub: "", value: "$195.00" },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between px-8 lg:px-10 py-4" style={{ borderBottom: "1px solid var(--c-bd)" }}>
                          <div>
                            <span className="text-[14px] font-medium" style={{ color: "var(--c-body)" }}>{row.label}</span>
                            {row.sub && <span className="text-[12px] ml-2" style={{ color: "var(--c-mut)" }}>{row.sub}</span>}
                          </div>
                          <span className="font-[family-name:var(--font-heading)] font-bold text-[15px] shrink-0 ml-4" style={{ color: "var(--c-head)" }}>{row.value}</span>
                        </div>
                      ))}
                      <div className="px-8 lg:px-10 pt-4 pb-2">
                        <p className="text-[10px] font-semibold tracking-[0.15em] uppercase" style={{ color: "var(--c-mut)" }}>Recurring</p>
                      </div>
                      {[
                        { label: "Lease Renewal", sub: "per renewal", value: "$300.00" },
                        { label: "Maintenance", sub: "per quarter", value: "$50.00" },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between px-8 lg:px-10 py-4" style={{ borderBottom: "1px solid var(--c-bd)" }}>
                          <div>
                            <span className="text-[14px] font-medium" style={{ color: "var(--c-body)" }}>{row.label}</span>
                            <span className="text-[12px] ml-2" style={{ color: "var(--c-mut)" }}>{row.sub}</span>
                          </div>
                          <span className="font-[family-name:var(--font-heading)] font-bold text-[15px] shrink-0 ml-4" style={{ color: "var(--c-head)" }}>{row.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}

            {/* CTA — bridge to lead form */}
            {safeRent > 0 && (
              <a href="#hero" className="group flex items-center justify-between px-8 lg:px-10 py-5 transition-colors hover:bg-[var(--c-inp)]" style={{ borderTop: "1px solid var(--c-bd)" }}>
                <div>
                  <p className="text-[14px] font-semibold" style={{ color: "var(--c-head)" }}>Like what you see?</p>
                  <p className="text-[12px]" style={{ color: "var(--c-mut)" }}>Get a free rental analysis for your property</p>
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--c-copr)", boxShadow: "0 4px 12px rgba(212,132,90,0.25)" }}>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            )}
          </div>

          {/* Right — What's included (scannable) */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-[22px] mb-2 tracking-tight" style={{ color: "var(--c-head)" }}>
              What&apos;s Included
            </h3>
            <p className="text-[15px] mb-8" style={{ color: "var(--c-body)" }}>
              Everything in your management fee — no surprise charges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Megaphone, title: "Marketing & Leasing", desc: "Listing, showings & tenant placement" },
                { icon: Shield, title: "Tenant Screening", desc: "Background, credit & income checks" },
                { icon: Wallet, title: "Rent Collection", desc: "Collection, tracking & disbursement" },
                { icon: Wrench, title: "Maintenance", desc: "24/7 coordination & vendor management" },
                { icon: BarChart3, title: "Financial Reporting", desc: "Monthly statements & 1099 tax docs" },
                { icon: ShieldCheck, title: "Compliance & Inspections", desc: "Lease enforcement & move-in/out reports" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3.5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#5B8F8B08", border: "1px solid #5B8F8B12" }}>
                    <item.icon className="w-[18px] h-[18px]" style={{ color: "var(--c-sage)" }} />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold" style={{ color: "var(--c-head)" }}>{item.title}</p>
                    <p className="text-[13px] leading-snug mt-0.5" style={{ color: "var(--c-mut)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: "#6BBF8A1A", border: "1px solid #6BBF8A30" }}>
              <Check className="w-4 h-4 shrink-0" style={{ color: "var(--c-ok)" }} />
              <p className="text-[13px] font-medium" style={{ color: "var(--c-ok)" }}>No hidden fees — you only pay when your property is occupied.</p>
            </div>
          </div>
        </div>

        {/* ── OLD STANDALONE CALCULATOR (kept for reference) ──
        <div className="mt-16 lg:mt-24 max-w-2xl mx-auto">
          <div className="rounded-[28px] p-8 lg:p-10" style={{ background: "var(--c-inp)", border: "1px solid var(--c-bd)" }}>
            <h3>Estimate Your Monthly Cost</h3>
            <input type="number" placeholder="e.g. 1800" onChange={(e) => setRent(parseFloat(e.target.value) || 0)} />
            ... fee breakdown rows ...
          </div>
        </div>
        ── END OLD CALCULATOR ── */}

      </div>
    </section>
  );
}
