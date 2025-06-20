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
      description: "We begin with understanding your specific needs, discussing fabric choices, designs, and timeline requirements.",
      image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=300&fit=crop&crop=center",
      icon: "💬"
    },
    {
      number: "02", 
      title: "Design & Pattern",
      description: "Our expert designers create detailed patterns based on your specifications, combining British precision with Pakistani artistry.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      icon: "✏️"
    },
    {
      number: "03",
      title: "Material Selection", 
      description: "We source the finest fabrics from both the UK and Pakistan, ensuring quality and authenticity for your specific project.",
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop&crop=center",
      icon: "🧵"
    },
    {
      number: "04",
      title: "Craftsmanship",
      description: "Our skilled artisans bring the designs to life, combining traditional techniques with modern technology for perfect execution.",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop&crop=center",
      icon: "✂️"
    },
    {
      number: "05", 
      title: "Quality Control",
      description: "Rigorous inspection ensures every piece meets our high standards before delivery to clients worldwide.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
      icon: "🔍"
    },
    {
      number: "06",
      title: "Delivery",
      description: "Secure packaging and reliable shipping ensures your products arrive safely and on time, anywhere in the world.",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop&crop=center", 
      icon: "🚚"
    }
  ];

  const StepCard = ({ step, index }) => (
    <div 
      className={`group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 transform hover:-translate-y-1 h-full ${
        hoveredStep === index 
          ? 'border-gradient-to-r from-green-500 to-red-500 scale-105' 
          : 'border-transparent hover:border-green-200'
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
      <div className="relative h-32 overflow-hidden">
        <img 
          src={step.image} 
          alt={step.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Step Number Badge */}
        <div className="absolute top-2 left-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-bold text-sm">{step.number}</span>
          </div>
        </div>

        {/* Icon */}
        <div className="absolute top-2 right-2">
          <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <span className="text-lg">{step.icon}</span>
          </div>
        </div>

        {/* Decorative Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-white to-red-600"></div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-2 text-slate-800 group-hover:text-green-700 transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-300 flex-1">
          {step.description}
        </p>

        {/* Progress Indicator */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-600 to-red-600 rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: hoveredStep === index ? '100%' : `${((index + 1) / steps.length) * 100}%`,
                transitionDelay: hoveredStep === index ? '0ms' : `${index * 100}ms`
              }}
            ></div>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Step {index + 1} of {steps.length}
          </span>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-green-600/5 to-red-600/5 transition-opacity duration-300 ${
        hoveredStep === index ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-green-700 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section - 50vh-80px */}
      <div 
        className="container mx-auto px-4 relative z-10 flex flex-col justify-center"
        style={{ height: 'calc(50vh - 80px)' }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <div 
            className="inline-flex items-center gap-3 mb-4"
            data-aos="fade-down"
            style={{
              opacity: isVisible ? '1' : '0',
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out'
            }}
          >
            <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-red-600 rounded-full"></div>
            <span className="text-lg font-semibold text-green-700 tracking-wider uppercase">Our Process</span>
            <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-green-600 rounded-full"></div>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-green-700 via-slate-800 to-red-700 bg-clip-text text-transparent leading-tight"
            data-aos="fade-up"
            style={{
              opacity: isVisible ? '1' : '0',
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out',
              transitionDelay: '200ms'
            }}
          >
            Bridging Traditions
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">Pakistan to England</span>
          </h2>
          
          <p 
            className="text-lg lg:text-xl max-w-3xl mx-auto text-slate-600 leading-relaxed"
            data-aos="fade-up" 
            data-aos-delay="200"
            style={{
              opacity: isVisible ? '1' : '0',
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out',
              transitionDelay: '400ms'
            }}
          >
            We follow a methodical approach that combines <span className="font-semibold text-green-700">Pakistani artistry</span> with <span className="font-semibold text-red-700">British precision</span> to deliver exceptional women's suits that honor both cultures.
          </p>
        </div>
      </div>
      
      {/* First Row - Steps 1-3 - 50vh-40px */}
      <div 
        className="container mx-auto px-4 relative z-10 py-4"
        style={{ height: 'calc(50vh - 40px)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          {steps.slice(0, 3).map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>

      {/* Second Row - Steps 4-6 - 50vh-40px */}
      <div 
        className="container mx-auto px-4 relative z-10 py-4"
        style={{ height: 'calc(50vh - 40px)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          {steps.slice(3, 6).map((step, index) => (
            <StepCard key={index + 3} step={step} index={index + 3} />
          ))}
        </div>
      </div>

      {/* Bottom CTA Section - 50vh-40px */}
      <div 
        className="container mx-auto px-4 relative z-10 flex flex-col justify-center"
        style={{ height: 'calc(50vh - 40px)' }}
      >
        <div 
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="800"
          style={{
            opacity: isVisible ? '1' : '0',
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out',
            transitionDelay: '800ms'
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;