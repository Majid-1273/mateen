import React, { useEffect, useState } from 'react';

const ServiceCard = ({ 
  title = "Premium Tailoring Service", 
  description = "Expert craftsmanship combining Pakistani heritage with British precision to deliver exceptional quality garments.", 
  icon = "✨", 
  image = "", 
  reverse = false, 
  category = "service",
  isCompact = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // AOS would be initialized here in a real app
  }, []);

  // Professional tailoring images
  const getDefaultImage = () => {
    const imageMap = {
      'custom': 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      'tailoring': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      'design': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      'fabric': 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      'consultation': 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      'embroidery': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      'suits': 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      'fashion': 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=600&fit=crop&crop=center&auto=format&q=80'
    };
    
    if (!title || typeof title !== 'string') {
      return 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop&crop=center&auto=format&q=80';
    }
    
    const lowerTitle = title.toLowerCase();
    for (const [key, imageUrl] of Object.entries(imageMap)) {
      if (lowerTitle.includes(key)) {
        return imageUrl;
      }
    }
    return 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop&crop=center&auto=format&q=80';
  };

  const displayImage = image || getDefaultImage();

  // Enhanced services data with professional images
  const defaultServices = [
    {
      title: "Bespoke Tailoring",
      description: "Masterfully crafted suits combining traditional Pakistani artistry with contemporary British sophistication.",
      icon: "👔",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      features: ["Custom Fit", "Premium Fabrics", "Hand-finished"]
    },
    {
      title: "Traditional Embroidery",
      description: "Exquisite handcrafted embroidery featuring authentic Pakistani patterns and contemporary design elements.",
      icon: "🪡", 
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      features: ["Hand Embroidered", "Cultural Motifs", "Gold Threading"]
    },
    {
      title: "Fashion Consultation",
      description: "Expert styling guidance blending cultural heritage with modern fashion trends for distinctive, elegant designs.",
      icon: "💫",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      features: ["Style Planning", "Cultural Fusion", "Trend Analysis"]
    }
  ];

  // If no specific service data is provided, render the full layout
  if (!title || title === "Premium Tailoring Service") {
    return (
      <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-emerald-50 relative overflow-hidden" style={{ height: 'calc(100vh - 80px)' }}>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-emerald-200 to-green-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-red-200 to-pink-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 h-full flex flex-col relative z-10">
          {/* Compact Header Section */}
          <div className="text-center py-4 flex-shrink-0">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-3">
              <span className="text-lg">🏆</span>
              <span className="text-emerald-600 font-semibold text-sm">Premium Services</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold mb-2 leading-tight">
              <span className="text-gray-800">Crafting Excellence in </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-red-600">
                Every Stitch
              </span>
            </h2>
            
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Where Pakistani craftsmanship meets British precision
            </p>
          </div>
          
          {/* Three Cards Grid - Takes remaining space */}
          <div className="flex-1 min-h-0 pb-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
              {defaultServices.map((service, index) => (
                <div key={index} className="h-full">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    image={service.image}
                    reverse={false}
                    isCompact={true}
                    features={service.features}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Compact Trust Indicators */}
          <div className="flex-shrink-0 text-center py-2">
            <div className="inline-flex items-center gap-4 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg text-xs">
              <div className="flex items-center gap-1">
                <span className="text-sm">⭐</span>
                <span className="text-gray-700 font-medium">Premium Quality</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-1">
                <span className="text-sm">🚀</span>
                <span className="text-gray-700 font-medium">Fast Delivery</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-1">
                <span className="text-sm">💝</span>
                <span className="text-gray-700 font-medium">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Enhanced Individual Service Card Component
  return (
    <div 
      className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-700 transform hover:-translate-y-2 border border-white/50 hover:border-emerald-200/50 w-full ${isCompact ? 'h-full flex flex-col' : 'mb-8 flex flex-col md:flex-row'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-green-400 to-red-500 opacity-80"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-6 left-8 w-1 h-1 bg-red-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      
      {/* Enhanced Image Section */}
      <div className={`${isCompact ? 'w-full h-32' : 'md:w-1/2 h-48 md:h-64'} relative overflow-hidden flex-shrink-0`}>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-red-600/20 z-10"></div>
        
        <img 
          src={displayImage} 
          alt={title || "Service"}
          className={`w-full h-full object-cover object-center transition-all duration-1000 ${
            isHovered ? 'scale-110 brightness-110' : 'scale-100 brightness-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Enhanced Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-red-50 flex items-center justify-center">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border-2 border-red-200 border-b-red-500 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '0.8s'}}></div>
            </div>
          </div>
        )}

        {/* Enhanced Corner Badge */}
        <div className="absolute top-3 right-3 z-30">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-red-500 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-white/30">
            <span className="text-white text-lg">{icon}</span>
          </div>
        </div>

        {/* Image Overlay Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent z-20"></div>
      </div>

      {/* Enhanced Content Section */}
      <div className={`${isCompact ? 'w-full p-3' : 'md:w-1/2 p-8'} flex flex-col justify-center relative flex-1`}>
        {/* Enhanced Background Pattern */}
        <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-red-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Enhanced Header */}
          <div className="mb-2">
            <h3 className={`${isCompact ? 'text-base font-bold mb-1' : 'text-3xl md:text-4xl font-bold mb-4'} bg-gradient-to-r from-emerald-700 via-green-600 to-red-700 bg-clip-text text-transparent leading-tight`}>
              {title}
            </h3>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-red-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
              <div className="w-1 h-1 bg-red-400 rounded-full"></div>
            </div>
          </div>

          {/* Enhanced Description */}
          <p className={`text-slate-600 leading-relaxed mb-3 ${isCompact ? 'text-xs flex-1' : 'text-lg'} group-hover:text-slate-700 transition-colors duration-300`}>
            {description}
          </p>

          {/* Features List (if available) */}
          {defaultServices.find(s => s.title === title)?.features && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {defaultServices.find(s => s.title === title).features.map((feature, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded-full border border-emerald-200/50">
                    <span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Section */}
          <div>
            {/* Enhanced Country Badges */}
            <div className="mb-2">
              <div className="flex flex-wrap gap-1">
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 text-xs font-medium px-2 py-1 rounded-full border border-emerald-200/50">
                  <span>🇵🇰</span>
                  <span>Heritage</span>
                </span>
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-red-50 to-pink-50 text-red-700 text-xs font-medium px-2 py-1 rounded-full border border-red-200/50">
                  <span>🇬🇧</span>
                  <span>Precision</span>
                </span>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <button 
              className={`w-full group/btn relative ${isCompact ? 'px-3 py-2 text-xs' : 'px-8 py-4 text-base'} bg-gradient-to-r from-emerald-600 via-green-500 to-red-600 hover:from-emerald-700 hover:via-green-600 hover:to-red-700 text-white font-bold rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden border border-white/20`}
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                <span>Learn More</span>
                <svg 
                  className="w-3 h-3 transition-all duration-500 group-hover/btn:translate-x-1 group-hover/btn:scale-110" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              
              {/* Enhanced Button Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-red-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Hover Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-700 pointer-events-none ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-green-400/5 to-red-500/10"></div>
        <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)]"></div>
      </div>
    </div>
  );
};

export default ServiceCard;