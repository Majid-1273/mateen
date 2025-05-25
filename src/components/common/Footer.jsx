import { useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
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
      style={{ height: 'calc(100vh - 80px)', paddingTop: '80px' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               filter: 'grayscale(100%)'
             }}>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-current text-red-700 opacity-20">
          <path d="M0,0V20C150,100 350,0 600,20C850,40 1050,100 1200,20V0Z"></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow">
          {/* Company Info */}
          <div data-aos="fade-up" className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="relative">
                <GiSewingNeedle className="h-10 w-10 text-red-400 transform rotate-45" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="ml-3">
                <span className="text-2xl font-bold bg-gradient-to-r from-red-300 to-green-300 bg-clip-text text-transparent">
                  SAMUNDAR PAAR
                </span>
                <p className="text-xs text-gray-300 font-medium">Pakistan ↔ England</p>
              </div>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Weaving dreams across continents. Pakistani craftsmanship meets British elegance in every thread since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Locations */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-6 text-red-300 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-red-400 to-green-400 mr-3"></span>
              Our Locations
            </h3>
            
            {/* England Location */}
            <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-red-400/20 hover:border-red-400/40 transition-all duration-300">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-xs font-bold">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                </div>
                <div>
                  <p className="font-semibold text-red-200">London Showroom</p>
                  <p className="text-gray-200 text-sm">123 Brick Lane</p>
                  <p className="text-gray-200 text-sm">London, E1 6SB</p>
                  <p className="text-gray-300 text-xs mt-1">Design & Customer Service</p>
                </div>
              </div>
            </div>
            
            {/* Pakistan Location */}
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-xs">🇵🇰</span>
                </div>
                <div>
                  <p className="font-semibold text-green-200">Karachi Atelier</p>
                  <p className="text-gray-200 text-sm">Plot 45, Block 7</p>
                  <p className="text-gray-200 text-sm">Gulshan-e-Iqbal, Karachi</p>
                  <p className="text-gray-300 text-xs mt-1">Production & Craftsmanship</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-6 text-green-300 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-green-400 to-red-400 mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-200 hover:text-red-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-green-400 to-red-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-200 hover:text-red-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-green-400 to-red-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-200 hover:text-red-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-green-400 to-red-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-200 hover:text-red-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-green-400 to-red-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-200 hover:text-red-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-green-400 to-red-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold mb-6 text-red-300 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-red-400 to-green-400 mr-3"></span>
              Get In Touch
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-red-500 rounded-full flex items-center justify-center mr-3">
                  <FaPhone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-200 text-sm">+44 20 7946 0958 (UK)</p>
                  <p className="text-gray-200 text-sm">+92 21 3456 7890 (PK)</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-red-500 rounded-full flex items-center justify-center mr-3">
                  <FaEnvelope className="h-4 w-4 text-white" />
                </div>
                <p className="text-gray-200 text-sm">hello@samundarpaar.com</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="font-semibold mb-3 text-green-200">Stay Connected</h4>
              <p className="text-gray-300 text-sm mb-3">Get updates on our latest collections and cultural fusion designs.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 w-full text-gray-800 bg-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button className="bg-gradient-to-r from-green-600 to-red-600 hover:from-red-600 hover:to-green-600 px-6 py-2 rounded-r-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-6 flex-shrink-0">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center mb-4 lg:mb-0">
              <p className="text-gray-300">© 2025 Samundar Paar. Crafted with</p>
              <span className="mx-2 text-red-400 animate-pulse">♥</span>
              <p className="text-gray-300">across two nations.</p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
              <a href="/privacy" className="text-gray-300 hover:text-red-300 transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-300 hover:text-red-300 transition-colors duration-200 text-sm">
                Terms of Service  
              </a>
              <a href="/shipping" className="text-gray-300 hover:text-red-300 transition-colors duration-200 text-sm">
                Shipping Info
              </a>
            </div>
          </div>
          
          {/* Cultural appreciation note */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm italic">
              "Celebrating the rich heritage of Pakistani craftsmanship and British design excellence"
            </p>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <span className="text-green-400 text-lg">🌙</span>
              <span className="text-gray-400">•</span>
              <span className="text-red-400 text-lg">👑</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}