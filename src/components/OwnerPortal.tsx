"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Home, DollarSign, Wrench, ArrowUpRight, Bell, Calendar, ChevronRight } from "lucide-react";

/* Animated counter */
function Counter({ target, prefix = "", suffix = "", decimals = 0 }: { target: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const dur = 1500;
        const step = (ts: number) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / dur, 1);
          setVal(p * target);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{prefix}{val.toFixed(decimals)}{suffix}</span>;
}

/* Mini bar chart */
function MiniChart() {
  const bars = [65, 72, 58, 80, 75, 90, 85, 92, 78, 88, 95, 82];
  return (
    <div className="flex items-end gap-[3px] h-16">
      {bars.map((h, i) => (
        <div key={i} className="flex-1 rounded-t-sm transition-all" style={{
          height: `${h}%`,
          background: i === bars.length - 1 ? "var(--c-copr)" : "var(--c-sage)",
          opacity: i === bars.length - 1 ? 1 : 0.3 + (i / bars.length) * 0.5,
          animation: `barGrow 0.6s ease-out ${i * 0.05}s both`,
        }} />
      ))}
    </div>
  );
}

export default function OwnerPortal() {
  return (
    <section className="py-16 lg:py-24 overflow-hidden" style={{ background: "var(--c-bg2)" }}>
      <style>{`
        @keyframes barGrow { from { transform: scaleY(0); transform-origin: bottom; } to { transform: scaleY(1); transform-origin: bottom; } }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .portal-fade { animation: fadeSlideUp 0.7s ease-out both; }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Copy */}
          <div>
            <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>Owner Portal</span>
            <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[46px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--c-head)" }}>
              Your Properties.<br />
              <span className="gradient-text">One Dashboard.</span>
            </h2>
            <p className="text-[17px] leading-[1.75] mb-8 max-w-[440px]" style={{ color: "var(--c-body)" }}>
              Real-time financials, maintenance tracking, and tenant updates — all in one place. No more chasing down paperwork.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Live rent collection & disbursement tracking",
                "Monthly statements & year-end 1099s",
                "Maintenance requests with status updates",
                "Lease documents & tenant communication",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--c-sage)" }} />
                  <span className="text-[14px] font-medium" style={{ color: "var(--c-body)" }}>{item}</span>
                </div>
              ))}
            </div>
            <a href="#hero" className="group inline-flex items-center gap-2 text-[14px] font-semibold" style={{ color: "var(--c-copr)" }}>
              Get started with a free rental analysis <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right — Portal Mockup */}
          <div className="relative">
            {/* Glow behind */}
            <div className="absolute -inset-10 rounded-full blur-[80px]" style={{ background: "rgba(91,143,139,0.08)" }} />

            <div className="relative rounded-[24px] overflow-hidden" style={{ background: "var(--c-card)", border: "1px solid var(--c-bd)", boxShadow: "0 30px 80px rgba(0,0,0,0.3)" }}>

              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-3" style={{ background: "var(--c-inp)", borderBottom: "1px solid var(--c-bd)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                </div>
                <span className="text-[11px] font-medium" style={{ color: "var(--c-mut)" }}>portal.rentcorepm.com</span>
                <Bell className="w-4 h-4" style={{ color: "var(--c-mut)" }} />
              </div>

              <div className="p-5 space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Monthly Revenue", value: <Counter target={4850} prefix="$" suffix="" />, icon: DollarSign, change: "+8.2%", color: "var(--c-sage)" },
                    { label: "Occupancy", value: <Counter target={98} suffix="%" />, icon: Home, change: "Stable", color: "var(--c-copr)" },
                    { label: "Properties", value: <Counter target={4} />, icon: TrendingUp, change: "Active", color: "var(--c-sage)" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl p-3.5" style={{ background: "var(--c-inp)", border: "1px solid var(--c-bd)" }}>
                      <div className="flex items-center justify-between mb-2">
                        <s.icon className="w-4 h-4" style={{ color: s.color }} />
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md" style={{ color: s.color, background: `${s.color}15` }}>{s.change}</span>
                      </div>
                      <p className="font-[family-name:var(--font-heading)] font-extrabold text-[20px] tracking-tight" style={{ color: "var(--c-head)" }}>{s.value}</p>
                      <p className="text-[10px] mt-0.5" style={{ color: "var(--c-mut)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="rounded-xl p-4" style={{ background: "var(--c-inp)", border: "1px solid var(--c-bd)" }}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[12px] font-semibold" style={{ color: "var(--c-head)" }}>Revenue (12 months)</p>
                    <span className="text-[10px] px-2 py-1 rounded-md" style={{ background: "var(--c-sage)", color: "white" }}>+12%</span>
                  </div>
                  <MiniChart />
                  <div className="flex justify-between mt-2">
                    <span className="text-[9px]" style={{ color: "var(--c-mut)" }}>Jan</span>
                    <span className="text-[9px]" style={{ color: "var(--c-mut)" }}>Jun</span>
                    <span className="text-[9px]" style={{ color: "var(--c-mut)" }}>Dec</span>
                  </div>
                </div>

                {/* Recent activity */}
                <div className="rounded-xl p-4" style={{ background: "var(--c-inp)", border: "1px solid var(--c-bd)" }}>
                  <p className="text-[12px] font-semibold mb-3" style={{ color: "var(--c-head)" }}>Recent Activity</p>
                  <div className="space-y-2.5">
                    {[
                      { icon: DollarSign, text: "Rent received — 4821 E Oak St", time: "2h ago", color: "var(--c-sage)" },
                      { icon: Wrench, text: "Maintenance completed — AC unit", time: "1d ago", color: "var(--c-copr)" },
                      { icon: Calendar, text: "Lease renewal signed — Unit 3B", time: "3d ago", color: "var(--c-sage)" },
                    ].map((a) => (
                      <div key={a.text} className="flex items-center justify-between py-2 group cursor-pointer" style={{ borderBottom: "1px solid var(--c-bd)" }}>
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${a.color}15` }}>
                            <a.icon className="w-3.5 h-3.5" style={{ color: a.color }} />
                          </div>
                          <div>
                            <p className="text-[12px] font-medium" style={{ color: "var(--c-head)" }}>{a.text}</p>
                            <p className="text-[10px]" style={{ color: "var(--c-mut)" }}>{a.time}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--c-mut)" }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
