import { useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { GiSewingNeedle } from "react-icons/gi";

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
    <div style={{ 
      marginTop: '80px',
      height: 'calc(100vh - 80px)',
      overflow: 'hidden'
    }}>
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
        .aos-animate {
          opacity: 1 !important;
          transform: translate(0) scale(1) !important;
        }
        .gradient-bg {
          background: linear-gradient(135deg, #8B2635 0%, #2D5016 100%);
        }
        .textile-pattern {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(139, 38, 53, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(45, 80, 22, 0.1) 0%, transparent 50%),
            url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop&crop=center');
          background-size: 200px 200px, 200px 200px, 50px 50px;
          background-position: 0 0, 100px 100px, 0 0;
        }
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }
        @keyframes pulse-border {
          0%, 100% { border-color: rgba(139, 38, 53, 0.5); }
          50% { border-color: rgba(139, 38, 53, 1); }
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(139, 38, 53, 0.2);
        }
        
        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .floating-element {
            animation: none;
          }
        }
        
        @media (max-width: 768px) {
          .hover-lift:hover {
            transform: none;
            box-shadow: 0 10px 20px rgba(139, 38, 53, 0.15);
          }
        }
      `}</style>

      <section className="relative h-full overflow-hidden">
        {/* Background with textile pattern */}
        <div className="absolute inset-0 textile-pattern opacity-20"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 flex-grow">
            {/* Text content */}
            <div className="lg:w-1/2 space-y-6 lg:space-y-8" data-aos="fade-right">
              {/* Main heading */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-3 lg:mb-4">
                  <GiSewingNeedle className="h-6 w-6 lg:h-8 lg:w-8 mr-2 lg:mr-3" style={{ color: '#2D5016' }} />
                  <span className="text-base lg:text-lg font-semibold" style={{ color: '#8B2635' }}>
                    SAMUNDAR PAAR
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                  <span style={{ color: '#8B2635' }}>Get in</span>{' '}
                  <span style={{ color: '#2D5016' }}>Touch</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Connecting cultures through exceptional tailoring. Whether you're interested in our 
                  collections, custom projects, or have questions about our services - we're here to help 
                  across both continents.
                </p>
              </div>
              
              {/* Contact cards */}
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {/* UK Contact */}
                <div 
                  className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg border-l-4 hover-lift pulse-border"
                  style={{ borderLeftColor: '#8B2635' }}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex items-center mb-3 lg:mb-4">
                    <div className="w-8 h-5 lg:w-10 lg:h-6 mr-2 lg:mr-3 rounded overflow-hidden shadow-sm">
                      <img 
                        src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=40&h=24&fit=crop&crop=center" 
                        alt="UK Flag" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold" style={{ color: '#8B2635' }}>
                      London Office
                    </h3>
                  </div>
                  <div className="space-y-2 lg:space-y-3 text-gray-600">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 lg:mr-3 text-sm lg:text-base" style={{ color: '#8B2635' }} />
                      <span className="text-xs lg:text-sm">123 Savile Row, London</span>
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="mr-2 lg:mr-3 text-sm lg:text-base" style={{ color: '#8B2635' }} />
                      <span className="text-sm lg:text-base">+44 20 7123 4567</span>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="mr-2 lg:mr-3 text-sm lg:text-base" style={{ color: '#8B2635' }} />
                      <span className="text-xs lg:text-sm">london@samundarpaar.com</span>
                    </div>
                  </div>
                </div>
                
                {/* Pakistan Contact */}
                <div 
                  className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg border-l-4 hover-lift pulse-border"
                  style={{ borderLeftColor: '#2D5016' }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex items-center mb-3 lg:mb-4">
                    <div className="w-8 h-5 lg:w-10 lg:h-6 mr-2 lg:mr-3 rounded overflow-hidden shadow-sm">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=40&h=24&fit=crop&crop=center" 
                        alt="Pakistan Flag" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold" style={{ color: '#2D5016' }}>
                      Lahore Workshop
                    </h3>
                  </div>
                  <div className="space-y-2 lg:space-y-3 text-gray-600">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 lg:mr-3 text-sm lg:text-base" style={{ color: '#2D5016' }} />
                      <span className="text-xs lg:text-sm">45 MM Alam Road, Gulberg</span>
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="mr-2 lg:mr-3 text-sm lg:text-base" style={{ color: '#2D5016' }} />
                      <span className="text-sm lg:text-base">+92 42 1234 5678</span>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="mr-2 lg:mr-3 text-sm lg:text-base" style={{ color: '#2D5016' }} />
                      <span className="text-xs lg:text-sm">lahore@samundarpaar.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional info */}
              <div 
                className="flex items-center justify-center lg:justify-start space-x-4 lg:space-x-6 p-3 lg:p-4 rounded-lg lg:rounded-xl"
                style={{ backgroundColor: '#f8f9fa' }}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex items-center">
                  <FaGlobe className="mr-1 lg:mr-2 text-sm lg:text-base" style={{ color: '#8B2635' }} />
                  <span className="text-xs lg:text-sm font-medium text-gray-700">Global Shipping</span>
                </div>
                <div className="w-px h-4 lg:h-6 bg-gray-300"></div>
                <div className="flex items-center">
                  <GiSewingNeedle className="mr-1 lg:mr-2 text-sm lg:text-base" style={{ color: '#2D5016' }} />
                  <span className="text-xs lg:text-sm font-medium text-gray-700">Custom Tailoring</span>
                </div>
              </div>
            </div>
            
            {/* Image section */}
            <div className="lg:w-1/2" data-aos="fade-left">
              <div className="relative">
                {/* Main image */}
                <div className="rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center" 
                    alt="Tailoring workshop with traditional and modern elements" 
                    className="w-full h-48 sm:h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating decorative elements - Hidden on mobile for cleaner look */}
                <div 
                  className="hidden lg:block absolute -bottom-6 -left-6 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shadow-xl floating-element"
                  style={{ background: 'linear-gradient(135deg, #8B2635 0%, #A73142 100%)' }}
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=30&h=20&fit=crop&crop=center" 
                    alt="UK" 
                    className="w-6 h-4 lg:w-8 lg:h-5 object-cover rounded"
                  />
                </div>
                
                <div 
                  className="hidden lg:block absolute -top-6 -right-6 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shadow-xl floating-element"
                  style={{ 
                    background: 'linear-gradient(135deg, #2D5016 0%, #3A6B1C 100%)',
                    animationDelay: '2s'
                  }}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=30&h=20&fit=crop&crop=center" 
                    alt="PK" 
                    className="w-6 h-4 lg:w-8 lg:h-5 object-cover rounded"
                  />
                </div>

                {/* Additional decorative images - Smaller on mobile */}
                <div 
                  className="absolute top-2 left-2 lg:top-4 lg:left-4 w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden shadow-lg border-2 lg:border-4 border-white floating-element"
                  style={{ animationDelay: '1s' }}
                  data-aos="fade-in"
                  data-aos-delay="600"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=60&h=60&fit=crop&crop=center" 
                    alt="Traditional textile pattern" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div 
                  className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden shadow-lg border-2 lg:border-4 border-white floating-element"
                  style={{ animationDelay: '3s' }}
                  data-aos="fade-in"
                  data-aos-delay="700"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?w=60&h=60&fit=crop&crop=center" 
                    alt="Modern sewing tools" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Connection line between countries - Hidden on mobile */}
              <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div 
                  className="w-32 h-0.5 opacity-30"
                  style={{ 
                    background: 'linear-gradient(90deg, #8B2635 0%, #2D5016 100%)',
                    transform: 'rotate(-15deg)'
                  }}
                ></div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}