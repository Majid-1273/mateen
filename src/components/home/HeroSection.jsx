import { useEffect } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
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
    <div className="relative min-h-[calc(100vh-80px)] bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      {/* Background pattern - subtle geometric pattern */}
      <div 
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23166534' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='0' cy='30' r='2'/%3E%3Ccircle cx='60' cy='30' r='2'/%3E%3Ccircle cx='30' cy='0' r='2'/%3E%3Ccircle cx='30' cy='60' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-10 md:py-24 relative z-10 flex items-center min-h-[calc(100vh-80px)]">

        <div className="flex flex-col lg:flex-row items-center w-full">
          <div className="lg:w-1/2 mb-12 lg:mb-0" data-aos="fade-right">
            {/* Cultural Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-lg mb-6 border border-gray-100">
              <span className="text-lg mr-2">🌙</span>
              <span className="text-sm font-semibold text-gray-700">Pakistan</span>
              <div className="w-2 h-2 bg-gradient-to-r from-green-800 to-red-700 rounded-full mx-3"></div>
              <span className="text-sm font-semibold text-gray-700">England</span>
              <span className="text-lg ml-2">👑</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where{" "}
              <span className="bg-gradient-to-r from-red-700 to-red-600 bg-clip-text text-transparent">
                English Elegance
              </span>{" "}
              Meets{" "}
              <span className="bg-gradient-to-r from-green-800 to-green-700 bg-clip-text text-transparent">
                Pakistani Heritage
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 max-w-lg leading-relaxed">
              Crafting exceptional textiles and garments that bridge cultures, unite traditions, 
              and celebrate the magnificent artistry of two proud nations.
            </p>

            {/* Stats */}
            <div className="flex items-center space-x-6 mt-6 mb-8">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0 • 2000+ Reviews</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/collection"
                className="group px-8 py-4 bg-gradient-to-r from-green-800 to-red-700 text-white font-semibold rounded-full hover:from-red-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
              >
                View Collection
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/about"
                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-300 hover:border-green-800 hover:text-green-800 hover:bg-green-50 transition-all duration-300 flex items-center justify-center"
              >
                Our Heritage Story
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative" data-aos="fade-left">
            {/* Main image container */}
            <div className="relative">
              {/* Main hero image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Master textile artisan at work"
                  className="w-full h-[500px] object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Pakistani textile element */}
              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block transform rotate-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="https://images.unsplash.com/photo-1583391733956-6c78276477e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Pakistani embroidery detail"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-800/20 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-bold bg-green-800/80 px-2 py-1 rounded">
                  🌙 Heritage
                </div>
              </div>

              {/* Floating English textile element */}
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block transform -rotate-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="English tailoring detail"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-700/20 to-transparent"></div>
                <div className="absolute bottom-2 right-2 text-white text-xs font-bold bg-red-700/80 px-2 py-1 rounded">
                  👑 Elegance
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-4 h-4 bg-gradient-to-r from-green-800 to-red-700 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-r from-red-700 to-green-800 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-16"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-white"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-white"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
}