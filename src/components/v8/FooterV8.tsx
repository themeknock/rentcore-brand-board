import { Phone, Mail, MapPin } from "lucide-react";

const INVESTORS = [
  { label: "Property Management", href: "#services" },
  { label: "Areas We Serve", href: "#areas" },
  { label: "Pricing", href: "#pricing" },
  { label: "Free Rental Analysis", href: "#contact" },
];

const RESIDENTS = [
  { label: "Available Rentals", href: "#" },
  { label: "Apply Online", href: "#" },
  { label: "Tenant Portal", href: "#" },
  { label: "Maintenance Request", href: "#" },
];

const COMPANY = [
  { label: "About Dale", href: "#about" },
  { label: "Agent Referrals", href: "/agent-referral-program" },
  { label: "Resources", href: "#" },
  { label: "Contact", href: "#contact" },
];

export default function FooterV8() {
  return (
    <footer style={{ background: "#0B2545" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-12 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <p className="font-[family-name:var(--font-heading)] font-extrabold text-[20px] text-white tracking-[0.04em] uppercase mb-4">
              Rent Core
            </p>
            <p className="text-[14px] leading-relaxed text-white/40 max-w-[280px] mb-6">
              We manage like owners, with you every step of the way.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+16025550180" className="flex items-center gap-2.5 text-[13px] text-white/40 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" /> (602) 555-0180
              </a>
              <a href="mailto:info@rentcorepm.com" className="flex items-center gap-2.5 text-[13px] text-white/40 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5" /> info@rentcorepm.com
              </a>
              <span className="flex items-center gap-2.5 text-[13px] text-white/30">
                <MapPin className="w-3.5 h-3.5" /> Phoenix & Tucson, AZ
              </span>
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Investors", links: INVESTORS },
            { title: "Residents", links: RESIDENTS },
            { title: "Company", links: COMPANY },
          ].map((col) => (
            <div key={col.title}>
              <p className="font-[family-name:var(--font-heading)] font-bold text-[12px] tracking-[0.15em] uppercase text-white/50 mb-5">
                {col.title}
              </p>
              <div className="space-y-3">
                {col.links.map((link) => (
                  <a key={link.label} href={link.href} className="block text-[13px] text-white/35 hover:text-white transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-6 mb-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-[10px] text-white/20 font-medium uppercase tracking-wider">Equal Housing</span>
          <span className="text-[10px] text-white/20 font-medium uppercase tracking-wider">NARPM</span>
          <span className="text-[10px] text-white/20 font-medium uppercase tracking-wider">REALTOR®</span>
          <span className="text-[10px] text-white/20 font-medium uppercase tracking-wider">MLS</span>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/20">
            © 2026 Rent Core Property Management. Licensed Arizona Brokerage — BR548311000
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[11px] text-white/20 hover:text-white/40">Privacy</a>
            <a href="#" className="text-[11px] text-white/20 hover:text-white/40">Terms</a>
            <a href="#" className="text-[11px] text-white/20 hover:text-white/40">Fair Housing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
