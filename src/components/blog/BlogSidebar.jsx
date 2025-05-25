import { useState, useEffect } from 'react';

// Sample blog data since the import might be causing issues
const sampleBlogPosts = [
  {
    id: 1,
    title: "Traditional Pakistani Embroidery Meets British Tailoring",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1594736797933-d0ac1fb3e662?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    title: "The Art of Cross-Cultural Fashion Design",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1558882224-dda166733046?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Bridging Continents Through Fabric",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
  }
];

const defaultCategories = [
  { name: "Pakistani Craftsmanship", count: 12 },
  { name: "British Tailoring", count: 8 },
  { name: "Cultural Fusion", count: 15 },
  { name: "Traditional Techniques", count: 6 },
  { name: "Modern Designs", count: 10 },
  { name: "Fabric Stories", count: 7 }
];

const defaultTags = [
  { name: "Embroidery", count: 18 },
  { name: "Shalwar Kameez", count: 12 },
  { name: "British Style", count: 9 },
  { name: "Handcrafted", count: 15 },
  { name: "Cultural Bridge", count: 11 },
  { name: "Traditional", count: 8 },
  { name: "Modern Fusion", count: 6 },
  { name: "Textile Art", count: 13 }
];

export default function BlogSidebar({ 
  categories = defaultCategories, 
  tags = defaultTags,
  blogPosts = sampleBlogPosts 
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize AOS if available
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  if (!mounted) {
    return <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>;
  }

  return (
    <div 
      className="space-y-8"
      style={{ 
        minHeight: 'calc(100vh - 80px)', // Accounting for navbar height
        paddingTop: '2rem'
      }}
    >
      {/* About Blog Section */}
      <div 
        className="bg-gradient-to-br from-green-50 to-red-50 p-6 rounded-lg border-l-4 border-gradient-to-b from-green-700 to-red-700 shadow-lg hover:shadow-xl transition-all duration-300" 
        data-aos="fade-left"
      >
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-gradient-to-r from-green-700 to-red-700 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-sm font-bold">SP</span>
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-green-800 to-red-700 bg-clip-text text-transparent">
            Our Blog
          </h3>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Discover the art of stitching that bridges Pakistani craftsmanship with English elegance. 
          Our blog showcases the fusion of two rich textile traditions across continents.
        </p>
        <div className="h-1 w-12 bg-gradient-to-r from-green-700 to-red-700 mb-4 rounded-full"></div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <span className="text-green-700 text-lg">🌙</span>
            <span className="text-xs text-gray-600 font-medium">Pakistan</span>
          </div>
          <div className="h-4 w-px bg-gradient-to-b from-green-700 to-red-700"></div>
          <div className="flex items-center space-x-1">
            <span className="text-red-700 text-lg">👑</span>
            <span className="text-xs text-gray-600 font-medium">England</span>
          </div>
        </div>
      </div>
             
      {/* Categories */}
      <div 
        className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-gradient-to-r from-green-700 to-red-700 hover:shadow-xl transition-all duration-300" 
        data-aos="fade-left" 
        data-aos-delay="100"
      >
        <div className="flex items-center mb-4">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=32&h=32&fit=crop&crop=center" 
            alt="Categories"
            className="w-6 h-6 rounded-full mr-2 object-cover"
          />
          <h3 className="text-xl font-bold text-green-800">Categories</h3>
        </div>
        <ul className="space-y-3">
          {categories.map(category => (
            <li key={category.name} className="flex justify-between items-center group">
              <a
                href="#"
                className="text-gray-700 hover:text-red-700 transition-all duration-200 flex items-center group-hover:translate-x-2"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-green-700 to-red-700 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-110"></span>
                <span className="font-medium">{category.name}</span>
              </a>
              <span className="text-sm text-white bg-gradient-to-r from-green-700 to-red-700 px-3 py-1 rounded-full font-medium shadow-sm">
                {category.count}
              </span>
            </li>
          ))}
        </ul>
      </div>
             
      {/* Popular Tags */}
      <div 
        className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-gradient-to-r from-red-700 to-green-700 hover:shadow-xl transition-all duration-300" 
        data-aos="fade-left" 
        data-aos-delay="200"
      >
        <div className="flex items-center mb-4">
          <img 
            src="https://images.unsplash.com/photo-1516906080664-5b4da3e7ad56?w=32&h=32&fit=crop&crop=center" 
            alt="Tags"
            className="w-6 h-6 rounded-full mr-2 object-cover"
          />
          <h3 className="text-xl font-bold text-red-700">Popular Tags</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <a
              key={tag.name}
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gradient-to-r hover:from-green-700 hover:to-red-700 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md font-medium"
            >
              {tag.name} ({tag.count})
            </a>
          ))}
        </div>
      </div>
             
      {/* Latest Posts */}
      <div 
        className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-gradient-to-r from-green-700 to-red-700 hover:shadow-xl transition-all duration-300" 
        data-aos="fade-left" 
        data-aos-delay="300"
      >
        <div className="flex items-center mb-4">
          <img 
            src="https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=32&h=32&fit=crop&crop=center" 
            alt="Latest Posts"
            className="w-6 h-6 rounded-full mr-2 object-cover"
          />
          <h3 className="text-xl font-bold bg-gradient-to-r from-green-800 to-red-700 bg-clip-text text-transparent">
            Latest Posts
          </h3>
        </div>
        <div className="space-y-4">
          {blogPosts.slice(0, 3).map((post, index) => (
            <div key={post.id} className="flex space-x-4 group hover:bg-gradient-to-r hover:from-green-50 hover:to-red-50 p-3 rounded-lg transition-all duration-300">
              <div className="flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300 relative">
                <img
                  src={post.image || `https://images.unsplash.com/photo-${
                    index % 2 === 0 ? '1594736797933-d0ac1fb3e662' : '1558882224-dda166733046'
                  }?w=300&h=200&fit=crop`}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Hide broken image and show CSS placeholder instead
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* CSS Placeholder fallback */}
                <div 
                  className={`absolute inset-0 ${
                    index % 2 === 0 ? 'bg-gradient-to-br from-green-600 to-green-700' : 'bg-gradient-to-br from-red-600 to-red-700'
                  } flex items-center justify-center text-white font-bold text-xs hidden`}
                >
                  Blog {post.id}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors line-clamp-2 text-sm leading-tight mb-1">
                  {post.title}
                </h4>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-500 text-xs">{post.date}</p>
                  <span className="w-1 h-1 bg-gradient-to-r from-green-700 to-red-700 rounded-full"></span>
                  <span className="text-xs text-gray-400">Read more</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Posts Button */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <a 
            href="#" 
            className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-green-700 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
          >
            <span>View All Posts</span>
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div 
        className="bg-gradient-to-br from-green-700 to-red-700 p-6 rounded-lg text-white shadow-lg hover:shadow-xl transition-all duration-300" 
        data-aos="fade-left" 
        data-aos-delay="400"
      >
        <div className="text-center">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">Stay Connected</h3>
          <p className="text-sm mb-4 opacity-90">
            Get the latest updates on our Pakistan-England fashion fusion
          </p>
          <button className="w-full py-2 px-4 bg-white text-green-700 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-md hover:shadow-lg">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}