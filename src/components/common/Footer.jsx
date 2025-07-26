import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
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
      className="relative bg-gradient-to-br from-[#09341c] via-[#09341c]/90 to-[#aa2939] text-[#edefee] overflow-hidden"
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
          className="w-full h-6 sm:h-8 md:h-12 lg:h-16 fill-current text-[#aa2939] opacity-20"
        >
          <path d="M0,0V20C150,100 350,0 600,20C850,40 1050,100 1200,20V0Z"></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-3 md:py-4 lg:py-6 h-full flex flex-col justify-between overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 flex-grow text-center lg:text-left">
          {/* Company Info */}
          <div data-aos="fade-up" className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="flex items-center mb-2 sm:mb-3 md:mb-4 lg:mb-6">
              <div className="relative flex-shrink-0">
                <GiSewingNeedle className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-10 xl:w-10 text-[#aa2939] transform rotate-45" />
                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-[#09341c] rounded-full animate-pulse"></div>
              </div>
              <div className="ml-2 sm:ml-3 min-w-0">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-[#aa2939] to-[#09341c] bg-clip-text text-transparent block">
                  SAMUNDAR PAAR
                </span>
                <p className="text-xs sm:text-sm text-[#edefee]/80 font-medium">
                  Pakistan ↔ England
                </p>
              </div>
            </div>
            <p className="text-[#edefee]/90 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-relaxed text-xs sm:text-sm md:text-base max-w-md lg:max-w-none">
              Weaving dreams across continents. Pakistani craftsmanship meets
              British elegance in every thread since 2020.
            </p>
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4 justify-center lg:justify-start">
              {[
                { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61575261274532" },
                { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/umairuk67?igsh=MWxjcGJzODk4cDF6ZA==" },
                { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/923214660662" }
              ].map(({ icon: Icon, label, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#09341c] to-[#09341c]/80 rounded-full flex items-center justify-center text-[#edefee] hover:from-[#aa2939] hover:to-[#aa2939]/80 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#aa2939] focus:ring-opacity-50"
                  aria-label={label}
                >
                  <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div data-aos="fade-up" data-aos-delay="100" className="lg:col-span-1 flex flex-col items-center lg:items-start max-w-md mx-auto lg:mx-0 lg:max-w-none">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-[#aa2939] flex items-center">
              <span className="w-3 sm:w-4 md:w-5 lg:w-6 xl:w-8 h-0.5 bg-gradient-to-r from-[#aa2939] to-[#09341c] mr-2 sm:mr-3"></span>
              Our Location
            </h3>
            
            {/* Pakistan */}
            <div className="p-3 sm:p-4 md:p-5 lg:p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-[#09341c]/30 hover:border-[#09341c]/50 transition-all duration-300 w-full">
              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#09341c] to-[#09341c]/80 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 flex-shrink-0">
                  <span className="text-[#edefee] text-sm sm:text-base">🇵🇰</span>
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="font-semibold text-[#09341c] text-sm sm:text-base md:text-lg">
                    Lahore, Pakistan
                  </p>
                  <p className="text-[#edefee]/70 text-xs sm:text-sm mt-1 sm:mt-2">
                    Main Office & Production
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200" className="lg:col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-[#09341c] flex items-center">
              <span className="w-3 sm:w-4 md:w-5 lg:w-6 xl:w-8 h-0.5 bg-gradient-to-r from-[#09341c] to-[#aa2939] mr-2 sm:mr-3"></span>
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
                    className="text-[#edefee]/90 hover:text-[#aa2939] transition-colors duration-200 flex items-center group text-xs sm:text-sm md:text-base focus:outline-none focus:text-[#aa2939] justify-center lg:justify-start"
                  >
                    <span className="w-0 group-hover:w-2 sm:group-hover:w-3 md:group-hover:w-4 h-0.5 bg-gradient-to-r from-[#09341c] to-[#aa2939] mr-0 group-hover:mr-1 sm:group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#edefee]/20 mt-3 sm:mt-4 md:mt-6 lg:mt-8 pt-2 sm:pt-3 md:pt-4 lg:pt-6 flex-shrink-0">
          <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
              <p className="text-[#edefee]/80 text-xs sm:text-sm">© 2025 Samundar Paar. Crafted with</p>
              <span className="mx-1 sm:mx-2 text-[#aa2939] animate-pulse">♥</span>
              <p className="text-[#edefee]/80 text-xs sm:text-sm">across two nations.</p>
            </div>
            
            <div className="text-center">
              <p className="text-[#edefee]/70 text-xs sm:text-sm italic leading-relaxed max-w-2xl mx-auto">
                "Celebrating the rich heritage of Pakistani craftsmanship and
                British design excellence"
              </p>
              <div className="flex justify-center items-center mt-1 sm:mt-2 space-x-2">
                <span className="text-[#09341c] text-xs sm:text-sm md:text-base lg:text-lg">🌙</span>
                <span className="text-[#edefee]/60 text-xs">•</span>
                <span className="text-[#aa2939] text-xs sm:text-sm md:text-base lg:text-lg">👑</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}