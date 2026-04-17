"use client";

import { useState } from "react";

const palettes = [
  {
    name: "Modern Investor",
    rec: true,
    colors: [
      { n: "Electric Blue", h: "#1D4ED8", r: "Primary", light: false },
      { n: "Slate Blue", h: "#3B5998", r: "Secondary", light: false },
      { n: "Vibrant Orange", h: "#F97316", r: "CTA / Accent", light: false },
      { n: "Emerald", h: "#059669", r: "Success", light: false },
      { n: "Slate 900", h: "#0F172A", r: "Text Primary", light: false },
      { n: "Slate 500", h: "#64748B", r: "Text Secondary", light: false },
      { n: "Slate 50", h: "#F8FAFC", r: "Background", light: true },
    ],
  },
  {
    name: "Desert Trust",
    rec: false,
    colors: [
      { n: "Deep Navy", h: "#1B3A5C", r: "Primary", light: false },
      { n: "Sky Blue", h: "#2E86C1", r: "Secondary", light: false },
      { n: "Desert Orange", h: "#E8711A", r: "CTA / Accent", light: false },
      { n: "Sage Green", h: "#2D8A4E", r: "Success", light: false },
      { n: "Charcoal", h: "#1A1A2E", r: "Text Primary", light: false },
      { n: "Cool Gray", h: "#6B7280", r: "Text Secondary", light: false },
      { n: "Warm White", h: "#F8F6F3", r: "Background", light: true },
    ],
  },
  {
    name: "Phoenix Premium",
    rec: false,
    colors: [
      { n: "Royal Blue", h: "#2563EB", r: "Primary", light: false },
      { n: "Deep Teal", h: "#0D5E6D", r: "Secondary", light: false },
      { n: "Amber Orange", h: "#F59E0B", r: "CTA / Accent", light: true },
      { n: "Forest Green", h: "#15803D", r: "Success", light: false },
      { n: "Near Black", h: "#111827", r: "Text Primary", light: false },
      { n: "Gray 500", h: "#6B7280", r: "Text Secondary", light: false },
      { n: "Ghost White", h: "#FAFAFA", r: "Background", light: true },
    ],
  },
];

export default function ColorSystem() {
  const [active, setActive] = useState(0);
  const p = palettes[active];

  return (
    <div className="card">
      <div className="h-1 bg-gradient-to-r from-[#1D4ED8] to-[#F97316] rounded-t-[24px]" />
      <div className="p-12 md:p-16 lg:p-20">
        {/* Tabs */}
        <div className="flex gap-3 mb-10">
          {palettes.map((pl, i) => (
            <button
              key={pl.name}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-xl text-[14px] font-medium transition-all cursor-pointer ${
                i === active
                  ? "bg-[#0F172A] text-white shadow-lg"
                  : "bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0]"
              }`}
            >
              {pl.name}
              {pl.rec && <span className="ml-2 text-amber-400">★</span>}
            </button>
          ))}
        </div>

        {/* Swatches */}
        <div className="grid grid-cols-7 gap-6 mb-12">
          {p.colors.map((c) => (
            <div key={c.h}>
              <div
                className="aspect-square rounded-2xl mb-4 flex items-end p-4 border border-black/[0.04]"
                style={{ backgroundColor: c.h }}
              >
                <span
                  className={`text-[11px] font-mono font-medium ${
                    c.light ? "text-black/30" : "text-white/60"
                  }`}
                >
                  {c.h}
                </span>
              </div>
              <p className="font-[family-name:var(--font-heading)] font-bold text-[#1E293B] text-[13px] mb-1">
                {c.n}
              </p>
              <p className="text-[11px] text-[#94A3B8]">{c.r}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E2E8F0] mb-10" />

        {/* CTA Preview */}
        <p className="text-[11px] font-[family-name:var(--font-body)] font-semibold tracking-[0.2em] uppercase text-[#94A3B8] mb-6">
          Preview in Context
        </p>
        <div className="flex flex-wrap items-center gap-5 p-8 bg-[#F8FAFC] rounded-2xl border border-[#F1F5F9]">
          <button
            className="px-6 py-3 rounded-xl text-white text-[14px] font-[family-name:var(--font-heading)] font-bold shadow-md"
            style={{ backgroundColor: p.colors[2].h }}
          >
            Get Rental Analysis
          </button>
          <button
            className="px-6 py-3 rounded-xl text-[14px] font-[family-name:var(--font-heading)] font-bold border-2"
            style={{ borderColor: p.colors[0].h, color: p.colors[0].h }}
          >
            How It Works
          </button>
          <span
            className="text-[14px] font-medium"
            style={{ color: p.colors[0].h }}
          >
            Learn more →
          </span>

          <div className="ml-auto flex gap-8">
            {[
              { n: "150+", l: "Doors" },
              { n: "98%", l: "Retention" },
              { n: "15 Days", l: "Lease Time" },
              { n: "4.9★", l: "Rating" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p
                  className="font-[family-name:var(--font-heading)] font-extrabold text-[18px]"
                  style={{ color: p.colors[0].h }}
                >
                  {s.n}
                </p>
                <p className="text-[10px] text-[#94A3B8] mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
