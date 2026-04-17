import HeaderV5 from "@/components/v5/HeaderV5";
import HeroV6 from "@/components/v6/HeroV6";
import CredentialBar from "@/components/v5/CredentialBar";
import ServicesV6 from "@/components/v6/ServicesV6";
import CTAStripeV6 from "@/components/v6/CTAStripeV6";
import WhyV6 from "@/components/v6/WhyV6";
import ComparisonV6 from "@/components/v6/ComparisonV6";
import OwnerPortal from "@/components/OwnerPortal";
import TestimonialsV5 from "@/components/v5/TestimonialsV5";
import Pricing from "@/components/Pricing";
import GuaranteesV5 from "@/components/v5/GuaranteesV5";
import About from "@/components/About";
import AreasServed from "@/components/AreasServed";
import TenantsV6 from "@/components/v6/TenantsV6";
import TenantActions from "@/components/TenantActions";
import Resources from "@/components/Resources";
import FAQ from "@/components/FAQ";
import FinalCTAV6 from "@/components/v6/FinalCTAV6";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

/* Pure PM color scheme via CSS variable overrides */
const pmVars: React.CSSProperties = {
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

export default function HomeV6() {
  return (
    <div style={pmVars}>
      <HeaderV5 />
      <main>
        <HeroV6 />
        <CredentialBar />
        <ServicesV6 />
        <CTAStripeV6 />
        <WhyV6 />
        <ComparisonV6 />
        <ScrollReveal distance={40} duration={800}>
          <OwnerPortal />
        </ScrollReveal>
        <TestimonialsV5 />
        <ScrollReveal direction="left" distance={40} duration={800}>
          <Pricing />
        </ScrollReveal>
        <GuaranteesV5 />
        <About />
        <ScrollReveal distance={40} duration={800}>
          <AreasServed />
        </ScrollReveal>
        <TenantsV6 />
        <ScrollReveal distance={30} duration={700}>
          <TenantActions />
        </ScrollReveal>
        <ScrollReveal distance={50} duration={900}>
          <Resources />
        </ScrollReveal>
        <ScrollReveal distance={40} duration={800}>
          <FAQ />
        </ScrollReveal>
        <FinalCTAV6 />
      </main>
      <Footer />
    </div>
  );
}
