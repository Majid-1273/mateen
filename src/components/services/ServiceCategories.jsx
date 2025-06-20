import React, { useEffect, useState } from 'react';
import { ShoppingBag, Video, Package, Globe, ExternalLink, Star, MapPin } from 'lucide-react';

const ServiceCategories = () => {
  const [activeFilter, setActiveFilter] = useState('fashion');
  const [visibleServices, setVisibleServices] = useState(6);

  const services = [
    {
      title: "Fashion & Apparel",
      description: "Premium Pakistani fashion brands delivered worldwide. From traditional shalwar kameez to modern western wear, we connect you with Pakistan's finest clothing brands and help you shop remotely.",
      icon: <ShoppingBag className="w-8 h-8" />,
      category: "fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop&crop=center",
      brands: [
        { name: "Khaadi", website: "https://www.khaadi.com", specialty: "Traditional & Contemporary" },
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
    { id: 'fashion', name: 'Fashion & Apparel', icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'footwear', name: 'Footwear', icon: '👠' },
    { id: 'accessories', name: 'Accessories', icon: '💎' },
    { id: 'home', name: 'Home & Living', icon: '🏠' }
  ];

  const filteredServices = services.filter(service => service.category === activeFilter);

  const ServiceCard = ({ title, description, icon, image, reverse, brands, category }) => (
    <div 
      className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
      data-aos="fade-up"
    >
      <div className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image Section */}
        <div className="lg:w-1/2 relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
            {typeof icon === 'string' ? (
              <span className="text-2xl">{icon}</span>
            ) : (
              <div className="text-green-600">{icon}</div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
            
            {/* Service Features */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-green-600">
                <Package className="w-4 h-4" />
                <span>Door-to-door delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-red-600">
                <Video className="w-4 h-4" />
                <span>Live shopping available</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-red-600">
                <Globe className="w-4 h-4" />
                <span>Worldwide shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-red-600">
                <Star className="w-4 h-4" />
                <span>Quality guaranteed</span>
              </div>
            </div>

            {/* Featured Brands */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" />
                Featured Pakistani Brands
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {brands.map((brand, idx) => (
                  <a
                    key={idx}
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors duration-200 group"
                  >
                    <div>
                      <div className="font-medium text-gray-800 text-sm">{brand.name}</div>
                      <div className="text-xs text-gray-500">{brand.specialty}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </button>
            <button className="flex-1 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
              <Video className="w-4 h-4" />
              Live Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-36 h-36 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-green-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-red-700 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col py-6">
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-red-600 rounded-full"></div>
            <span className="text-sm font-semibold text-green-700 tracking-wider uppercase">Shop from Pakistan</span>
            <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-green-600 rounded-full"></div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-700 via-slate-800 to-red-700 bg-clip-text text-transparent leading-tight">
            International Shopping Services
            <br />
            <span className="text-lg md:text-xl">We Shop, You Receive Worldwide</span>
          </h2>
          
          <p className="text-sm md:text-base max-w-4xl mx-auto text-slate-600 leading-relaxed mb-6">
            Place your orders, and we'll shop from your favorite Pakistani brands on your behalf. 
            From <span className="font-semibold text-green-700">traditional crafts</span> to <span className="font-semibold text-red-700">modern fashion</span>, 
            we bring Pakistan's best products to your doorstep anywhere in the world.
          </p>

          {/* Service Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`group flex items-center gap-2 px-4 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-green-600 to-red-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-green-300 hover:shadow-md'
                }`}
              >
                {typeof category.icon === 'string' ? (
                  <span className="text-lg">{category.icon}</span>
                ) : (
                  category.icon
                )}
                <span className="text-sm font-semibold">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Package className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-700">We Buy For You</span>
            </div>
            
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Video className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium text-red-700">Live Shopping</span>
            </div>

            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Globe className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium text-red-700">Global Delivery</span>
            </div>
          </div>
        </div>

        {/* Services Grid - Scrollable */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="space-y-8 max-w-7xl mx-auto pb-4">
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

        {/* Bottom CTA Section */}
        <div className="text-center mt-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-green-100 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-green-700 to-red-700 bg-clip-text text-transparent">
              Ready to Shop from Pakistan?
            </h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Tell us what you want, and we'll handle everything from shopping to shipping. 
              Experience Pakistani brands like never before with our personal shopping service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Place Order
              </button>
              <button className="px-8 py-3 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2">
                <Video className="w-5 h-5" />
                Book Live Shopping
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #16a34a, #dc2626);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #15803d, #b91c1c);
        }
      `}</style>
    </div>
  );
};

export default ServiceCategories;
