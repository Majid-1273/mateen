import { useEffect, useState } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-red-900 text-white overflow-hidden" style={{ height: 'calc(100vh - 80px)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-8 text-4xl lg:text-6xl">🌙</div>
        <div className="absolute top-12 right-12 text-4xl lg:text-6xl">👑</div>
        <div className="absolute bottom-8 left-1/4 text-3xl lg:text-4xl">✨</div>
        <div className="absolute bottom-12 right-8 text-3xl lg:text-4xl">🕌</div>
        <div className="absolute top-1/2 left-8 text-3xl lg:text-4xl">🏰</div>
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-white to-red-400"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 via-white to-green-400"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10 h-full flex flex-col justify-center py-8">
        {/* Header */}
        <div className={`mb-6 lg:mb-8 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center space-x-3 mb-3 lg:mb-4">
            <div className="w-8 lg:w-12 h-0.5 bg-gradient-to-r from-transparent to-white"></div>
            <span className="text-sm lg:text-lg font-medium text-green-200">Pakistan ↔ England</span>
            <div className="w-8 lg:w-12 h-0.5 bg-gradient-to-l from-transparent to-white"></div>
          </div>
          <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4 bg-gradient-to-r from-white via-green-200 to-red-200 bg-clip-text text-transparent">
            Ready to Create Something Beautiful?
          </h2>
          <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-green-400 to-red-400 mx-auto rounded-full"></div>
        </div>

        {/* Description */}
        <div className={`max-w-2xl lg:max-w-3xl mx-auto mb-6 lg:mb-8 transition-all duration-1000 delay-200 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-base lg:text-xl text-green-100 mb-3 lg:mb-4 leading-relaxed">
            Whether you're looking for <span className="text-white font-semibold">premium women's suits</span>, 
            custom designs, or wholesale orders, we bridge the gap between 
            <span className="text-green-300 font-medium"> Pakistani craftsmanship</span> and 
            <span className="text-red-300 font-medium"> British excellence</span>.
          </p>
        </div>

        {/* Contact Options */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8 max-w-3xl lg:max-w-4xl mx-auto transition-all duration-1000 delay-400 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/10 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="bg-green-600 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
              <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <h3 className="font-semibold text-base lg:text-lg mb-1 lg:mb-2">Email Us</h3>
            <p className="text-green-200 text-xs lg:text-sm">Get detailed quotes & catalogs</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="bg-red-600 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
              <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <h3 className="font-semibold text-base lg:text-lg mb-1 lg:mb-2">Call Direct</h3>
            <p className="text-red-200 text-xs lg:text-sm">Speak with our design team</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="bg-gradient-to-r from-green-600 to-red-600 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
              <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <h3 className="font-semibold text-base lg:text-lg mb-1 lg:mb-2">Live Chat</h3>
            <p className="text-gray-200 text-xs lg:text-sm">Instant support & consultation</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center transition-all duration-1000 delay-600 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 lg:py-4 px-6 lg:px-8 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 text-sm lg:text-base">
            <span>Start Your Order</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
          
          <button className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 lg:py-4 px-6 lg:px-8 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 text-sm lg:text-base">
            <span>View Collection</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;