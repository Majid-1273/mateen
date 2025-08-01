import { useState, useEffect } from "react";
import { Send, Loader2, MapPin, Clock, Phone, Mail, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
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

  const formatEmailBody = () => {
    return `${formData.message}

---
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}`;
  };

  const formatWhatsAppMessage = () => {
    return `*Contact Information*
• *Name:* ${formData.name}
• *Email:* ${formData.email}
• *Phone:* ${formData.phone || 'Not provided'}

*Subject:* ${formData.subject}

*Message:*
${formData.message}

*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}`;
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    const emailBody = formatEmailBody();
    const mailtoLink = `mailto:mateen.chma@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.open(mailtoLink, '_blank');
    
    // Show success message
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    const whatsappMessage = formatWhatsAppMessage();
    const whatsappLink = `https://wa.me/923214660662?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappLink, '_blank');
    
    // Show success message
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
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
        message: ""
      });
      
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen" >
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
          background: linear-gradient(135deg, #edefee 0%, #d4d6d5 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        .contact-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 25% 25%, rgba(170, 41, 57, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(9, 52, 28, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }
        .form-card {
          background: rgba(237, 239, 238, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(237, 239, 238, 0.5);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .info-card {
          background: linear-gradient(135deg, rgba(237, 239, 238, 0.9) 0%, rgba(212, 214, 213, 0.9) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(170, 41, 57, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        .input-field {
          transition: all 0.3s ease;
          border: 2px solid #d4d6d5;
          background: #edefee;
          color: #1a1a1a;
        }
        .input-field:focus {
          border-color: #09341c;
          box-shadow: 0 0 0 3px rgba(9, 52, 28, 0.1);
          outline: none;
          background: #edefee;
        }
        .input-field::placeholder {
          color: #6b7280;
        }
        .btn-primary {
          background: linear-gradient(135deg, #aa2939 0%, #09341c 100%);
          transition: all 0.3s ease;
        }
        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(170, 41, 57, 0.3);
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
          color: #09341c;
        }
        
        /* Mobile Responsive Improvements */
        @media (max-width: 640px) {
          .form-card, .info-card {
            margin: 0.5rem;
            padding: 1rem !important;
          }
          
          .input-field {
            padding: 0.75rem !important;
            font-size: 16px; /* Prevents zoom on iOS */
          }
          
          .btn-primary {
            padding: 1rem !important;
            font-size: 16px;
          }
          
          textarea.input-field {
            min-height: 120px;
          }
        }
        
        @media (max-width: 480px) {
          .contact-container {
            padding: 0;
          }
          
          .form-card, .info-card {
            border-radius: 1rem !important;
            margin: 0.25rem;
          }
        }
      `}</style>

      <div className="contact-container">
        <div className="flex flex-col relative z-10">
          <div className="max-w-7xl mx-auto w-full px-2 sm:px-4 lg:px-8 flex flex-col">
            
            {/* Header */}
            <div className="text-center py-4 sm:py-6 md:py-8 lg:py-12" data-aos="fade-up">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4 px-4" style={{ color: '#aa2939' }}>
                Get in Touch
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto px-4">
                Connect with us across continents - from Pakistan's traditional craftsmanship to England's modern elegance
              </p>
            </div>

            {/* Main Content */}
            <div className="pb-4 sm:pb-6 lg:pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
                
                {/* Contact Form */}
                <div data-aos="fade-right" className="lg:col-span-3 order-2 lg:order-1">
                  <div className="form-card rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-10 hover-lift border-l-4" style={{ borderLeftColor: '#aa2939' }}>
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 rounded-full mr-3 sm:mr-4" style={{ backgroundColor: '#09341c' }}>
                        <Mail className="h-4 w-4 sm:h-5 md:h-6 w-5 md:w-6 text-white" />
                      </div>
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: '#aa2939' }}>
                        Send Us a Message
                      </h2>
                    </div>
                    
                    {formSubmitted && (
                      <div className="border-l-4 p-3 sm:p-4 mb-4 sm:mb-6 rounded-r-lg" style={{ borderLeftColor: '#09341c', backgroundColor: '#f0f8f0' }}>
                        <p style={{ color: '#09341c' }} className="font-semibold flex items-center text-sm sm:text-base">
                          <MessageSquare className="h-4 w-4 sm:h-5 w-5 mr-2 flex-shrink-0" />
                          Message prepared! Your email client or WhatsApp should open with the form data.
                        </p>
                      </div>
                    )}
                    
                    <div className="space-y-4 sm:space-y-6">
                      {/* Name and Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                        <div>
                          <label className="block font-semibold mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: '#aa2939' }}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input-field w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: '#aa2939' }}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input-field w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      {/* Phone and Subject */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                        <div>
                          <label className="block font-semibold mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: '#aa2939' }}>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input-field w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base"
                            placeholder="+44 or +92..."
                          />
                        </div>
                        <div>
                          <label className="block font-semibold mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: '#aa2939' }}>
                            Subject *
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="input-field w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base"
                            placeholder="How can we help?"
                          />
                        </div>
                      </div>
                      

                      
                      {/* Message */}
                      <div>
                        <label className="block font-semibold mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: '#aa2939' }}>
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="4"
                          className="input-field w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg resize-none text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
                          placeholder="Please tell us how we can assist you..."
                        ></textarea>
                      </div>
                      
                      {/* Submit Buttons */}
                      <div className="text-center mb-4">
                        <p className="text-sm text-gray-600 mb-2">Choose how you'd like to send your message:</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <button
                          type="button"
                          onClick={handleEmailSubmit}
                          className="btn-primary w-full px-4 sm:px-6 py-3 sm:py-4 text-white font-bold rounded-lg flex items-center justify-center text-sm sm:text-base"
                        >
                          <Mail className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 w-5" />
                          Send via Email
                        </button>
                        <button
                          type="button"
                          onClick={handleWhatsAppSubmit}
                          className="btn-primary w-full px-4 sm:px-6 py-3 sm:py-4 text-white font-bold rounded-lg flex items-center justify-center text-sm sm:text-base"
                        >
                          <MessageSquare className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 w-5" />
                          Send via WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information Sidebar */}
                <div data-aos="fade-left" className="lg:col-span-2 order-1 lg:order-2">
                  <div className="info-card rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 hover-lift">
                    <div className="space-y-6 sm:space-y-8">
                      {/* Lahore Workshop */}
                      <div className="border-l-4 pl-4 sm:pl-6" style={{ borderLeftColor: '#09341c' }}>
                        <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center" style={{ color: '#09341c' }}>
                          🇵🇰 Lahore Workshop
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                          <div className="contact-info-item flex items-center">
                            <Phone className="h-4 w-4 sm:h-5 w-5 mr-2 sm:mr-3 flex-shrink-0" style={{ color: '#aa2939' }} />
                            <div>
                              <p className="text-gray-600 text-xs sm:text-sm">+92-(321)-4660662</p>
                            </div>
                          </div>
                          <div className="contact-info-item flex items-center">
                            <Mail className="h-4 w-4 sm:h-5 w-5 mr-2 sm:mr-3 flex-shrink-0" style={{ color: '#aa2939' }} />
                            <div>
                              <p className="text-gray-600 text-xs sm:text-sm">mateen.chma@gmail.com</p>
                            </div>
                          </div>
                          <div className="contact-info-item flex items-center">
                            <Clock className="h-4 w-4 sm:h-5 w-5 mr-2 sm:mr-3 flex-shrink-0" style={{ color: '#aa2939' }} />
                            <div>
                              <p className="text-gray-600 text-xs sm:text-sm">Mon-Sat: 10AM-8PM PKT</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* General Contact */}
                      <div className="border-l-4 pl-4 sm:pl-6" style={{ borderLeftColor: '#aa2939' }}>
                        <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4" style={{ color: '#aa2939' }}>
                          General Inquiries
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                          <div className="contact-info-item flex items-center">
                            <Mail className="h-4 w-4 sm:h-5 w-5 mr-2 sm:mr-3 flex-shrink-0" style={{ color: '#09341c' }} />
                            <div>
                              <p className="font-medium text-gray-800 text-sm sm:text-base">Email</p>
                              <p className="text-gray-600 text-xs sm:text-sm">mateen.chma@gmail.com</p>
                            </div>
                          </div>
                          <div className="contact-info-item flex items-center">
                            <MessageSquare className="h-4 w-4 sm:h-5 w-5 mr-2 sm:mr-3 flex-shrink-0" style={{ color: '#09341c' }} />
                            <div>
                              <p className="font-medium text-gray-800 text-sm sm:text-base">Response Time</p>
                              <p className="text-gray-600 text-xs sm:text-sm">Within 24 hours</p>
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