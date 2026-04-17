"use client";

import { useState, useEffect } from "react";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function HeaderV8() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span
            className="font-[family-name:var(--font-heading)] font-extrabold text-[16px] tracking-[0.06em] uppercase"
            style={{ color: scrolled ? "#0B2545" : "#FFFFFF" }}
          >
            Rent Core
          </span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[13px] font-medium tracking-wide transition-colors"
              style={{ color: scrolled ? "#4A4A4A" : "rgba(255,255,255,0.7)" }}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 text-[12px] font-bold tracking-wide uppercase transition-all hover:-translate-y-0.5"
            style={{ background: "#C4784A", color: "#FFFFFF" }}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
