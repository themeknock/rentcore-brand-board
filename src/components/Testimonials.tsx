"use client";

import { useRef } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitReveal from "./SplitReveal";

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    name: "Michael Chen",
    role: "4 rentals · Scottsdale",
    photo: "photo-1507003211169-0a1dd7228f2d",
    text: "Vacancy rate dropped, rent increased 11%. Should have done this sooner.",
  },
  {
    name: "Sarah Mitchell",
    role: "Out-of-state investor · CA → Mesa",
    photo: "photo-1494790108377-be9c29b29330",
    text: "Dale's team handles everything. I get monthly reports and my tenants are happier than before.",
  },
  {
    name: "David Torres",
    role: "3 properties · Gilbert & Chandler",
    photo: "photo-1472099645785-5658abf4ff4e",
    text: "The transparency is what sold us. We see everything in the portal — no surprises, ever.",
  },
  {
    name: "James Whitfield",
    role: "Inherited home · Tempe",
    photo: "photo-1500648767791-00dcc994a43e",
    text: "Had no idea how to be a landlord. They found a tenant in 12 days and handle everything.",
  },
  {
    name: "Rachel Kim",
    role: "2 rentals · Peoria",
    photo: "photo-1438761681033-6461ffad8d80",
    text: "Other PM companies just collect fees. Dale actually treats my properties like his own.",
  },
  {
    name: "Tom Bradley",
    role: "5 doors · Mesa & Gilbert",
    photo: "photo-1506794778202-cad84cf45f1d",
    text: "Best decision I made. Went from 3 vacancies to fully occupied in under 45 days.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[0,1,2,3,4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
    </div>
  );
}

export default function Testimonials() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const grid = gridRef.current;
    if (!grid) return;

    gsap.from(grid.children, {
      y: 40,
      opacity: 0,
      scale: 0.96,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: grid,
        start: "top 88%",
        once: true,
      },
    });
  });

  return (
    <section className="py-16 lg:py-24" style={{ background: "var(--c-bg)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header with Google badge */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
          <div>
            <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>What Investors Say</span>
            <SplitReveal>
              <span className="block font-[family-name:var(--font-heading)] text-[34px] lg:text-[44px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
                Trusted by <span className="gradient-text">120+ Investors</span>
              </span>
            </SplitReveal>
          </div>
          {/* Google rating badge */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl" style={{ background: "var(--c-card)", border: "1px solid var(--c-bd)" }}>
            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-[family-name:var(--font-heading)] font-extrabold text-[18px]" style={{ color: "var(--c-head)" }}>4.9</span>
                <Stars />
              </div>
              <p className="text-[11px]" style={{ color: "var(--c-mut)" }}>120+ reviews on Google</p>
            </div>
          </div>
        </div>

        {/* Review grid — 3 columns, 2 rows with stagger */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-1" style={{ background: "var(--c-card)", border: "1px solid var(--c-bd)" }}>
              <Stars />
              <p className="text-[15px] leading-[1.7] mt-4 mb-5" style={{ color: "var(--c-body)" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img src={`https://images.unsplash.com/${r.photo}?w=80&h=80&fit=crop&crop=face`} alt={r.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="text-[14px] font-semibold" style={{ color: "var(--c-head)" }}>{r.name}</p>
                  <p className="text-[12px]" style={{ color: "var(--c-mut)" }}>{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
