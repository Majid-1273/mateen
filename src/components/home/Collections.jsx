import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Collections() {
  const [activeCollection, setActiveCollection] = useState("english-elegance");
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, [activeCollection]);
  
  const collections = {
    "english-elegance": {
      title: "English Elegance",
      description: "Timeless British craftsmanship meets modern sophistication. Classic tailoring with contemporary flair.",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      items: [
        { 
          name: "Savile Row Suit", 
          image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        },
        { 
          name: "Tweed Blazer", 
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        },
      ]
    },
    "pakistani-heritage": {
      title: "Pakistani Heritage",
      description: "Rich cultural traditions woven into contemporary designs. Vibrant colors and intricate craftsmanship.",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      items: [
        { 
          name: "Embroidered Sherwani", 
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        },
        { 
          name: "Hand-stitched Kurta", 
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        },
      ]
    },
    "fusion-line": {
      title: "Cross-Cultural Fusion",
      description: "Where Pakistani artistry meets English sophistication. Innovation through cultural harmony.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      items: [
        { 
          name: "Modern Nehru Jacket", 
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        },
        { 
          name: "Embroidered Blazer", 
          image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        },
      ]
    }
  };
  
  const activeData = collections[activeCollection];

  return (
    <section className="min-h-[calc(100vh-80px)] py-16 bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl mr-2">🌙</span>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-800 via-red-700 to-green-800 bg-clip-text text-transparent">
              Our Collections
            </h2>
            <span className="text-2xl ml-2">👑</span>
          </div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect blend of Pakistani heritage and English elegance in our curated collections.
          </p>
        </div>
        
        {/* Collection tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
          {Object.keys(collections).map((key, index) => (
            <button
              key={key}
              onClick={() => setActiveCollection(key)}
              className={`px-8 py-6 text-lg font-semibold transition-all duration-300 relative group ${
                activeCollection === key
                  ? "text-white bg-gradient-to-r from-green-800 to-red-700 shadow-lg"
                  : "text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-red-50 hover:text-green-800"
              }`}
            >
              {collections[key].title}
              {activeCollection === key && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/50 to-white/20"></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Active collection content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
          {/* Collection description */}
          <div className="lg:w-1/3" data-aos="fade-right">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-green-800 to-red-700 bg-clip-text text-transparent mb-6">
                {activeData.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {activeData.description}
              </p>
              <a 
                href={`/collections/${activeCollection}`}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-800 to-red-700 text-white font-semibold rounded-full hover:from-red-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
              >
                View Full Collection 
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          {/* Collection grid */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {activeData.items.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-xl border border-gray-100 bg-white transform hover:scale-105 transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 200}
              >
                <div className="aspect-w-4 aspect-h-5 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                  <div>
                    <span className="text-white font-bold text-lg block">{item.name}</span>
                    <span className="text-green-300 text-sm">Premium Collection</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-green-800 to-red-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <FaArrowRight className="text-white text-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Featured collection banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl" data-aos="fade-up" data-aos-delay="400">
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 via-red-700/80 to-green-800/90"></div>
          <img 
            src={activeData.image} 
            alt={activeData.title}
            className="w-full h-48 md:h-64 object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                Experience {activeData.title}
              </h3>
              <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto px-4">
                Crafted with passion, designed with purpose
              </p>
              <a 
                href="/collection" 
                className="inline-flex items-center px-8 py-4 bg-white text-green-800 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
              >
                Explore All Collections 
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}