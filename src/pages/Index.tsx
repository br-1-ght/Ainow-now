import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSlider />
      <StatsSection />
      <WhyChooseSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
