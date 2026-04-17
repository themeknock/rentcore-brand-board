"use client";

import { useRef } from "react";
import { TrendingUp, Eye, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    icon: TrendingUp,
    title: "We Take Over the Workload",
    desc: "We step in without taking away your control. Your property stays protected, your time becomes your own.",
    stat: "+12%",
    statLabel: "avg. rent increase",
    color: "#1D4ED8",
  },
  {
    icon: Eye,
    title: "Grow, Don't Manage",
    desc: "Focus on growing your portfolio — not answering maintenance calls or coordinating repairs.",
    stat: "24/7",
    statLabel: "portal access",
    color: "#F97316",
  },
  {
    icon: MapPin,
    title: "Simple Transition",
    desc: "Most clients managed properties themselves before us. We make the handoff seamless and transparent.",
    stat: "15+",
    statLabel: "years in AZ",
    color: "#059669",
  },
];

export default function WhyRentCoreV2() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".wrc-image", {
      x: -60, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    });
    gsap.from(".wrc-item", {
      x: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
    });
  }, { scope: ref });

  return (
    <section ref={ref} id="why" className="py-24 lg:py-36" style={{ background: "linear-gradient(180deg, #fff 0%, #f8faff 50%, #fff 100%)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "#F97316" }}>Why Rent Core</span>
          <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight max-w-[750px] mx-auto" style={{ color: "#0F172A" }}>
            Your Time Is Worth More Than <span className="gradient-text">Managing Tenants</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Property photo */}
          <div className="wrc-image">
            <div className="relative rounded-[28px] overflow-hidden" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.1)" }}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop&q=80"
                alt="Modern property interior"
                className="w-full h-[400px] lg:h-[520px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.4) 0%, transparent 40%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[13px] font-semibold text-white">Phoenix, AZ</p>
                <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.6)" }}>Single-family investment property</p>
              </div>
            </div>
          </div>

          {/* Right — Features stacked */}
          <div>
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className="wrc-item flex gap-5 py-7"
                style={{ borderBottom: i < 2 ? "1px solid #F1F5F9" : "none" }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${feature.color}15` }}>
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[18px] tracking-tight" style={{ color: "#0F172A" }}>{feature.title}</h3>
                    <div className="text-right shrink-0 ml-4">
                      <p className="font-[family-name:var(--font-heading)] font-extrabold text-[22px] tracking-tight" style={{ color: feature.color }}>{feature.stat}</p>
                      <p className="text-[10px] font-medium" style={{ color: "#94A3B8" }}>{feature.statLabel}</p>
                    </div>
                  </div>
                  <p className="text-[15px] leading-relaxed" style={{ color: "#64748B" }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
