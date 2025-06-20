import React, { useState } from 'react';

// Brand data with Pakistani brands
const brands = {
  "Fashion & Apparel": {
    men: [
      { name: "Khaadi", logo: "🧥", website: "https://www.khaadi.com/pk/men" },
      { name: "Gul Ahmed", logo: "👔", website: "https://www.gulahmedshop.com/men" },
      { name: "Junaid Jamshed", logo: "🕴️", website: "https://www.jj.com.pk/men" },
      { name: "Bonanza Satrangi", logo: "👨", website: "https://www.bonanzasatrangi.com/men" },
      { name: "Alkaram Studio", logo: "🎽", website: "https://www.alkaramstudio.com/men" }
    ],
    women: [
      { name: "Khaadi", logo: "👗", website: "https://www.khaadi.com/pk/women" },
      { name: "Gul Ahmed", logo: "🌸", website: "https://www.gulahmedshop.com/women" },
      { name: "Sana Safinaz", logo: "💃", website: "https://www.sanasafinaz.com/women" },
      { name: "Alkaram Studio", logo: "👚", website: "https://www.alkaramstudio.com/women" },
      { name: "Nishat Linen", logo: "🌺", website: "https://www.nishatlinen.com/women" }
    ],
    children: [
      { name: "Khaadi Kids", logo: "👶", website: "https://www.khaadi.com/pk/kids" },
      { name: "Gul Ahmed Kids", logo: "🧸", website: "https://www.gulahmedshop.com/kids" },
      { name: "Junaid Jamshed Kids", logo: "👦", website: "https://www.jj.com.pk/kids" }
    ]
  },
  "Footwear": {
    men: [
      { name: "Servis", logo: "👞", website: "https://www.servis.com.pk/men-shoes" },
      { name: "Bata", logo: "🥿", website: "https://www.bata.com.pk/men" },
      { name: "Hush Puppies", logo: "👟", website: "https://www.hushpuppies.com.pk/men" }
    ],
    women: [
      { name: "Servis", logo: "👠", website: "https://www.servis.com.pk/women-shoes" },
      { name: "Bata", logo: "👡", website: "https://www.bata.com.pk/women" },
      { name: "Metro Shoes", logo: "🩰", website: "https://www.metro.pk/women" }
    ],
    children: [
      { name: "Bata Kids", logo: "👟", website: "https://www.bata.com.pk/kids" },
      { name: "Servis Kids", logo: "👶", website: "https://www.servis.com.pk/kids" }
    ]
  },
  "Accessories": {
    men: [
      { name: "Ideas", logo: "👜", website: "https://www.ideas.com.pk/men-accessories" },
      { name: "Outfitters", logo: "🎒", website: "https://www.outfitters.com.pk/men/accessories" }
    ],
    women: [
      { name: "Ideas", logo: "👛", website: "https://www.ideas.com.pk/women-accessories" },
      { name: "Accessorize", logo: "💎", website: "https://www.accessorize.com.pk/women" }
    ],
    children: [
      { name: "Ideas Kids", logo: "🎀", website: "https://www.ideas.com.pk/kids-accessories" }
    ]
  },
  "Home & Living": {
    all: [
      { name: "Ideas Home", logo: "🏠", website: "https://www.ideas.com.pk/home" },
      { name: "Khaadi Home", logo: "🛋️", website: "https://www.khaadi.com/pk/home" },
      { name: "Gul Ahmed Home", logo: "🏡", website: "https://www.gulahmedshop.com/home" }
    ]
  }
};

// Collections Main Component
const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Fashion & Apparel");
  const [selectedGender, setSelectedGender] = useState("men");

  const categories = ["Fashion & Apparel", "Footwear", "Accessories", "Home & Living"];
  
  const getGenderOptions = (category) => {
    if (category === "Home & Living") return ["all"];
    return ["men", "women", "children"];
  };

  const handleBrandClick = (website) => {
    window.open(website, '_blank');
  };

  return (
    <div className=" min-h-[calc(100vh-80px)] bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">Browse Collections</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Select your preferred category and gender to explore authentic Pakistani brands
          </p>
        </div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedGender(getGenderOptions(category)[0]);
              }}
              className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm lg:text-base font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-red-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-red-50 border border-gray-200'
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
        <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 px-4">
          {getGenderOptions(selectedCategory).map((gender) => (
            <button
              key={gender}
              onClick={() => setSelectedGender(gender)}
              className={`px-4 sm:px-6 lg:px-8 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                selectedGender === gender
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
              }`}
            >
              {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </button>
          ))}
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 px-4">
          {brands[selectedCategory]?.[selectedGender]?.map((brand, index) => (
            <div
              key={index}
              onClick={() => handleBrandClick(brand.website)}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-red-200"
            >
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">{brand.logo}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{brand.name}</h3>
                <div className="bg-gradient-to-r from-red-500 to-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  Visit Store →
                </div>
              </div>
            </div>
          )) || []}
        </div>

        {/* Empty State */}
        {(!brands[selectedCategory]?.[selectedGender] || brands[selectedCategory][selectedGender].length === 0) && (
          <div className="text-center py-12 sm:py-16">
            <div className="text-4xl sm:text-6xl mb-4">🔍</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-600 mb-2">No brands found</h3>
            <p className="text-gray-500">Try selecting a different category or gender</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;