import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// Hero Banner Component
const HeroBanner = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#edefee] via-white to-[#aa2939]/10 flex items-center justify-center relative overflow-hidden py-6 sm:py-8 md:py-12 lg:py-16">
      {/* Floating decorative elements */}
      <div className="absolute top-8 sm:top-16 md:top-20 left-3 sm:left-6 md:left-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#aa2939]/20 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-12 sm:bottom-20 md:bottom-32 right-6 sm:right-12 md:right-16 w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#09341c]/20 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-1/4 sm:top-1/3 right-1/5 sm:right-1/4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 bg-[#aa2939]/30 rounded-full opacity-50 animate-ping"></div>
      <div className="absolute bottom-1/4 left-1/6 w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#09341c]/25 rounded-full opacity-40 animate-bounce delay-300"></div>
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center relative z-10 w-full max-w-7xl">
        <div className="bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 max-w-6xl mx-auto border border-white/30 shadow-2xl">
          {/* Main Heading */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mr-2">🇵🇰</span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#09341c] via-[#aa2939] to-[#09341c] bg-clip-text text-transparent leading-tight">
                Pakistani Fashion
              </h1>
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl ml-2">✨</span>
            </div>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-[#aa2939] to-[#09341c] bg-clip-text text-transparent mt-1 sm:mt-2">
              Delivered Worldwide
            </span>
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            Shop from your favorite Pakistani brands while abroad. We bring authentic Pakistani fashion to your doorstep with our unique services.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <button 
              onClick={scrollToTop}
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-[#aa2939] to-[#09341c] text-[#edefee] text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-full hover:from-[#09341c] hover:to-[#aa2939] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
            >
              Start Shopping Now 🛍️
            </button>
            <Link 
              to="/about"
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 bg-white/90 text-[#09341c] text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-full border-2 border-[#aa2939]/20 hover:bg-gradient-to-r hover:from-[#aa2939]/10 hover:to-[#09341c]/10 hover:border-[#aa2939] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Learn More 📖
            </Link>
          </div>
          
          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {/* Direct Brand Shopping */}
            <div className="bg-gradient-to-br from-[#aa2939] to-[#aa2939]/80 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group cursor-pointer border border-white/10">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">🛍️</div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#edefee] mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300">
                Direct Brand Shopping
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#edefee]/90 leading-relaxed group-hover:text-[#edefee] transition-colors duration-300">
                Order directly from Pakistani brand websites
              </p>
            </div>
            
            {/* Live Shopping */}
            <div className="bg-gradient-to-br from-[#09341c] to-[#09341c]/80 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group cursor-pointer border border-white/10">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#edefee] mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300">
                Live Shopping
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#edefee]/90 leading-relaxed group-hover:text-[#edefee] transition-colors duration-300">
                Book appointments for personalized shopping experience
              </p>
            </div>
            
            {/* Tailoring Services */}
            <div className="bg-gradient-to-br from-[#aa2939] via-[#aa2939]/90 to-[#09341c] p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group cursor-pointer sm:col-span-2 lg:col-span-1 border border-white/10">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">✂️</div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#edefee] mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300">
                Tailoring Services
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#edefee]/90 leading-relaxed group-hover:text-[#edefee] transition-colors duration-300">
                Get unstitched clothes tailored to your measurements
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl md:text-2xl">🚚</span>
                <span className="text-xs sm:text-sm md:text-base font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl md:text-2xl">🔒</span>
                <span className="text-xs sm:text-sm md:text-base font-medium">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl md:text-2xl">⭐</span>
                <span className="text-xs sm:text-sm md:text-base font-medium">Trusted Service</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl md:text-2xl">🌍</span>
                <span className="text-xs sm:text-sm md:text-base font-medium">Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;