// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      title: "Stitched",
      description: "Ready-to-wear garments from premium Pakistani brands",
      icon: "👔",
      color: "from-[#aa2939] to-[#aa2939]/80",
      hoverColor: "hover:from-[#aa2939]/90 hover:to-[#09341c]"
    },
    {
      title: "Unstitched",
      description: "Premium fabrics for custom tailoring",
      icon: "🧵",
      color: "from-[#09341c] to-[#09341c]/80",
      hoverColor: "hover:from-[#09341c]/90 hover:to-[#aa2939]"
    },
    {
      title: "Get Stitched",
      description: "We'll get your unstitched clothes tailored by expert Pakistani tailors",
      icon: "✂️",
      color: "from-[#aa2939] via-[#aa2939]/90 to-[#09341c]",
      hoverColor: "hover:from-[#09341c] hover:via-[#aa2939] hover:to-[#aa2939]"
    },
    {
      title: "Live Shopping",
      description: "Personal shopping assistance via video call",
      icon: "📱",
      color: "from-[#09341c] via-[#09341c]/90 to-[#aa2939]",
      hoverColor: "hover:from-[#aa2939] hover:via-[#09341c] hover:to-[#09341c]"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] bg-gradient-to-br from-white via-[#edefee]/30 to-white py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 flex items-center">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 w-full max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
            <span className="text-xl sm:text-2xl md:text-3xl mr-2">⚡</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#09341c] via-[#aa2939] to-[#09341c] bg-clip-text text-transparent">
              Our Services
            </h2>
            <span className="text-xl sm:text-2xl md:text-3xl ml-2">🎯</span>
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            From ready-made to custom tailoring, we offer comprehensive fashion solutions that connect you to authentic Pakistani style
          </p>
          <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-[#aa2939] via-[#09341c] to-[#aa2939] mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer h-full"
            >
              <div className={`bg-gradient-to-br ${service.color} ${service.hoverColor} rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 text-center transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl h-full flex flex-col justify-center relative overflow-hidden border border-white/10`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="absolute top-2 right-2 w-8 h-8 sm:w-12 sm:h-12 bg-[#edefee] rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#edefee] rounded-full"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#edefee] mb-2 sm:mb-3 md:mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#edefee]/90 group-hover:text-[#edefee] text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed transition-colors duration-300 px-1 sm:px-2">
                    {service.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#edefee]/20 to-[#edefee]/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#09341c] to-[#aa2939] bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6">
                Why Our Services Stand Out
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
                <div className="flex flex-col items-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-[#aa2939]/5 to-[#09341c]/5 rounded-xl hover:from-[#aa2939]/10 hover:to-[#09341c]/10 transition-all duration-300 group cursor-pointer">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">🎯</div>
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#09341c] mb-1 sm:mb-2">Expert Craftsmanship</h4>
                  <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">Authentic Pakistani tailoring and quality</p>
                </div>
                
                <div className="flex flex-col items-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-[#09341c]/5 to-[#aa2939]/5 rounded-xl hover:from-[#09341c]/10 hover:to-[#aa2939]/10 transition-all duration-300 group cursor-pointer">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">🚀</div>
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#09341c] mb-1 sm:mb-2">Fast Delivery</h4>
                  <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">Quick and reliable worldwide shipping</p>
                </div>
                
                <div className="flex flex-col items-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-[#aa2939]/5 via-[#09341c]/5 to-[#aa2939]/5 rounded-xl hover:from-[#aa2939]/10 hover:via-[#09341c]/10 hover:to-[#aa2939]/10 transition-all duration-300 group cursor-pointer sm:col-span-2 lg:col-span-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">💎</div>
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#09341c] mb-1 sm:mb-2">Premium Quality</h4>
                  <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">Only the finest fabrics and materials</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <button className="px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-[#aa2939] to-[#09341c] text-[#edefee] text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-full hover:from-[#09341c] hover:to-[#aa2939] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
            Explore All Services 🌟
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;