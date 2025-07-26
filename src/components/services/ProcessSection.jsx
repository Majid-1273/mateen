import React, { useEffect, useState } from 'react';

const ProcessSection = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after mount to trigger animations
    setIsVisible(true);
    
    // Simulating AOS init
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 150);
    });
  }, []);

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "We begin with understanding your specific needs, discussing fabric choices, designs, and timeline requirements for authentic Pakistani fashion.",
      image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=300&fit=crop&crop=center",
      icon: "💬"
    },
    {
      number: "02", 
      title: "Brand Selection",
      description: "Choose from premium Pakistani brands or browse collections with our expert guidance to find pieces that match your style and preferences.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      icon: "🛍️"
    },
    {
      number: "03",
      title: "Order Processing", 
      description: "We handle the ordering process directly with Pakistani brands, ensuring authenticity and managing all communication on your behalf.",
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop&crop=center",
      icon: "📋"
    },
    {
      number: "04",
      title: "Tailoring Service",
      description: "For unstitched items, our skilled Pakistani tailors create custom-fitted garments using traditional techniques and modern precision.",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop&crop=center",
      icon: "✂️"
    },
    {
      number: "05", 
      title: "Quality Assurance",
      description: "Thorough inspection ensures every piece meets our high standards before international shipping, maintaining brand authenticity and quality.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
      icon: "🔍"
    },
    {
      number: "06",
      title: "Global Delivery",
      description: "Secure international shipping with tracking ensures your authentic Pakistani fashion arrives safely at your doorstep worldwide.",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop&crop=center", 
      icon: "🌍"
    }
  ];

  const StepCard = ({ step, index }) => (
    <div 
      className={`group relative bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 transform hover:-translate-y-2 hover:scale-105 h-full ${
        hoveredStep === index 
          ? 'border-[#aa2939] shadow-[#aa2939]/20' 
          : 'border-transparent hover:border-[#aa2939]/30'
      }`}
      data-aos="fade-up"
      data-aos-delay={index * 150}
      onMouseEnter={() => setHoveredStep(index)}
      onMouseLeave={() => setHoveredStep(null)}
      style={{
        opacity: isVisible ? '1' : '0',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease-out',
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Image Header */}
      <div className="relative h-28 sm:h-32 md:h-36 lg:h-40 overflow-hidden">
        <img 
          src={step.image} 
          alt={step.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Step Number Badge */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#aa2939] to-[#09341c] rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-[#edefee] font-bold text-xs sm:text-sm md:text-base">{step.number}</span>
          </div>
        </div>

        {/* Icon */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#edefee]/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-sm sm:text-base md:text-lg">{step.icon}</span>
          </div>
        </div>

        {/* Decorative Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#aa2939] via-[#edefee] to-[#09341c]"></div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex-1 flex flex-col">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-[#09341c] group-hover:text-[#aa2939] transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300 flex-1">
          {step.description}
        </p>

        {/* Progress Indicator */}
        <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
          <div className="flex-1 h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#aa2939] to-[#09341c] rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: hoveredStep === index ? '100%' : `${((index + 1) / steps.length) * 100}%`,
                transitionDelay: hoveredStep === index ? '0ms' : `${index * 100}ms`
              }}
            ></div>
          </div>
          <span className="text-xs sm:text-sm text-gray-500 font-medium">
            Step {index + 1} of {steps.length}
          </span>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#aa2939]/5 to-[#09341c]/5 transition-opacity duration-300 ${
        hoveredStep === index ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );

  return (
    <div className="relative bg-gradient-to-br from-[#edefee] via-white to-[#aa2939]/10 overflow-hidden pt-12 sm:pt-16 md:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#aa2939] rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-[#09341c] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-32 sm:w-40 sm:h-40 bg-[#aa2939] rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 relative z-10 flex flex-col justify-center py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div 
            className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6"
            data-aos="fade-down"
            style={{
              opacity: isVisible ? '1' : '0',
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out'
            }}
          >
            <div className="w-8 h-1 sm:w-12 sm:h-1 md:w-16 md:h-1.5 bg-gradient-to-r from-[#aa2939] to-[#09341c] rounded-full"></div>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold bg-gradient-to-r from-[#09341c] to-[#aa2939] bg-clip-text text-transparent tracking-wider uppercase">
              Our Process
            </span>
            <div className="w-8 h-1 sm:w-12 sm:h-1 md:w-16 md:h-1.5 bg-gradient-to-r from-[#09341c] to-[#aa2939] rounded-full"></div>
          </div>
          
          <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
            <span className="text-xl sm:text-2xl md:text-3xl mr-2">🇵🇰</span>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-[#09341c] via-[#aa2939] to-[#09341c] bg-clip-text text-transparent leading-tight"
              data-aos="fade-up"
              style={{
                opacity: isVisible ? '1' : '0',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out',
                transitionDelay: '200ms'
              }}
            >
              Bridging Cultures Through Fashion
            </h2>
            <span className="text-xl sm:text-2xl md:text-3xl ml-2">🌍</span>
          </div>
          
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto text-gray-600 leading-relaxed px-2 sm:px-4"
            data-aos="fade-up" 
            data-aos-delay="200"
            style={{
              opacity: isVisible ? '1' : '0',
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out',
              transitionDelay: '400ms'
            }}
          >
            We follow a methodical approach that brings <span className="font-semibold bg-gradient-to-r from-[#aa2939] to-[#09341c] bg-clip-text text-transparent">authentic Pakistani fashion</span> to your doorstep worldwide, combining traditional craftsmanship with modern convenience.
          </p>
        </div>
      </div>
      
      {/* Steps Grid - Responsive Layout */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 relative z-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        {/* Mobile: Single Column, Tablet: 2 Columns, Desktop: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 relative z-10 flex flex-col justify-center py-8 sm:py-12 md:py-16">
        <div 
          className="text-center bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-lg border border-white/30"
          data-aos="fade-up"
          data-aos-delay="800"
          style={{
            opacity: isVisible ? '1' : '0',
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out',
            transitionDelay: '800ms'
          }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#09341c] to-[#aa2939] bg-clip-text text-transparent mb-4 sm:mb-6">
            Ready to Start Your Fashion Journey?
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience authentic Pakistani fashion with our seamless process that brings your favorite brands directly to you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
            <button className="w-full sm:w-auto px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-[#aa2939] to-[#09341c] text-[#edefee] text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-full hover:from-[#09341c] hover:to-[#aa2939] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
              Start Shopping Now 🛍️
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 bg-white/90 text-[#09341c] text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-full border-2 border-[#aa2939]/20 hover:bg-gradient-to-r hover:from-[#aa2939]/10 hover:to-[#09341c]/10 hover:border-[#aa2939] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Learn More 📖
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
              <div className="group cursor-pointer">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#aa2939] to-[#09341c] bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  6
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                  Simple Steps
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#09341c] to-[#aa2939] bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                  Partner Brands
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#aa2939] to-[#09341c] bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  25+
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                  Countries
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#09341c] to-[#aa2939] bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;