import { Globe, Clock } from 'lucide-react';
import { useEffect } from 'react';

const AboutSection = () => {
  useEffect(() => {
    // Simulating AOS animations with CSS animations
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'all 0.6s ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden" 
         style={{ height: 'calc(100vh - 80px)' }}>
      <div className="container mx-auto px-4 lg:px-6 h-full flex items-center py-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center w-full max-h-full" data-aos="fade-up">
          {/* Image Section */}
          <div className="lg:w-1/2 relative flex-shrink-0">
            <div className="relative group" data-aos="zoom-in">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Traditional textile craftsmanship" 
                className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 w-full h-48 lg:h-64 object-cover"
              />
              {/* Overlay with cultural elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-red-900/20 rounded-2xl"></div>
              <div className="absolute top-3 right-3 flex space-x-2">
                <div className="bg-green-800 text-white p-1.5 rounded-full shadow-lg">
                  <span className="text-xs font-bold">PK</span>
                </div>
                <div className="bg-red-700 text-white p-1.5 rounded-full shadow-lg">
                  <span className="text-xs font-bold">UK</span>
                </div>
              </div>
            </div>
            {/* Secondary image */}
            <div className="absolute -bottom-3 -right-3 hidden lg:block" data-aos="fade-left" data-aos-delay="200">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                alt="Fashion design" 
                className="rounded-xl shadow-xl w-28 h-16 object-cover border-2 border-white"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 space-y-3 lg:space-y-4 flex-1 overflow-y-auto" data-aos="fade-left">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg">🌙</span>
                <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-800 via-red-700 to-green-800 bg-clip-text text-transparent">
                  Who We Are
                </h2>
                <span className="text-lg">👑</span>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-green-800 to-red-700 mb-3 rounded-full"></div>
              <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-3">
                Founded in 1995, <span className="font-semibold text-green-800">Samundar Paar</span> represents the perfect fusion of British tailoring excellence and Pakistani 
                textile craftsmanship. We specialize in creating premium women's suits that combine traditional techniques 
                with modern design innovation.
              </p>
              <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-4">
                Our workshops bridge two worlds - the <span className="text-green-800 font-medium">rich textile heritage of Pakistan</span> and the 
                <span className="text-red-700 font-medium"> refined tailoring traditions of England</span>. This unique cross-cultural collaboration allows us to offer 
                exceptional quality and distinctive designs that honor both heritages.
              </p>
            </div>

            {/* Stats/Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-xl border-l-4 border-green-800 transform hover:scale-105 transition-all duration-300" data-aos="fade-right" data-aos-delay="100">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-800 p-2 rounded-full shadow-lg">
                    <Globe className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-900 text-sm">Global Reach</h3>
                    <p className="text-green-700 mt-1 text-xs">Serving clients across Pakistan, UK & beyond</p>
                    <div className="flex items-center mt-1 space-x-1">
                      <span className="text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded-full">20+ Countries</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 rounded-xl border-l-4 border-red-700 transform hover:scale-105 transition-all duration-300" data-aos="fade-left" data-aos-delay="200">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-700 p-2 rounded-full shadow-lg">
                    <Clock className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-900 text-sm">Heritage & Experience</h3>
                    <p className="text-red-700 mt-1 text-xs">Decades of master craftsmanship</p>
                    <div className="flex items-center mt-1 space-x-1">
                      <span className="text-xs bg-red-200 text-red-800 px-2 py-0.5 rounded-full">25+ Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural Bridge Visual */}
            <div className="bg-gradient-to-r from-green-800 via-white to-red-700 p-3 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center justify-between text-center">
                <div className="flex-1">
                  <div className="text-lg mb-1">🕌</div>
                  <h4 className="font-bold text-green-800 text-xs">Pakistani Craftsmanship</h4>
                  <p className="text-xs text-green-700">Traditional techniques & artistry</p>
                </div>
                <div className="flex-1">
                  <div className="text-lg mb-1">✨</div>
                  <h4 className="font-bold text-gray-800 text-xs">Perfect Fusion</h4>
                  <p className="text-xs text-gray-600">East meets West</p>
                </div>
                <div className="flex-1">
                  <div className="text-lg mb-1">🏰</div>
                  <h4 className="font-bold text-red-700 text-xs">British Excellence</h4>
                  <p className="text-xs text-red-600">Refined tailoring traditions</p>
                </div>
              </div>
            </div>

            {/* Bottom decorative element */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-100 via-white to-red-100 px-4 py-2 rounded-full shadow-lg">
                <span className="text-green-800 font-medium text-xs">Stitched in Pakistan</span>
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-800 to-red-700 rounded-full"></div>
                <span className="text-red-700 font-medium text-xs">Delivered to England</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;