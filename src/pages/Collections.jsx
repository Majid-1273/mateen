import HeroBanner from "../components/collections/HeroBanner"
import Collection from "../components/collections/Collection"
import ServicesSection from "../components/collections/ServicesSection"
import AboutSection from "../components/collections/AboutSection"

// Main App Component
const Collections = () => {
  return (
    <div className="font-sans">
      
      <Collection />
      <HeroBanner />
      <ServicesSection />
      <AboutSection />
    </div>
  );
};

export default Collections;