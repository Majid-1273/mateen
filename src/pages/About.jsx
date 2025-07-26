import HeroSection from "../components/about/HeroSection"
import ServicesSection from "../components/about/ServicesSection"
import StorySection from "../components/about/StorySection"
import ProcessSection from "../components/about/ProcessSection"
import TestimonialsSection from "../components/about/TestimonialsSection"
import CTASection from "../components/about/CTASection"


// Main About Page Component
const About = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <StorySection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default About;