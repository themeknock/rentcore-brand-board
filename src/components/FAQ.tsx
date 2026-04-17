"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "How much does property management cost?", a: "Our management fee is 9% of monthly rent collected (minimum $125/month). You only pay when your property is occupied and generating income — no vacancy fees." },
  { q: "What areas do you serve?", a: "We manage single-family rental properties across the Phoenix metro (Scottsdale, Mesa, Chandler, Gilbert, Tempe, Peoria, Surprise, and more) and the Tucson metro area." },
  { q: "I live out of state. Can you still manage my property?", a: "Absolutely. Many of our clients are out-of-state investors. You get full portal access, monthly reports, and direct communication — just like being next door." },
  { q: "How quickly can you find a tenant?", a: "Our average time to lease is 15 days. We use professional photography, multi-platform marketing, and thorough screening to place reliable tenants fast." },
  { q: "What happens if a tenant stops paying rent?", a: "We handle the entire process — from late notices to legal proceedings if necessary. Our eviction protection guarantee covers filing costs for tenants we placed." },
  { q: "Can I see how my property is performing?", a: "Yes. Our owner portal gives you 24/7 access to financials, maintenance requests, tenant details, and documents. You also receive monthly statements and year-end 1099s." },
  { q: "Do I lose control of my property?", a: "Not at all. You set the guidelines — we execute. Every major decision (repairs over a threshold, lease terms, rent adjustments) is run by you first." },
  { q: "How do I get started?", a: "Start with a free rental analysis. We'll evaluate your property, show you what it could earn, and walk you through our onboarding process — no obligation." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24" style={{ background: "var(--c-bg2)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* Left — Image + CTA */}
          <div className="hidden lg:block sticky top-40">
            <div className="rounded-[24px] overflow-hidden mb-6" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
              <img src="/dale-figger.jpg" alt="Dale Figger" className="w-full h-[300px] object-cover object-top" loading="lazy" />
              <div className="p-6" style={{ background: "var(--c-card)", borderTop: "1px solid var(--c-bd)" }}>
                <p className="font-[family-name:var(--font-heading)] font-bold text-[16px]" style={{ color: "var(--c-head)" }}>Still have questions?</p>
                <p className="text-[13px] mt-1 mb-4" style={{ color: "var(--c-mut)" }}>Dale is happy to chat — no pressure.</p>
                <a href="tel:+16025550180" className="inline-flex items-center gap-2 text-[14px] font-semibold" style={{ color: "var(--c-copr)" }}>Call (602) 555-0180</a>
              </div>
            </div>
          </div>

          {/* Right — FAQ */}
          <div>
            <div className="mb-12">
              <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>FAQ</span>
              <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[44px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
                Common Questions
              </h2>
            </div>

            <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl overflow-hidden transition-all" style={{ background: openIdx === i ? "var(--c-card)" : "transparent", border: "1px solid var(--c-bd)" }}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
              >
                <span className="font-[family-name:var(--font-heading)] font-bold text-[15px] pr-4" style={{ color: "var(--c-head)" }}>{faq.q}</span>
                <ChevronDown
                  className="w-5 h-5 shrink-0 transition-transform duration-300"
                  style={{ color: "var(--c-mut)", transform: openIdx === i ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5">
                  <p className="text-[14px] leading-[1.7]" style={{ color: "var(--c-body)" }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
