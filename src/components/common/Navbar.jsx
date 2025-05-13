import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 shadow-md"
      } fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center" data-aos="fade-right">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-12 w-auto" src="/path/to/logo.png" alt="Stitch Cultures Logo" />
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-800 bg-clip-text text-transparent">
                Stitch Cultures
              </span>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8" data-aos="fade-left">
            <a href="/" className="text-blue-900 hover:text-emerald-600 px-3 py-2 font-medium">Home</a>
            <a href="/about" className="text-blue-900 hover:text-emerald-600 px-3 py-2 font-medium">About</a>
            <a href="/services" className="text-blue-900 hover:text-emerald-600 px-3 py-2 font-medium">Services</a>
            <a href="/collection" className="text-blue-900 hover:text-emerald-600 px-3 py-2 font-medium">Collection</a>
            <a href="/blog" className="text-blue-900 hover:text-emerald-600 px-3 py-2 font-medium">Blog</a>
            <a href="/contact" className="px-4 py-2 font-medium text-white bg-emerald-600 rounded-md hover:bg-blue-800 transition">Contact</a>
          </div>

          {/* Social icons */}
          <div className="hidden md:flex items-center space-x-4" data-aos="fade-left" data-aos-delay="100">
            <a href="#" className="text-gray-500 hover:text-blue-800"><FaFacebook className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-blue-400"><FaTwitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-pink-600"><FaInstagram className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-blue-600"><FaLinkedin className="w-5 h-5" /></a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button onClick={toggleMenu} className="p-2 rounded-md text-gray-500 hover:text-emerald-600 focus:outline-none">
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-2 space-y-1 sm:px-3" data-aos="fade-down">
          <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:bg-emerald-100">Home</a>
          <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:bg-emerald-100">About</a>
          <a href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:bg-emerald-100">Services</a>
          <a href="/collections" className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:bg-emerald-100">Collection</a>
          <a href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:bg-emerald-100">Blog</a>
          <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:bg-emerald-100">Contact</a>

          <div className="flex space-x-4 px-3 py-2">
            <a href="#" className="text-gray-500 hover:text-blue-800"><FaFacebook className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-blue-400"><FaTwitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-pink-600"><FaInstagram className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-blue-600"><FaLinkedin className="w-5 h-5" /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
