import { useEffect } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    // Simulating AOS animations with CSS animations
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'all 0.6s ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-red-900 text-white overflow-hidden" 
         style={{ marginTop: '80px', height: 'calc(100vh - 80px)' }}>
      {/* Background Image */}
      <div className="absolute inset-0" data-aos="zoom-in">
        <img 
          src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Traditional textile craftsmanship" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-red-900/80"></div>
      </div>

      {/* Floating Cultural Elements - Reduced size and repositioned */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 right-16 text-4xl opacity-20 animate-pulse" data-aos="fade-in" data-aos-delay="500">🌙</div>
        <div className="absolute top-32 left-16 text-3xl opacity-20 animate-pulse" data-aos="fade-in" data-aos-delay="700">👑</div>
        <div className="absolute bottom-24 right-24 text-3xl opacity-20 animate-pulse" data-aos="fade-in" data-aos-delay="900">🕌</div>
        <div className="absolute bottom-16 left-24 text-3xl opacity-20 animate-pulse" data-aos="fade-in" data-aos-delay="1100">🏰</div>
        <div className="absolute top-1/2 right-8 text-2xl opacity-20 animate-pulse" data-aos="fade-in" data-aos-delay="1300">✨</div>
      </div>

      {/* Decorative Patterns */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-white to-red-400"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-white to-green-400"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10 flex items-start justify-center h-full pt-4 lg:pt-8">
        <div className="max-w-4xl w-full flex flex-col min-h-0">
          {/* Brand Badge - Reduced margin */}
          <div className="flex items-center space-x-3 mb-2 lg:mb-3" data-aos="fade-down">
            <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">
              <div className="flex items-center space-x-2 text-xs lg:text-sm">
                <span className="text-green-300">🌙 Pakistan</span>
                <span className="text-white">↔</span>
                <span className="text-red-300">England 👑</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-red-600 px-2 py-1 rounded-full text-xs font-semibold">
              Est. 1995
            </div>
          </div>

          {/* Main Heading - Reduced sizes */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 lg:mb-3 leading-tight" data-aos="fade-right">
            <span className="block bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
              Our Heritage of
            </span>
            <span className="block bg-gradient-to-r from-green-400 via-red-400 to-green-400 bg-clip-text text-transparent">
              Craftsmanship
            </span>
          </h1>

          {/* Subtitle - Reduced margins */}
          <div className="mb-2 lg:mb-3" data-aos="fade-left" data-aos-delay="200">
            <p className="text-sm md:text-base lg:text-lg mb-1 lg:mb-2 text-green-100">
              Weaving together <span className="text-red-300 font-semibold">British precision</span> and 
              <span className="text-green-300 font-semibold"> Pakistani artistry</span> since 1995
            </p>
            
            {/* Decorative Line - Smaller */}
            <div className="flex items-center space-x-3 my-2 lg:my-3" data-aos="fade-up" data-aos-delay="300">
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-transparent rounded-full"></div>
              <Sparkles className="text-white w-4 h-4 lg:w-5 lg:h-5" />
              <div className="w-12 h-1 bg-gradient-to-l from-red-400 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Description - Reduced margins */}
          <div className="max-w-2xl" data-aos="fade-up" data-aos-delay="400">
            <p className="text-xs md:text-sm lg:text-base text-gray-200 leading-relaxed mb-2 lg:mb-3">
              We bridge cultures through exquisite women's suits, creating garments that honor 
              <span className="text-green-300"> traditional Pakistani craftsmanship</span> while embracing 
              <span className="text-red-300"> British tailoring innovation</span>.
            </p>
            
            {/* Key Features - Reduced padding and margins */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2 lg:mb-3">
              <div className="bg-white/10 backdrop-blur-sm p-2 lg:p-3 rounded-lg border border-white/20" data-aos="fade-right" data-aos-delay="500">
                <div className="text-base lg:text-lg mb-1">🧵</div>
                <div className="text-xs">
                  <span className="font-semibold text-green-300">Master Artisans</span>
                  <p className="text-gray-300 text-xs mt-0.5">Traditional techniques passed down generations</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-2 lg:p-3 rounded-lg border border-white/20" data-aos="fade-up" data-aos-delay="600">
                <div className="text-base lg:text-lg mb-1">✂️</div>
                <div className="text-xs">
                  <span className="font-semibold text-red-300">Precision Tailoring</span>
                  <p className="text-gray-300 text-xs mt-0.5">British standards of excellence</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-2 lg:p-3 rounded-lg border border-white/20" data-aos="fade-left" data-aos-delay="700">
                <div className="text-base lg:text-lg mb-1">🌍</div>
                <div className="text-xs">
                  <span className="font-semibold text-white">Global Delivery</span>
                  <p className="text-gray-300 text-xs mt-0.5">From Pakistan to your doorstep</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Reduced padding and margins */}
          <div className="flex flex-col sm:flex-row gap-2 mb-3 lg:mb-4" data-aos="zoom-in" data-aos-delay="800">
            <button className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-4 py-2 lg:px-6 lg:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 justify-center text-xs lg:text-sm">
              <span>Explore Our Story</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 px-4 py-2 lg:px-6 lg:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 justify-center text-xs lg:text-sm">
              <span>View Collection</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned higher */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up" data-aos-delay="1000">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-xs lg:text-sm mb-1">Discover More</span>
          <ArrowDown className="w-4 h-4 lg:w-5 lg:h-5" />
        </div>
      </div>

      {/* Side Brand Elements - Adjusted positioning and size */}
      <div className="absolute right-4 lg:right-6 top-1/2 transform -translate-y-1/2 hidden lg:block" data-aos="fade-left" data-aos-delay="1200">
        <div className="text-xs text-white/50 space-y-3 flex flex-col items-center">
          <div className="transform rotate-90 whitespace-nowrap">SAMUNDAR PAAR</div>
          <div className="w-px h-12 bg-gradient-to-b from-green-400 to-red-400"></div>
          <div className="transform rotate-90 whitespace-nowrap">SINCE 1995</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;