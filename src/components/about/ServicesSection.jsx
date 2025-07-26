import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Video, ShoppingBag, Globe, Clock, Users, Star, ArrowRight, Calendar, Package, Truck, CheckCircle } from 'lucide-react';

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: <Video className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Live Shopping Experience",
      description: "Book a personal appointment and shop live from your favorite Pakistani brands through video calls. Our team visits the stores for you.",
      features: ["Real-time video shopping", "Personal stylist guidance", "Live size consultation", "Instant product viewing"]
    },
    {
      icon: <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Personal Shopping Service",
      description: "Select items from any Pakistani brand's website, share your choices with us, and we'll handle the rest - from purchase to delivery.",
      features: ["Website-based ordering", "Size verification", "Quality checking", "Secure packaging"]
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Global Delivery",
      description: "Fast and secure shipping from Pakistan to England, ensuring your fashion reaches you in perfect condition.",
      features: ["Express shipping", "Tracking included", "Insurance coverage", "Customs handling"]
    }
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white" style={{backgroundColor: '#edefee'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r bg-clip-text text-transparent" 
              style={{
                backgroundImage: `linear-gradient(to right, #aa2939, #09341c)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
            How We Bridge the Distance
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-2">
            Three innovative ways to bring Pakistan's finest fashion directly to your doorstep in England
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                     style={{
                       background: `linear-gradient(to right, rgba(170, 41, 57, 0.1), rgba(9, 52, 28, 0.1))`,
                       color: '#aa2939'
                     }}>
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4" style={{color: '#09341c'}}>
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-500">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 mr-2 flex-shrink-0" style={{color: '#aa2939'}} />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;