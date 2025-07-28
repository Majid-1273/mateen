import React from 'react';
import { X, ExternalLink, ShoppingBag, Video, Mail, Globe } from 'lucide-react';

const BrandLinkModal = ({ isOpen, onClose, brandName, brandWebsite, brandSpecialty }) => {
  if (!isOpen) return null;

  const handleVisitSite = () => {
    window.open(brandWebsite, '_blank');
    onClose();
  };

  const handleWhatsApp = () => {
    const whatsappNumber = "+923214660662";
    const message = `Hi! I'm interested in shopping from ${brandName}. Can you help me with the process?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = () => {
    const subject = `Shopping Inquiry - ${brandName}`;
    const body = `Hi! I'm interested in shopping from ${brandName} (${brandSpecialty}). Can you help me with the process?`;
    const mailtoUrl = `mailto:mateen.chma@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#09341c] to-[#aa2939] rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Shop from Pakistan
            </h2>
            <p className="text-sm text-gray-600">
              International Shopping Services
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              How it works:
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#09341c] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  1
                </div>
                <p className="text-sm text-gray-700">
                  Visit <span className="font-semibold text-[#09341c]">{brandName}</span> website and browse their collection
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#aa2939] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  2
                </div>
                <p className="text-sm text-gray-700">
                  Select items you want and take a screenshot of your cart or choices
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#09341c] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  3
                </div>
                <p className="text-sm text-gray-700">
                  Send us the screenshot via WhatsApp or email
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#aa2939] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  4
                </div>
                <p className="text-sm text-gray-700">
                  We'll purchase and ship everything to your doorstep worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#edefee] to-[#f8f9fa] rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#09341c] rounded-full flex items-center justify-center">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{brandName}</h4>
                <p className="text-sm text-gray-600">{brandSpecialty}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              We bring Pakistan's best products to your doorstep anywhere in the world.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleVisitSite}
              className="w-full bg-gradient-to-r from-[#09341c] to-[#aa2939] text-white py-3 px-4 rounded-xl font-semibold hover:from-[#072918] hover:to-[#8f1f2f] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Visit {brandName}
            </button>
            
            <div className="flex gap-2">
              <button
                onClick={handleWhatsApp}
                className="flex-1 bg-green-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Video className="w-4 h-4" />
                WhatsApp
              </button>
              <button
                onClick={handleEmail}
                className="flex-1 bg-gray-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#09341c] rounded-full"></div>
                <span>We Buy For You</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#aa2939] rounded-full"></div>
                <span>Global Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandLinkModal; 