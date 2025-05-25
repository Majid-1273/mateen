import { useState, useEffect } from "react";
import { Send, Loader2, MapPin, Clock, Phone, Mail } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredLocation: "any"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Simulating AOS functionality with CSS animations
    const elements = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        preferredLocation: "any"
      });
      
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="w-full" style={{
      height: '100vh',
      maxHeight: '100vh',
      overflow: 'hidden'
    }}>
      <style jsx>{`
        [data-aos="fade-right"] {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease-in-out;
        }
        [data-aos="fade-left"] {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease-in-out;
        }
        [data-aos="fade-up"] {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-in-out;
        }
        .aos-animate {
          opacity: 1 !important;
          transform: translate(0) !important;
        }
        .gradient-bg {
          background: linear-gradient(135deg, #8B2635 0%, #2D5016 100%);
        }
        .pattern-overlay {
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(139, 38, 53, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(45, 80, 22, 0.1) 0%, transparent 50%);
        }
        .textile-pattern {
          background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop&crop=center');
          background-size: cover;
          background-position: center;
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(139, 38, 53, 0.2);
        }
        .form-input:focus {
          border-color: #2D5016 !important;
          box-shadow: 0 0 0 3px rgba(45, 80, 22, 0.1);
        }
        .social-icon {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .social-icon:hover {
          transform: translateY(-2px) scale(1.1);
        }
      `}</style>

      <section className="relative h-full" style={{ 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        height: 'calc(100vh - 80px)'
      }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-overlay opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col">
          {/* Header - Reduced size */}
          <div className="text-center mb-3 sm:mb-4" data-aos="fade-up">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2" style={{ color: '#8B2635' }}>
              Get in Touch
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              Connect with us across continents - from Pakistan's traditional craftsmanship to England's modern elegance
            </p>
          </div>

          {/* Main Content Grid - Flex grow to use remaining space */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 flex-1 min-h-0">
            {/* Contact Form */}
            <div data-aos="fade-right" className="order-2 xl:order-1 flex flex-col">
              <div className="bg-white rounded-lg lg:rounded-xl p-3 sm:p-4 shadow-2xl border-l-4 hover-lift flex-1 flex flex-col" style={{ borderLeftColor: '#8B2635' }}>
                <div className="flex items-center mb-2 sm:mb-3">
                  <div className="p-1.5 rounded-full mr-2" style={{ backgroundColor: '#2D5016' }}>
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <h2 className="text-base sm:text-lg lg:text-xl font-bold" style={{ color: '#8B2635' }}>
                    Send Us a Message
                  </h2>
                </div>
                
                {formSubmitted && (
                  <div className="border-l-4 p-2 mb-2 rounded-r-lg" style={{ borderLeftColor: '#2D5016', backgroundColor: '#f0f8f0' }}>
                    <p style={{ color: '#2D5016' }} className="font-semibold text-xs">
                      ✓ Thank you for your message! Our team will get back to you soon.
                    </p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  <div className="space-y-2 sm:space-y-3 flex-1">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                      <div>
                        <label htmlFor="name" className="block font-semibold mb-1 text-xs" style={{ color: '#8B2635' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-input w-full px-2 py-1.5 border-2 border-gray-200 rounded-lg focus:outline-none transition-all text-xs"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-semibold mb-1 text-xs" style={{ color: '#8B2635' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-input w-full px-2 py-1.5 border-2 border-gray-200 rounded-lg focus:outline-none transition-all text-xs"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    {/* Phone and Subject Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                      <div>
                        <label htmlFor="phone" className="block font-semibold mb-1 text-xs" style={{ color: '#8B2635' }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input w-full px-2 py-1.5 border-2 border-gray-200 rounded-lg focus:outline-none transition-all text-xs"
                          placeholder="+44 or +92..."
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block font-semibold mb-1 text-xs" style={{ color: '#8B2635' }}>
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="form-input w-full px-2 py-1.5 border-2 border-gray-200 rounded-lg focus:outline-none transition-all text-xs"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>
                    
                    {/* Location Preference */}
                    <div>
                      <label htmlFor="preferredLocation" className="block font-semibold mb-1 text-xs" style={{ color: '#8B2635' }}>
                        Preferred Office Location
                      </label>
                      <select
                        id="preferredLocation"
                        name="preferredLocation"
                        value={formData.preferredLocation}
                        onChange={handleChange}
                        className="form-input w-full px-2 py-1.5 border-2 border-gray-200 rounded-lg focus:outline-none transition-all text-xs bg-white"
                      >
                        <option value="any">No preference</option>
                        <option value="london">🇬🇧 London Office</option>
                        <option value="lahore">🇵🇰 Lahore Workshop</option>
                      </select>
                    </div>
                    
                    {/* Message */}
                    <div className="flex-1 flex flex-col">
                      <label htmlFor="message" className="block font-semibold mb-1 text-xs" style={{ color: '#8B2635' }}>
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="2"
                        className="form-input w-full px-2 py-1.5 border-2 border-gray-200 rounded-lg focus:outline-none transition-all resize-none text-xs flex-1"
                        placeholder="Please tell us how we can assist you..."
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center text-xs sm:text-sm hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none disabled:hover:shadow-none mt-2"
                    style={{ 
                      background: isSubmitting ? '#9ca3af' : 'linear-gradient(135deg, #8B2635 0%, #2D5016 100%)',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin mr-2 h-3 w-3" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-3 w-3" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div data-aos="fade-left" className="order-1 xl:order-2 flex flex-col">
              <div className="gradient-bg rounded-lg lg:rounded-xl p-3 sm:p-4 shadow-2xl text-white hover-lift flex-1 flex flex-col">
                <div className="flex items-center mb-2">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=60&h=60&fit=crop&crop=center" 
                    alt="Contact" 
                    className="h-6 w-6 sm:h-8 sm:w-8 rounded-full mr-2 border-2 border-white shadow-lg"
                  />
                  <h2 className="text-base sm:text-lg lg:text-xl font-bold">Contact Information</h2>
                </div>
                
                <p className="text-gray-100 mb-3 text-xs leading-relaxed">
                  Bridging cultures through exceptional tailoring. Whether you're in Pakistan or England, 
                  we're here to bring traditional craftsmanship to your modern lifestyle.
                </p>

                {/* Contact Details */}
                <div className="space-y-2 mb-3 flex-1">
                  {/* Locations */}
                  <div className="flex items-start space-x-2">
                    <div className="p-1.5 rounded-full bg-yellow-300 flex-shrink-0 mt-0.5">
                      <MapPin className="h-2.5 w-2.5 text-gray-800" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xs font-bold text-yellow-300 mb-1">Our Locations</h3>
                      <div className="space-y-1">
                        <div className="bg-white/10 p-1.5 rounded backdrop-blur-sm">
                          <p className="font-bold text-xs mb-0.5">🇬🇧 London Office</p>
                          <p className="text-gray-200 text-xs">123 Savile Row, London W1S 3PB</p>
                        </div>
                        <div className="bg-white/10 p-1.5 rounded backdrop-blur-sm">
                          <p className="font-bold text-xs mb-0.5">🇵🇰 Lahore Workshop</p>
                          <p className="text-gray-200 text-xs">45 MM Alam Road, Gulberg III, Lahore</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-2">
                    <div className="p-1.5 rounded-full bg-yellow-300 flex-shrink-0 mt-0.5">
                      <Clock className="h-2.5 w-2.5 text-gray-800" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xs font-bold text-yellow-300 mb-1">Business Hours</h3>
                      <div className="space-y-1">
                        <div className="bg-white/10 p-1.5 rounded backdrop-blur-sm">
                          <p className="font-bold text-xs">London: Mon-Fri 9am-6pm</p>
                        </div>
                        <div className="bg-white/10 p-1.5 rounded backdrop-blur-sm">
                          <p className="font-bold text-xs">Lahore: Mon-Sat 9am-5pm</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="flex items-start space-x-2">
                    <div className="p-1.5 rounded-full bg-yellow-300 flex-shrink-0 mt-0.5">
                      <Phone className="h-2.5 w-2.5 text-gray-800" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xs font-bold text-yellow-300 mb-1">Phone Numbers</h3>
                      <div className="space-y-1">
                        <div className="bg-white/10 p-1.5 rounded backdrop-blur-sm">
                          <p className="text-gray-200 text-xs font-medium">UK: +44 20 7123 4567</p>
                        </div>
                        <div className="bg-white/10 p-1.5 rounded backdrop-blur-sm">
                          <p className="text-gray-200 text-xs font-medium">PK: +92 42 1234 5678</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Section */}
                <div className="mb-2">
                  <h3 className="text-xs font-bold text-yellow-300 mb-1">Follow Our Journey</h3>
                  <div className="flex flex-wrap gap-1">
                    {[
                      { name: "Twitter", color: "#1DA1F2" },
                      { name: "Instagram", color: "#E4405F" },
                      { name: "Facebook", color: "#1877F2" },
                      { name: "LinkedIn", color: "#0A66C2" }
                    ].map((social, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="social-icon bg-white/20 hover:bg-white/30 p-1.5 rounded-full transition-all duration-300 backdrop-blur-sm"
                        style={{ '--hover-color': social.color }}
                      >
                        <div className="h-2.5 w-2.5 bg-white rounded-sm"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}