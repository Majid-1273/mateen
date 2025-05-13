import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Collections() {
  const [activeCollection, setActiveCollection] = useState("british-heritage");
  
  useEffect(() => {
    AOS.refresh();
  }, [activeCollection]);
  
  const collections = {
    "british-heritage": {
      title: "British Heritage",
      description: "Classic British tailoring with contemporary touches. Crafted with precision and attention to detail.",
      image: "/path/to/british-collection.jpg",
      items: [
        { name: "Savile Row Suit", image: "/path/to/suit.jpg" },
        { name: "Tweed Jacket", image: "/path/to/tweed.jpg" },
        { name: "Oxford Shirt", image: "/path/to/oxford.jpg" },
        { name: "Wool Waistcoat", image: "/path/to/waistcoat.jpg" }
      ]
    },
    "pakistani-artistry": {
      title: "Pakistani Artistry",
      description: "Vibrant colors and intricate embroidery that showcase the rich textile heritage of Pakistan.",
      image: "/path/to/pakistani-collection.jpg",
      items: [
        { name: "Embroidered Sherwani", image: "/path/to/sherwani.jpg" },
        { name: "Hand-stitched Kurta", image: "/path/to/kurta.jpg" },
        { name: "Sindhi Tapestry", image: "/path/to/tapestry.jpg" },
        { name: "Kashmiri Shawl", image: "/path/to/shawl.jpg" }
      ]
    },
    "fusion-line": {
      title: "Cultural Fusion",
      description: "Where East meets West. Innovative designs that blend the best of both textile traditions.",
      image: "/path/to/fusion-collection.jpg",
      items: [
        { name: "Modern Nehru Jacket", image: "/path/to/nehru.jpg" },
        { name: "Embroidered Blazer", image: "/path/to/blazer.jpg" },
        { name: "Contemporary Shalwar", image: "/path/to/shalwar.jpg" },
        { name: "Paisley Waistcoat", image: "/path/to/paisley.jpg" }
      ]
    }
  };
  
  const activeData = collections[activeCollection];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-blue-900">Our Collections</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of garments and textiles that celebrate both cultures.
          </p>
        </div>
        
        {/* Collection tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="100">
          {Object.keys(collections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCollection(key)}
              className={`px-6 py-4 text-lg font-medium transition-colors ${
                activeCollection === key
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-gray-600 hover:text-blue-800"
              }`}
            >
              {collections[key].title}
            </button>
          ))}
        </div>
        
        {/* Active collection content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Collection description */}
          <div className="lg:w-1/3" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">{activeData.title}</h3>
            <p className="text-gray-600 mb-6">{activeData.description}</p>
            <a 
              href={`/collections/${activeCollection}`}
              className="inline-flex items-center text-emerald-600 font-medium"
            >
              View full collection <FaArrowRight className="ml-2" />
            </a>
          </div>
          
          {/* Collection grid */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {activeData.items.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 200}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
          <a 
            href="/collection" 
            className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 transition"
          >
            Explore All Collections <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
