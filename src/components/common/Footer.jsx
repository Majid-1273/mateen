import { useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { GiSewingNeedle } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div data-aos="fade-up">
            <div className="flex items-center mb-4">
              <GiSewingNeedle className="h-8 w-8 text-emerald-400" />
              <span className="ml-2 text-xl font-bold">Stitch Cultures</span>
            </div>
            <p className="text-gray-300 mb-4">
              Blending British precision with Pakistani artistry in every stitch since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white"><FaFacebook className="h-6 w-6" /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaTwitter className="h-6 w-6" /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaInstagram className="h-6 w-6" /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaLinkedin className="h-6 w-6" /></a>
            </div>
          </div>

          {/* Locations */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Our Locations</h3>
            <div className="mb-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-red-500 mr-2 mt-1" />
                <div>
                  <p className="font-medium">London Office</p>
                  <p className="text-gray-300">123 Savile Row</p>
                  <p className="text-gray-300">London, W1S 2XD</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-emerald-500 mr-2 mt-1" />
                <div>
                  <p className="font-medium">Lahore Workshop</p>
                  <p className="text-gray-300">45 Anarkali Bazaar</p>
                  <p className="text-gray-300">Lahore, Punjab</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="/collection" className="text-gray-300 hover:text-white">Collection</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="h-5 w-5 mr-3 text-emerald-400" />
                <p className="text-gray-300">+44 20 1234 5678 (UK) | +92 42 3456 7890 (PK)</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="h-5 w-5 mr-3 text-emerald-400" />
                <p className="text-gray-300">info@stitchcultures.com</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full text-gray-800 rounded-l focus:outline-none"
                />
                <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-r">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Stitch Cultures. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
