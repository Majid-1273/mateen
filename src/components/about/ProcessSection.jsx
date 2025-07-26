import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Video, ShoppingBag, Globe, Clock, Users, Star, ArrowRight, Calendar, Package, Truck, CheckCircle } from 'lucide-react';

// Process Section Component
const ProcessSection = () => {
  const steps = [
    {
      step: 1,
      icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Book & Browse",
      description: "Schedule a live shopping session or browse websites to select your favorites"
    },
    {
      step: 2,
      icon: <Video className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Shop Live",
      description: "Join our live video call as we visit stores or assist with online selections"
    },
    {
      step: 3,
      icon: <Package className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Quality Check",
      description: "We inspect every item for quality, size accuracy, and authenticity"
    },
    {
      step: 4,
      icon: <Truck className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Fast Delivery",
      description: "Secure packaging and express shipping straight to your door in England"
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-gray-50" style={{ backgroundColor: '#edefee' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#aa2939' }}>
            Simple. Seamless. Secure.
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#09341c' }}>
            From selection to delivery, we've streamlined every step of your shopping journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center group relative">
              <div className="relative mb-4 sm:mb-6">
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, #aa2939 0%, #09341c 100%)` 
                  }}
                >
                  {item.icon}
                </div>
                <div 
                  className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm font-bold shadow-md"
                  style={{ 
                    backgroundColor: '#edefee',
                    borderColor: '#aa2939',
                    color: '#aa2939'
                  }}
                >
                  {item.step}
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: '#aa2939' }}>
                {item.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed px-2" style={{ color: '#09341c' }}>
                {item.description}
              </p>
              
              {/* Connection lines for larger screens */}
              {index < steps.length - 1 && (
                <>
                  {/* Horizontal line for lg and above */}
                  <div 
                    className="hidden lg:block absolute top-8 sm:top-10 left-full w-full h-px transform translate-x-4 -translate-y-1/2"
                    style={{ 
                      background: `linear-gradient(90deg, #aa2939 0%, #09341c 100%)`,
                      opacity: 0.3
                    }}
                  ></div>
                  
                  {/* Vertical line for sm screens in 2-column layout */}
                  {index % 2 === 0 && index < 2 && (
                    <div 
                      className="hidden sm:block lg:hidden absolute top-full left-1/2 w-px h-8 transform -translate-x-1/2"
                      style={{ 
                        background: `linear-gradient(180deg, #aa2939 0%, #09341c 100%)`,
                        opacity: 0.3
                      }}
                    ></div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button 
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
            style={{ 
              background: `linear-gradient(135deg, #aa2939 0%, #09341c 100%)` 
            }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            Start Your Shopping Journey
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm" style={{ color: '#09341c', opacity: 0.7 }}>
            Trusted by thousands of customers across England
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;