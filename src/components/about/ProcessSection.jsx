import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Video, ShoppingBag, Globe, Clock, Users, Star, ArrowRight, Calendar, Package, Truck, CheckCircle } from 'lucide-react';

// Process Section Component
const ProcessSection = () => {
  const steps = [
    {
      step: 1,
      icon: <Calendar className="w-6 h-6" />,
      title: "Book & Browse",
      description: "Schedule a live shopping session or browse websites to select your favorites"
    },
    {
      step: 2,
      icon: <Video className="w-6 h-6" />,
      title: "Shop Live",
      description: "Join our live video call as we visit stores or assist with online selections"
    },
    {
      step: 3,
      icon: <Package className="w-6 h-6" />,
      title: "Quality Check",
      description: "We inspect every item for quality, size accuracy, and authenticity"
    },
    {
      step: 4,
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Secure packaging and express shipping straight to your door in England"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Simple. Seamless. Secure.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From selection to delivery, we've streamlined every step of your shopping journey
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-green-600 flex items-center justify-center text-sm font-bold text-green-600">
                  {item.step}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-green-300 to-red-300 transform translate-x-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;