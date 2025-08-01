import React, { useState } from 'react';
import BrandLinkModal from '../common/BrandLinkModal';

// Brand data with Pakistani brands
const brands = {
  "Fashion & Apparel": {
    men: [
      { name: "Gul Ahmed", logo: "👔", website: "https://www.gulahmedshop.com/mens-clothes", specialty: "Premium Pakistani Fashion" },
      { name: "Bonanza Satrangi", logo: "🎩", website: "https://bonanzasatrangi.com/collections/men", specialty: "Contemporary Fashion" },
      { name: "Alkaram Studio", logo: "🧥", website: "https://www.alkaramstudio.com/collections/man", specialty: "Traditional Wear" }
    ],
    women: [
      { name: "Gul Ahmed", logo: "👗", website: "https://www.gulahmedshop.com/women", specialty: "Premium Pakistani Fashion" },
      { name: "Alkaram Studio", logo: "👘", website: "https://www.alkaramstudio.com/", specialty: "Traditional Wear" },
      { name: "Nishat Linen", logo: "👚", website: "https://nishatlinen.com/collections/women", specialty: "Linen Collection" }
    ],
    children: [
      { name: "Gul Ahmed Kids", logo: "👕", website: "https://www.gulahmedshop.com/kids", specialty: "Kids Fashion" }
    ]
  },
  "Footwear": {
    men: [
      { name: "Servis", logo: "👞", website: "https://servis.pk/collections/men-shoes-sale", specialty: "Quality Footwear" },
      { name: "Bata", logo: "🥾", website: "https://www.bata.com.pk/collections/men-collection", specialty: "Comfortable Shoes" },
      { name: "Hush Puppies", logo: "👟", website: "https://www.hushpuppies.com.pk/collections/men-collections-all", specialty: "Casual Footwear" }
    ],
    women: [
      { name: "Servis", logo: "👠", website: "https://servis.pk/collections/women", specialty: "Quality Footwear" },
      { name: "Bata", logo: "👡", website: "https://www.bata.com.pk/collections/women-collection", specialty: "Comfortable Shoes" },
      { name: "Hush Puppies", logo: "🥿", website: "https://www.hushpuppies.com.pk/collections/women-all", specialty: "Fashion Footwear" }
    ],
    children: [
      { name: "Bata Kids", logo: "👟", website: "https://www.bata.com.pk/collections/kids-new-1", specialty: "Kids Shoes" },
      { name: "Servis Kids", logo: "👟", website: "https://servis.pk/collections/kids-1", specialty: "Quality Kids Footwear" }
    ]
  },
  "Accessories": {
    men: [
      { name: "Gul Ahmed", logo: "👜", website: "https://www.gulahmedshop.com/mens-clothes", specialty: "Fashion Accessories" },
      { name: "Outfitters", logo: "🎒", website: "https://outfitters.com.pk/", specialty: "Lifestyle Accessories" }
    ],
    women: [
      { name: "Gul Ahmed", logo: "👛", website: "https://www.gulahmedshop.com/", specialty: "Fashion Accessories" }
    ],
    children: [
      { name: "Ideas Kids", logo: "🎀", website: "https://www.gulahmedshop.com/kids", specialty: "Kids Accessories" }
    ]
  },
  "Home & Living": {
    all: [
      { name: "Ideas Home", logo: "🏠", website: "https://www.gulahmedshop.com/ideas-home", specialty: "Home Accessories" }
    ]
  }
};

