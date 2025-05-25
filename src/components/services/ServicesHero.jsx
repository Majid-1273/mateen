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
      <div className="relative w-full h-full bg-gradient-to-br from-emerald-800 to-red-900 overflow-hidden">
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
        <div className="absolute top-6 right-6 w-24 h-24 border-2 border-red-300 rounded-full opacity-20" data-aos="zoom-in" data-aos-delay="800"></div>
        <div className="absolute bottom-16 left-6 w-20 h-20 border-2 border-emerald-300 rounded-full opacity-20" data-aos="zoom-in" data-aos-delay="1000"></div>
        
        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex items-center py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-12">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <div className="mb-4 sm:mb-6" data-aos="fade-right">
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-red-800/30 text-red-200 rounded-full text-xs sm:text-sm font-medium border border-red-400/30">
                  Premium Tailoring Services
                </span>
              </div>
              
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Our <span className="text-red-300">Premium</span>
                <br />
                <span className="text-emerald-300">Services</span>
              </h1>
              
              <p 
                className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed"
                data-aos="fade-up" 
                data-aos-delay="400"
              >
                Bridging Pakistani heritage craftsmanship with British elegance. 
                Expert tailoring that crosses continents to deliver perfection.
              </p>

              {/* Service Highlights */}
              <div 
                className="flex flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="flex items-center bg-emerald-800/40 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-emerald-400/30">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full mr-2"></span>
                  <span className="text-emerald-200 text-xs sm:text-sm font-medium">Pakistani Craftsmanship</span>
                </div>
                <div className="flex items-center bg-red-800/40 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-red-400/30">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full mr-2"></span>
                  <span className="text-red-200 text-xs sm:text-sm font-medium">British Precision</span>
                </div>
                <div className="flex items-center bg-amber-800/40 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-amber-400/30">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2"></span>
                  <span className="text-amber-200 text-xs sm:text-sm font-medium">Global Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image Gallery */}
            <div className="flex-1 max-w-md lg:max-w-lg" data-aos="fade-left" data-aos-delay="800">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Tailor Working */}
                <div className="relative group overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                    alt="Master Tailor at Work"
                    className="w-full h-24 sm:h-28 md:h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-emerald-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs sm:text-sm font-medium">Master Craftsmanship</span>
                  </div>
                </div>

                {/* Luxury Suits */}
                <div className="relative group overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&q=80"
                    alt="Luxury Tailored Suits"
                    className="w-full h-24 sm:h-28 md:h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-red-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs sm:text-sm font-medium">Luxury Suits</span>
                  </div>
                </div>

                {/* Fabric Selection */}
                <div className="relative group overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80"
                    alt="Premium Fabric Selection"
                    className="w-full h-24 sm:h-28 md:h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-emerald-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs sm:text-sm font-medium">Premium Fabrics</span>
                  </div>
                </div>

                {/* Detailed Work */}
                <div className="relative group overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&q=80"
                    alt="Precision Tailoring Details"
                    className="w-full h-24 sm:h-28 md:h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-red-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs sm:text-sm font-medium">Precision Details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Pattern */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 sm:h-16">
            <path 
              d="M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 L1200,120 L0,120 Z" 
              className="fill-white"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;