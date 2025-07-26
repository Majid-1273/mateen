import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Video, ShoppingBag, Globe, Clock, Users, Star, ArrowRight, Calendar, Package, Truck, CheckCircle } from 'lucide-react';


// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Live Shopping Experience",
      description: "Book a personal appointment and shop live from your favorite Pakistani brands through video calls. Our team visits the stores for you.",
      features: ["Real-time video shopping", "Personal stylist guidance", "Live size consultation", "Instant product viewing"]
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Personal Shopping Service",
      description: "Select items from any Pakistani brand's website, share your choices with us, and we'll handle the rest - from purchase to delivery.",
      features: ["Website-based ordering", "Size verification", "Quality checking", "Secure packaging"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Delivery",
      description: "Fast and secure shipping from Pakistan to England, ensuring your fashion reaches you in perfect condition.",
      features: ["Express shipping", "Tracking included", "Insurance coverage", "Customs handling"]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">
            How We Bridge the Distance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three innovative ways to bring Pakistan's finest fashion directly to your doorstep in England
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-red-100 rounded-2xl flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
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