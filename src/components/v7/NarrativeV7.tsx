"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NarrativeV7() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".narr7-fade").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 82%" },
        y: 30,
        opacity: 0,
        duration: 0.8,
      });
    });
  }, { scope: ref });

  return (
    <div ref={ref}>
      {/* Narrative 1 — Text left, Image right */}
      <section className="py-20 lg:py-24" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="narr7-fade">
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#049DD9" }}>
                Why Rent Core
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[38px] font-extrabold leading-[1.1] tracking-tight text-[#0B2545] mb-6">
                Your Property. Our Expertise. Your Peace of Mind.
              </h2>
              <p className="text-[15px] lg:text-[16px] leading-[1.8] text-[#515151] mb-4">
                At Rent Core, we make managing your property easy and effective. We handle everything from advertising your property and finding reliable tenants to efficient repairs and smart financial management.
              </p>
              <p className="text-[15px] lg:text-[16px] leading-[1.8] text-[#515151] mb-8">
                Thanks to decades of management experience with hands-on, boutique service, we prioritize speed and responsiveness, maximizing the value of your real estate assets while building trust and confidence.
              </p>
              <a href="#services" className="inline-flex items-center px-7 py-3.5 text-[14px] font-bold rounded-full transition-all hover:-translate-y-0.5 text-white" style={{ background: "linear-gradient(135deg, #049DD9, #0D5FA6)" }}>
                Learn How It Works
              </a>
            </div>
            <div className="narr7-fade rounded-[20px] overflow-hidden relative" style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}>
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&h=500&fit=crop&q=85"
                alt="Beautiful Arizona investment property"
                className="w-full h-[280px] lg:h-[380px] object-cover"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative 2 — Image left, Text right — About Dale */}
      <section className="py-20 lg:py-24 relative overflow-hidden" style={{ background: "#F4F8FC" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — Property image with overlay card */}
            <div className="narr7-fade relative">
              <div className="rounded-[20px] overflow-hidden" style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}>
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&h=500&fit=crop&q=85"
                  alt="Arizona property managed by Rent Core"
                  className="w-full h-[280px] lg:h-[380px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating credential badge */}
              <div
                className="absolute -bottom-4 -right-4 lg:bottom-6 lg:-right-6 rounded-2xl px-5 py-4"
                style={{ background: "#0B2545", boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}
              >
                <p className="text-white font-bold text-[14px]">Licensed Arizona Broker</p>
                <p className="text-white/50 text-[12px] mt-0.5">BR548311000</p>
              </div>
            </div>

            {/* Right — Text */}
            <div className="narr7-fade">
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#049DD9" }}>
                Our Promise
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[38px] font-extrabold leading-[1.1] tracking-tight text-[#0B2545] mb-6">
                You Won&apos;t Get Lost Here. That&apos;s a Promise.
              </h2>
              <p className="text-[15px] lg:text-[16px] leading-[1.8] text-[#515151] mb-4">
                We&apos;re not a 500-door operation where your property is another line item. When you call, you reach Dale — the licensed broker who actually manages your investment. Not a helpdesk. Not a call center.
              </p>
              <p className="text-[15px] lg:text-[16px] leading-[1.8] text-[#515151] mb-8">
                Think of Rent Core as more than a management company — it&apos;s where every detail of your investment is looked after for you. Ready for a hands-on, ownership-minded experience?
              </p>

              {/* Trust points */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Direct communication", "Boutique-level service", "Faster leasing", "Asset protection"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#049DD9" fillOpacity="0.1" />
                      <path d="M5 8l2 2 4-4" stroke="#049DD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[13px] font-medium text-[#0B2545]">{item}</span>
                  </div>
                ))}
              </div>

              <a href="#about" className="inline-flex items-center px-7 py-3.5 text-[14px] font-bold rounded-full transition-all hover:-translate-y-0.5 text-[#049DD9]" style={{ border: "1.5px solid #049DD9" }}>
                More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
