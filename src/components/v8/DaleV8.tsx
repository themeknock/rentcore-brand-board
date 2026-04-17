"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DaleV8() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".dale8-text", {
      scrollTrigger: { trigger: ref.current, start: "top 78%" },
      x: -30, opacity: 0, duration: 0.8,
    });
    gsap.from(".dale8-img", {
      scrollTrigger: { trigger: ref.current, start: "top 75%" },
      x: 30, opacity: 0, duration: 0.8, delay: 0.2,
    });
  }, { scope: ref });

  return (
    <section ref={ref} id="about" className="py-28 lg:py-40" style={{ background: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div className="dale8-text">
            <h2
              className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[46px] font-extrabold leading-[1.1] tracking-tight uppercase mb-4"
              style={{ color: "#0B2545" }}
            >
              Meet Dale,<br />
              founder of<br />
              Rent Core
            </h2>
            <p className="text-[13px] font-semibold uppercase tracking-[0.15em] mb-6" style={{ color: "#3E8C8C" }}>
              Licensed Arizona Broker &middot; BR548311000
            </p>
            <p className="text-[15px] leading-[1.85] mb-5" style={{ color: "#4A4A4A" }}>
              Dale Figger specializes in single-family investment properties. With decades of experience
              managing investor portfolios, Dale maximizes rental income while protecting long-term
              property value.
            </p>
            <p className="text-[15px] leading-[1.85] mb-5" style={{ color: "#4A4A4A" }}>
              Treating each property with the care he would his own, Dale ensures steady returns,
              reliable tenants, and personalized, proactive service. Investors in Phoenix and Tucson
              trust Dale&apos;s ownership-minded approach to property management.
            </p>
            <p className="text-[16px] font-medium italic" style={{ color: "#0B2545" }}>
              &ldquo;We manage like owners, with you every step of the way.&rdquo;
            </p>
          </div>

          {/* Right — photo */}
          <div className="dale8-img">
            <div style={{ boxShadow: "0 16px 50px rgba(0,0,0,0.1)" }}>
              <img
                src="/dale-figger.jpg"
                alt="Dale Figger — Owner & Licensed Arizona Broker"
                className="w-full h-[400px] lg:h-[520px] object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
