import React, { useEffect, useState } from 'react';
import { ShoppingBag, Video, Package, Globe, ExternalLink, Star, MapPin } from 'lucide-react';

const ServiceCategories = () => {
  const [activeFilter, setActiveFilter] = useState('fashion');
  const [visibleServices, setVisibleServices] = useState(6);

  const services = [
    {
      title: "Fashion & Apparel",
      description: "Premium Pakistani fashion brands delivered worldwide. From traditional shalwar kameez to modern western wear, we connect you with Pakistan's finest clothing brands and help you shop remotely.",
      icon: <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8" />,
      category: "fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop&crop=center",
      brands: [
        { name: "Sana Safinaz", website: "https://www.sanasafinaz.com", specialty: "Luxury Fashion" },
        { name: "Maria B", website: "https://www.mariab.pk", specialty: "Designer Wear" },
        { name: "Gul Ahmed", website: "https://www.gulahmad.com", specialty: "Premium Textiles" }
      ]
    },
    {
      title: "Footwear",
      description: "Authentic Pakistani footwear including traditional khussa, modern shoes, and leather goods. We source from renowned craftsmen and established brands across Pakistan.",
      icon: "👠",
      category: "footwear",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop&crop=center",
      reverse: true,
      brands: [
        { name: "Borjan", website: "https://www.borjan.com.pk", specialty: "Contemporary Footwear" },
        { name: "Servis", website: "https://www.servis.com.pk", specialty: "Quality Shoes" },
        { name: "Bata Pakistan", website: "https://www.bata.com.pk", specialty: "Everyday Footwear" },
        { name: "Metro Shoes", website: "https://www.metro.pk", specialty: "Fashion Footwear" }
      ]
    },
    {
      title: "Accessories",
      description: "Beautiful Pakistani accessories including jewelry, bags, scarves, and traditional ornaments. We help you discover unique pieces from local artisans and established brands.",
      icon: "💎",
      category: "accessories",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop&crop=center",
      brands: [
        { name: "Tarz", website: "https://www.tarz.pk", specialty: "Fashion Accessories" },
        { name: "Maheen Karim", website: "https://www.maheenkarim.com", specialty: "Luxury Jewelry" },
        { name: "CrossStitch", website: "https://www.crossstitch.pk", specialty: "Bags & Accessories" },
        { name: "Sapphire", website: "https://www.sapphireonline.pk", specialty: "Complete Lifestyle" }
      ]
    },
    {
      title: "Home & Living",
      description: "Pakistani home decor, textiles, and lifestyle products. From handwoven carpets to modern furniture, we bring Pakistan's rich craftsmanship to your doorstep worldwide.",
      icon: "🏠",
      category: "home",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center",
      reverse: true,
      brands: [
        { name: "Ideas by Gul Ahmed", website: "https://www.ideas.com.pk", specialty: "Home Textiles" },
        { name: "Interwood", website: "https://www.interwood.pk", specialty: "Furniture & Decor" },
        { name: "Habitt", website: "https://www.habitt.pk", specialty: "Modern Home Solutions" },
        { name: "ChenOne", website: "https://www.chenone.com", specialty: "Home & Lifestyle" }
      ]
    }
  ];

  const categories = [
    { id: 'fashion', name: 'Fashion & Apparel', icon: <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'footwear', name: 'Footwear', icon: '👠' },
    { id: 'accessories', name: 'Accessories', icon: '💎' },
    { id: 'home', name: 'Home & Living', icon: '🏠' }
  ];

  const filteredServices = services.filter(service => service.category === activeFilter);

  const handleContactUs = () => {
    window.open('mailto:mateen.chma@gmail.com?subject=Product Inquiry - Shopping from Pakistan', '_blank');
  };

  const handleLiveShopping = () => {
    window.open('https://wa.me/923214660662?text=Hi! I would like to book a live shopping session from Pakistan.', '_blank');
  };

  const ServiceCard = ({ title, description, icon, image, reverse, brands, category }) => (
    <div 
      className={`rounded-xl sm:rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
      style={{ 
        backgroundColor: '#edefee',
        borderColor: 'rgba(170, 41, 57, 0.2)'
      }}
      data-aos="fade-up"
    >
      <div className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image Section */}
        <div className="lg:w-1/2 relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full p-2 sm:p-3 shadow-lg" style={{ backgroundColor: 'rgba(237, 239, 238, 0.9)' }}>
            {typeof icon === 'string' ? (
              <span className="text-xl sm:text-2xl">{icon}</span>
            ) : (
              <div style={{ color: '#09341c' }}>{icon}</div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#09341c' }}>{title}</h3>
            <p className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed" style={{ color: '#09341c', opacity: 0.8 }}>{description}</p>
            
            {/* Service Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: '#09341c' }}>
                <Package className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Door-to-door delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: '#aa2939' }}>
                <Video className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Live shopping available</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: '#aa2939' }}>
                <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Worldwide shipping</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: '#aa2939' }}>
                <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Quality guaranteed</span>
              </div>
            </div>

            {/* Featured Brands */}
            <div className="mb-4 sm:mb-6">
              <h4 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base" style={{ color: '#09341c' }}>
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: '#09341c' }} />
                Featured Pakistani Brands
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {brands.map((brand, idx) => (
                  <a
                    key={idx}
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 sm:p-3 rounded-lg hover:shadow-md transition-all duration-200 group"
                    style={{ 
                      backgroundColor: 'rgba(9, 52, 28, 0.05)',
                      borderColor: 'rgba(9, 52, 28, 0.1)'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(9, 52, 28, 0.1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(9, 52, 28, 0.05)'}
                  >
                    <div>
                      <div className="font-medium text-xs sm:text-sm" style={{ color: '#09341c' }}>{brand.name}</div>
                      <div className="text-xs" style={{ color: '#09341c', opacity: 0.6 }}>{brand.specialty}</div>
                    </div>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 transition-colors" style={{ color: '#aa2939' }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button 
              onClick={handleContactUs}
              className="flex-1 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
              style={{
                background: 'linear-gradient(135deg, #09341c 0%, #aa2939 100%)',
                color: '#edefee'
              }}
            >
              <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4" />
              Contact Us
            </button>
            <button 
              onClick={handleLiveShopping}
              className="flex-1 border-2 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base hover:text-white"
              style={{ 
                borderColor: '#aa2939',
                color: '#aa2939',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#aa2939'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <Video className="w-3 h-3 sm:w-4 sm:h-4" />
              Live Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #edefee 0%, rgba(9, 52, 28, 0.05) 50%, rgba(170, 41, 57, 0.05) 100%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-3xl" style={{ backgroundColor: '#09341c' }}></div>
        <div className="absolute top-20 right-20 w-28 h-28 sm:w-36 sm:h-36 rounded-full blur-3xl" style={{ backgroundColor: '#aa2939' }}></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 sm:w-28 sm:h-28 rounded-full blur-3xl" style={{ backgroundColor: '#09341c' }}></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 sm:w-24 sm:h-24 rounded-full blur-3xl" style={{ backgroundColor: '#aa2939' }}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10 h-full flex flex-col py-4 sm:py-6">
        {/* Header Section */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-8 sm:w-12 h-0.5 sm:h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #09341c 0%, #aa2939 100%)' }}></div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase" style={{ color: '#09341c' }}>Shop from Pakistan</span>
            <div className="w-8 sm:w-12 h-0.5 sm:h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #aa2939 0%, #09341c 100%)' }}></div>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight" style={{ background: 'linear-gradient(135deg, #09341c 0%, #aa2939 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            International Shopping Services
            <br />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">We Shop, You Receive Worldwide</span>
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6" style={{ color: '#09341c', opacity: 0.8 }}>
            Place your orders, and we'll shop from your favorite Pakistani brands on your behalf. 
            From <span className="font-semibold" style={{ color: '#09341c' }}>traditional crafts</span> to <span className="font-semibold" style={{ color: '#aa2939' }}>modern fashion</span>, 
            we bring Pakistan's best products to your doorstep anywhere in the world.
          </p>

          {/* Service Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm ${
                  activeFilter === category.id
                    ? 'shadow-lg transform scale-105'
                    : 'hover:shadow-md border'
                }`}
                style={activeFilter === category.id 
                  ? { 
                      background: 'linear-gradient(135deg, #09341c 0%, #aa2939 100%)',
                      color: '#edefee'
                    }
                  : { 
                      backgroundColor: '#edefee', 
                      color: '#09341c',
                      borderColor: 'rgba(9, 52, 28, 0.2)'
                    }
                }
              >
                {typeof category.icon === 'string' ? (
                  <span className="text-sm sm:text-lg">{category.icon}</span>
                ) : (
                  category.icon
                )}
                <span className="font-semibold hidden sm:inline">{category.name}</span>
                <span className="font-semibold sm:hidden">{category.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg" style={{ backgroundColor: 'rgba(237, 239, 238, 0.8)' }}>
              <Package className="w-3 h-3 sm:w-5 sm:h-5" style={{ color: '#09341c' }} />
              <span className="text-xs sm:text-sm font-medium" style={{ color: '#09341c' }}>We Buy For You</span>
            </div>
            
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg" style={{ backgroundColor: 'rgba(237, 239, 238, 0.8)' }}>
              <Video className="w-3 h-3 sm:w-5 sm:h-5" style={{ color: '#aa2939' }} />
              <span className="text-xs sm:text-sm font-medium" style={{ color: '#aa2939' }}>Live Shopping</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg" style={{ backgroundColor: 'rgba(237, 239, 238, 0.8)' }}>
              <Globe className="w-3 h-3 sm:w-5 sm:h-5" style={{ color: '#aa2939' }} />
              <span className="text-xs sm:text-sm font-medium" style={{ color: '#aa2939' }}>Global Delivery</span>
            </div>
          </div>
        </div>

        {/* Services Grid - Scrollable */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 max-w-7xl mx-auto pb-4">
            {filteredServices.map((service, index) => (
              <div key={index} className="relative">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  image={service.image}
                  reverse={service.reverse}
                  brands={service.brands}
                  category={service.category}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(237, 239, 238, 0.5);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #09341c, #aa2939);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0a3f20, #b82e43);
        }
      `}</style>
    </div>
  );
};

export default ServiceCategories;