// About Section Component
const AboutSection = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#edefee] via-white to-[#aa2939]/10 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 flex items-center">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 w-full max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
            <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
              <span className="text-xl sm:text-2xl md:text-3xl mr-2">🌍</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#09341c] via-[#aa2939] to-[#09341c] bg-clip-text text-transparent">
                About Our Mission
              </h2>
              <span className="text-xl sm:text-2xl md:text-3xl ml-2">❤️</span>
            </div>
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-[#aa2939] via-[#09341c] to-[#aa2939] mx-auto rounded-full shadow-lg"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-stretch">
            {/* Left Content */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg border border-white/20">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#09341c] to-[#aa2939] bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 text-center lg:text-left">
                  Bridging Cultures Through Fashion
                </h3>
                <div className="space-y-3 sm:space-y-4 md:space-y-5 text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
                  <p className="hover:text-[#09341c] transition-colors duration-300">
                    We understand the deep connection between fashion and cultural identity. Living abroad shouldn't mean losing touch with the styles and brands that define who you are.
                  </p>
                  <p className="hover:text-[#09341c] transition-colors duration-300">
                    Our platform serves as your personal shopping assistant, bringing authentic Pakistani fashion directly to your doorstep, no matter where you are in the world.
                  </p>
                  <p className="hover:text-[#09341c] transition-colors duration-300">
                    From the latest Khaadi collections to custom-tailored outfits, we ensure you stay connected to your roots while embracing your global lifestyle.
                  </p>
                </div>
                
                {/* Call to Action */}
                <div className="mt-6 sm:mt-8 md:mt-10">
                  <button className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#aa2939] to-[#09341c] text-[#edefee] text-sm sm:text-base md:text-lg font-bold rounded-full hover:from-[#09341c] hover:to-[#aa2939] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1">
                    Start Your Journey 🌟
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Content - Features */}
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-white via-white to-[#edefee]/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl border border-white/30 h-full">
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-[#aa2939] to-[#09341c] bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8 text-center lg:text-left">
                  Why Choose Us?
                </h4>
                
                <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                  {/* Feature 1 */}
                  <div className="group flex items-start space-x-3 sm:space-x-4 md:space-x-5 p-3 sm:p-4 rounded-xl hover:bg-[#aa2939]/5 transition-all duration-300">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 bg-gradient-to-r from-[#aa2939] to-[#aa2939]/80 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-[#edefee] text-xs sm:text-sm md:text-base font-bold">✓</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-[#09341c] text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2 group-hover:text-[#aa2939] transition-colors duration-300">
                        Authentic Brands
                      </h5>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        Direct partnerships with leading Pakistani fashion houses
                      </p>
                    </div>
                  </div>
                  
                  {/* Feature 2 */}
                  <div className="group flex items-start space-x-3 sm:space-x-4 md:space-x-5 p-3 sm:p-4 rounded-xl hover:bg-[#09341c]/5 transition-all duration-300">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 bg-gradient-to-r from-[#09341c] to-[#09341c]/80 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-[#edefee] text-xs sm:text-sm md:text-base font-bold">✓</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-[#09341c] text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2 group-hover:text-[#aa2939] transition-colors duration-300">
                        Global Delivery
                      </h5>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        Worldwide shipping with tracking and insurance
                      </p>
                    </div>
                  </div>
                  
                  {/* Feature 3 */}
                  <div className="group flex items-start space-x-3 sm:space-x-4 md:space-x-5 p-3 sm:p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#aa2939]/5 hover:to-[#09341c]/5 transition-all duration-300">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 bg-gradient-to-r from-[#aa2939] via-[#aa2939]/90 to-[#09341c] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-[#edefee] text-xs sm:text-sm md:text-base font-bold">✓</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-[#09341c] text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2 group-hover:text-[#aa2939] transition-colors duration-300">
                        Personal Service
                      </h5>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        Live shopping and custom tailoring services
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 - New */}
                  <div className="group flex items-start space-x-3 sm:space-x-4 md:space-x-5 p-3 sm:p-4 rounded-xl hover:bg-[#09341c]/5 transition-all duration-300">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 bg-gradient-to-r from-[#09341c]/80 to-[#aa2939] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-[#edefee] text-xs sm:text-sm md:text-base font-bold">✓</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-[#09341c] text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2 group-hover:text-[#aa2939] transition-colors duration-300">
                        Cultural Connection
                      </h5>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        Stay connected to your heritage with authentic fashion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-white/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                <div className="text-center group cursor-pointer">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#aa2939] to-[#09341c] bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    50+
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                    Partner Brands
                  </div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#09341c] to-[#aa2939] bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    25+
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                    Countries
                  </div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#aa2939] to-[#09341c] bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    5k+
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                    Happy Customers
                  </div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#09341c] to-[#aa2939] bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
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
    </div>
  );
};

export default AboutSection;