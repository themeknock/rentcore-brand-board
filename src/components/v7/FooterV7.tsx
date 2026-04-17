import { Phone, Mail, MapPin } from "lucide-react";

const INVESTORS = [
  { label: "Property Management", href: "#services" },
  { label: "Areas We Serve", href: "#areas" },
  { label: "Free Rental Analysis", href: "#hero" },
  { label: "Investor FAQ", href: "#faq" },
  { label: "Owner Portal Login", href: "#" },
];

const RESIDENTS = [
  { label: "Available Rentals", href: "#" },
  { label: "Apply Online", href: "#" },
  { label: "Tenant Portal Login", href: "#" },
  { label: "Maintenance Request", href: "#" },
  { label: "Resident Resources", href: "#" },
];

const COMPANY = [
  { label: "About Us", href: "#about" },
  { label: "Agent Referrals", href: "/agent-referral-program" },
  { label: "Blog & Resources", href: "#resources" },
  { label: "Contact Us", href: "#cta" },
];

export default function FooterV7() {
  return (
    <footer style={{ background: "#0B2545" }}>
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-12 mb-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo-circle.png" alt="RentCore" className="w-12 h-12" />
              <div>
                <p className="font-[family-name:var(--font-heading)] font-extrabold text-[18px] text-white tracking-tight">
                  Rent<span style={{ color: "#049DD9" }}>Core</span>
                </p>
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/30">Property Management</p>
              </div>
            </div>
            <p className="text-[14px] leading-relaxed text-white/40 max-w-[280px] mb-6">
              We manage like owners, with you every step of the way.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="tel:+16025550180" className="flex items-center gap-2.5 text-[13px] text-white/50 hover:text-white transition-colors">
                <Phone className="w-4 h-4 shrink-0" /> (602) 555-0180
              </a>
              <a href="mailto:info@rentcorepm.com" className="flex items-center gap-2.5 text-[13px] text-white/50 hover:text-white transition-colors">
                <Mail className="w-4 h-4 shrink-0" /> info@rentcorepm.com
              </a>
              <span className="flex items-center gap-2.5 text-[13px] text-white/40">
                <MapPin className="w-4 h-4 shrink-0" /> Phoenix & Tucson, AZ
              </span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Investors */}
          <div>
            <p className="font-[family-name:var(--font-heading)] font-bold text-[13px] tracking-[0.1em] uppercase text-white/60 mb-5">Investors</p>
            <div className="space-y-3">
              {INVESTORS.map((link) => (
                <a key={link.label} href={link.href} className="block text-[13px] text-white/40 hover:text-white transition-colors">{link.label}</a>
              ))}
            </div>
          </div>

          {/* Residents */}
          <div>
            <p className="font-[family-name:var(--font-heading)] font-bold text-[13px] tracking-[0.1em] uppercase text-white/60 mb-5">Residents</p>
            <div className="space-y-3">
              {RESIDENTS.map((link) => (
                <a key={link.label} href={link.href} className="block text-[13px] text-white/40 hover:text-white transition-colors">{link.label}</a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="font-[family-name:var(--font-heading)] font-bold text-[13px] tracking-[0.1em] uppercase text-white/60 mb-5">Company</p>
            <div className="space-y-3">
              {COMPANY.map((link) => (
                <a key={link.label} href={link.href} className="block text-[13px] text-white/40 hover:text-white transition-colors">{link.label}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance logos row */}
        <div className="flex flex-wrap items-center justify-center gap-8 py-8 mb-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {/* Equal Housing */}
          <div className="flex items-center gap-2 opacity-40">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <path d="M16 2L2 14H6V30H26V14H30L16 2Z" stroke="white" strokeWidth="1.5" fill="none" />
              <rect x="10" y="18" width="12" height="2" fill="white" />
              <rect x="10" y="22" width="12" height="2" fill="white" />
            </svg>
            <span className="text-[10px] text-white font-medium uppercase tracking-wider">Equal Housing</span>
          </div>
          {/* NARPM */}
          <div className="opacity-40">
            <span className="text-[13px] text-white font-bold tracking-wider">NARPM</span>
          </div>
          {/* REALTOR */}
          <div className="flex items-center gap-1 opacity-40">
            <svg width="18" height="22" viewBox="0 0 24 28" fill="none">
              <rect x="1" y="1" width="22" height="26" stroke="white" strokeWidth="1.5" fill="none" />
              <text x="12" y="19" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white" fontFamily="serif">R</text>
            </svg>
            <span className="text-[12px] text-white font-bold">REALTOR<sup>®</sup></span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25">
            Rent Core Property Management holds Arizona real estate brokerage license BR548311000.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[11px] text-white/25 hover:text-white/50 transition-colors">Privacy Policy</a>
            <span className="text-white/10">·</span>
            <a href="#" className="text-[11px] text-white/25 hover:text-white/50 transition-colors">Terms of Use</a>
            <span className="text-white/10">·</span>
            <a href="#" className="text-[11px] text-white/25 hover:text-white/50 transition-colors">Fair Housing</a>
          </div>
        </div>

        <p className="text-center text-[11px] text-white/15 mt-6">
          © 2026 Rent Core Property Management. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
