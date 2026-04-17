import { Star, Shield } from "lucide-react";

const MINI_REVIEWS = [
  { quote: "Professional, responsive, and transparent. Best decision we made.", name: "Sarah K.", location: "Scottsdale, AZ" },
  { quote: "Dale treats our property like it's his own. That says everything.", name: "Remote Investor", location: "California" },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "#F8FAFC" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Main testimonial */}
        <div className="relative pl-8 lg:pl-10 mb-14" style={{ borderLeft: "4px solid #F97316" }}>
          <span className="absolute -top-6 -left-2 font-[family-name:var(--font-heading)] text-[100px] leading-none" style={{ color: "rgba(29,78,216,0.06)" }}>&ldquo;</span>
          <p className="font-[family-name:var(--font-heading)] text-[22px] lg:text-[30px] font-bold leading-[1.4] tracking-tight" style={{ color: "#0F172A" }}>
            We switched to RentCore after managing our three properties ourselves for five years. Within the first month, they re-leased a vacant unit at $200 more than we were getting. The monthly reporting alone is worth it.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div>
              <p className="font-[family-name:var(--font-heading)] font-bold text-[15px]" style={{ color: "#0F172A" }}>Mark & Jennifer R.</p>
              <p className="text-[13px]" style={{ color: "#94A3B8" }}>Mesa, AZ — 3 Properties</p>
            </div>
            <div className="w-px h-8" style={{ background: "#E2E8F0" }} />
            <div className="flex">
              {[0,1,2,3,4].map((i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
            </div>
          </div>
        </div>

        {/* Mini reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {MINI_REVIEWS.map((review) => (
            <div key={review.name} className="rounded-2xl p-6 bg-white" style={{ border: "1px solid #F1F5F9", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              <div className="flex mb-3">
                {[0,1,2,3,4].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "#475569" }}>&ldquo;{review.quote}&rdquo;</p>
              <p className="text-[13px] font-medium" style={{ color: "#0F172A" }}>{review.name} <span style={{ color: "#94A3B8" }}>· {review.location}</span></p>
            </div>
          ))}
        </div>

        {/* Broker badge */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#05966912" }}>
            <Shield className="w-4.5 h-4.5" style={{ color: "#059669" }} />
          </div>
          <div>
            <p className="text-[13px] font-semibold" style={{ color: "#334155" }}>Licensed Arizona Broker</p>
            <p className="text-[11px]" style={{ color: "#94A3B8" }}>Regulated by the Arizona Department of Real Estate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
