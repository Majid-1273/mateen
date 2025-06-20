import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Video, ShoppingBag, Globe, Clock, Users, Star, ArrowRight, Calendar, Package, Truck, CheckCircle } from 'lucide-react';

// Hero Section Component
const HeroSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'all 0.6s ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-red-900 text-white overflow-hidden" 
         style={{ marginTop: '80px', height: 'calc(100vh - 80px)' }}>
      <div className="absolute inset-0" data-aos="zoom-in">
        <img 
          src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Traditional textile craftsmanship" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-red-900/80"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 right-16 text-4xl opacity-20 animate-pulse" data-aos="fade-in" data-aos-delay="500">🌙</div>
        <div className="absolute top-32 left-16 text-3xl opacity-20 animate-pulse" data-aos="fade-in" data-aos-delay="700">👑</div>
        <div className="absolute bottom-24 right-24 text-3xl opacity-20 animate-pulse" data-aos="fade-in" data-aos-delay="900">🕌</div>
        <div className="absolute bottom-16 left-24 text-3xl opacity-20 animate-pulse" data-aos="fade-in" data-aos-delay="1100">🏰</div>
      </div>

      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-white to-red-400"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-white to-green-400"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10 flex items-center justify-center h-full">
        <div className="max-w-4xl w-full text-center">
          <div className="flex items-center justify-center space-x-3 mb-4" data-aos="fade-down">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-green-300">🌙 Pakistan</span>
                <span className="text-white">↔</span>
                <span className="text-red-300">England 👑</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-red-600 px-3 py-1 rounded-full text-sm font-semibold">
              Est. 1995
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-aos="fade-up">
            <span className="block bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
              Bridging Cultures
            </span>
            <span className="block bg-gradient-to-r from-green-400 via-red-400 to-green-400 bg-clip-text text-transparent">
              Through Fashion
            </span>
          </h1>

          <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
            <p className="text-lg md:text-xl mb-4 text-green-100 max-w-3xl mx-auto">
              Your gateway to Pakistan's finest fashion, delivered to England. Experience authentic shopping through 
              <span className="text-red-300 font-semibold"> live sessions</span> and 
              <span className="text-green-300 font-semibold"> personal shopping services</span>.
            </p>
            
            <div className="flex items-center justify-center space-x-4 my-6" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-transparent rounded-full"></div>
              <Sparkles className="text-white w-6 h-6" />
              <div className="w-16 h-1 bg-gradient-to-l from-red-400 to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" data-aos="zoom-in" data-aos-delay="400">
            <button className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 justify-center">
              <Video className="w-5 h-5" />
              <span>Book Live Shopping</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 justify-center">
              <ShoppingBag className="w-5 h-5" />
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;