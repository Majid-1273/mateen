import { useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { GiSewingNeedle } from "react-icons/gi";

export default function Footer() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-[#09341c] via-[#09341c]/90 to-[#aa2939] text-[#edefee] overflow-hidden">
      <style jsx>{`
        [data-aos="fade-up"] {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        [data-aos="fade-up"][data-aos-delay="100"] {
          transition-delay: 0.1s;
        }
        [data-aos="fade-up"][data-aos-delay="200"] {
          transition-delay: 0.2s;
        }
        .aos-animate {
          opacity: 1 !important;
          transform: translate(0) !important;
        }
      `}</style>

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

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 text-center lg:text-left">
          {/* Company Info */}
          <div data-aos="fade-up" className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="flex items-center mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              <div className="relative flex-shrink-0">
                <GiSewingNeedle className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-10 xl:w-10 text-[#aa2939] transform rotate-45" />
                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-[#09341c] rounded-full animate-pulse"></div>
              </div>
              <div className="ml-3 sm:ml-4 min-w-0">
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-[#aa2939] to-[#09341c] bg-clip-text text-transparent block">
                  SAMANDAR PAAR
                </span>
                <p className="text-sm sm:text-base text-[#edefee]/80 font-medium">
                  Pakistan ↔ England
                </p>
              </div>
            </div>
            <p className="text-[#edefee]/90 mb-6 sm:mb-7 md:mb-8 lg:mb-10 leading-relaxed text-sm sm:text-base md:text-lg max-w-md lg:max-w-none">
              Weaving dreams across continents. Pakistani craftsmanship meets
              British elegance in every thread since 2020.
            </p>
            <div className="flex space-x-3 sm:space-x-4 md:space-x-5 justify-center lg:justify-start">
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
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#09341c] to-[#09341c]/80 rounded-full flex items-center justify-center text-[#edefee] hover:from-[#aa2939] hover:to-[#aa2939]/80 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#aa2939] focus:ring-opacity-50"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div data-aos="fade-up" data-aos-delay="100" className="lg:col-span-1 flex flex-col items-center lg:items-start max-w-md mx-auto lg:mx-0 lg:max-w-none">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-[#aa2939] flex items-center">
              <span className="w-4 sm:w-5 md:w-6 lg:w-8 xl:w-10 h-0.5 bg-gradient-to-r from-[#aa2939] to-[#09341c] mr-3 sm:mr-4"></span>
              Our Location
            </h3>
            
            {/* Pakistan */}
            <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-[#09341c]/30 hover:border-[#09341c]/50 transition-all duration-300 w-full">
              <div className="flex items-start">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#09341c] to-[#09341c]/80 rounded-full flex items-center justify-center mr-4 sm:mr-5 mt-0.5 flex-shrink-0">
                  <span className="text-[#edefee] text-base sm:text-lg">🇵🇰</span>
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="font-semibold text-[#09341c] text-base sm:text-lg md:text-xl">
                    Lahore, Pakistan
                  </p>
                  <p className="text-[#edefee]/70 text-sm sm:text-base mt-2">
                    Main Office & Production
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200" className="lg:col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-[#09341c] flex items-center">
              <span className="w-4 sm:w-5 md:w-6 lg:w-8 xl:w-10 h-0.5 bg-gradient-to-r from-[#09341c] to-[#aa2939] mr-3 sm:mr-4"></span>
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-center lg:text-left">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/collections", label: "Collections" },
                { to: "/contact", label: "Contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.to}
                    className="text-[#edefee]/90 hover:text-[#aa2939] transition-colors duration-200 flex items-center group text-sm sm:text-base md:text-lg focus:outline-none focus:text-[#aa2939] justify-center lg:justify-start"
                  >
                    <span className="w-0 group-hover:w-3 sm:group-hover:w-4 md:group-hover:w-5 h-0.5 bg-gradient-to-r from-[#09341c] to-[#aa2939] mr-0 group-hover:mr-2 sm:group-hover:mr-3 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#edefee]/20 mt-8 sm:mt-10 md:mt-12 lg:mt-16 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-5">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
              <p className="text-[#edefee]/80 text-sm sm:text-base">© 2025 Samandar Paar. Crafted with</p>
              <span className="mx-2 sm:mx-3 text-[#aa2939] animate-pulse text-lg">♥</span>
              <p className="text-[#edefee]/80 text-sm sm:text-base">across two nations.</p>
            </div>
            
            <div className="text-center">
              <p className="text-[#edefee]/70 text-sm sm:text-base italic leading-relaxed max-w-2xl mx-auto">
                "Celebrating the rich heritage of Pakistani craftsmanship and
                British design excellence"
              </p>
              <div className="flex justify-center items-center mt-3 sm:mt-4 space-x-3">
                <span className="text-[#09341c] text-lg sm:text-xl md:text-2xl">🌙</span>
                <span className="text-[#edefee]/60 text-sm">•</span>
                <span className="text-[#aa2939] text-lg sm:text-xl md:text-2xl">👑</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}