import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaExclamationTriangle, FaHome, FaEnvelope } from "react-icons/fa";
import { GiSewingNeedle } from "react-icons/gi";

export default function Error() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50" data-aos="fade">
      <div className="absolute inset-0 opacity-5 z-0" style={{ backgroundImage: "url('/path/to/textile-pattern.png')", backgroundRepeat: "repeat" }} />

      <div className="relative z-10 text-center px-4 py-10 max-w-lg" data-aos="zoom-in">
        <div className="mb-8 flex flex-col items-center" data-aos="fade-down">
          <div className="flex items-center mb-4">
            <GiSewingNeedle className="h-12 w-12 text-emerald-600" />
            <span className="ml-3 text-2xl font-bold">Stitch Cultures</span>
          </div>
          <FaExclamationTriangle className="h-20 w-20 text-red-500" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Oops! Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8" data-aos="fade-up">We've lost the thread to this page. It seems like the pattern you're looking for has been moved or doesn't exist.</p>

        <div className="my-8 flex items-center" data-aos="fade-left">
          <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
          <div className="mx-4">
            <GiSewingNeedle className="h-6 w-6 text-gray-400 transform rotate-45" />
          </div>
          <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8" data-aos="zoom-in-up">
          <a href="/" className="px-6 py-3 bg-blue-900 text-white rounded-md font-medium flex items-center justify-center hover:bg-blue-800 transition"><FaHome className="mr-2" /> Return Home</a>
          <a href="/contact" className="px-6 py-3 bg-emerald-600 text-white rounded-md font-medium flex items-center justify-center hover:bg-emerald-700 transition"><FaEnvelope className="mr-2" /> Contact Support</a>
        </div>

        <div className="mt-12" data-aos="fade-up">
          <h3 className="text-lg font-medium text-blue-900 mb-4">You might be looking for:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/collections" className="px-4 py-2 bg-white shadow-sm rounded-md text-blue-800 hover:bg-blue-50 transition">Collections</a>
            <a href="/about" className="px-4 py-2 bg-white shadow-sm rounded-md text-blue-800 hover:bg-blue-50 transition">About Us</a>
            <a href="/blog" className="px-4 py-2 bg-white shadow-sm rounded-md text-blue-800 hover:bg-blue-50 transition">Blog</a>
            <a href="/contact" className="px-4 py-2 bg-white shadow-sm rounded-md text-blue-800 hover:bg-blue-50 transition">Contact</a>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-2 z-20" data-aos="fade-up">
        <div className="flex h-full">
          <div className="w-1/2 bg-blue-900"></div>
          <div className="w-1/2 bg-emerald-600"></div>
        </div>
      </div>
    </div>
  );
}