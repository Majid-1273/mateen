import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Video, ShoppingBag, Globe, Clock, Users, Star, ArrowRight, Calendar, Package, Truck, CheckCircle } from 'lucide-react';

// CTA Section Component
const CTASection = () => {
  return (
    <div className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-[#edefee] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#aa2939] via-[#edefee] to-[#09341c]"></div>
        <div className="absolute -top-6 sm:-top-8 md:-top-10 -right-6 sm:-right-8 md:-right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#aa2939] bg-opacity-10 rounded-full"></div>
        <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 -left-6 sm:-left-8 md:-left-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#09341c] bg-opacity-10 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#aa2939] bg-opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 bg-[#09341c] bg-opacity-30 rounded-full animate-pulse delay-1000"></div>
        {/* Additional decorative elements for larger screens */}
        <div className="hidden lg:block absolute top-1/4 left-1/3 w-2 h-2 bg-[#aa2939] bg-opacity-20 rounded-full animate-pulse delay-500"></div>
        <div className="hidden lg:block absolute bottom-1/4 right-1/3 w-3 h-3 bg-[#09341c] bg-opacity-20 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 text-center relative z-10">
        {/* Main heading */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-800 leading-tight">
            Ready to Experience{' '}
            <span className="bg-gradient-to-r from-[#aa2939] to-[#09341c] bg-clip-text text-transparent">
              Authentic
            </span>{' '}
            Shopping?
          </h2>
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 mb-4 sm:mb-5 md:mb-6">
            <div className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-[#aa2939] to-transparent rounded-full"></div>
            <Sparkles className="text-[#aa2939] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <div className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-gradient-to-l from-[#09341c] to-transparent rounded-full"></div>
          </div>
        </div>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 lg:mb-14 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
          Join thousands of satisfied customers who trust us to bring Pakistan's finest fashion to England
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 justify-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20 px-2 sm:px-0">
          <button className="group bg-gradient-to-r from-[#aa2939] to-[#c13449] text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-semibold hover:from-[#8f1f2f] hover:to-[#aa2939] transition-all duration-300 transform hover:scale-105 shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl flex items-center space-x-2 sm:space-x-3 justify-center w-full sm:w-auto">
            <Video className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">Book Live Shopping Session</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
          </button>
          
          <button className="group bg-white border-2 border-gray-200 text-gray-800 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-semibold hover:border-[#09341c] hover:bg-[#09341c] hover:bg-opacity-5 transition-all duration-300 transform hover:scale-105 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl flex items-center space-x-2 sm:space-x-3 justify-center w-full sm:w-auto">
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">Start Personal Shopping</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
          </button>
        </div>

        {/* Bottom decorative line to transition to footer */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4">
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-px bg-gradient-to-r from-transparent via-[#aa2939] via-opacity-30 to-transparent"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#aa2939] rounded-full"></div>
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-px bg-gradient-to-r from-transparent via-[#09341c] via-opacity-30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;