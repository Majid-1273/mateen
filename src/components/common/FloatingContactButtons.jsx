import React from 'react';
import { Mail } from 'lucide-react';

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ className }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
  </svg>
);

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
          <WhatsAppIcon className="w-8 h-8 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          
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