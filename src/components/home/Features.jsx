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
      icon: <GiClothes className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-green-800" />,
      title: "Stitched & Unstitched Clothing",
      description: "Order ready-to-wear or unstitched fabrics — or let us stitch it to your size and style before delivery.",
      bgGradient: "from-green-800/10 to-green-600/5",
      borderColor: "border-green-800/20"
    },
    {
      icon: <FaShippingFast className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-red-700" />,
      title: "Pakistan to Worldwide Delivery",
      description: "Wherever you live — UK, USA, Gulf, or beyond — we bring quality products from Pakistan to your door.",
      bgGradient: "from-red-700/10 to-red-600/5",
      borderColor: "border-red-700/20"
    },
    {
      icon: <FaHandsHelping className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-green-800" />,
      title: "Live Video Shopping",
      description: "Shop in real time via video calls — see fabrics, talk to tailors, and place orders just like you're here.",
      bgGradient: "from-green-800/10 to-green-600/5",
      borderColor: "border-green-800/20"
    },
    {
      icon: <GiSewingMachine className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-red-700" />,
      title: "Custom Tailoring Service",
      description: "Send us your size or style reference — we'll hand-stitch your garments in Pakistan before shipping.",
      bgGradient: "from-red-700/10 to-red-600/5",
      borderColor: "border-red-700/20"
    },
    {
      icon: <FaGlobeEurope className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-green-800" />,
      title: "Shop from Abroad with Ease",
      description: "No matter where you are in the world, you can shop from Pakistan — with complete trust and transparency.",
      bgGradient: "from-green-800/10 to-green-600/5",
      borderColor: "border-green-800/20"
    },
    {
      icon: <FaAward className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-red-700" />,
      title: "Fashion, Footwear & More",
      description: "From clothing and accessories to home decor — we offer a wide range of authentic Pakistani products.",
      bgGradient: "from-red-700/10 to-red-600/5",
      borderColor: "border-red-700/20"
    }
  ];

  return (
    <section className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-red-50/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-full flex flex-col justify-center">
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="h-0.5 sm:h-1 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-green-800 to-red-700 mr-2 sm:mr-4"></div>
            <span className="text-xl sm:text-2xl">🌙</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-800 via-red-700 to-green-800 bg-clip-text text-transparent mx-2 sm:mx-4 px-1">
              Why Choose SAMUNDAR PAAR
            </h2>
            <span className="text-xl sm:text-2xl">👑</span>
            <div className="h-0.5 sm:h-1 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-red-700 to-green-800 ml-2 sm:ml-4"></div>
          </div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            Our unique fusion of Pakistani artistry and English sophistication creates exceptional garments 
            that bridge cultures and celebrate shared textile heritage.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-4 sm:p-6 md:p-8 bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm rounded-xl sm:rounded-2xl border ${feature.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-105`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-2xl sm:text-3xl md:text-4xl">
                  {index % 2 === 0 ? '🌙' : '👑'}
                </div>
              </div>
              
              {/* Icon Container */}
              <div className="relative flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 mx-auto mb-4 sm:mb-6 bg-white rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                {feature.icon}
                <div className="absolute inset-0 bg-gradient-to-r from-green-800/10 to-red-700/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:bg-gradient-to-r group-hover:from-green-800 group-hover:to-red-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-green-800/30 group-hover:to-red-700/30 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80"
                alt="Craftsmanship"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-2 sm:mr-4 border-2 sm:border-4 border-green-800"
              />
              <div className="h-8 sm:h-12 w-0.5 sm:w-1 bg-gradient-to-b from-green-800 to-red-700 mx-2 sm:mx-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80"
                alt="Heritage"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 sm:border-4 border-red-700"
              />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-800 to-red-700 bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight">
              Experience the Perfect Blend of Two Worlds
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Join thousands of satisfied customers who have discovered the beauty of cultural fusion fashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link to='/about' className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-800 to-red-700 text-white font-bold rounded-full hover:from-red-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
                Explore Our Story
              </Link>
              <Link to='/collections' className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-full hover:border-green-800 hover:text-green-800 transition-all duration-300 hover:bg-green-50 text-sm sm:text-base">
                View Collections
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}