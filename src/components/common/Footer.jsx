import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { GiSewingNeedle } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <footer
      className="relative bg-gradient-to-br from-green-900 via-green-800 to-red-900 text-white overflow-hidden"
      style={{ 
        maxHeight: "calc(100vh - 80px)", 
        minHeight: "calc(100vh - 80px)",
        paddingTop: "40px"
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%)",
          }}
        ></div>
      </div>

      {/* Decorative wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          className="w-full h-8 sm:h-12 md:h-16 fill-current text-red-700 opacity-20"
        >
          <path d="M0,0V20C150,100 350,0 600,20C850,40 1050,100 1200,20V0Z"></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-6 h-full flex flex-col justify-between overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-grow text-center lg:text-left">
          {/* Company Info */}
          <div data-aos="fade-up" className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="flex items-center mb-2 sm:mb-3 md:mb-4 lg:mb-6">
              <div className="relative flex-shrink-0">
                <GiSewingNeedle className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-red-400 transform rotate-45" />
                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="ml-2 sm:ml-3 min-w-0">
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-red-300 to-green-300 bg-clip-text text-transparent block">
                  SAMUNDAR PAAR
                </span>
                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                  Pakistan ↔ England
                </p>
              </div>
            </div>
            <p className="text-gray-200 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-relaxed text-xs sm:text-sm md:text-base max-w-md lg:max-w-none">
              Weaving dreams across continents. Pakistani craftsmanship meets
              British elegance in every thread since 2020.
            </p>
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4 justify-center lg:justify-start">
              {[
                { icon: FaFacebook, label: "Facebook" },
                { icon: FaTwitter, label: "Twitter" },
                { icon: FaInstagram, label: "Instagram" },
                { icon: FaLinkedin, label: "LinkedIn" }
              ].map(({ icon: Icon, label }, idx) => (
                <Link
                  key={idx}
                  to="#"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                  aria-label={label}
                >
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div data-aos="fade-up" data-aos-delay="100" className="lg:col-span-1 flex flex-col items-center lg:items-start max-w-md mx-auto lg:mx-0 lg:max-w-none">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-red-300 flex items-center">
              <span className="w-4 sm:w-5 md:w-6 lg:w-8 h-0.5 bg-gradient-to-r from-red-400 to-green-400 mr-2 sm:mr-3"></span>
              Our Locations
            </h3>
            
            {/* England */}
            <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-6 p-2 sm:p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-red-400/20 hover:border-red-400/40 transition-all duration-300 w-full">
              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-white text-xs font-bold">🏴</span>
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="font-semibold text-red-200 text-xs sm:text-sm md:text-base">London Showroom</p>
                  <p className="text-gray-200 text-xs sm:text-sm">123 Brick Lane</p>
                  <p className="text-gray-200 text-xs sm:text-sm">London, E1 6SB</p>
                  <p className="text-gray-300 text-xs mt-0.5 sm:mt-1">
                    Design & Customer Service
                  </p>
                </div>
              </div>
            </div>
            
            {/* Pakistan */}
            <div className="p-2 sm:p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-300 w-full">
              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-white text-xs">🇵🇰</span>
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="font-semibold text-green-200 text-xs sm:text-sm md:text-base">
                    Karachi Atelier
                  </p>
                  <p className="text-gray-200 text-xs sm:text-sm">Plot 45, Block 7</p>
                  <p className="text-gray-200 text-xs sm:text-sm">
                    Gulshan-e-Iqbal, Karachi
                  </p>
                  <p className="text-gray-300 text-xs mt-0.5 sm:mt-1">
                    Production & Craftsmanship
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200" className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-green-300 flex items-center">
              <span className="w-4 sm:w-5 md:w-6 lg:w-8 h-0.5 bg-gradient-to-r from-green-400 to-red-400 mr-2 sm:mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-1 sm:space-y-2 md:space-y-3 text-center lg:text-left">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/collections", label: "Collections" },
                { to: "/contact", label: "Contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="text-gray-200 hover:text-red-300 transition-colors duration-200 flex items-center group text-xs sm:text-sm md:text-base focus:outline-none focus:text-red-300 justify-center lg:justify-start"
                  >
                    <span className="w-0 group-hover:w-2 sm:group-hover:w-3 md:group-hover:w-4 h-0.5 bg-gradient-to-r from-green-400 to-red-400 mr-0 group-hover:mr-1 sm:group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-3 sm:mt-4 md:mt-6 lg:mt-8 pt-2 sm:pt-3 md:pt-4 lg:pt-6 flex-shrink-0">
          <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
            <div className="flex flex-col sm:flex-row items-center">
              <p className="text-gray-300 text-xs sm:text-sm">© 2025 Samundar Paar. Crafted with</p>
              <span className="mx-1 sm:mx-2 text-red-400 animate-pulse">♥</span>
              <p className="text-gray-300 text-xs sm:text-sm">across two nations.</p>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 text-xs sm:text-sm italic leading-relaxed">
                "Celebrating the rich heritage of Pakistani craftsmanship and
                British design excellence"
              </p>
              <div className="flex justify-center items-center mt-1 sm:mt-2 space-x-2">
                <span className="text-green-400 text-xs sm:text-sm md:text-base lg:text-lg">🌙</span>
                <span className="text-gray-400 text-xs">•</span>
                <span className="text-red-400 text-xs sm:text-sm md:text-base lg:text-lg">👑</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}