// Collections Main Component
const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Fashion & Apparel");
  const [selectedGender, setSelectedGender] = useState("men");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const categories = ["Fashion & Apparel", "Footwear", "Accessories", "Home & Living"];
  
  const getGenderOptions = (category) => {
    if (category === "Home & Living") return ["all"];
    return ["men", "women", "children"];
  };

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedBrand(null);
  };

  return (
    <div className="mt-16 sm:mt-20 min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#edefee] via-white to-[#aa2939]/10 flex items-center justify-center relative overflow-hidden py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 w-full max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <span className="text-xl sm:text-2xl md:text-3xl mr-2">🌟</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#09341c] via-[#aa2939] to-[#09341c] bg-clip-text text-transparent">
              Browse Collections
            </h2>
            <span className="text-xl sm:text-2xl md:text-3xl ml-2">🛍️</span>
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
            Select your preferred category and gender to explore authentic Pakistani brands
          </p>
        </div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedGender(getGenderOptions(category)[0]);
              }}
              className={`px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#aa2939] to-[#09341c] text-[#edefee] shadow-xl scale-105'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-[#aa2939]/10 hover:to-[#09341c]/10 hover:text-[#09341c] border border-gray-200 hover:border-[#aa2939]/20'
              }`}
            >
              <span className="hidden sm:inline">{category}</span>
              <span className="sm:hidden">
                {category === "Fashion & Apparel" ? "Fashion" : 
                 category === "Home & Living" ? "Home" : category}
              </span>
            </button>
          ))}
        </div>

        {/* Gender Selection */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-4">
          {getGenderOptions(selectedCategory).map((gender) => (
            <button
              key={gender}
              onClick={() => setSelectedGender(gender)}
              className={`px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 shadow-md transform hover:scale-105 ${
                selectedGender === gender
                  ? 'bg-gradient-to-r from-[#09341c] to-[#aa2939] text-[#edefee] shadow-lg scale-105'
                  : 'bg-white text-[#09341c] hover:bg-gradient-to-r hover:from-[#09341c]/10 hover:to-[#aa2939]/10 border border-gray-200 hover:border-[#09341c]/20'
              }`}
            >
              {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </button>
          ))}
        </div>

        {/* Brand Cards */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
          {brands[selectedCategory]?.[selectedGender]?.map((brand, index) => (
            <div
              key={index}
              onClick={() => handleBrandClick(brand)}
              className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-[#aa2939]/20 hover:bg-gradient-to-br hover:from-white hover:to-[#edefee]/50 w-full sm:w-60 md:w-64 lg:w-72 xl:w-80 flex-shrink-0"
            >
              <div className="text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-5 md:mb-6 border border-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg bg-white">
                  <span className="text-[#aa2939] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    {brand.logo}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6 group-hover:text-[#09341c] transition-colors duration-300 leading-tight">
                  {brand.name}
                </h3>
                <div className="bg-gradient-to-r from-[#aa2939] to-[#09341c] text-[#edefee] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-full text-sm sm:text-base md:text-lg font-medium group-hover:from-[#09341c] group-hover:to-[#aa2939] transition-all duration-300 shadow-md group-hover:shadow-lg transform group-hover:scale-105">
                  Visit Store →
                </div>
              </div>
            </div>
          )) || []}
        </div>

        {/* Empty State */}
        {(!brands[selectedCategory]?.[selectedGender] || brands[selectedCategory][selectedGender].length === 0) && (
          <div className="text-center py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 sm:mb-4 md:mb-6">🔍</div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#09341c] to-[#aa2939] bg-clip-text text-transparent mb-2 sm:mb-3">
              No brands found
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">
              Try selecting a different category or gender
            </p>
          </div>
        )}

        {/* Additional Info Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#09341c] to-[#aa2939] bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4">
              Discover Authentic Pakistani Brands
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each brand represents the finest in Pakistani craftsmanship and design. Click on any brand to explore their complete collection and experience the perfect blend of tradition and modernity.
            </p>
          </div>
        </div>
      </div>

      {/* Brand Link Modal */}
      <BrandLinkModal
        isOpen={modalOpen}
        onClose={closeModal}
        brandName={selectedBrand?.name}
        brandWebsite={selectedBrand?.website}
        brandSpecialty={selectedBrand?.specialty}
      />
    </div>
  );
};

export default Collection;