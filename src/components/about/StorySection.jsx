import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Video, ShoppingBag, Globe, Clock, Users, Star, ArrowRight, Calendar, Package, Truck, CheckCircle } from 'lucide-react';
import storyImage from '../../data/images/Image_fx (10).jpg';

// Story Section Component
const StorySection = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24" style={{ background: 'linear-gradient(135deg, #aa2939 0%, #09341c 50%, #aa2939 100%)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block" style={{ color: '#edefee' }}>Our Journey</span>
              <span className="block" style={{ color: '#edefee', opacity: 0.8 }}>Since 1995</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed">
              <p style={{ color: '#edefee', opacity: 0.9 }}>
                Born from a simple vision: to connect the Pakistani diaspora in England with the rich fashion heritage of their homeland. What started as a small family business has grown into a trusted bridge between two cultures.
              </p>
              
              <p style={{ color: '#edefee', opacity: 0.9 }}>
                We understand the longing for authentic Pakistani fashion - the intricate embroidery, the vibrant colors, the perfect fit that only comes from traditional craftsmanship. That's why we created a service that brings the entire shopping experience to you.
              </p>
              
              <p style={{ color: '#edefee', opacity: 0.9 }}>
                Today, we're proud to serve customers across England, helping them stay connected to their roots while embracing their new home.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(237, 239, 238, 0.1)' }}>
                <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#edefee' }}>1000+</div>
                <div className="text-sm sm:text-base" style={{ color: '#edefee', opacity: 0.8 }}>Happy Customers</div>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(237, 239, 238, 0.1)' }}>
                <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#edefee' }}>50+</div>
                <div className="text-sm sm:text-base" style={{ color: '#edefee', opacity: 0.8 }}>Partner Brands</div>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div 
              className="rounded-2xl p-6 sm:p-8 border backdrop-blur-sm"
              style={{ 
                backgroundColor: 'rgba(237, 239, 238, 0.1)', 
                borderColor: 'rgba(237, 239, 238, 0.2)' 
              }}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={storyImage} 
                  alt="Traditional Pakistani fashion" 
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ background: 'linear-gradient(45deg, #aa2939, #09341c)' }}
                ></div>
              </div>
              
              <blockquote className="text-base sm:text-lg italic text-center mb-4" style={{ color: '#edefee' }}>
                "Connecting hearts, one garment at a time. From the bustling bazaars of Lahore to the elegant streets of London."
              </blockquote>
              
              <div className="text-center text-sm" style={{ color: '#edefee', opacity: 0.7 }}>
                - Our Mission Statement
              </div>
            </div>
            
            {/* Decorative elements */}
            <div 
              className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full opacity-20 animate-pulse"
              style={{ backgroundColor: '#edefee' }}
            ></div>
            <div 
              className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full opacity-15 animate-pulse"
              style={{ backgroundColor: '#edefee' }}
            ></div>
          </div>
        </div>
        
        {/* Bottom decorative line */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div 
            className="h-px w-full opacity-30"
            style={{ backgroundColor: '#edefee' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;