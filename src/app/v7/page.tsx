import HeaderV5 from "@/components/v5/HeaderV5";
import HeroV7 from "@/components/v7/HeroV7";
import ServicesV7 from "@/components/v7/ServicesV7";
import CTAStripeV7 from "@/components/v7/CTAStripeV7";
import AreasV7 from "@/components/v7/AreasV7";
import NarrativeV7 from "@/components/v7/NarrativeV7";
import TestimonialsV5 from "@/components/v5/TestimonialsV5";
import PartnersV7 from "@/components/v7/PartnersV7";
import Resources from "@/components/Resources";
import AwardsV7 from "@/components/v7/AwardsV7";
import FinalCTAV7 from "@/components/v7/FinalCTAV7";
import FooterV7 from "@/components/v7/FooterV7";
import ScrollReveal from "@/components/ScrollReveal";

/* Pure PM color scheme */
const pm: React.CSSProperties = {
  // @ts-expect-error CSS custom properties
  "--c-bg": "#FFFFFF",
  "--c-bg2": "#F4F8FC",
  "--c-card": "#FFFFFF",
  "--c-inp": "#F4F8FC",
  "--c-sage": "#049DD9",
  "--c-copr": "#049DD9",
  "--c-head": "#0B2545",
  "--c-body": "#515151",
  "--c-mut": "#8E9690",
  "--c-bd": "#DFE4EC",
  "--c-ok": "#64CAAB",
  "--c-foot": "#0B2545",
  "--c-header-bg": "rgba(255,255,255,0.95)",
  "--c-badge-bg": "rgba(255,255,255,0.9)",
  "--c-grad": "linear-gradient(135deg, #049DD9, #0D5FA6)",
  "--c-license-bg": "#0B2545",
  "--c-trust-bg": "#F4F8FC",
  "--c-card-shadow": "0 1px 3px rgba(0,0,0,0.08), 0 0 0 1px #DFE4EC",
  "--c-icon-bg": "rgba(4,157,217,0.1)",
  "--c-areas-overlay": "rgba(11,37,69,0.92)",
  "--c-cta-overlay": "rgba(11,37,69,0.93)",
  "--c-hero-img": "0.08",
  "--c-step-bg": "#FFFFFF",
};

export default function HomeV7() {
  return (
    <div style={pm}>
      <HeaderV5 />
      <main>
        {/* 1. Hero — dark navy, photo right, CTA buttons */}
        <HeroV7 />

        {/* 2. Three staggered service cards on light bg */}
        <ServicesV7 />

        {/* 3. CTA stripe — blue gradient */}
        <CTAStripeV7 />

        {/* 4-5. Narrative sections — alternating text+image */}
        <NarrativeV7 />

        {/* 6. Areas served — interactive map */}
        <AreasV7 />

        {/* 7. Google reviews */}
        <TestimonialsV5 />

        {/* 8. Awards / credentials — dark section with visuals */}
        <AwardsV7 />

        {/* 9. Partner logos — dark strip */}
        <PartnersV7 />

        {/* 10. Blog / resources */}
        <ScrollReveal distance={40} duration={800}>
          <Resources />
        </ScrollReveal>

        {/* 11. Final CTA — clean, centered */}
        <FinalCTAV7 />
      </main>
      <FooterV7 />
    </div>
  );
}
