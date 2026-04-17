import HeaderV5 from "@/components/v5/HeaderV5";
import HeroV5 from "@/components/v5/HeroV5";
import CredentialBar from "@/components/v5/CredentialBar";
import WhyV5 from "@/components/v5/WhyV5";
import ServicesV5 from "@/components/v5/ServicesV5";
import CTAStripe from "@/components/v5/CTAStripe";
import Comparison from "@/components/Comparison";
import OwnerPortal from "@/components/OwnerPortal";
import TestimonialsV5 from "@/components/v5/TestimonialsV5";
import Pricing from "@/components/Pricing";
import GuaranteesV5 from "@/components/v5/GuaranteesV5";
import About from "@/components/About";
import AreasServed from "@/components/AreasServed";
import TenantHero from "@/components/TenantHero";
import TenantFeatures from "@/components/TenantFeatures";
import TenantActions from "@/components/TenantActions";
import Resources from "@/components/Resources";
import FAQ from "@/components/FAQ";
import FinalCTAV5 from "@/components/v5/FinalCTAV5";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomeV5() {
  return (
    <>
      <HeaderV5 />
      <main>
        <HeroV5 />
        <CredentialBar />
        <ServicesV5 />
        <CTAStripe />
        <WhyV5 />
        <ScrollReveal distance={40} duration={800}>
          <Comparison />
        </ScrollReveal>
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
        <ScrollReveal distance={40} duration={800}>
          <TenantHero />
        </ScrollReveal>
        <ScrollReveal distance={40} duration={800}>
          <TenantFeatures />
        </ScrollReveal>
        <ScrollReveal distance={30} duration={700}>
          <TenantActions />
        </ScrollReveal>
        <ScrollReveal distance={50} duration={900}>
          <Resources />
        </ScrollReveal>
        <ScrollReveal distance={40} duration={800}>
          <FAQ />
        </ScrollReveal>
        <FinalCTAV5 />
      </main>
      <Footer />
    </>
  );
}
