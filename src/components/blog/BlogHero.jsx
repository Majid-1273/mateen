import { useState, useEffect } from 'react';

export default function BlogHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize AOS if available
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  if (!mounted) {
    return <div className="animate-pulse bg-gradient-to-r from-green-800 to-red-700 h-96"></div>;
  }

  return (
    <div 
      className="bg-gradient-to-br from-green-800 via-green-700 to-red-700 text-white relative overflow-hidden"
      style={{ 
        minHeight: 'calc(100vh - 80px)', // Account for navbar height
        paddingTop: '6rem',
        paddingBottom: '6rem'
      }}
      data-aos="fade-down"
    >
      {/* Background pattern - Pakistani textile inspired pattern */}
      <div className="absolute inset-0 opacity-15" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.8'%3E%3Cpath d='M40 0C17.9 0 0 17.9 0 40s17.9 40 40 40 40-17.9 40-40S62.1 0 40 0zm0 70c-16.5 0-30-13.5-30-30S23.5 10 40 10s30 13.5 30 30-13.5 30-30 30z'/%3E%3Cpath d='M40 20c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 30c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-8 h-8 bg-red-300 bg-opacity-20 rotate-45 animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-300 bg-opacity-20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Cultural symbols */}
          <div className="mb-8 flex justify-center items-center space-x-6" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <span className="text-2xl">🌙</span>
              </div>
              <span className="text-xs font-medium text-green-100">Pakistan</span>
            </div>
            
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <span className="text-2xl">👑</span>
              </div>
              <span className="text-xs font-medium text-red-100">England</span>
            </div>
          </div>
          
          {/* Main heading */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-green-100 to-red-100 bg-clip-text text-transparent">
                Our Stitching
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-100 via-white to-green-100 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="600">
            <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed max-w-2xl mx-auto">
              Weaving together Pakistani craftsmanship and English elegance
              <br />
              <span className="text-lg text-gray-200">One stitch at a time, across continents</span>
            </p>
          </div>
          
          {/* Flag representations */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8" data-aos="fade-up" data-aos-delay="800">
            {/* Pakistan flag representation */}
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="h-16 w-24 relative overflow-hidden border-2 border-white rounded shadow-lg">
                <div className="h-full w-full bg-gradient-to-r from-green-600 to-green-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-2xl">🌙⭐</div>
                  </div>
                </div>
              </div>
              <p className="text-xs mt-2 text-gray-200 font-medium">Islamic Republic of Pakistan</p>
            </div>
            
            <div className="flex items-center">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-4"></div>
              <span className="text-2xl animate-pulse">✈️</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-4"></div>
            </div>
            
            {/* England flag representation */}
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="h-16 w-24 relative overflow-hidden border-2 border-white rounded shadow-lg">
                <div className="h-full w-full bg-white relative">
                  {/* St. George's Cross */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-full h-2 bg-red-600"></div>
                    <div className="absolute h-full w-2 bg-red-600"></div>
                  </div>
                </div>
              </div>
              <p className="text-xs mt-2 text-gray-200 font-medium">England, United Kingdom</p>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="mb-8" data-aos="fade-up" data-aos-delay="1000">
            <div className="max-w-2xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1558882224-dda166733046?w=800&h=400&fit=crop&crop=center"
                alt="Pakistani and English textile fusion"
                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-2xl border-4 border-white border-opacity-20"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div className="hidden w-full h-64 md:h-80 bg-gradient-to-br from-green-600 via-green-700 to-red-600 rounded-xl shadow-2xl border-4 border-white border-opacity-20 items-center justify-center flex-col text-white">
                <div className="text-6xl mb-4">🧵✂️</div>
                <h3 className="text-2xl font-bold">Textile Artistry</h3>
                <p className="text-center px-4">Pakistan ↔ England Fashion Bridge</p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="1200">
            <button className="px-8 py-3 bg-white text-green-800 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Our Stories
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-white border-opacity-20">
              View Collection
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center" data-aos="fade-up" data-aos-delay="1400">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white">
          <path d="M0,0V120H1200V0C1200,0,1200,0,1200,0C1050,60,950,60,900,60C850,60,750,0,600,0C450,0,350,60,300,60C250,60,150,0,0,0Z" fill="currentColor" fillOpacity="0.1"></path>
        </svg>
      </div>
    </div>
  );
}