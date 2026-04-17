"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntroV8() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".intro8-left", {
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
      x: -30, opacity: 0, duration: 0.8,
    });
    gsap.from(".intro8-right", {
      scrollTrigger: { trigger: ref.current, start: "top 75%" },
      x: 30, opacity: 0, duration: 0.8, delay: 0.2,
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="py-28 lg:py-40" style={{ background: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left — big editorial heading */}
          <div className="intro8-left">
            <h2
              className="font-[family-name:var(--font-heading)] text-[36px] lg:text-[48px] font-extrabold leading-[1.1] tracking-tight uppercase"
              style={{ color: "#0B2545" }}
            >
              We do<br />
              things a<br />
              little<br />
              different<br />
              around<br />
              here.
            </h2>
          </div>

          {/* Right — body text + CTA */}
          <div className="intro8-right pt-2">
            <p className="text-[15px] lg:text-[16px] leading-[1.9] mb-6" style={{ color: "#4A4A4A" }}>
              You know how to manage your property. You&apos;ve handled the tenants, the maintenance calls,
              and the day-to-day decisions. But at some point, it starts to take more time than it&apos;s worth.
              That&apos;s where we come in.
            </p>
            <p className="text-[15px] lg:text-[16px] leading-[1.9] mb-8" style={{ color: "#4A4A4A" }}>
              At Rent Core Property Management, we step in to take over the workload — without
              taking away your control. You stay informed, your property stays protected, and your
              time becomes your own again. Direct communication with decision makers, not a call center.
              Boutique-level service backed by professional systems.
            </p>
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 text-[13px] font-semibold tracking-wide transition-all hover:-translate-y-0.5"
              style={{ border: "1.5px solid #0B2545", color: "#0B2545" }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
