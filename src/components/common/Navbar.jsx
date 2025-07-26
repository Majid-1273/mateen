import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import logoImage from "../../data/images/samundar paar.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${
        scrolled ? "bg-white shadow-xl border-b-2 border-green-800" : "bg-white/98 shadow-lg backdrop-blur-sm"
      } fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center" data-aos="fade-right">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="relative h-18 w-18 mr-3">
                <div className="absolute inset-0 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                  <img 
                    src={logoImage} 
                    alt="Samundar Paar Logo" 
                    className="w-40 h-40 object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-green-800 via-red-700 to-green-800 bg-clip-text text-transparent group-hover:from-red-700 group-hover:via-green-800 group-hover:to-red-700 transition-all duration-300">
                  SAMUNDAR PAAR
                </span>
                <span className="text-xs text-gray-600 font-medium">Pakistan ↔ England</span>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8" data-aos="fade-left">
            <Link to="/" className="text-green-900 hover:text-red-700 px-3 py-2 font-medium transition-colors duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-800 to-red-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-green-900 hover:text-red-700 px-3 py-2 font-medium transition-colors duration-200 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-800 to-red-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/services" className="text-green-900 hover:text-red-700 px-3 py-2 font-medium transition-colors duration-200 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-800 to-red-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/collections" className="text-green-900 hover:text-red-700 px-3 py-2 font-medium transition-colors duration-200 relative group">
              Collections
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-800 to-red-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="px-6 py-2 font-medium text-white bg-gradient-to-r from-green-800 to-red-700 rounded-full hover:from-red-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact
            </Link>
          </div>

          {/* Cultural symbols and social icons */}
          <div className="hidden md:flex items-center space-x-4" data-aos="fade-left" data-aos-delay="100">
            <div className="flex items-center space-x-2 mr-4 text-xs">
              <span className="text-green-800" title="Pakistan">🌙</span>
              <span className="text-gray-400">•</span>
              <span className="text-red-700" title="England">👑</span>
            </div>
            <a href="#" className="text-gray-500 hover:text-blue-600 transform hover:scale-110 transition-all duration-200">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transform hover:scale-110 transition-all duration-200">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600 transform hover:scale-110 transition-all duration-200">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-700 transform hover:scale-110 transition-all duration-200">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-md text-green-800 hover:text-red-700 hover:bg-gray-100 focus:outline-none transition-all duration-200"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-gradient-to-r from-green-800 to-red-700 pt-2 pb-4 px-2 space-y-1 sm:px-3 shadow-lg" data-aos="fade-down">
          <div className="border-l-4 border-gradient-to-b from-green-800 to-red-700 pl-4 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-green-900 hover:bg-gradient-to-r hover:from-green-50 hover:to-red-50 hover:text-red-700 transition-all duration-200">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-green-900 hover:bg-gradient-to-r hover:from-green-50 hover:to-red-50 hover:text-red-700 transition-all duration-200">
              About
            </Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-green-900 hover:bg-gradient-to-r hover:from-green-50 hover:to-red-50 hover:text-red-700 transition-all duration-200">
              Services
            </Link>
            <Link to="/collections" className="block px-3 py-2 rounded-md text-base font-medium text-green-900 hover:bg-gradient-to-r hover:from-green-50 hover:to-red-50 hover:text-red-700 transition-all duration-200">
              Collections
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-green-900 hover:bg-gradient-to-r hover:from-green-50 hover:to-red-50 hover:text-red-700 transition-all duration-200">
              Contact
            </Link>
          </div>

          <div className="flex justify-between items-center px-3 py-4 mt-4 border-t border-gray-200">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 transform hover:scale-110 transition-all duration-200">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transform hover:scale-110 transition-all duration-200">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600 transform hover:scale-110 transition-all duration-200">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700 transform hover:scale-110 transition-all duration-200">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-800">🌙</span>
              <span className="text-gray-400">•</span>
              <span className="text-red-700">👑</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}