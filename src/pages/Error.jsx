import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaExclamationTriangle, FaHome, FaEnvelope } from "react-icons/fa";
import { GiSewingNeedle } from "react-icons/gi";

export default function Error() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50" 
         style={{ 
           marginTop: '80px', 
           maxHeight: 'calc(100vh - 80px)', 
           minHeight: 'calc(100vh - 80px)',
           overflow: 'hidden'
         }} 
         data-aos="fade">
      <div className="absolute inset-0 opacity-5 z-0" style={{ backgroundImage: "url('/path/to/textile-pattern.png')", backgroundRepeat: "repeat" }} />
      
      <div className="relative z-10 text-center px-4 py-6 max-w-lg flex flex-col justify-center h-full" data-aos="zoom-in">
        <div className="mb-6 flex flex-col items-center" data-aos="fade-down">
          <div className="flex items-center mb-3">
            <GiSewingNeedle className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-lg font-bold">SAMANDAR PAAR</span>
          </div>
          <FaExclamationTriangle className="h-16 w-16 text-red-500" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-3">Oops! Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-6" data-aos="fade-up">We've lost the thread to this page. It seems like the pattern you're looking for has been moved or doesn't exist.</p>

        <div className="my-6 flex items-center" data-aos="fade-left">
          <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
          <div className="mx-4">
            <GiSewingNeedle className="h-5 w-5 text-gray-400 transform rotate-45" />
          </div>
          <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6" data-aos="zoom-in-up">
          <Link to="/" className="px-5 py-2.5 bg-green-900 text-white rounded-md font-medium flex items-center justify-center hover:bg-green-800 transition">
            <FaHome className="mr-2" /> Return Home
          </Link>
          <Link to="/contact" className="px-5 py-2.5 bg-red-700 text-white rounded-md font-medium flex items-center justify-center hover:bg-red-800 transition">
            <FaEnvelope className="mr-2" /> Contact Support
          </Link>
        </div>

        <div className="mt-8" data-aos="fade-up">
          <h3 className="text-base font-medium text-green-900 mb-3">You might be looking for:</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <Link to="/services" className="px-3 py-1.5 bg-white shadow-sm rounded-md text-green-800 hover:bg-green-50 transition text-sm">Services</Link>
            <Link to="/about" className="px-3 py-1.5 bg-white shadow-sm rounded-md text-green-800 hover:bg-green-50 transition text-sm">About Us</Link>
            <Link to="/blog" className="px-3 py-1.5 bg-white shadow-sm rounded-md text-green-800 hover:bg-green-50 transition text-sm">Blog</Link>
            <Link to="/contact" className="px-3 py-1.5 bg-white shadow-sm rounded-md text-green-800 hover:bg-green-50 transition text-sm">Contact</Link>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-2 z-20" data-aos="fade-up">
        <div className="flex h-full">
          <div className="w-1/2 bg-green-900"></div>
          <div className="w-1/2 bg-red-700"></div>
        </div>
      </div>
    </div>
  );
}