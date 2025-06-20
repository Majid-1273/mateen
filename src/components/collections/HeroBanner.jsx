// Hero Banner Component
const HeroBanner = () => {
  return (
    <div className="mt-20 min-h-[calc(100vh-80px)] bg-gradient-to-br from-red-600 via-red-500 to-green-600 flex items-center justify-center relative overflow-hidden py-8 sm:py-12 lg:py-16">
      {/* Floating decorative elements */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-green-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-16 sm:bottom-32 right-8 sm:right-16 w-10 h-10 sm:w-16 sm:h-16 bg-red-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-yellow-300 rounded-full opacity-30 animate-ping"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-6xl mx-auto border border-white/20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Pakistani Fashion
            <span className="block bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent mt-2">
              Delivered Worldwide
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Shop from your favorite Pakistani brands while abroad. We bring authentic Pakistani fashion to your doorstep with our unique services.
          </p>
          
          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 sm:p-6 rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛍️</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Direct Brand Shopping</h3>
              <p className="text-sm sm:text-base text-green-100 leading-relaxed">Order directly from Pakistani brand websites</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-400 to-red-600 p-4 sm:p-6 rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Live Shopping</h3>
              <p className="text-sm sm:text-base text-red-100 leading-relaxed">Book appointments for personalized shopping experience</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 sm:p-6 rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">✂️</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Tailoring Services</h3>
              <p className="text-sm sm:text-base text-yellow-100 leading-relaxed">Get unstitched clothes tailored to your measurements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;