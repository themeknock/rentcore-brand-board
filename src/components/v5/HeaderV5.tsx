"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const NAV = [
  { label: "Why Us", href: "#why" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Areas", href: "#areas" },
  { label: "Tenants", href: "#tenants" },
];

export default function HeaderV5() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("light-theme", !next);
    setTimeout(() => ScrollTrigger.refresh(), 600);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] text-center py-1.5 transition-colors duration-500" style={{ background: "var(--c-license-bg)", borderBottom: "1px solid var(--c-bd)" }}>
        <p className="text-[11px] font-medium" style={{ color: "var(--c-mut)" }}>Designated Broker: Dale Figger &middot; License # BR548311000</p>
      </div>

      <header className="fixed top-[30px] left-0 right-0 z-50 transition-all duration-300" style={{ background: scrolled ? "var(--c-header-bg)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid var(--c-bd)" : "none" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-[96px] lg:h-[104px]">
            <a href="/v5" className="flex items-center">
              <img src="/logo-circle.png" alt="RentCore" className="transition-all" style={{ width: "80px", height: "80px", filter: isDark ? "none" : "brightness(1.3) contrast(0.95)" }} />
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV.map((l) => (
                <a key={l.label} href={l.href} className="text-[14px] font-medium transition-colors" style={{ color: "var(--c-mut)" }}>{l.label}</a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className="w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer" style={{ background: "var(--c-card)", border: "1px solid var(--c-bd)" }} title={isDark ? "Light Mode" : "Dark Mode"}>
                {isDark ? <Sun className="w-4 h-4" style={{ color: "var(--c-sage)" }} /> : <Moon className="w-4 h-4" style={{ color: "var(--c-sage)" }} />}
              </button>
              <a href="tel:+16025550180" className="hidden md:flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--c-mut)" }}>
                <Phone className="w-4 h-4" /> (602) 555-0180
              </a>
              <a href="#hero" className="hidden sm:inline-flex px-5 py-2.5 text-white text-[13px] font-[family-name:var(--font-heading)] font-bold rounded-xl transition-all hover:-translate-y-0.5" style={{ background: "var(--c-sage)" }}>
                What Will It Earn?
              </a>
              <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-xl cursor-pointer">
                {open ? <X className="w-5 h-5" style={{ color: "var(--c-head)" }} /> : <Menu className="w-5 h-5" style={{ color: "var(--c-head)" }} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="lg:hidden overflow-hidden" style={{ background: "var(--c-card)", borderTop: "1px solid var(--c-bd)" }}>
              <div className="px-6 py-6 space-y-1">
                {NAV.map((l) => (
                  <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-xl text-[15px] font-medium" style={{ color: "var(--c-body)" }}>{l.label}</a>
                ))}
                <div className="pt-4 mt-3" style={{ borderTop: "1px solid var(--c-bd)" }}>
                  <a href="tel:+16025550180" className="flex items-center gap-2 px-4 py-3 text-[15px]" style={{ color: "var(--c-mut)" }}>
                    <Phone className="w-4 h-4" /> (602) 555-0180
                  </a>
                  <a href="#hero" onClick={() => setOpen(false)} className="block mt-2 px-4 py-3 text-white text-center text-[15px] font-bold rounded-xl" style={{ background: "var(--c-sage)" }}>
                    What Will It Earn?
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
