import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Video, ShoppingBag, Globe, Clock, Users, Star, ArrowRight, Calendar, Package, Truck, CheckCircle } from 'lucide-react';


// Story Section Component
const StorySection = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-green-900 via-green-800 to-red-900 text-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block text-green-300">Our Journey</span>
              <span className="block text-red-300">Since 1995</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-200">
                Born from a simple vision: to connect the Pakistani diaspora in England with the rich fashion heritage of their homeland. What started as a small family business has grown into a trusted bridge between two cultures.
              </p>
              
              <p className="text-gray-200">
                We understand the longing for authentic Pakistani fashion - the intricate embroidery, the vibrant colors, the perfect fit that only comes from traditional craftsmanship. That's why we created a service that brings the entire shopping experience to you.
              </p>
              
              <p className="text-gray-200">
                Today, we're proud to serve customers across England, helping them stay connected to their roots while embracing their new home.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">1000+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-300">50+</div>
                <div className="text-sm text-gray-300">Partner Brands</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1583391733956-6c78276477e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Traditional Pakistani fashion" 
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <blockquote className="text-lg italic text-center">
                "Connecting hearts, one garment at a time. From the bustling bazaars of Lahore to the elegant streets of London."
              </blockquote>
              <div className="text-center mt-4 text-sm text-gray-300">- Our Mission Statement</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;