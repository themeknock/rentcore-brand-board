"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* SVG logos — simplified versions of real partner logos */
function RentecLogo() {
  return (
    <svg viewBox="0 0 180 40" fill="none" className="h-8 lg:h-9">
      <rect x="0" y="6" width="28" height="28" rx="6" fill="#2563EB" />
      <path d="M8 16h12M8 21h8M8 26h10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <text x="36" y="28" fontSize="20" fontWeight="800" fill="white" fontFamily="system-ui">rentec</text>
      <text x="120" y="28" fontSize="20" fontWeight="800" fill="#3B82F6" fontFamily="system-ui">direct</text>
    </svg>
  );
}

function NarpmLogo() {
  return (
    <svg viewBox="0 0 160 44" fill="none" className="h-8 lg:h-9">
      <rect x="0" y="2" width="40" height="40" rx="4" fill="#1E3A5F" />
      <path d="M10 30V14l10 16 10-16v16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="48" y="30" fontSize="22" fontWeight="900" fill="white" fontFamily="system-ui" letterSpacing="2">NARPM</text>
    </svg>
  );
}

function RealtorLogo() {
  return (
    <svg viewBox="0 0 120 44" fill="none" className="h-8 lg:h-9">
      <rect x="0" y="2" width="36" height="40" rx="3" stroke="white" strokeWidth="1.5" fill="none" />
      <text x="18" y="30" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fontFamily="Georgia, serif">R</text>
      <text x="44" y="20" fontSize="9" fontWeight="700" fill="white" fontFamily="system-ui" letterSpacing="1">ARIZONA</text>
      <text x="44" y="34" fontSize="13" fontWeight="900" fill="white" fontFamily="system-ui" letterSpacing="1">REALTORS</text>
      <circle cx="112" cy="28" r="4" stroke="white" strokeWidth="1" fill="none" />
      <text x="112" y="31" textAnchor="middle" fontSize="6" fill="white" fontFamily="system-ui">R</text>
    </svg>
  );
}

function MlsLogo() {
  return (
    <svg viewBox="0 0 80 44" fill="none" className="h-7 lg:h-8">
      <text x="0" y="32" fontSize="28" fontWeight="900" fill="white" fontFamily="system-ui" letterSpacing="3" opacity="0.9">MLS</text>
    </svg>
  );
}

function EqualHousingLogo() {
  return (
    <svg viewBox="0 0 140 44" fill="none" className="h-8 lg:h-9">
      <path d="M20 6L4 20h5v16h22V20h5L20 6z" stroke="white" strokeWidth="1.5" fill="none" />
      <rect x="12" y="26" width="16" height="2" fill="white" opacity="0.8" />
      <rect x="12" y="30" width="16" height="2" fill="white" opacity="0.8" />
      <text x="44" y="22" fontSize="9" fontWeight="700" fill="white" fontFamily="system-ui" letterSpacing="1.5" opacity="0.9">EQUAL HOUSING</text>
      <text x="44" y="34" fontSize="9" fontWeight="500" fill="white" fontFamily="system-ui" letterSpacing="1.5" opacity="0.7">OPPORTUNITY</text>
    </svg>
  );
}

function BbbLogo() {
  return (
    <svg viewBox="0 0 120 44" fill="none" className="h-8 lg:h-9">
      <path d="M6 6L20 2L34 6V22C34 30 20 38 20 38C20 38 6 30 6 22V6Z" fill="#0369A1" fillOpacity="0.8" stroke="white" strokeWidth="1" />
      <text x="20" y="24" textAnchor="middle" fontSize="14" fontWeight="900" fill="white" fontFamily="system-ui">BBB</text>
      <text x="42" y="18" fontSize="8" fontWeight="700" fill="white" fontFamily="system-ui" opacity="0.9">ACCREDITED</text>
      <text x="42" y="30" fontSize="8" fontWeight="700" fill="white" fontFamily="system-ui" opacity="0.9">BUSINESS</text>
    </svg>
  );
}

const PARTNERS = [
  { Logo: RentecLogo, name: "Rentec Direct" },
  { Logo: NarpmLogo, name: "NARPM" },
  { Logo: RealtorLogo, name: "Arizona Realtors" },
  { Logo: MlsLogo, name: "MLS" },
  { Logo: EqualHousingLogo, name: "Equal Housing" },
  { Logo: BbbLogo, name: "BBB" },
];

export default function PartnersV7() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".partner7-item", {
      scrollTrigger: { trigger: ref.current, start: "top 85%" },
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="py-16 lg:py-20" style={{ background: "#0B2545" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <p className="text-center text-[12px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-10">
          Trusted Partners & Affiliations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 items-center justify-items-center">
          {PARTNERS.map((p) => (
            <div key={p.name} className="partner7-item opacity-70 hover:opacity-100 transition-opacity duration-300" title={p.name}>
              <p.Logo />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
