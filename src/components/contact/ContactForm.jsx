import { useState, useEffect } from "react";
import { Send, Loader2, MapPin, Clock, Phone, Mail, MessageSquare } from "lucide-react";

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
    <div className="w-full" >
      <style jsx>{`
        [data-aos="fade-right"] {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.6s ease-out;
        }
        [data-aos="fade-left"] {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.6s ease-out;
        }
        [data-aos="fade-up"] {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        .aos-animate {
          opacity: 1 !important;
          transform: translate(0) !important;
        }
        .contact-container {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          overflow: hidden;
        }
        .contact-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 25% 25%, rgba(139, 38, 53, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(45, 80, 22, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }
        .form-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .info-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(139, 38, 53, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        .input-field {
          transition: all 0.3s ease;
          border: 2px solid #e2e8f0;
        }
        .input-field:focus {
          border-color: #2D5016;
          box-shadow: 0 0 0 3px rgba(45, 80, 22, 0.1);
          outline: none;
        }
        .btn-primary {
          background: linear-gradient(135deg, #8B2635 0%, #2D5016 100%);
          transition: all 0.3s ease;
        }
        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(139, 38, 53, 0.3);
        }
        .btn-primary:disabled {
          background: #9ca3af;
          cursor: not-allowed;
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }
        .contact-info-item {
          transition: all 0.3s ease;
        }
        .contact-info-item:hover {
          transform: translateX(8px);
          color: #2D5016;
        }
      `}</style>

      <div className="contact-container h-full flex flex-col">
        <div className="flex-1 flex flex-col relative z-10">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col h-full">
            
            {/* Header */}
            <div className="text-center py-6 sm:py-8 lg:py-12" data-aos="fade-up">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#8B2635' }}>
                Get in Touch
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                Connect with us across continents - from Pakistan's traditional craftsmanship to England's modern elegance
              </p>
            </div>

            {/* Main Content */}
            <div className="flex-1 pb-6 sm:pb-8">
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 lg:gap-8 h-full">
                
                {/* Contact Form */}
                <div data-aos="fade-right" className="xl:col-span-3">
                  <div className="form-card rounded-2xl p-6 sm:p-8 lg:p-10 h-full hover-lift border-l-4" style={{ borderLeftColor: '#8B2635' }}>
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#2D5016' }}>
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#8B2635' }}>
                        Send Us a Message
                      </h2>
                    </div>
                    
                    {formSubmitted && (
                      <div className="border-l-4 p-4 mb-6 rounded-r-lg" style={{ borderLeftColor: '#2D5016', backgroundColor: '#f0f8f0' }}>
                        <p style={{ color: '#2D5016' }} className="font-semibold flex items-center">
                          <MessageSquare className="h-5 w-5 mr-2" />
                          Thank you for your message! Our team will get back to you soon.
                        </p>
                      </div>
                    )}
                    
                    <div className="space-y-6">
                      {/* Name and Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label className="block font-semibold mb-2 text-sm sm:text-base" style={{ color: '#8B2635' }}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input-field w-full px-4 py-3 rounded-lg text-sm sm:text-base"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold mb-2 text-sm sm:text-base" style={{ color: '#8B2635' }}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input-field w-full px-4 py-3 rounded-lg text-sm sm:text-base"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      {/* Phone and Subject */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label className="block font-semibold mb-2 text-sm sm:text-base" style={{ color: '#8B2635' }}>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input-field w-full px-4 py-3 rounded-lg text-sm sm:text-base"
                            placeholder="+44 or +92..."
                          />
                        </div>
                        <div>
                          <label className="block font-semibold mb-2 text-sm sm:text-base" style={{ color: '#8B2635' }}>
                            Subject *
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="input-field w-full px-4 py-3 rounded-lg text-sm sm:text-base"
                            placeholder="How can we help?"
                          />
                        </div>
                      </div>
                      
                      {/* Location Preference */}
                      <div>
                        <label className="block font-semibold mb-2 text-sm sm:text-base" style={{ color: '#8B2635' }}>
                          Preferred Office Location
                        </label>
                        <select
                          name="preferredLocation"
                          value={formData.preferredLocation}
                          onChange={handleChange}
                          className="input-field w-full px-4 py-3 rounded-lg text-sm sm:text-base bg-white"
                        >
                          <option value="any">No preference</option>
                          <option value="london">🇬🇧 London Office</option>
                          <option value="lahore">🇵🇰 Lahore Workshop</option>
                        </select>
                      </div>
                      
                      {/* Message */}
                      <div>
                        <label className="block font-semibold mb-2 text-sm sm:text-base" style={{ color: '#8B2635' }}>
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="4"
                          className="input-field w-full px-4 py-3 rounded-lg resize-none text-sm sm:text-base"
                          placeholder="Please tell us how we can assist you..."
                        ></textarea>
                      </div>
                      
                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full px-6 py-4 text-white font-bold rounded-lg flex items-center justify-center text-sm sm:text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin mr-3 h-5 w-5" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="mr-3 h-5 w-5" />
                            Send Your Message
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Contact Information Sidebar */}
                <div data-aos="fade-left" className="xl:col-span-2">
                  <div className="info-card rounded-2xl p-6 sm:p-8 h-full hover-lift">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#8B2635' }}>
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#8B2635' }}>
                        Contact Information
                      </h2>
                    </div>

                    <div className="space-y-8">
                      {/* London Office */}
                      <div className="border-l-4 pl-6" style={{ borderLeftColor: '#8B2635' }}>
                        <h3 className="text-lg font-bold mb-4 flex items-center" style={{ color: '#8B2635' }}>
                          🇬🇧 London Office
                        </h3>
                        <div className="space-y-3">
                          <div className="contact-info-item flex items-start">
                            <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#2D5016' }} />
                            <div>
                              <p className="font-medium text-gray-800">Address</p>
                              <p className="text-gray-600 text-sm">
                                123 Fashion District<br />
                                London W1F 8AB<br />
                                United Kingdom
                              </p>
                            </div>
                          </div>
                          <div className="contact-info-item flex items-center">
                            <Phone className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: '#2D5016' }} />
                            <div>
                              <p className="font-medium text-gray-800">Phone</p>
                              <p className="text-gray-600 text-sm">+44 20 7123 4567</p>
                            </div>
                          </div>
                          <div className="contact-info-item flex items-center">
                            <Clock className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: '#2D5016' }} />
                            <div>
                              <p className="font-medium text-gray-800">Hours</p>
                              <p className="text-gray-600 text-sm">Mon-Fri: 9:00-18:00 GMT</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Lahore Workshop */}
                      <div className="border-l-4 pl-6" style={{ borderLeftColor: '#2D5016' }}>
                        <h3 className="text-lg font-bold mb-4 flex items-center" style={{ color: '#2D5016' }}>
                          🇵🇰 Lahore Workshop
                        </h3>
                        <div className="space-y-3">
                          <div className="contact-info-item flex items-start">
                            <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#8B2635' }} />
                            <div>
                              <p className="font-medium text-gray-800">Address</p>
                              <p className="text-gray-600 text-sm">
                                Crafts Quarter, Liberty Market<br />
                                Gulberg III, Lahore<br />
                                Punjab, Pakistan
                              </p>
                            </div>
                          </div>
                          <div className="contact-info-item flex items-center">
                            <Phone className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: '#8B2635' }} />
                            <div>
                              <p className="font-medium text-gray-800">Phone</p>
                              <p className="text-gray-600 text-sm">+92 42 3587 1234</p>
                            </div>
                          </div>
                          <div className="contact-info-item flex items-center">
                            <Clock className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: '#8B2635' }} />
                            <div>
                              <p className="font-medium text-gray-800">Hours</p>
                              <p className="text-gray-600 text-sm">Mon-Sat: 10:00-19:00 PKT</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* General Contact */}
                      <div className="border-l-4 pl-6" style={{ borderLeftColor: '#8B2635' }}>
                        <h3 className="text-lg font-bold mb-4" style={{ color: '#8B2635' }}>
                          General Inquiries
                        </h3>
                        <div className="space-y-3">
                          <div className="contact-info-item flex items-center">
                            <Mail className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: '#2D5016' }} />
                            <div>
                              <p className="font-medium text-gray-800">Email</p>
                              <p className="text-gray-600 text-sm">info@yourcompany.com</p>
                            </div>
                          </div>
                          <div className="contact-info-item flex items-center">
                            <MessageSquare className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: '#2D5016' }} />
                            <div>
                              <p className="font-medium text-gray-800">Response Time</p>
                              <p className="text-gray-600 text-sm">Within 24 hours</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}