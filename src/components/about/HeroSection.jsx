import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Video, ShoppingBag, Globe, Clock, Users, Star, ArrowRight, Calendar, Package, Truck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  // Function to handle WhatsApp redirect
  const handleLiveShoppingClick = () => {
    const whatsappNumber = "+923214660662";
    const message = "Hi! I'm interested in live shopping. Can you help me get started?";
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <style jsx>{`
        .hero-container {
          background: linear-gradient(135deg, #aa2939 0%, #09341c 50%, #aa2939 100%);
          position: relative;
          overflow: hidden;
          margin-top: 60px;
          min-height: calc(100vh - 60px);
        }
        
        .hero-overlay {
          background: linear-gradient(135deg, rgba(170, 41, 57, 0.85) 0%, rgba(9, 52, 28, 0.75) 50%, rgba(170, 41, 57, 0.85) 100%);
        }
        
        .hero-flag-top {
          background: linear-gradient(to right, #aa2939 0%, #edefee 33%, #09341c 66%, #edefee 100%);
        }
        
        .hero-flag-bottom {
          background: linear-gradient(to right, #09341c 0%, #edefee 33%, #aa2939 66%, #edefee 100%);
        }
        
        .hero-badge {
          background: rgba(237, 239, 238, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(237, 239, 238, 0.3);
        }
        
        .hero-est-badge {
          background: linear-gradient(to right, #aa2939, #09341c);
        }
        
        .hero-btn-primary {
          background: linear-gradient(to right, #aa2939, #09341c);
          transition: all 0.3s ease;
        }
        
        .hero-btn-primary:hover {
          background: linear-gradient(to right, #8a1f2d, #072918);
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(170, 41, 57, 0.4);
        }
        
        .hero-btn-secondary {
          background: rgba(237, 239, 238, 0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(237, 239, 238, 0.3);
        }
        
        .hero-btn-secondary:hover {
          background: rgba(237, 239, 238, 0.2);
          border-color: rgba(237, 239, 238, 0.5);
          transform: scale(1.05);
        }
        
        .gradient-primary {
          background: linear-gradient(to right, #edefee, #aa2939, #edefee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-secondary {
          background: linear-gradient(to right, #aa2939, #09341c, #aa2939);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-divider-left {
          background: linear-gradient(to right, #aa2939, transparent);
        }
        
        .hero-divider-right {
          background: linear-gradient(to left, #09341c, transparent);
        }
        
        /* Mobile Responsive Styles */
        @media (max-width: 640px) {
          .hero-container {
            margin-top: 50px;
            min-height: calc(100vh - 50px);
            padding: 1rem 0.5rem;
          }
          
          .hero-title {
            font-size: 2rem !important;
            line-height: 1.2;
          }
          
          .hero-subtitle {
            font-size: 1rem !important;
            line-height: 1.4;
          }
          
          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }
          
          .hero-btn {
            width: 100%;
            padding: 1rem 1.5rem;
            font-size: 0.9rem;
          }
          
          .hero-badge-container {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .hero-badge {
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
          }
          
          .hero-decorative {
            display: none;
          }
        }
        
        @media (min-width: 641px) and (max-width: 768px) {
          .hero-container {
            margin-top: 60px;
            padding: 1.5rem 1rem;
          }
          
          .hero-title {
            font-size: 3rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.125rem !important;
          }
          
          .hero-btn {
            padding: 0.875rem 1.75rem;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-container {
            margin-top: 70px;
            padding: 2rem 1.5rem;
          }
          
          .hero-title {
            font-size: 4rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.25rem !important;
          }
        }
        
        @media (min-width: 1025px) {
          .hero-container {
            margin-top: 80px;
            padding: 2rem;
          }
          
          .hero-title {
            font-size: 5rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
      
      <div className="hero-container text-white">
        <div className="absolute inset-0" data-aos="zoom-in">
          <img 
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Traditional textile craftsmanship" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        <div className="hero-decorative absolute inset-0 overflow-hidden">
          <div className="absolute top-8 sm:top-16 right-8 sm:right-16 text-2xl sm:text-4xl opacity-20 animate-pulse" data-aos="fade-in" data-aos-delay="500">🌙</div>
          <div className="absolute top-16 sm:top-32 left-8 sm:left-16 text-xl sm:text-3xl opacity-20 animate-pulse" data-aos="fade-in" data-aos-delay="700">👑</div>
          <div className="absolute bottom-12 sm:bottom-24 right-12 sm:right-24 text-xl sm:text-3xl opacity-20 animate-pulse" data-aos="fade-in" data-aos-delay="900">🕌</div>
          <div className="absolute bottom-8 sm:bottom-16 left-12 sm:left-24 text-xl sm:text-3xl opacity-20 animate-pulse" data-aos="fade-in" data-aos-delay="1100">🏰</div>
        </div>

        <div className="hero-flag-top absolute top-0 left-0 w-full h-1 sm:h-2"></div>
        <div className="hero-flag-bottom absolute bottom-0 left-0 w-full h-1 sm:h-2"></div>

        <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10 flex items-center justify-center h-full min-h-screen">
          <div className="max-w-6xl w-full text-center py-8 sm:py-12">
            <div className="hero-badge-container flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6" data-aos="fade-down">
              <div className="hero-badge px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                <div className="flex items-center space-x-2 text-xs sm:text-sm">
                  <span style={{ color: '#aa2939' }}>🌙 Pakistan</span>
                  <span className="text-white">↔</span>
                  <span style={{ color: '#09341c' }}>England 👑</span>
                </div>
              </div>
              <div className="hero-est-badge px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold text-white">
                Est. 1995
              </div>
            </div>

            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight" data-aos="fade-up">
              <span className="block gradient-primary mb-2">
                Bridging Cultures
              </span>
              <span className="block gradient-secondary">
                Through Fashion
              </span>
            </h1>

            <div className="mb-6 sm:mb-8" data-aos="fade-up" data-aos-delay="200">
              <p className="hero-subtitle text-sm sm:text-lg md:text-xl mb-3 sm:mb-4 max-w-4xl mx-auto px-2" style={{ color: '#edefee' }}>
                Your gateway to Pakistan's finest fashion, delivered to England. Experience authentic shopping through 
                <span className="font-semibold" style={{ color: '#aa2939' }}> live sessions</span> and 
                <span className="font-semibold" style={{ color: '#09341c' }}> personal shopping services</span>.
              </p>
              
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 my-4 sm:my-6" data-aos="fade-up" data-aos-delay="300">
                <div className="hero-divider-left w-8 sm:w-16 h-0.5 sm:h-1 rounded-full"></div>
                <Sparkles className="text-white w-4 sm:w-6 h-4 sm:h-6" />
                <div className="hero-divider-right w-8 sm:w-16 h-0.5 sm:h-1 rounded-full"></div>
              </div>
            </div>

            <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2" data-aos="zoom-in" data-aos-delay="400">
              <button className="hero-btn hero-btn-primary group px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transform shadow-lg hover:shadow-xl flex items-center space-x-2 justify-center text-sm sm:text-base" onClick={handleLiveShoppingClick}>
                <Video className="w-4 h-4 sm:w-5 h-5" />
                <span>Book Live Shopping</span>
                <ArrowRight className="w-3 h-3 sm:w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <Link to="/services" className="hero-btn hero-btn-secondary group px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transform flex items-center space-x-2 justify-center text-sm sm:text-base">
                <ShoppingBag className="w-4 h-4 sm:w-5 h-5" />
                <span>Explore Services</span>
                <ArrowRight className="w-3 h-3 sm:w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;