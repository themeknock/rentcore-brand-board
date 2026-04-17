import Header from "@/components/Header";
import HeroV2 from "@/components/v2/HeroV2";
import TrustBar from "@/components/TrustBar";
import WhyRentCoreV2 from "@/components/v2/WhyRentCoreV2";
import Services from "@/components/Services";
import TestimonialSection from "@/components/v2/TestimonialSection";
import Pricing from "@/components/Pricing";
import PhotoBreak from "@/components/v2/PhotoBreak";
import HowItWorksV2 from "@/components/v2/HowItWorksV2";
import About from "@/components/About";
import AreasServed from "@/components/AreasServed";
import TenantHero from "@/components/TenantHero";
import TenantFeatures from "@/components/TenantFeatures";
import TenantActions from "@/components/TenantActions";
import Resources from "@/components/Resources";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home2() {
  return (
    <>
      <Header />
      <main>
        <HeroV2 />
        <ScrollReveal distance={30} duration={700}>
          <TrustBar />
        </ScrollReveal>
        <ScrollReveal direction="right" distance={50} duration={900}>
          <WhyRentCoreV2 />
        </ScrollReveal>
        <ScrollReveal distance={40} duration={800} stagger staggerDelay={150}>
          <Services />
        </ScrollReveal>
        <ScrollReveal distance={30} duration={700}>
          <TestimonialSection />
        </ScrollReveal>
        <ScrollReveal direction="left" distance={40} duration={800}>
          <Pricing />
        </ScrollReveal>
        <PhotoBreak />
        <ScrollReveal distance={50} duration={900}>
          <HowItWorksV2 />
        </ScrollReveal>
        <ScrollReveal direction="right" distance={40} duration={800}>
          <About />
        </ScrollReveal>
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
          <FinalCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
