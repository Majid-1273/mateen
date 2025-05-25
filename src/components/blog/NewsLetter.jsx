import { useState, useEffect } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize AOS if available
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  if (!mounted) {
    return <div className="animate-pulse bg-gradient-to-r from-green-800 to-red-700 h-64"></div>;
  }

  return (
    <div 
      className="bg-gradient-to-br from-green-800 via-green-700 to-red-700 text-white py-20 relative overflow-hidden"
      data-aos="fade-up"
      style={{ minHeight: 'calc(100vh - 80px)' }} // Account for navbar height
    >
      {/* Background pattern with cultural motifs */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Cpath d='M40 40c8.284 0 15-6.716 15-15s-6.716-15-15-15-15 6.716-15 15 6.716 15 15 15zm0-5c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Floating cultural elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-5 rounded-full animate-pulse flex items-center justify-center">
        <span className="text-2xl">🌙</span>
      </div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-red-300 bg-opacity-10 rounded-lg rotate-45 animate-bounce flex items-center justify-center" style={{ animationDelay: '1s' }}>
        <span className="text-xl -rotate-45">👑</span>
      </div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-300 bg-opacity-15 rounded-full animate-pulse flex items-center justify-center" style={{ animationDelay: '2s' }}>
        <span className="text-lg">🧵</span>
      </div>
      <div className="absolute top-1/2 right-10 w-10 h-10 bg-white bg-opacity-10 rounded-full animate-pulse flex items-center justify-center" style={{ animationDelay: '3s' }}>
        <span className="text-sm">✂️</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Cultural symbols header */}
          <div className="mb-10 flex justify-center items-center" data-aos="fade-down" data-aos-delay="200">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <span className="text-3xl animate-pulse">🌙</span>
                <div className="h-0.5 w-12 bg-gradient-to-r from-green-300 to-transparent"></div>
              </div>
              
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white border-opacity-30 shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="h-0.5 w-12 bg-gradient-to-l from-red-300 to-transparent"></div>
                <span className="text-3xl animate-pulse">👑</span>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                Join Our 
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-100 via-white to-red-100 bg-clip-text text-transparent">
                SAMUNDAR PAAR
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-100 via-white to-green-100 bg-clip-text text-transparent">
                Community
              </span>
            </h2>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="600">
            <p className="text-xl text-gray-100 mb-4 leading-relaxed max-w-2xl mx-auto">
              Stay connected with our journey from Pakistan to England. Get exclusive updates on traditional stitching techniques, 
              cultural fashion stories, and cross-border craftsmanship.
            </p>
            <p className="text-base text-gray-200 mb-10 flex items-center justify-center flex-wrap gap-4">
              <span className="flex items-center gap-2">🧵 Traditional Techniques</span>
              <span className="flex items-center gap-2">🎨 Cultural Designs</span>
              <span className="flex items-center gap-2">✈️ Cross-Border Stories</span>
            </p>
          </div>
          
          {/* Newsletter form */}
          <div data-aos="fade-up" data-aos-delay="800">
            {!isSubscribed ? (
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8">
                <div className="relative flex-grow">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address" 
                    className="w-full px-6 py-4 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 transition-all duration-300 shadow-xl border-2 border-white border-opacity-20"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                </div>
                <button 
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 px-10 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-white border-opacity-30 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
            ) : (
              <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-8 max-w-xl mx-auto mb-8 border-2 border-white border-opacity-30 shadow-xl">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Shukriya! Thank you!</h3>
                    <p className="text-green-100">Welcome to the SAMUNDAR PAAR community</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-aos="fade-up" data-aos-delay="1000">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">📧</div>
              <h4 className="font-bold text-white mb-2 text-lg">Weekly Insights</h4>
              <p className="text-sm text-gray-200">Fresh stories from Pakistan to England</p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">🎨</div>
              <h4 className="font-bold text-white mb-2 text-lg">Exclusive Collections</h4>
              <p className="text-sm text-gray-200">First access to new cultural designs</p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">🌍</div>
              <h4 className="font-bold text-white mb-2 text-lg">Cultural Bridge</h4>
              <p className="text-sm text-gray-200">Behind-the-scenes craftsmanship stories</p>
            </div>
          </div>

          {/* Social proof */}
          <div data-aos="fade-up" data-aos-delay="1200">
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2,500+</div>
                <div className="text-sm text-gray-200">Happy Subscribers</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-200">Countries Served</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.9★</div>
                <div className="text-sm text-gray-200">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Brand tagline */}
          <div className="mb-8" data-aos="fade-up" data-aos-delay="1300">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 shadow-lg max-w-2xl mx-auto">
              <p className="text-lg text-white font-medium italic">
                "Women's Suits, Stitched in Pakistan — Delivered to England"
              </p>
              <div className="flex justify-center items-center mt-3 space-x-3">
                <span className="text-green-300">🌙</span>
                <div className="h-px w-16 bg-gradient-to-r from-green-300 via-white to-red-300"></div>
                <span className="text-red-300">👑</span>
              </div>
            </div>
          </div>

          {/* Privacy notice */}
          <div className="text-sm text-gray-200 flex items-center justify-center space-x-2" data-aos="fade-up" data-aos-delay="1400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>
              Your privacy is our priority. Unsubscribe anytime. 
            </span>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave with cultural pattern */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white opacity-20">
          <defs>
            <pattern id="culturalPattern" patternUnits="userSpaceOnUse" width="40" height="40">
              <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.5"/>
            </pattern>
          </defs>
          <path d="M0,0V60l1200,0V0z M0,60 Q300,120 600,60 T1200,60 V120H0z" fill="url(#culturalPattern)"></path>
          <path d="M0,60 Q300,100 600,60 T1200,60 V120H0z" fill="currentColor" opacity="0.3"></path>
        </svg>
      </div>
    </div>
  );
}