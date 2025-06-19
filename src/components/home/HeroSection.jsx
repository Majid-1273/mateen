import { useEffect, useState } from "react";
import { FaArrowRight, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images data
  const carouselImages = [
    {
      main: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fallback: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Master textile artisan at work",
      pakistaniOverlay: "https://images.unsplash.com/photo-1583391733956-6c78276477e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      pakistaniFallback: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      englishOverlay: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      englishFallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      main: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fallback: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Traditional textile craftsmanship",
      pakistaniOverlay: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      pakistaniFallback: "https://images.unsplash.com/photo-1583391733956-6c78276477e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      englishOverlay: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      englishFallback: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      main: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fallback: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Luxury fabric collection",
      pakistaniOverlay: "https://images.unsplash.com/photo-1583391733956-6c78276477e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      pakistaniFallback: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      englishOverlay: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      englishFallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen lg:h-[calc(100vh-80px)] mt-16 xs:mt-18 sm:mt-20 bg-gradient-to-br from-gray-50 via-white to-green-50/30 overflow-hidden">
      {/* Background pattern - subtle geometric pattern */}
      <div 
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23166534' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='0' cy='30' r='2'/%3E%3Ccircle cx='60' cy='30' r='2'/%3E%3Ccircle cx='30' cy='0' r='2'/%3E%3Ccircle cx='30' cy='60' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-4 py-[2vh] xs:py-[3vh] sm:py-[4vh] lg:py-[5vh] relative z-10 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center w-full gap-[3vh] xs:gap-[4vh] sm:gap-[5vh] lg:gap-8 xl:gap-12 h-full">
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center h-full text-center lg:text-left">
            
            {/* Cultural Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start px-[2vw] xs:px-4 py-[1vh] xs:py-2 bg-white rounded-full shadow-lg mb-[2vh] xs:mb-[2.5vh] sm:mb-[3vh] border border-gray-100 mx-auto lg:mx-0">
              <span className="text-[3vw] xs:text-base sm:text-lg mr-1.5 xs:mr-2">🌙</span>
              <span className="text-[2.5vw] xs:text-sm sm:text-base font-semibold text-gray-700">Pakistan</span>
              <div className="w-[1vw] h-[1vw] xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-green-800 to-red-700 rounded-full mx-2 xs:mx-3 min-w-[6px] min-h-[6px]"></div>
              <span className="text-[2.5vw] xs:text-sm sm:text-base font-semibold text-gray-700">England</span>
              <span className="text-[3vw] xs:text-base sm:text-lg ml-1.5 xs:ml-2">👑</span>
            </div>

            {/* Main Heading - Better formatting and viewport-based sizing */}
            <h1 className="text-[6vw] xs:text-[5vw] sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight xs:leading-tight sm:leading-tight mb-[2vh] xs:mb-[2.5vh] sm:mb-[3vh] lg:mb-6 px-2 xs:px-0 text-center lg:text-left">
              <span className="block">Where</span>
              <span className="bg-gradient-to-r from-red-700 to-red-600 bg-clip-text text-transparent block">
                English Elegance
              </span>
              <span className="block">Meets</span>
              <span className="bg-gradient-to-r from-green-800 to-green-700 bg-clip-text text-transparent block">
                Pakistani Heritage
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-[3vw] xs:text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-[2vh] xs:mb-[2.5vh] sm:mb-[3vh] lg:mb-6 px-2 xs:px-0 text-center lg:text-left">
              Crafting exceptional textiles and garments that bridge cultures, unite traditions, 
              and celebrate the magnificent artistry of two proud nations.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 xs:space-x-4 sm:space-x-6 mb-[2vh] xs:mb-[3vh] sm:mb-8">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-[2.5vw] h-[2.5vw] xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 min-w-[12px] min-h-[12px]" />
                  ))}
                </div>
                <span className="ml-2 text-[2.5vw] xs:text-sm sm:text-base text-gray-600">5.0 • 2000+ Reviews</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-row space-x-3 sm:space-x-4 w-full justify-center lg:justify-start">
              <Link to='/collections'
                onClick={() => {/* Add your navigation logic here, e.g., navigate('/collection') */}}
                className="group px-[3vw] xs:px-6 sm:px-8 py-[1.5vh] xs:py-3.5 sm:py-4 bg-gradient-to-r from-green-800 to-red-700 text-white font-semibold rounded-full hover:from-red-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center text-[2.5vw] xs:text-sm sm:text-base whitespace-nowrap"
              >
                View Collection
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300 w-[2vw] h-[2vw] xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 min-w-[12px] min-h-[12px]" />
              </Link>
              <Link to='/about'
                onClick={() => {/* Add your navigation logic here, e.g., navigate('/about') */}}
                className="px-[3vw] xs:px-6 sm:px-8 py-[1.5vh] xs:py-3.5 sm:py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-300 hover:border-green-800 hover:text-green-800 hover:bg-green-50 transition-all duration-300 flex items-center justify-center text-[2.5vw] xs:text-sm sm:text-base whitespace-nowrap"
              >
                Our Heritage Story
              </Link>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="w-full lg:w-1/2 relative flex flex-col justify-center h-full max-w-md xs:max-w-lg sm:max-w-xl lg:max-w-none mx-auto">
            
            {/* Main carousel container */}
            <div className="relative">
              
              {/* Carousel wrapper */}
              <div className="relative overflow-hidden rounded-xl xs:rounded-2xl lg:rounded-3xl shadow-2xl border-2 xs:border-3 lg:border-4 border-white">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {carouselImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                      <img
                        src={image.main}
                        alt={image.alt}
                        className="w-full h-[25vh] xs:h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[35vh] xl:h-[45vh] 2xl:h-[50vh] object-cover"
                        onError={(e) => {
                          e.target.src = image.fallback;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  ))}
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 xs:left-3 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 xs:p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                >
                  <FaChevronLeft className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 xs:right-3 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 xs:p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                >
                  <FaChevronRight className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
                </button>
              </div>

              {/* Floating Pakistani textile element - Hidden on very small screens */}
              <div className="absolute -bottom-[2vh] xs:-bottom-[3vh] sm:-bottom-6 lg:-bottom-8 -left-[2vh] xs:-left-[3vh] sm:-left-6 lg:-left-8 w-[15vw] h-[15vw] xs:w-18 xs:h-18 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-lg xs:rounded-xl lg:rounded-2xl overflow-hidden shadow-xl border-2 xs:border-3 lg:border-4 border-white hidden sm:block transform rotate-6 transition-all duration-500 max-w-[80px] max-h-[80px] min-w-[60px] min-h-[60px]">
                <img
                  src={carouselImages[currentSlide].pakistaniOverlay}
                  alt="Pakistani embroidery detail"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = carouselImages[currentSlide].pakistaniFallback;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-800/20 to-transparent"></div>
                <div className="absolute bottom-0.5 left-0.5 xs:bottom-1 xs:left-1 lg:bottom-2 lg:left-2 text-white text-xs xs:text-xs sm:text-xs font-bold bg-green-800/80 px-1 py-0.5 xs:px-1.5 xs:py-0.5 lg:px-2 lg:py-1 rounded text-[10px] xs:text-xs sm:text-xs">
                  🌙 Heritage
                </div>
              </div>

              {/* Floating English textile element - Hidden on very small screens */}
              <div className="absolute -top-[2vh] xs:-top-[3vh] sm:-top-6 lg:-top-8 -right-[2vh] xs:-right-[3vh] sm:-right-6 lg:-right-8 w-[15vw] h-[15vw] xs:w-18 xs:h-18 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-lg xs:rounded-xl lg:rounded-2xl overflow-hidden shadow-xl border-2 xs:border-3 lg:border-4 border-white hidden sm:block transform -rotate-6 transition-all duration-500 max-w-[80px] max-h-[80px] min-w-[60px] min-h-[60px]">
                <img
                  src={carouselImages[currentSlide].englishOverlay}
                  alt="English tailoring detail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-700/20 to-transparent"></div>
                <div className="absolute bottom-0.5 right-0.5 xs:bottom-1 xs:right-1 lg:bottom-2 lg:right-2 text-white text-xs xs:text-xs sm:text-xs font-bold bg-red-700/80 px-1 py-0.5 xs:px-1.5 xs:py-0.5 lg:px-2 lg:py-1 rounded text-[10px] xs:text-xs sm:text-xs">
                  👑 Elegance
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-2 left-2 xs:top-3 xs:left-3 lg:top-4 lg:left-4 w-2 h-2 xs:w-3 xs:h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-green-800 to-red-700 rounded-full animate-pulse"></div>
              <div className="absolute bottom-2 right-2 xs:bottom-3 xs:right-3 lg:bottom-4 lg:right-4 w-3 h-3 xs:w-4 xs:h-4 lg:w-6 lg:h-6 bg-gradient-to-r from-red-700 to-green-800 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Carousel dots */}
            <div className="flex justify-center mt-[2vh] xs:mt-4 sm:mt-5 lg:mt-6 space-x-2 xs:space-x-2.5 sm:space-x-3">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-[1.5vw] h-[1.5vw] xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 min-w-[8px] min-h-[8px] max-w-[12px] max-h-[12px] ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-green-800 to-red-700 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave - Responsive height */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-8 xs:h-10 sm:h-12 md:h-16"
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