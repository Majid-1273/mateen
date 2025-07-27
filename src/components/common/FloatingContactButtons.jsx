import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

export default function FloatingContactButtons() {

  const handleWhatsAppClick = () => {
    // WhatsApp number with country code (without + sign)
    const phoneNumber = '923321466062';
    const message = 'Hello! I would like to get in touch.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    // Direct Gmail link
    const emailUrl = `mailto:mateen.chma@gmail.com?subject=Hello&body=Hi, I would like to get in touch with you.`;
    window.location.href = emailUrl;
  };

  return (
    <>
      {/* WhatsApp Button - Bottom Left */}
      <div className="fixed left-2 sm:left-4 bottom-4 sm:bottom-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="group text-[#edefee] p-3 sm:p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          style={{ backgroundColor: '#25D366' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#128C7E'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#25D366'}
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="w-8 h-8 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          
          {/* Tooltip */}
          <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-[#edefee] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
                style={{ backgroundColor: '#aa2939' }}>
            Chat on WhatsApp
          </span>
        </button>
      </div>

      {/* Email Button - Bottom Right */}
      <div className="fixed right-2 sm:right-4 bottom-4 sm:bottom-6 z-50">
        <button
          onClick={handleEmailClick}
          className="group text-[#edefee] p-3 sm:p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          style={{ backgroundColor: '#aa2939' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#09341c'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#aa2939'}
          aria-label="Send Email"
        >
          <Mail className="w-8 h-8 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          
          {/* Tooltip */}
          <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-[#edefee] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
                style={{ backgroundColor: '#09341c' }}>
            Send Email
          </span>
        </button>
      </div>
    </>
  );
}