// HeroSection.jsx
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="relative bg-gray-50 pt-20">
      {/* Background pattern - subtle textile pattern */}
      <div 
        className="absolute inset-0 opacity-10 z-0" 
        style={{
          backgroundImage: "url('/path/to/textile-pattern.png')",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
              Where <span className="text-emerald-600">British Precision</span> Meets <span className="text-red-600">Pakistani Artistry</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-lg">
              Crafting exceptional textiles and garments that bridge cultures, combine traditions, and celebrate the artistry of two nations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/collection" 
                className="px-8 py-3 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 transition flex items-center justify-center"
              >
                View Collection
                <FaArrowRight className="ml-2" />
              </a>
              <a 
                href="/about" 
                className="px-8 py-3 bg-white text-blue-900 font-medium rounded-md border-2 border-blue-900 hover:bg-blue-50 transition flex items-center justify-center"
              >
                Our Story
              </a>
            </div>
          </div>

          <div className="md:w-1/2 relative" data-aos="fade-left">
            {/* Main image */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/path/to/hero-image.jpg" 
                alt="Textile artisan at work" 
                className="w-full h-auto"
              />
            </div>

            {/* Decorative elements */}
            <div 
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg overflow-hidden shadow-lg hidden md:block"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img 
                src="/path/to/uk-fabric.jpg" 
                alt="British textile detail" 
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              className="absolute -top-6 -right-6 w-32 h-32 rounded-lg overflow-hidden shadow-lg hidden md:block"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img 
                src="/path/to/pk-fabric.jpg" 
                alt="Pakistani textile detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
