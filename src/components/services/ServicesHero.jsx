import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className="w-full" style={{ marginTop: '80px', height: 'calc(100vh - 80px)' }}>
      <div className="relative w-full h-full overflow-hidden" style={{
        background: 'linear-gradient(135deg, #09341c 0%, #aa2939 100%)'
      }}>
        {/* Background Pattern with Pakistani & English motifs */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full bg-repeat opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1585497636006-d5c0d2e4c7b0?w=1920&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>

        {/* Decorative Elements */}
        <div 
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 opacity-20 rounded-full" 
          style={{ borderColor: '#aa2939' }}
          data-aos="zoom-in" 
          data-aos-delay="800">
        </div>
        <div 
          className="absolute bottom-12 left-4 sm:bottom-16 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 opacity-20 rounded-full" 
          style={{ borderColor: '#09341c' }}
          data-aos="zoom-in" 
          data-aos-delay="1000">
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl xl:max-w-3xl">
              <div className="mb-3 sm:mb-4 md:mb-6" data-aos="fade-right">
                <span 
                  className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border"
                  style={{
                    backgroundColor: 'rgba(170, 41, 57, 0.3)',
                    color: '#edefee',
                    borderColor: 'rgba(170, 41, 57, 0.5)'
                  }}
                >
                  Premium Tailoring Services
                </span>
              </div>
              
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight"
                style={{ color: '#edefee' }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Our <span style={{ color: '#aa2939' }}>Premium</span>
                <br />
                <span style={{ color: '#09341c' }}>Services</span>
              </h1>
              
              <p 
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 leading-relaxed"
                style={{ color: '#edefee', opacity: 0.9 }}
                data-aos="fade-up" 
                data-aos-delay="400"
              >
                Bridging Pakistani heritage craftsmanship with British elegance. 
                Expert tailoring that crosses continents to deliver perfection.
              </p>

              {/* Service Highlights */}
              <div 
                className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div 
                  className="flex items-center px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full border"
                  style={{
                    backgroundColor: 'rgba(9, 52, 28, 0.4)',
                    borderColor: 'rgba(9, 52, 28, 0.6)'
                  }}
                >
                  <span 
                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full mr-1.5 sm:mr-2"
                    style={{ backgroundColor: '#09341c' }}
                  ></span>
                  <span 
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: '#edefee' }}
                  >
                    Pakistani Craftsmanship
                  </span>
                </div>
                <div 
                  className="flex items-center px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full border"
                  style={{
                    backgroundColor: 'rgba(170, 41, 57, 0.4)',
                    borderColor: 'rgba(170, 41, 57, 0.6)'
                  }}
                >
                  <span 
                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full mr-1.5 sm:mr-2"
                    style={{ backgroundColor: '#aa2939' }}
                  ></span>
                  <span 
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: '#edefee' }}
                  >
                    British Precision
                  </span>
                </div>
                <div 
                  className="flex items-center px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full border"
                  style={{
                    backgroundColor: 'rgba(170, 41, 57, 0.3)',
                    borderColor: 'rgba(170, 41, 57, 0.5)'
                  }}
                >
                  <span 
                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full mr-1.5 sm:mr-2"
                    style={{ backgroundColor: '#edefee' }}
                  ></span>
                  <span 
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: '#edefee' }}
                  >
                    Global Delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Image Gallery */}
            <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" data-aos="fade-left" data-aos-delay="800">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {/* Tailor Working */}
                <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                    alt="Master Tailor at Work"
                    className="w-full h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: 'rgba(9, 52, 28, 0.8)' }}
                  >
                    <span 
                      className="text-xs sm:text-sm font-medium text-center px-2"
                      style={{ color: '#edefee' }}
                    >
                      Master Craftsmanship
                    </span>
                  </div>
                </div>

                {/* Luxury Suits */}
                <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&q=80"
                    alt="Luxury Tailored Suits"
                    className="w-full h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: 'rgba(170, 41, 57, 0.8)' }}
                  >
                    <span 
                      className="text-xs sm:text-sm font-medium text-center px-2"
                      style={{ color: '#edefee' }}
                    >
                      Luxury Suits
                    </span>
                  </div>
                </div>

                {/* Fabric Selection */}
                <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80"
                    alt="Premium Fabric Selection"
                    className="w-full h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: 'rgba(9, 52, 28, 0.8)' }}
                  >
                    <span 
                      className="text-xs sm:text-sm font-medium text-center px-2"
                      style={{ color: '#edefee' }}
                    >
                      Premium Fabrics
                    </span>
                  </div>
                </div>

                {/* Detailed Work */}
                <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&q=80"
                    alt="Precision Tailoring Details"
                    className="w-full h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: 'rgba(170, 41, 57, 0.8)' }}
                  >
                    <span 
                      className="text-xs sm:text-sm font-medium text-center px-2"
                      style={{ color: '#edefee' }}
                    >
                      Precision Details
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Pattern */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 sm:h-12 md:h-16">
            <path 
              d="M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 L1200,120 L0,120 Z" 
              style={{ fill: '#edefee' }}
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;