import { Home, Wrench, CreditCard, LogIn, Phone } from "lucide-react";

const LINKS = [
  { icon: Home, label: "Available Rentals", desc: "Browse properties", href: "#" },
  { icon: CreditCard, label: "Pay Rent", desc: "Online payment", href: "#" },
  { icon: Wrench, label: "Maintenance Request", desc: "Submit a ticket", href: "#" },
  { icon: LogIn, label: "Tenant Portal", desc: "Log in", href: "#" },
];

export default function TenantActions() {
  return (
    <section className="py-12 lg:py-16" style={{ background: "var(--c-bg2)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-[24px] lg:text-[28px] tracking-tight" style={{ color: "var(--c-head)" }}>
            Get Started
          </h2>
          <p className="text-[15px] mt-1" style={{ color: "var(--c-body)" }}>
            Quick access to your tenant tools.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-[var(--c-card)] transition-all hover:-translate-y-0.5"
              style={{ border: "1px solid rgba(91,143,139,0.1)", boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(91,143,139,0.08)", border: "1px solid rgba(91,143,139,0.12)" }}>
                <link.icon className="w-5 h-5" style={{ color: "var(--c-sage)" }} />
              </div>
              <div>
                <p className="text-[14px] font-semibold" style={{ color: "var(--c-head)" }}>{link.label}</p>
                <p className="text-[12px]" style={{ color: "var(--c-mut)" }}>{link.desc}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="tel:+16025550180" className="inline-flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--c-sage)" }}>
            <Phone className="w-4 h-4" />
            Need help? Call (602) 555-0180
          </a>
        </div>
      </div>
    </section>
  );
}
