import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Video, ShoppingBag, Globe, Clock, Users, Star, ArrowRight, Calendar, Package, Truck, CheckCircle } from 'lucide-react';

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ayesha Khan",
      location: "London",
      text: "The live shopping experience was incredible! I felt like I was actually in the store in Karachi. The quality of the suits I received was exactly what I expected.",
      rating: 5
    },
    {
      name: "Fatima Ali",
      location: "Manchester",
      text: "Finally, a service that understands what we need! The personal shopping service saved me so much time, and the delivery was faster than I expected.",
      rating: 5
    },
    {
      name: "Zara Ahmed",
      location: "Birmingham",
      text: "I've been using Samundar Paar for over a year now. The team is so professional and they really care about getting every detail right.",
      rating: 5
    }
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#edefee' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#aa2939] to-[#09341c] bg-clip-text text-transparent leading-tight">
            What Our Customers Say
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto px-4">
            Real experiences from our valued customers across England
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-[#aa2939]/20 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 sm:mb-8 italic leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg"
                  style={{ background: `linear-gradient(135deg, #aa2939 0%, #09341c 100%)` }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3 sm:ml-4">
                  <div className="font-semibold text-sm sm:text-base" style={{ color: '#09341c' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add a subtle pattern or decoration */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#aa2939] to-transparent"></div>
            <Sparkles className="w-4 h-4" style={{ color: '#aa2939' }} />
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#aa2939] to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;