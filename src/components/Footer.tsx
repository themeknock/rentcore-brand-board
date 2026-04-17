import { Phone, Mail, MapPin } from "lucide-react";

const OWNER_LINKS = [
  { label: "Why Rent Core", href: "#why" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Free Rental Analysis", href: "#hero" },
  { label: "Owner Portal Login", href: "#" },
];
const TENANT_LINKS = [
  { label: "Available Rentals", href: "#" },
  { label: "Apply Online", href: "#" },
  { label: "Tenant Portal Login", href: "#" },
  { label: "Maintenance Request", href: "#" },
];
const COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Areas Served", href: "#areas" },
  { label: "Blog & Resources", href: "#" },
  { label: "Contact Us", href: "#cta" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--c-foot)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-5">
              <img src="/logo-circle.png" alt="RentCore Property Management" style={{ width: "80px", height: "80px" }} />
            </div>
            <p className="text-[14px] leading-relaxed mb-6 max-w-[260px]" style={{ color: "var(--c-mut)" }}>
              We manage like owners, with you every step of the way.
            </p>
            <div className="space-y-3">
              <a href="tel:+16025550180" className="flex items-center gap-2.5 text-[13px] transition-colors" style={{ color: "var(--c-mut)" }}>
                <Phone className="w-4 h-4 shrink-0" /> (602) 555-0180
              </a>
              <a href="mailto:info@rentcorepm.com" className="flex items-center gap-2.5 text-[13px] transition-colors" style={{ color: "var(--c-mut)" }}>
                <Mail className="w-4 h-4 shrink-0" /> info@rentcorepm.com
              </a>
              <span className="flex items-center gap-2.5 text-[13px]" style={{ color: "var(--c-mut)" }}>
                <MapPin className="w-4 h-4 shrink-0" /> Phoenix, AZ
              </span>
            </div>
          </div>

          {/* Owners */}
          <div>
            <p className="font-[family-name:var(--font-heading)] font-semibold text-[14px] mb-5" style={{ color: "var(--c-head)" }}>Property Owners</p>
            <div className="space-y-3">
              {OWNER_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="block text-[13px] transition-colors" style={{ color: "var(--c-mut)" }}>{link.label}</a>
              ))}
            </div>
          </div>

          {/* Tenants */}
          <div>
            <p className="font-[family-name:var(--font-heading)] font-semibold text-[14px] mb-5" style={{ color: "var(--c-head)" }}>Tenants</p>
            <div className="space-y-3">
              {TENANT_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="block text-[13px] transition-colors" style={{ color: "var(--c-mut)" }}>{link.label}</a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="font-[family-name:var(--font-heading)] font-semibold text-[14px] mb-5" style={{ color: "var(--c-head)" }}>Company</p>
            <div className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="block text-[13px] transition-colors" style={{ color: "var(--c-mut)" }}>{link.label}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Real Estate Compliance Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-10 pt-8" style={{ borderTop: "1px solid var(--c-bd)" }}>
          {/* MLS */}
          <div className="flex flex-col items-center gap-1">
            <p className="text-[8px] font-bold tracking-wider uppercase" style={{ color: "var(--c-mut)" }}>Multiple Listing Service</p>
            <p className="font-[family-name:var(--font-heading)] text-[22px] font-black tracking-tight" style={{ color: "var(--c-mut)" }}>MLS</p>
          </div>
          {/* Equal Housing */}
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M16 2L2 14H6V30H26V14H30L16 2Z" stroke="#6E7A8E" strokeWidth="1.5" fill="none"/><rect x="10" y="18" width="12" height="2" fill="#6E7A8E"/><rect x="10" y="22" width="12" height="2" fill="#6E7A8E"/></svg>
            <div>
              <p className="text-[8px] font-bold uppercase" style={{ color: "var(--c-mut)" }}>Equal Housing</p>
              <p className="text-[8px] font-bold uppercase" style={{ color: "var(--c-mut)" }}>Opportunity</p>
            </div>
          </div>
          {/* REALTOR® */}
          <div className="flex items-center gap-2">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none"><rect x="1" y="1" width="22" height="26" stroke="#6E7A8E" strokeWidth="1.5" fill="none"/><text x="12" y="18" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#6E7A8E" fontFamily="serif">R</text></svg>
            <div>
              <p className="text-[10px] font-bold" style={{ color: "var(--c-mut)" }}>REALTOR<sup>&reg;</sup></p>
            </div>
          </div>
          {/* NAR */}
          <div className="flex items-center gap-2">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none"><rect x="1" y="1" width="18" height="22" rx="2" fill="#5B8F8B" fillOpacity="0.8"/><text x="10" y="16" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" fontFamily="serif">R</text></svg>
            <div>
              <p className="text-[8px] font-bold uppercase leading-tight" style={{ color: "var(--c-mut)" }}>National Association</p>
              <p className="text-[8px] font-bold uppercase leading-tight" style={{ color: "var(--c-mut)" }}>of REALTORS<sup>&reg;</sup></p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px]" style={{ color: "var(--c-mut)" }}>
            © 2026 Rent Core Property Management. All rights reserved. | Licensed Arizona Broker
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[12px] transition-colors" style={{ color: "var(--c-mut)" }}>Privacy Policy</a>
            <a href="#" className="text-[12px] transition-colors" style={{ color: "var(--c-mut)" }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
