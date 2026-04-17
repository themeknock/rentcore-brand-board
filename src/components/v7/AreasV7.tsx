"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REGIONS = [
  {
    name: "Phoenix Metro",
    cities: [
      "Ahwatukee", "Apache Junction", "Buckeye", "Chandler", "Fountain Hills",
      "Glendale", "Gilbert", "Goodyear", "Maricopa", "Mesa", "Peoria",
      "Queen Creek", "San Tan Valley", "Scottsdale", "Surprise", "Tempe",
    ],
    /* Approximate position on the AZ map (percentage) */
    pinX: 38,
    pinY: 38,
    color: "#049DD9",
  },
  {
    name: "Tucson Metro",
    cities: [
      "Tucson", "Oro Valley", "Marana", "Sahuarita", "Vail", "Green Valley",
    ],
    pinX: 42,
    pinY: 72,
    color: "#0D5FA6",
  },
];

/* Simplified Arizona state outline */
function ArizonaMap({ activeRegion, onSelect }: { activeRegion: number; onSelect: (i: number) => void }) {
  return (
    <svg viewBox="0 0 400 500" fill="none" className="w-full h-full max-h-[480px]">
      {/* State shape */}
      <path
        d="M50 10 L350 10 L370 30 L380 60 L385 120 L380 180 L375 240 L360 300 L340 360 L300 420 L260 460 L220 480 L180 490 L140 485 L100 470 L70 440 L50 400 L40 340 L35 280 L30 220 L35 160 L40 100 L45 50 Z"
        fill="#0B2545"
        fillOpacity="0.04"
        stroke="#0B2545"
        strokeOpacity="0.15"
        strokeWidth="1.5"
      />

      {/* Grid lines for texture */}
      {[80, 140, 200, 260, 320, 380].map((y) => (
        <line key={`h${y}`} x1="30" y1={y} x2="390" y2={y} stroke="#049DD9" strokeOpacity="0.04" strokeWidth="0.5" />
      ))}
      {[100, 160, 220, 280, 340].map((x) => (
        <line key={`v${x}`} x1={x} y1="10" x2={x} y2="490" stroke="#049DD9" strokeOpacity="0.04" strokeWidth="0.5" />
      ))}

      {/* Region markers */}
      {REGIONS.map((r, i) => {
        const cx = (r.pinX / 100) * 400;
        const cy = (r.pinY / 100) * 500;
        const isActive = activeRegion === i;
        return (
          <g
            key={r.name}
            onClick={() => onSelect(i)}
            className="cursor-pointer"
            role="button"
            tabIndex={0}
          >
            {/* Pulse ring */}
            <circle cx={cx} cy={cy} r={isActive ? 42 : 32} fill={r.color} fillOpacity={isActive ? 0.08 : 0.04} className="transition-all duration-500" />
            <circle cx={cx} cy={cy} r={isActive ? 28 : 20} fill={r.color} fillOpacity={isActive ? 0.15 : 0.08} className="transition-all duration-500" />
            {/* Center dot */}
            <circle cx={cx} cy={cy} r={8} fill={r.color} fillOpacity={isActive ? 1 : 0.6} className="transition-all duration-300" />
            <circle cx={cx} cy={cy} r={4} fill="white" fillOpacity={isActive ? 0.9 : 0.5} className="transition-all duration-300" />
            {/* Label */}
            <text
              x={cx}
              y={cy - (isActive ? 52 : 42)}
              textAnchor="middle"
              fontSize={isActive ? "14" : "12"}
              fontWeight="700"
              fill={r.color}
              fillOpacity={isActive ? 1 : 0.7}
              className="transition-all duration-300 pointer-events-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {r.name}
            </text>
          </g>
        );
      })}

      {/* Connecting line between regions */}
      <line
        x1={(REGIONS[0].pinX / 100) * 400}
        y1={(REGIONS[0].pinY / 100) * 500}
        x2={(REGIONS[1].pinX / 100) * 400}
        y2={(REGIONS[1].pinY / 100) * 500}
        stroke="#049DD9"
        strokeOpacity="0.12"
        strokeWidth="1"
        strokeDasharray="6 4"
      />
    </svg>
  );
}

export default function AreasV7() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const region = REGIONS[active];

  useGSAP(() => {
    gsap.from(".areas7-heading", {
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });
    gsap.from(".areas7-map", {
      scrollTrigger: { trigger: ref.current, start: "top 75%" },
      scale: 0.95,
      opacity: 0,
      duration: 1,
      delay: 0.2,
    });
    gsap.from(".areas7-card", {
      scrollTrigger: { trigger: ref.current, start: "top 70%" },
      x: 40,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
    });
  }, { scope: ref });

  return (
    <section ref={ref} id="areas" className="py-28 lg:py-36 relative overflow-hidden" style={{ background: "#F4F8FC" }}>
      {/* Subtle bg texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#0B2545 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative">
        {/* Header */}
        <div className="areas7-heading text-center mb-14">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#049DD9" }}>
            Service Coverage
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-[32px] lg:text-[44px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "#0B2545" }}>
            Serving Arizona&apos;s Top<br className="hidden sm:block" /> Investment Markets
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "#515151" }}>
            From the Phoenix metro to Tucson, we provide hands-on property management across Arizona&apos;s most active rental markets.
          </p>
        </div>

        {/* Map + Cities grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — Arizona Map */}
          <div className="areas7-map flex justify-center">
            <div className="w-full max-w-[360px]">
              <ArizonaMap activeRegion={active} onSelect={setActive} />
            </div>
          </div>

          {/* Right — Region detail card */}
          <div className="areas7-card">
            {/* Region tabs */}
            <div className="flex gap-2 mb-6">
              {REGIONS.map((r, i) => (
                <button
                  key={r.name}
                  onClick={() => setActive(i)}
                  className="px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300"
                  style={{
                    background: active === i ? r.color : "transparent",
                    color: active === i ? "white" : "#0B2545",
                    border: active === i ? "none" : "1.5px solid rgba(11,37,69,0.15)",
                  }}
                >
                  {r.name}
                </button>
              ))}
            </div>

            {/* Cities card */}
            <div
              className="rounded-[20px] p-8 lg:p-10 transition-all duration-500"
              style={{
                background: "#0B2545",
                boxShadow: "0 20px 60px rgba(11,37,69,0.2)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ background: region.color }} />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[20px] text-white">
                  {region.name}
                </h3>
                <span className="ml-auto text-[13px] font-medium text-white/40">
                  {region.cities.length} cities
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                {region.cities.map((city) => (
                  <div key={city} className="flex items-center gap-2 group">
                    <svg width="6" height="6" viewBox="0 0 6 6" className="shrink-0">
                      <circle cx="3" cy="3" r="3" fill={region.color} fillOpacity="0.5" />
                    </svg>
                    <span className="text-[14px] text-white/60 group-hover:text-white transition-colors">
                      {city}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom stat */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[13px] text-white/40">Trusted by 120+ investors across Arizona</span>
                <a
                  href="#contact"
                  className="text-[13px] font-semibold transition-colors hover:opacity-80"
                  style={{ color: region.color }}
                >
                  Get Started →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
