import React from 'react';

// Import all service components
import ServiceCategories from '../components/services/ServiceCategories';
import ServicesHero from '../components/services/ServicesHero';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServicesHero />
      
      {/* Service Categories */}
      <ServiceCategories />

    </div>
  );
};

export default Services;