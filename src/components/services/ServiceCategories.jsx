import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from "./ServiceCard";

const ServiceCategories = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleServices, setVisibleServices] = useState(6);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const services = [
    {
      title: "British Tailoring",
      description: "Premium British tailoring with attention to detail and precision cutting techniques. We specialize in bespoke suits, formal wear, and classic British fashion that meets the highest standards of Savile Row craftsmanship.",
      icon: "🎩",
      category: "tailoring",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop&crop=center",
      country: "uk"
    },
    {
      title: "Pakistani Embroidery",
      description: "Traditional Pakistani embroidery expertise featuring intricate patterns, vibrant colors, and handcrafted details that showcase the rich textile heritage of South Asia. From delicate thread work to stunning mirror embellishments.",
      icon: "🧵",
      category: "embroidery",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=400&fit=crop&crop=center",
      reverse: true,
      country: "pk"
    },
    {
      title: "Custom Design Services",
      description: "Collaborative design process where we bring your vision to life. Our team creates unique patterns and styles that blend cultural influences with modern fashion trends, ensuring each piece tells your story.",
      icon: "✏️",
      category: "design",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
      country: "both"
    },
    {
      title: "Industrial Stitching",
      description: "Large-scale production capabilities with state-of-the-art machinery and quality control processes to deliver consistent, high-quality results for bulk orders. Perfect for fashion brands and retailers.",
      icon: "🏭",
      category: "production",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center",
      reverse: true,
      country: "pk"
    },
    {
      title: "Export Services",
      description: "End-to-end export solutions with logistics management, customs handling, and international shipping expertise to deliver your orders anywhere in the world. Seamless Pakistan to UK delivery guaranteed.",
      icon: "🚢",
      category: "logistics",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop&crop=center",
      country: "both"
    },
    {
      title: "Quality Consulting",
      description: "Expert consultation on textile sourcing, production optimization, and international market trends to help your business grow in the global fashion industry. Bridge Pakistani craftsmanship with British market demands.",
      icon: "💼",
      category: "consulting",
      image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&h=400&fit=crop&crop=center",
      reverse: true,
      country: "both"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'tailoring', name: 'Tailoring', icon: '🎩' },
    { id: 'embroidery', name: 'Embroidery', icon: '🧵' },
    { id: 'design', name: 'Design', icon: '✏️' },
    { id: 'production', name: 'Production', icon: '🏭' },
    { id: 'logistics', name: 'Logistics', icon: '🚢' },
    { id: 'consulting', name: 'Consulting', icon: '💼' }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  const handleLoadMore = () => {
    setVisibleServices(prev => prev + 3);
  };

  return (
    <div 
      className="relative bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden"
      style={{ height: 'calc(100vh - 80px)' }}
    >
      {/* Background Pattern - Simplified */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-36 h-36 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-green-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-red-700 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col py-8">
        {/* Header Section - Compact */}
        <div className="text-center mb-8">
          <div 
            className="inline-flex items-center gap-2 mb-4"
            data-aos="fade-down"
          >
            <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-red-600 rounded-full"></div>
            <span className="text-sm font-semibold text-green-700 tracking-wider uppercase">Our Services</span>
            <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-green-600 rounded-full"></div>
          </div>
          
          <h2 
            className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-700 via-slate-800 to-red-700 bg-clip-text text-transparent leading-tight"
            data-aos="fade-up"
          >
            Specialized Services
            <br />
            <span className="text-xl md:text-2xl">Bridging Two Nations</span>
          </h2>
          
          <p 
            className="text-sm md:text-base max-w-3xl mx-auto text-slate-600 leading-relaxed mb-6"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            From <span className="font-semibold text-green-700">traditional Pakistani craftsmanship</span> to <span className="font-semibold text-red-700">British precision tailoring</span>, we offer comprehensive services that honor both cultures.
          </p>

          {/* Service Categories Filter - Compact */}
          <div 
            className="flex flex-wrap justify-center gap-2 mb-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {categories.slice(0, 4).map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`group flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-green-600 to-red-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-green-300'
                }`}
              >
                <span className="text-sm">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Stats Bar - Compact */}
          <div 
            className="flex flex-wrap justify-center gap-4 mb-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">{filteredServices.filter(s => s.country === 'pk' || s.country === 'both').length}</span>
              </div>
              <span className="text-xs font-medium text-green-700">Pakistani</span>
            </div>
            
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">{filteredServices.filter(s => s.country === 'uk' || s.country === 'both').length}</span>
              </div>
              <span className="text-xs font-medium text-red-700">British</span>
            </div>

            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">{filteredServices.length}</span>
              </div>
              <span className="text-xs font-medium text-slate-700">Total</span>
            </div>
          </div>
        </div>

        {/* Services Grid - Scrollable */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="space-y-8 max-w-6xl mx-auto pb-4">
            {filteredServices.slice(0, visibleServices).map((service, index) => (
              <div key={index} className="relative">
                {/* Service Number Badge - Smaller */}
                <div 
                  className="absolute -left-2 top-4 z-20 w-8 h-8 bg-gradient-to-br from-green-600 to-red-600 rounded-full flex items-center justify-center shadow-lg"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <span className="text-white font-bold text-xs">{String(index + 1).padStart(2, '0')}</span>
                </div>

                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  image={service.image}
                  reverse={service.reverse}
                  category={service.category}
                />

                {/* Country Flag Indicator - Smaller */}
                <div className="absolute top-2 right-2 z-20">
                  {service.country === 'pk' && (
                    <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      <span>🇵🇰</span> Pakistani
                    </div>
                  )}
                  {service.country === 'uk' && (
                    <div className="flex items-center gap-1 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      <span>🇬🇧</span> British
                    </div>
                  )}
                  {service.country === 'both' && (
                    <div className="flex items-center gap-1 bg-gradient-to-r from-green-600 to-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      <span>🌍</span> Cross-Cultural
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Load More Button - Inline */}
            {visibleServices < filteredServices.length && (
              <div className="text-center pt-4">
                <button
                  onClick={handleLoadMore}
                  className="group px-6 py-3 bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    Load More Services
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA Section - Compact */}
        <div 
          className="text-center mt-4"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-green-100 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-green-700 to-red-700 bg-clip-text text-transparent">
              Ready to Bridge Traditions?
            </h3>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              Let us bring together the best of Pakistani craftsmanship and British precision for your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="px-6 py-2 bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm">
                Start Your Project
              </button>
              <button className="px-6 py-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #16a34a, #dc2626);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #15803d, #b91c1c);
        }
      `}</style>
    </div>
  );
};

export default ServiceCategories;