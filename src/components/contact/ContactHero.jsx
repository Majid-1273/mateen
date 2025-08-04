import { useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaClock, FaHandshake } from "react-icons/fa";
import { GiSewingNeedle } from "react-icons/gi";
import contactImage from "../../data/images/Image_fx (4).jpg";

export default function ContactHero() {
  useEffect(() => {
    // Simulating AOS functionality with CSS animations
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
    <div className="relative h-[calc(100vh-80px)] mt-20 bg-gradient-to-br from-[#edefee] via-[#edefee] to-[#09341c]/10 overflow-hidden">
      <style jsx>{`
        [data-aos="fade-right"] {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease-in-out;
        }
        [data-aos="fade-left"] {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease-in-out;
        }
        [data-aos="fade-up"] {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-in-out;
        }
        [data-aos="zoom-in"] {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.8s ease-in-out;
        }
        [data-aos="fade-in"] {
          opacity: 0;
          transition: all 0.8s ease-in-out;
        }
        .aos-animate {
          opacity: 1 !important;
          transform: translate(0) scale(1) !important;
        }
        .textile-pattern {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(170, 41, 57, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(9, 52, 28, 0.05) 0%, transparent 50%),
            url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop&crop=center');
          background-size: 200px 200px, 200px 200px, 50px 50px;
          background-position: 0 0, 100px 100px, 0 0;
        }
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }
        @keyframes pulse-border {
          0%, 100% { border-color: rgba(170, 41, 57, 0.3); }
          50% { border-color: rgba(170, 41, 57, 0.7); }
        }
        .pulse-border-secondary {
          animation: pulse-border-secondary 2s ease-in-out infinite;
        }
        @keyframes pulse-border-secondary {
          0%, 100% { border-color: rgba(9, 52, 28, 0.3); }
          50% { border-color: rgba(9, 52, 28, 0.7); }
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(170, 41, 57, 0.15);
        }
        
        /* Mobile-first responsive design improvements */
        @media (max-width: 480px) {
          .floating-element {
            animation: none;
          }
          .hover-lift:hover {
            transform: none;
            box-shadow: 0 4px 8px rgba(170, 41, 57, 0.1);
          }
        }
        
        @media (max-width: 640px) {
          .hover-lift:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(170, 41, 57, 0.12);
          }
        }
        
        @media (max-width: 768px) {
          .floating-element {
            animation-duration: 8s;
          }
        }
      `}</style>

      <section className="relative h-full flex items-center">
        {/* Background with textile pattern */}
        <div className="absolute inset-0 textile-pattern opacity-30"></div>
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#edefee]/80 to-[#09341c]/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-4 sm:py-6 lg:py-8 w-full h-full">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-12 h-full min-h-0">
            {/* Text content */}
            <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 lg:space-y-6" data-aos="fade-right">
              {/* Main heading */}
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight">
                  <span className="text-[#aa2939]">Get in</span>{' '}
                  <span className="text-[#09341c]">Touch</span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-2 sm:mb-3">
                  Bridging continents through exceptional craftsmanship. From London's fashion districts to Lahore's traditional workshops.
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Whether seeking custom garments or exploring our collections, our teams in the UK and Pakistan are ready to assist you.
                </p>
              </div>
              
              {/* Contact cards */}
              <div className="space-y-3">
                {/* Pakistan Contact */}
                <div 
                  className="bg-[#edefee] rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 shadow-lg border-l-4 hover-lift pulse-border-secondary border-[#09341c]"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="w-6 h-4 sm:w-8 sm:h-5 mr-2 sm:mr-3 rounded overflow-hidden shadow-sm flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=40&h=24&fit=crop&crop=center" 
                        alt="Pakistan Flag" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#09341c]">
                      Lahore Workshop
                    </h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <FaPhone className="mr-2 sm:mr-3 text-xs sm:text-sm flex-shrink-0 text-[#09341c]" />
                      <span className="text-xs sm:text-sm">+92-(321)-4660662</span>
                    </div>
                    <div className="flex items-start">
                      <FaEnvelope className="mr-2 sm:mr-3 mt-0.5 text-xs sm:text-sm flex-shrink-0 text-[#09341c]" />
                      <span className="text-xs sm:text-sm break-all">mateen.chma@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-2 sm:mr-3 text-xs sm:text-sm flex-shrink-0 text-[#09341c]" />
                      <span className="text-xs sm:text-sm">Mon-Sat: 10AM-8PM PKT</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional info */}
              <div 
                className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex flex-col items-center text-center p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-[#edefee] shadow-md hover-lift">
                  <FaGlobe className="mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg text-[#aa2939]" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">Global Shipping</span>
                  <span className="text-xs text-gray-500 mt-0.5 hidden sm:block">Worldwide delivery</span>
                </div>
                <div className="flex flex-col items-center text-center p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-[#edefee] shadow-md hover-lift">
                  <GiSewingNeedle className="mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg text-[#09341c]" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">Custom Tailoring</span>
                  <span className="text-xs text-gray-500 mt-0.5 hidden sm:block">Bespoke solutions</span>
                </div>
                <div className="flex flex-col items-center text-center p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-[#edefee] shadow-md hover-lift">
                  <FaHandshake className="mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg text-[#aa2939]" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">Expert Consultation</span>
                  <span className="text-xs text-gray-500 mt-0.5 hidden sm:block">Personal guidance</span>
                </div>
              </div>
            </div>
            
            {/* Image section */}
            <div className="w-full lg:w-1/2 flex-shrink-0 flex-1 lg:flex-initial" data-aos="fade-left">
              <div className="relative h-full lg:h-auto">
                {/* Main image */}
                <div className="rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl h-full lg:h-auto">
                  <img 
                    src={contactImage} 
                    alt="Tailoring workshop with traditional and modern elements" 
                    className="w-full h-full lg:h-80 xl:h-96 object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent"></div>
                </div>
                
                

                

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}