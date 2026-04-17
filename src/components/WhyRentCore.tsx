"use client";

import { useRef } from "react";
import { TrendingUp, Eye, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitReveal from "./SplitReveal";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  { icon: TrendingUp, title: "We Take Over the Workload", desc: "We step in without taking away your control. Your property stays protected, your time becomes your own.", stat: "+12%", statLabel: "avg. rent increase", color: "var(--c-sage)" },
  { icon: Eye, title: "Grow, Don't Manage", desc: "Focus on growing your portfolio — not answering maintenance calls or coordinating repairs.", stat: "24/7", statLabel: "portal access", color: "var(--c-copr)" },
  { icon: MapPin, title: "Simple Transition", desc: "Most clients managed properties themselves before us. We make the handoff seamless and transparent.", stat: "15+", statLabel: "years in AZ", color: "var(--c-ok)" },
];

export default function WhyRentCore() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const cards = cardsRef.current;
    if (!section || !image || !cards) return;

    // Parallax on image — moves slower than scroll
    gsap.to(image, {
      yPercent: -12,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Stagger cards
    gsap.from(cards.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: cards,
        start: "top 90%",
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="why" className="py-16 lg:py-24" style={{ background: "linear-gradient(180deg, var(--c-bg) 0%, var(--c-bg2) 50%, var(--c-bg) 100%)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-10 lg:mb-14">
          {/* Image with parallax */}
          <div className="relative rounded-[28px] overflow-hidden h-[280px] lg:h-[340px]" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <div ref={imageRef} className="absolute inset-0 scale-[1.15]">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop" alt="Modern single-family investment property" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--c-bg) 0%, transparent 60%)" }} />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-[13px] font-medium text-white opacity-80">Phoenix metro investment property</p>
            </div>
          </div>

          {/* Heading with split reveal */}
          <div>
            <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>Why Rent Core</span>
            <SplitReveal>
              <span className="block font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
                Your Time Is Worth More Than
              </span>
              <span className="block font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight gradient-text">
                Managing Tenants
              </span>
            </SplitReveal>
            <p className="text-[17px] leading-[1.75] mt-6" style={{ color: "var(--c-body)" }}>
              You didn&apos;t invest in real estate to answer maintenance calls at midnight. We handle the day-to-day so you can focus on what matters.
            </p>
          </div>
        </div>

        {/* Cards with stagger */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((card) => (
            <div key={card.title} className="group relative rounded-[28px] p-8 lg:p-10 bg-[var(--c-card)] transition-all duration-300 hover:-translate-y-1 cursor-default" style={{ border: "1px solid var(--c-bd)", boxShadow: "var(--c-card-shadow)" }}>
              <div className="absolute top-8 right-8 text-right">
                <p className="font-[family-name:var(--font-heading)] font-extrabold text-[28px] tracking-tight" style={{ color: card.color }}>{card.stat}</p>
                <p className="text-[11px] font-medium" style={{ color: "var(--c-mut)" }}>{card.statLabel}</p>
              </div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7" style={{ background: "var(--c-inp)", border: `1px solid ${card.color}40` }}>
                <card.icon className="w-6 h-6" style={{ color: card.color }} />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[20px] mb-3 tracking-tight" style={{ color: "var(--c-head)" }}>{card.title}</h3>
              <p className="text-[15px] leading-[1.7]" style={{ color: "var(--c-body)" }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
