import { Shield, Users, Monitor, MapPin } from "lucide-react";

const CREDS = [
  { icon: Shield, label: "Licensed AZ Broker", value: "BR548311000" },
  { icon: Users, label: "Boutique Service", value: "Not a 500-door operation" },
  { icon: Monitor, label: "Rentec-Powered", value: "Professional-grade systems" },
  { icon: MapPin, label: "Local Expertise", value: "Phoenix & Tucson metro" },
];

export default function CredentialBar() {
  return (
    <section className="py-10 lg:py-14" style={{ background: "var(--c-bg2)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CREDS.map((c) => (
            <div key={c.label} className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(91,143,139,0.1)", border: "1px solid rgba(91,143,139,0.15)" }}>
                <c.icon className="w-4.5 h-4.5" style={{ color: "var(--c-sage)" }} />
              </div>
              <div>
                <p className="text-[14px] font-[family-name:var(--font-heading)] font-bold tracking-tight" style={{ color: "var(--c-head)" }}>{c.label}</p>
                <p className="text-[12px] mt-0.5" style={{ color: "var(--c-mut)" }}>{c.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
