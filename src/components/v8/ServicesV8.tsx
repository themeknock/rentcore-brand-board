"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BLOCKS = [
  {
    heading: "Full-Service Property Management",
    sub: "Hands-on, not hands-off.",
    body: "From tenant placement to lease renewals, maintenance coordination to financial reporting — we handle the daily operations so you can focus on growing your portfolio. Every property gets personal attention, not an account number.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&h=500&fit=crop&q=85",
    alt: "Arizona investment property",
    flip: false,
  },
  {
    heading: "Transparent Financial Management",
    sub: "Your money. Your visibility.",
    body: "Real-time Rentec portal access, monthly financial statements, and year-end 1099s. You see every dollar in and out — no surprises, no hidden fees. We believe transparency isn't a feature, it's the baseline.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=700&h=500&fit=crop&q=85",
    alt: "Modern property interior",
    flip: true,
  },
];

export default function ServicesV8() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".svc8-block").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 80%" },
        y: 40, opacity: 0, duration: 0.9,
      });
    });
  }, { scope: ref });

  return (
    <section ref={ref} id="services" style={{ background: "#F9F9F7" }}>
      {BLOCKS.map((b) => (
        <div key={b.heading} className="svc8-block py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${b.flip ? "lg:[direction:rtl]" : ""}`}>
              {/* Text */}
              <div style={{ direction: "ltr" }}>
                <h3
                  className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px] font-extrabold leading-[1.15] tracking-tight uppercase mb-3"
                  style={{ color: "#0B2545" }}
                >
                  {b.heading}
                </h3>
                <p className="text-[14px] font-semibold mb-5" style={{ color: "#3E8C8C" }}>
                  {b.sub}
                </p>
                <p className="text-[15px] leading-[1.85] mb-8" style={{ color: "#4A4A4A" }}>
                  {b.body}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 text-[13px] font-semibold tracking-wide transition-all hover:-translate-y-0.5"
                  style={{ background: "#C4784A", color: "#FFFFFF" }}
                >
                  Learn More
                </a>
              </div>

              {/* Image */}
              <div style={{ direction: "ltr" }}>
                <div className="overflow-hidden" style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
                  <img
                    src={b.image}
                    alt={b.alt}
                    className="w-full h-[300px] lg:h-[420px] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
