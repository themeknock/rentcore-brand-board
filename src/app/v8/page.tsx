import HeaderV8 from "@/components/v8/HeaderV8";
import HeroV8 from "@/components/v8/HeroV8";
import IntroV8 from "@/components/v8/IntroV8";
import ServicesV8 from "@/components/v8/ServicesV8";
import FeaturesV8 from "@/components/v8/FeaturesV8";
import DaleV8 from "@/components/v8/DaleV8";
import TestimonialsV8 from "@/components/v8/TestimonialsV8";
import PricingV8 from "@/components/v8/PricingV8";
import CTAV8 from "@/components/v8/CTAV8";
import FooterV8 from "@/components/v8/FooterV8";

export default function HomeV8() {
  return (
    <div>
      <HeaderV8 />
      <main>
        <HeroV8 />
        <IntroV8 />
        <ServicesV8 />
        <FeaturesV8 />
        <DaleV8 />
        <TestimonialsV8 />
        <PricingV8 />
        <CTAV8 />
      </main>
      <FooterV8 />
    </div>
  );
}
