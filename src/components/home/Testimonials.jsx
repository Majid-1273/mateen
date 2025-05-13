import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "James Wilson",
      position: "CEO, London Fashion House",
      location: "London, UK",
      image: "/path/to/james.jpg",
      text: "The quality of craftsmanship from Stitch Cultures is unmatched. Their ability to blend British tailoring with Pakistani artisanal touches has made our collaboration incredibly successful. Every piece tells a story of cultural heritage and contemporary design."
    },
    {
      name: "Fatima Ahmed",
      position: "Fashion Designer",
      location: "Lahore, Pakistan",
      image: "/path/to/fatima.jpg",
      text: "Working with Stitch Cultures has been a revelation. Their attention to detail and respect for traditional Pakistani textile techniques while incorporating modern British sensibilities creates truly unique pieces that stand out in the global market."
    },
    {
      name: "Elizabeth Roberts",
      position: "Textile Curator",
      location: "Manchester, UK",
      image: "/path/to/elizabeth.jpg",
      text: "I've been impressed by how Stitch Cultures preserves authentic techniques from both countries while creating something fresh and contemporary. Their fabrics and garments represent the best of cross-cultural craftsmanship."
    },
    {
      name: "Hassan Malik",
      position: "Retail Director",
      location: "Karachi, Pakistan",
      image: "/path/to/hassan.jpg",
      text: "Our customers are consistently amazed by the quality and uniqueness of Stitch Cultures products. The fusion of Pakistani embroidery techniques with British structured tailoring creates garments that are both elegant and distinctive."
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          {/* Testimonial */}
          <div className="bg-white text-gray-800 rounded-lg p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-400">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <FaQuoteLeft className="text-emerald-400 mb-2" />
                <p className="text-lg mb-6">{testimonials[activeIndex].text}</p>
                <FaQuoteRight className="text-emerald-400 ml-auto mb-4" />
                
                <div className="border-t pt-4">
                  <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].position}</p>
                  <p className="text-emerald-600">{testimonials[activeIndex].location}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mr-1" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 bg-white text-blue-800 p-2 md:p-3 rounded-full shadow-lg hover:bg-emerald-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 bg-white text-blue-800 p-2 md:p-3 rounded-full shadow-lg hover:bg-emerald-100 transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-emerald-400" : "bg-white bg-opacity-30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}