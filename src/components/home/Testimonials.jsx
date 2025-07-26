import { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "James Wilson",
      position: "CEO, London Fashion House",
      location: "London, England",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      text: "The quality of craftsmanship from Samundar Paar is unmatched. Their ability to blend English tailoring with Pakistani artisanal touches has made our collaboration incredibly successful. Every piece tells a story of cultural heritage and contemporary design."
    },
    {
      name: "Fatima Ahmed",
      position: "Fashion Designer",
      location: "Lahore, Pakistan",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b9bc?w=400&h=400&fit=crop&crop=face",
      text: "Working with Samundar Paar has been a revelation. Their attention to detail and respect for traditional Pakistani textile techniques while incorporating modern English sensibilities creates truly unique pieces that stand out in the global market."
    },
    {
      name: "Elizabeth Roberts",
      position: "Textile Curator",
      location: "Manchester, England",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      text: "I've been impressed by how Samundar Paar preserves authentic techniques from both countries while creating something fresh and contemporary. Their fabrics and garments represent the best of cross-cultural craftsmanship."
    },
    {
      name: "Hassan Malik",
      position: "Retail Director",
      location: "Karachi, Pakistan",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      text: "Our customers are consistently amazed by the quality and uniqueness of  Paar products. The fusion of Pakistani embroidery techniques with English structured tailoring creates garments that are both elegant and distinctive."
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="pt-24 pb-6 bg-gradient-to-br from-green-800 via-green-700 to-red-800 text-white h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Clients Say</h2>
          <p className="text-green-100 text-lg mb-4">Voices from Pakistan to England</p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-green-400 mx-auto"></div>
        </div>
        
        <div className="relative flex-1 flex items-center">
          {/* Testimonial */}
          <div className="bg-white text-gray-800 rounded-2xl p-4 md:p-6 shadow-2xl max-w-3xl mx-auto border-t-4 border-gradient-to-r from-green-600 to-red-600 transform hover:scale-105 transition-all duration-300">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/3 mb-4 lg:mb-0 flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-3 border-gradient-to-r from-green-600 to-red-600 shadow-lg">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Cultural accent */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-600 to-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    {testimonials[activeIndex].location.includes('Pakistan') ? '🌙' : '👑'}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3 lg:pl-6">
                <div className="relative">
                  <FaQuoteLeft className="text-green-600 text-lg mb-2" />
                  <p className="text-sm lg:text-base leading-relaxed mb-3 text-gray-700 italic">
                    {testimonials[activeIndex].text}
                  </p>
                  <FaQuoteRight className="text-red-600 text-lg ml-auto mb-3" />
                </div>
                
                <div className="border-t border-gradient-to-r from-green-200 to-red-200 pt-3">
                  <h4 className="font-bold text-base text-gray-800">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-600 font-medium text-xs">{testimonials[activeIndex].position}</p>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-red-600 font-semibold text-xs">
                    {testimonials[activeIndex].location}
                  </p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mr-1 text-xs" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 bg-white text-green-800 p-3 rounded-full shadow-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-red-50 hover:text-red-800 transition-all duration-300 transform hover:scale-110"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-base" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 bg-white text-red-800 p-3 rounded-full shadow-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-green-50 hover:text-green-800 transition-all duration-300 transform hover:scale-110"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-base" />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                activeIndex === index 
                  ? "bg-gradient-to-r from-red-400 to-green-400 shadow-lg" 
                  : "bg-white bg-opacity-40 hover:bg-opacity-60"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Cultural elements */}
        <div className="flex justify-center items-center mt-4 space-x-6">
          <div className="flex items-center space-x-2 text-green-200">
            <span className="text-xl">🌙</span>
            <span className="font-medium text-sm">Pakistan</span>
          </div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-green-400 to-red-400"></div>
          <div className="flex items-center space-x-2 text-red-200">
            <span className="text-xl">👑</span>
            <span className="font-medium text-sm">England</span>
          </div>
        </div>
      </div>
    </section>
  );
}