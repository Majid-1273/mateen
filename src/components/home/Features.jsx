import { useEffect } from "react";
import { GiSewingMachine, GiClothes } from "react-icons/gi";
import { FaHandsHelping, FaShippingFast, FaGlobeEurope, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Features() {
  useEffect(() => {
    // AOS initialization would go here in a real implementation
  }, []);

  const features = [
    {
      icon: <GiClothes className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-[#09341c]" />,
      title: "Stitched & Unstitched Clothing",
      description: "Order ready-to-wear or unstitched fabrics — or let us stitch it to your size and style before delivery.",
      bgGradient: "from-[#09341c]/10 to-[#aa2939]/5",
      borderColor: "border-[#09341c]/20"
    },
    {
      icon: <FaShippingFast className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-[#aa2939]" />,
      title: "Pakistan to Worldwide Delivery",
      description: "Wherever you live — UK, USA, Gulf, or beyond — we bring quality products from Pakistan to your door.",
      bgGradient: "from-[#aa2939]/10 to-[#09341c]/5",
      borderColor: "border-[#aa2939]/20"
    },
    {
      icon: <FaHandsHelping className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-[#09341c]" />,
      title: "Live Video Shopping",
      description: "Shop in real time via video calls — see fabrics, talk to tailors, and place orders just like you're here.",
      bgGradient: "from-[#09341c]/10 to-[#aa2939]/5",
      borderColor: "border-[#09341c]/20"
    },
    {
      icon: <GiSewingMachine className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-[#aa2939]" />,
      title: "Custom Tailoring Service",
      description: "Send us your size or style reference — we'll hand-stitch your garments in Pakistan before shipping.",
      bgGradient: "from-[#aa2939]/10 to-[#09341c]/5",
      borderColor: "border-[#aa2939]/20"
    },
    {
      icon: <FaGlobeEurope className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-[#09341c]" />,
      title: "Shop from Abroad with Ease",
      description: "No matter where you are in the world, you can shop from Pakistan — with complete trust and transparency.",
      bgGradient: "from-[#09341c]/10 to-[#aa2939]/5",
      borderColor: "border-[#09341c]/20"
    },
    {
      icon: <FaAward className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-[#aa2939]" />,
      title: "Fashion, Footwear & More",
      description: "From clothing and accessories to home decor — we offer a wide range of authentic Pakistani products.",
      bgGradient: "from-[#aa2939]/10 to-[#09341c]/5",
      borderColor: "border-[#aa2939]/20"
    }
  ];

  return (
    <section className="min-h-screen py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-[#edefee] via-white to-[#aa2939]/5">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 h-full flex flex-col justify-center">
        
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
            <div className="h-0.5 sm:h-1 w-6 sm:w-8 md:w-12 lg:w-16 bg-gradient-to-r from-[#09341c] to-[#aa2939] mr-2 sm:mr-3 md:mr-4"></div>
            <span className="text-lg sm:text-xl md:text-2xl">🌙</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-[#09341c] via-[#aa2939] to-[#09341c] bg-clip-text text-transparent mx-2 sm:mx-3 md:mx-4 px-1 text-center">
              Why Choose SAMANDAR PAAR
            </h2>
            <span className="text-lg sm:text-xl md:text-2xl">👑</span>
            <div className="h-0.5 sm:h-1 w-6 sm:w-8 md:w-12 lg:w-16 bg-gradient-to-r from-[#aa2939] to-[#09341c] ml-2 sm:ml-3 md:ml-4"></div>
          </div>
          <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            Our unique fusion of Pakistani artistry and English sophistication creates exceptional garments 
            that bridge cultures and celebrate shared textile heritage.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-10">
          {features.map((feature, index) => (
            <Link
              key={index}
              to="/services"
              className={`group relative p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm rounded-xl sm:rounded-2xl border ${feature.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-105 cursor-pointer block`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  {index % 2 === 0 ? '🌙' : '👑'}
                </div>
              </div>
              
              {/* Icon Container */}
              <div className="relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 mx-auto mb-3 sm:mb-4 md:mb-6 bg-white rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                {feature.icon}
                <div className="absolute inset-0 bg-gradient-to-r from-[#09341c]/10 to-[#aa2939]/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 group-hover:bg-gradient-to-r group-hover:from-[#09341c] group-hover:to-[#aa2939] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-[#09341c]/30 group-hover:to-[#aa2939]/30 transition-all duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-gray-100">
            <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80"
                alt="Craftsmanship"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full object-cover mr-2 sm:mr-3 md:mr-4 border-2 sm:border-3 md:border-4 border-[#09341c]"
              />
              <div className="h-6 sm:h-8 md:h-12 w-0.5 sm:w-1 bg-gradient-to-b from-[#09341c] to-[#aa2939] mx-2 sm:mx-3 md:mx-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80"
                alt="Heritage"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full object-cover border-2 sm:border-3 md:border-4 border-[#aa2939]"
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#09341c] to-[#aa2939] bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4 leading-tight">
              Experience the Perfect Blend of Two Worlds
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2">
              Join thousands of satisfied customers who have discovered the beauty of cultural fusion fashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link to='/about' className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-[#09341c] to-[#aa2939] text-[#edefee] font-bold rounded-full hover:from-[#aa2939] hover:to-[#09341c] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs sm:text-sm md:text-base">
                Explore Our Story
              </Link>
              <a 
                href="https://wa.me/923214660662" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-full hover:border-[#09341c] hover:text-[#09341c] transition-all duration-300 hover:bg-[#edefee] text-xs sm:text-sm md:text-base"
              >
               Shop Live with Us 
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}