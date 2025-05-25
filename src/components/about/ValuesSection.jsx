import { Users, Scissors, Award } from 'lucide-react';
import { useEffect } from 'react';
import React from 'react';

const ValuesSection = () => {
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

  const values = [
    {
      icon: <Scissors className="w-10 h-10 text-white" />,
      title: "Traditional Craftsmanship",
      description: "Preserving centuries-old Pakistani tailoring techniques with modern British precision and quality standards",
      color: "bg-gradient-to-br from-green-800 to-green-900",
      accent: "border-green-600",
      flagEmoji: "🧵",
      bgPattern: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Cross-Cultural Unity",
      description: "Building bridges between Pakistani artisan communities and British fashion enthusiasts through shared passion for quality",
      color: "bg-gradient-to-br from-red-700 to-red-800",
      accent: "border-red-600",
      flagEmoji: "🤝",
      bgPattern: "url('https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
    },
    {
      icon: <Award className="w-10 h-10 text-white" />,
      title: "Excellence Standards",
      description: "Combining Pakistani artistry with British attention to detail for unmatched quality in every stitch",
      color: "bg-gradient-to-br from-green-700 via-red-700 to-green-800",
      accent: "border-yellow-500",
      flagEmoji: "👑",
      bgPattern: "url('https://images.unsplash.com/photo-1594736797933-d0d64a9b9f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
    }
  ];

  return (
    <div 
      className="relative overflow-hidden"
      style={{
        marginTop: '80px',
        height: 'calc(100vh - 80px)',
        background: `linear-gradient(135deg, 
          rgba(22, 101, 52, 0.05) 0%, 
          rgba(255, 255, 255, 1) 25%, 
          rgba(255, 255, 255, 1) 75%, 
          rgba(185, 28, 28, 0.05) 100%)`
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-700 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-green-600 to-red-600 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10 h-full flex flex-col justify-center py-4">
        {/* Header Section */}
        <div className="text-center mb-6" data-aos="fade-down">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <span className="text-2xl lg:text-3xl">🌙</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-800 via-red-700 to-green-800 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <span className="text-2xl lg:text-3xl">👑</span>
          </div>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-green-800 to-red-700 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-green-800 to-red-700 rounded-full"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-green-800 rounded-full"></div>
          </div>
          <p className="text-gray-700 max-w-3xl mx-auto text-sm lg:text-base leading-relaxed">
            The sacred principles that bridge two cultures, uniting Pakistani heritage with British elegance
          </p>
          <div className="flex items-center justify-center space-x-4 mt-4 text-xs lg:text-sm text-gray-600">
            <span className="flex items-center space-x-1">
              <img src="https://flagcdn.com/16x12/pk.png" alt="Pakistan" className="rounded-sm shadow-sm" />
              <span>Made in Pakistan</span>
            </span>
            <span className="text-gray-400">↔</span>
            <span className="flex items-center space-x-1">
              <img src="https://flagcdn.com/16x12/gb.png" alt="England" className="rounded-sm shadow-sm" />
              <span>Delivered to England</span>
            </span>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 flex-1 items-center max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${value.accent} border-2 h-auto`}
              data-aos="fade-up" 
              data-aos-delay={index * 200}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  backgroundImage: value.bgPattern,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon Header */}
                <div className={`${value.color} p-4 lg:p-6 flex flex-col items-center justify-center relative overflow-hidden`}>
                  <div className="absolute top-1 right-1 text-lg opacity-70">
                    {value.flagEmoji}
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-md transform scale-110"></div>
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 text-white flex items-center justify-center">
                        {React.cloneElement(value.icon, { className: "w-6 h-6 lg:w-8 lg:h-8 text-white" })}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                </div>
                
                {/* Text Content */}
                <div className="bg-white p-4 lg:p-6 relative">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 via-red-600 to-green-600"></div>
                  <h3 className="text-base lg:text-lg font-bold mb-2 lg:mb-3 text-gray-800 group-hover:text-green-800 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-xs lg:text-sm">
                    {value.description}
                  </p>
                  
                  {/* Decorative Bottom Element */}
                  <div className="flex items-center justify-between mt-3 lg:mt-4 pt-2 lg:pt-3 border-t border-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">
                      {index === 0 ? 'Heritage' : index === 1 ? 'Unity' : 'Excellence'}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/0 via-red-600/0 to-green-600/0 group-hover:from-green-600/5 group-hover:via-red-600/5 group-hover:to-green-600/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Section */}
        <div className="mt-4 text-center" data-aos="fade-up" data-aos-delay="600">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-4 lg:px-6 py-2 lg:py-3 shadow-lg border border-gray-200">
            <img src="https://flagcdn.com/20x15/pk.png" alt="Pakistan Flag" className="rounded shadow-sm" />
            <span className="text-gray-600 font-medium text-xs lg:text-sm">Bridging Cultures</span>
            <div className="w-6 h-0.5 bg-gradient-to-r from-green-600 to-red-600 rounded-full"></div>
            <span className="text-gray-600 font-medium text-xs lg:text-sm">Creating Excellence</span>
            <img src="https://flagcdn.com/20x15/gb.png" alt="England Flag" className="rounded shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;