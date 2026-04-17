"use client";

import { useRef, useState, useEffect } from "react";

const STATS = [
  { value: 150, suffix: "+", label: "Doors Managed", decimal: false },
  { value: 98, suffix: "%", label: "Tenant Retention", decimal: false },
  { value: 15, suffix: " Days", label: "Avg. Time to Lease", decimal: false },
  { value: 4.9, suffix: "/5", label: "Investor Rating", decimal: true },
];

function AnimatedCounter({ target, decimal }: { target: number; decimal: boolean }) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(eased * target);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target]);

  return <span ref={ref}>{decimal ? val.toFixed(1) : Math.round(val)}</span>;
}

export default function TrustBar() {
  return (
    <section style={{ background: "var(--c-bg2)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center" style={{ borderRight: i < 3 ? "1px solid var(--c-bd)" : "none" }}>
              <p className="font-[family-name:var(--font-heading)] text-[36px] lg:text-[42px] font-extrabold leading-none mb-2 tracking-tight" style={{ color: "var(--c-head)" }}>
                <AnimatedCounter target={stat.value} decimal={stat.decimal} />{stat.suffix}
              </p>
              <p className="text-[14px]" style={{ color: "var(--c-mut)" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
