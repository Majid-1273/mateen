import { useState, useEffect } from "react";
import { ChevronRight, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Collections() {
  const [activeCollection, setActiveCollection] = useState("fashion-apparel");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const collections = {
    "fashion-apparel": {
      title: "Fashion & Apparel",
      description: "From formal wear to festive styles — discover Pakistan's finest stitched and unstitched clothing, tailored for every occasion.",
      image: "https://images.unsplash.com/photo-1602810319252-6846b96b6b36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      items: [
        { 
          name: "Luxury Lawn Suit", 
          image: "https://images.unsplash.com/photo-1622442002011-c8c6cb4b5b8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        { 
          name: "Festive Bridal Wear", 
          image: "https://images.unsplash.com/photo-1645027100841-11cc3e9db3e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    "footwear": {
      title: "Footwear",
      description: "From traditional khussas to premium leather shoes — step into comfort and style rooted in Pakistani craftsmanship.",
      image: "https://images.unsplash.com/photo-1628452380973-4f4d46a1f9e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      items: [
        { 
          name: "Classic Khussa", 
          image: "https://images.unsplash.com/photo-1601327710713-55fbbe32a3cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        },
        { 
          name: "Leather Loafers", 
          image: "https://images.unsplash.com/photo-1621408683474-5d91c32d929c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        }
      ]
    },
    "accessories": {
      title: "Accessories",
      description: "Complete your look with handcrafted Pakistani accessories — from shawls to bags and statement jewelry.",
      image: "https://images.unsplash.com/photo-1610621182419-94b9958405df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      items: [
        { 
          name: "Pashmina Shawl", 
          image: "https://images.unsplash.com/photo-1631037617444-72b97c3f4df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        },
        { 
          name: "Embroidered Clutch", 
          image: "https://images.unsplash.com/photo-1620912189861-0ee57c914cfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        }
      ]
    },
    "home-living": {
      title: "Home & Living",
      description: "Bring Pakistani artistry into your space — explore textiles, décor, and handmade pieces for every corner of your home.",
      image: "https://images.unsplash.com/photo-1625811381464-c19ecfdf3ab7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      items: [
        { 
          name: "Block Print Cushion", 
          image: "https://images.unsplash.com/photo-1625811381464-c19ecfdf3ab7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        },
        { 
          name: "Brass Wall Decor", 
          image: "https://images.unsplash.com/photo-1605864671556-1ba1f8f8c9c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        }
      ]
    }
  };
  
  const activeData = collections[activeCollection];

  return (
    <section className="h-[calc(100vh-80px)] py-6 bg-gradient-to-br from-gray-50 via-white to-green-50/30 overflow-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-6 flex-shrink-0">
          <div className="flex items-center justify-center mb-3">
            <span className="text-xl sm:text-2xl mr-2">🌙</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-800 via-red-700 to-green-800 bg-clip-text text-transparent">
              Our Services
            </h2>
            <span className="text-xl sm:text-2xl ml-2">👑</span>
          </div>
          <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Discover the perfect blend of Pakistani heritage and English elegance in our curated collections.
          </p>
        </div>
        
        {/* Collection tabs - Custom dropdown on small screens, tabs on larger screens */}
        <div className="mb-6 flex-shrink-0">
          {/* Mobile custom dropdown */}
          <div className="block sm:hidden relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-3 text-base font-semibold bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 shadow-lg flex items-center justify-between"
            >
              <span className="text-gray-800">{activeData.title}</span>
              <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-10 overflow-hidden">
                {Object.entries(collections).map(([key, collection]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveCollection(key);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left text-base font-medium transition-all duration-200 ${
                      activeCollection === key
                        ? "bg-gradient-to-r from-green-800 to-red-700 text-white"
                        : "text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-red-50 hover:text-green-800"
                    }`}
                  >
                    {collection.title}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Desktop tabs */}
          <div className="hidden sm:flex flex-wrap justify-center bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {Object.entries(collections).map(([key, collection]) => (
              <button
                key={key}
                onClick={() => setActiveCollection(key)}
                className={`flex-1 min-w-0 px-3 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 relative group ${
                  activeCollection === key
                    ? "text-white bg-gradient-to-r from-green-800 to-red-700 shadow-lg"
                    : "text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-red-50 hover:text-green-800"
                }`}
              >
                <span className="truncate">{collection.title}</span>
                {activeCollection === key && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/50 to-white/20"></div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Active collection content - Takes remaining space */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-8 flex-grow min-h-0">
          {/* Collection description */}
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-800 to-red-700 bg-clip-text text-transparent mb-3 sm:mb-4">
                {activeData.title}
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-grow">
                {activeData.description}
              </p>
              <Link
                to={`/collections/${activeCollection}`}
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-800 to-red-700 text-white text-sm sm:text-base font-semibold rounded-full hover:from-red-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group self-start"
              >
                <span className="mr-2">View Full Details</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          
          {/* Collection grid */}
          <div className="lg:w-2/3 flex-grow min-h-0">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 h-full">
    {activeData.items.map((item, index) => (
      <div 
        key={index} 
        className="group relative overflow-hidden rounded-2xl shadow-xl border border-gray-100 bg-white transform hover:scale-105 transition-all duration-500 min-h-0"
      >
        <div className="h-full overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
            }}
          />
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </section>
  );
}