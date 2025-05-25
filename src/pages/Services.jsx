import React from 'react';

// Import all service components
import ProcessSection from '../components/services/ProcessSection';
import ServiceCard from '../components/services/ServiceCard';
import ServiceCategories from '../components/services/ServiceCategories';
import ServicesHero from '../components/services/ServicesHero';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServicesHero />
      
      {/* Service Categories */}
      <ServiceCategories />
      
      {/* Individual Service Cards */}
      <ServiceCard />
      
      {/* Process Section */}
      <ProcessSection />
    </div>
  );
};

export default Services;