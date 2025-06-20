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
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real experiences from our valued customers across England
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;