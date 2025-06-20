import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Video, ShoppingBag, Globe, Clock, Users, Star, ArrowRight, Calendar, Package, Truck, CheckCircle } from 'lucide-react';


// CTA Section Component
const CTASection = () => {
  return (
    <div className="relative py-20 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-white to-red-400"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-100 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-green-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-red-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
        {/* Main heading */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Ready to Experience <span className="bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">Authentic</span> Shopping?
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-transparent rounded-full"></div>
            <Sparkles className="text-green-600 w-6 h-6" />
            <div className="w-16 h-1 bg-gradient-to-l from-red-400 to-transparent rounded-full"></div>
          </div>
        </div>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of satisfied customers who trust us to bring Pakistan's finest fashion to England
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-5 rounded-2xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3 justify-center">
            <Video className="w-6 h-6" />
            <span className="text-lg">Book Live Shopping Session</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="group bg-white border-2 border-gray-200 text-gray-800 px-10 py-5 rounded-2xl font-semibold hover:border-red-400 hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 justify-center">
            <ShoppingBag className="w-6 h-6" />
            <span className="text-lg">Start Personal Shopping</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        

        {/* Bottom decorative line to transition to footer */}
        <div className="mt-16 flex items-center justify-center space-x-4">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;