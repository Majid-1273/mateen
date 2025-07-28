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
      image: "/src/data/images/a-dramatic-studio-portrait-showcases-a-s_B1sQ_mxlR-arr2TNoH3rSw_tH_wW2HCRzu0TCp_8_R21w.jpeg",
      items: [
        { 
          name: "Luxury Lawn Suit", 
          image: "/src/data/images/a-dramatic-studio-portrait-showcases-a-s_B1sQ_mxlR-arr2TNoH3rSw_tH_wW2HCRzu0TCp_8_R21w.jpeg"
        },
        { 
          name: "Festive Bridal Wear", 
          image: "/src/data/images/a-photograph-of-an-unstitched-pakistani-_zdqjyO8lQHato_5pIT3F3g_pb18A4V4RIeEp05L8JAu-g.jpeg"
        }
      ]
    },
    "footwear": {
      title: "Footwear",
      description: "From traditional khussas to premium leather shoes — step into comfort and style rooted in Pakistani craftsmanship.",
      image: "/src/data/images/a-close-up-product-photograph-of-a-pair-_0Gl4PXuhQLSfur6F3Hgn5g_3WeCpK5BTEKgVVyReLIAaQ.jpeg",
      items: [
        { 
          name: "Classic Khussa", 
          image: "/src/data/images/a-product-photograph-showcasing-a-pair-o_Y7TrWplXS3m03LaHK0ixXw_0ZTMDyryQnmzXTjBuQj4EQ.jpeg" 
        },
        { 
          name: "Leather Loafers", 
          image: "/src/data/images/a-photograph-of-a-carefully-curated-coll_KukkkcGnRwalfj3-fx-_CA_bR1Io50cSfKkwgr88K37eA.jpeg" 
        }
      ]
    },
    "accessories": {
      title: "Accessories",
      description: "Complete your look with handcrafted Pakistani accessories — from shawls to bags and statement jewelry.",
      image: "/src/data/images/a-photograph-of-a-curated-collection-of-_g3beQ3w4TpW683_-NuLfSA_LVc__P8xSZaFpRDNJus9HQ.jpeg",
      items: [
        { 
          name: "Pashmina Shawl", 
          image: "/src/data/images/a-photograph-of-a-curated-collection-of-_g3beQ3w4TpW683_-NuLfSA_LVc__P8xSZaFpRDNJus9HQ.jpeg" 
        },
        { 
          name: "Embroidered Clutch", 
          image: "/src/data/images/a-photograph-of-an-elegant-pakistani-clu_lsJAK0MNSh6W2kHZ-rtHFw_YusQsYfcSz2b2Gkhfvm7tg.jpeg" 
        }
      ]
    },
    "home-living": {
      title: "Home & Living",
      description: "Bring Pakistani artistry into your space — explore textiles, décor, and handmade pieces for every corner of your home.",
      image: "/src/data/images/a-photograph-of-a-meticulously-curated-c_ZYCnGiHARwaCb2LdVlOtXw_LVc__P8xSZaFpRDNJus9HQ.jpeg",
      items: [
        { 
          name: "Block Print Cushion", 
          image: "/src/data/images/a-photograph-of-a-meticulously-curated-c_ZYCnGiHARwaCb2LdVlOtXw_LVc__P8xSZaFpRDNJus9HQ.jpeg" 
        },
        { 
          name: "Brass Wall Decor", 
          image: "/src/data/images/a-close-up-photograph-of-a-luxurious-pak_1pP4RmkKQrGBt505j95PaA_fqj7vHsWT5irb8grv8sjdg.jpeg" 
        }
      ]
    }
  };
  
  const activeData = collections[activeCollection];

  return (
    <section className="h-[calc(100vh-80px)] py-4 sm:py-6 md:py-8 bg-gradient-to-br from-[#edefee] via-white to-[#aa2939]/5 overflow-auto">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 flex-shrink-0">
          <div className="flex items-center justify-center mb-2 sm:mb-3">
            <span className="text-lg sm:text-xl md:text-2xl mr-2">🌙</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-[#09341c] via-[#aa2939] to-[#09341c] bg-clip-text text-transparent">
              Our Services
            </h2>
            <span className="text-lg sm:text-xl md:text-2xl ml-2">👑</span>
          </div>
          <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
            Discover the perfect blend of Pakistani heritage and English elegance in our curated collections.
          </p>
        </div>
        
        {/* Collection tabs - Custom dropdown on small screens, tabs on larger screens */}
        <div className="mb-4 sm:mb-6 md:mb-8 flex-shrink-0">
          {/* Mobile custom dropdown */}
          <div className="block sm:hidden relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-semibold bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#09341c] focus:ring-2 focus:ring-[#09341c]/20 shadow-lg flex items-center justify-between"
            >
              <span className="text-gray-800">{activeData.title}</span>
              <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
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
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-sm sm:text-base font-medium transition-all duration-200 ${
                      activeCollection === key
                        ? "bg-gradient-to-r from-[#09341c] to-[#aa2939] text-[#edefee]"
                        : "text-gray-700 hover:bg-gradient-to-r hover:from-[#09341c]/10 hover:to-[#aa2939]/10 hover:text-[#09341c]"
                    }`}
                  >
                    {collection.title}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Desktop tabs */}
          <div className="hidden sm:flex flex-wrap justify-center bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {Object.entries(collections).map(([key, collection]) => (
              <button
                key={key}
                onClick={() => setActiveCollection(key)}
                className={`flex-1 min-w-0 px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-semibold transition-all duration-300 relative group ${
                  activeCollection === key
                    ? "text-[#edefee] bg-gradient-to-r from-[#09341c] to-[#aa2939] shadow-lg"
                    : "text-gray-700 hover:bg-gradient-to-r hover:from-[#09341c]/10 hover:to-[#aa2939]/10 hover:text-[#09341c]"
                }`}
              >
                <span className="truncate">{collection.title}</span>
                {activeCollection === key && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#edefee]/50 to-[#edefee]/20"></div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Active collection content - Takes remaining space */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-grow min-h-0">
          {/* Collection description */}
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#09341c] to-[#aa2939] bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4">
                {activeData.title}
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed text-xs sm:text-sm md:text-base flex-grow">
                {activeData.description}
              </p>
              <Link
                to="/collections"
                className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-[#09341c] to-[#aa2939] text-[#edefee] text-xs sm:text-sm md:text-base font-semibold rounded-full hover:from-[#aa2939] hover:to-[#09341c] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group self-start"
              >
                <span className="mr-1 sm:mr-2">View Full Details</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          
          {/* Collection grid */}
          <div className="lg:w-2/3 flex-grow min-h-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 h-full">
              {activeData.items.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 bg-white transform hover:scale-105 transition-all duration-500 h-full"
                >
                  <div className="relative w-full h-full">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      style={{
                        objectPosition: activeCollection === "fashion-apparel" && index === 0 ? "center 30%" : "center"
                      }}
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                      }}
                    />
                    {/* Overlay with item name */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-2 sm:p-3 md:p-4 w-full">
                        <h4 className="text-[#edefee] text-xs sm:text-sm md:text-base font-semibold">
                          {item.name}
                        </h4>
                      </div>
                    </div>
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