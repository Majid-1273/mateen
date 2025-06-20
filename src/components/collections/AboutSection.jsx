// About Section Component
const AboutSection = () => {
  return (
    <div className=" min-h-[calc(100vh-80px)] bg-gradient-to-br from-gray-50 to-red-50 py-8 sm:py-12 lg:py-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">About Our Mission</h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-6 sm:mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center lg:text-left">
                Bridging Cultures Through Fashion
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                <p>
                  We understand the deep connection between fashion and cultural identity. Living abroad shouldn't mean losing touch with the styles and brands that define who you are.
                </p>
                <p>
                  Our platform serves as your personal shopping assistant, bringing authentic Pakistani fashion directly to your doorstep, no matter where you are in the world.
                </p>
                <p>
                  From the latest Khaadi collections to custom-tailored outfits, we ensure you stay connected to your roots while embracing your global lifestyle.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg order-1 lg:order-2">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center lg:text-left">
                Why Choose Us?
              </h4>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs sm:text-sm">✓</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg mb-1">Authentic Brands</h5>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                      Direct partnerships with leading Pakistani fashion houses
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs sm:text-sm">✓</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg mb-1">Global Delivery</h5>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                      Worldwide shipping with tracking and insurance
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs sm:text-sm">✓</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg mb-1">Personal Service</h5>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                      Live shopping and custom tailoring services
                    </p>
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