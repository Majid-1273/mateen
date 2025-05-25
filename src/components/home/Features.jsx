import { useEffect } from "react";
import { GiSewingMachine, GiClothes } from "react-icons/gi";
import { FaHandsHelping, FaShippingFast, FaGlobeEurope, FaAward } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Features() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  const features = [
    {
      icon: <GiSewingMachine className="h-12 w-12 text-green-800" />,
      title: "Master Craftsmanship",
      description: "Our skilled artisans blend traditional Pakistani embroidery techniques with precise English tailoring standards.",
      bgGradient: "from-green-800/10 to-green-600/5",
      borderColor: "border-green-800/20"
    },
    {
      icon: <GiClothes className="h-12 w-12 text-red-700" />,
      title: "Bespoke Designs",
      description: "From handcrafted sherwanis to custom English suits, we create garments that celebrate your unique heritage.",
      bgGradient: "from-red-700/10 to-red-600/5",
      borderColor: "border-red-700/20"
    },
    {
      icon: <FaHandsHelping className="h-12 w-12 text-green-800" />,
      title: "Ethical Excellence",
      description: "We ensure fair wages and exceptional working conditions across our Pakistan and England facilities.",
      bgGradient: "from-green-800/10 to-green-600/5",
      borderColor: "border-green-800/20"
    },
    {
      icon: <FaShippingFast className="h-12 w-12 text-red-700" />,
      title: "Global Delivery",
      description: "We ship worldwide, bringing the beauty of cross-cultural fashion from Lahore to London and beyond.",
      bgGradient: "from-red-700/10 to-red-600/5",
      borderColor: "border-red-700/20"
    },
    {
      icon: <FaGlobeEurope className="h-12 w-12 text-green-800" />,
      title: "Cultural Bridge",
      description: "Every piece tells a story of unity, celebrating the rich textile heritage of Pakistan and England.",
      bgGradient: "from-green-800/10 to-green-600/5",
      borderColor: "border-green-800/20"
    },
    {
      icon: <FaAward className="h-12 w-12 text-red-700" />,
      title: "Premium Quality",
      description: "Award-winning designs that have been recognized for excellence in both traditional and contemporary fashion.",
      bgGradient: "from-red-700/10 to-red-600/5",
      borderColor: "border-red-700/20"
    }
  ];

  return (
    <section className="min-h-[calc(100vh-80px)] py-16 bg-gradient-to-br from-gray-50 via-white to-red-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-green-800 to-red-700 mr-4"></div>
            <span className="text-2xl">🌙</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-800 via-red-700 to-green-800 bg-clip-text text-transparent mx-4">
              Why Choose SAMUNDAR PAAR
            </h2>
            <span className="text-2xl">👑</span>
            <div className="h-1 w-16 bg-gradient-to-r from-red-700 to-green-800 ml-4"></div>
          </div>
          <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our unique fusion of Pakistani artistry and English sophistication creates exceptional garments 
            that bridge cultures and celebrate shared textile heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm rounded-2xl border ${feature.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 text-4xl">
                  {index % 2 === 0 ? '🌙' : '👑'}
                </div>
              </div>
              
              {/* Icon Container */}
              <div className="relative flex items-center justify-center h-20 w-20 mx-auto mb-6 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                {feature.icon}
                <div className="absolute inset-0 bg-gradient-to-r from-green-800/10 to-red-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:bg-gradient-to-r group-hover:from-green-800 group-hover:to-red-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-green-800/30 group-hover:to-red-700/30 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80"
                alt="Craftsmanship"
                className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-green-800"
              />
              <div className="h-12 w-1 bg-gradient-to-b from-green-800 to-red-700 mx-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80"
                alt="Heritage"
                className="w-16 h-16 rounded-full object-cover border-4 border-red-700"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-800 to-red-700 bg-clip-text text-transparent mb-4">
              Experience the Perfect Blend of Two Worlds
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have discovered the beauty of cultural fusion fashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-800 to-red-700 text-white font-bold rounded-full hover:from-red-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Explore Our Story
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-full hover:border-green-800 hover:text-green-800 transition-all duration-300 hover:bg-green-50">
                View Collections
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}