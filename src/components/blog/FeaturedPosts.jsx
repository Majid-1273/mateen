import { ArrowRight, Tag, Calendar, MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function FeaturedPosts({ posts }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Default posts data if none provided
  const defaultPosts = [
    {
      id: 1,
      title: "Traditional Pakistani Embroidery Meets British Fashion",
      excerpt: "Discover how centuries-old Pakistani handwork techniques are revolutionizing modern British fashion, creating unique pieces that bridge two cultures.",
      category: "Fashion Heritage",
      author: "Fatima Ahmed",
      authorLocation: "Karachi, Pakistan",
      date: "May 20, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1594736797933-d0d64a9b9f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      tags: ["Embroidery", "Heritage", "Cross-Cultural"]
    },
    {
      id: 2,
      title: "From Lahore Ateliers to London Boutiques",
      excerpt: "The inspiring journey of Pakistani artisans whose exquisite craftsmanship is now adorning fashion-conscious women across England.",
      category: "Artisan Stories",
      author: "Sarah Thompson",
      authorLocation: "London, England",
      date: "May 18, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      tags: ["Artisans", "Journey", "Cross-Border"]
    },
    {
      id: 3,
      title: "Sustainable Fashion: Pakistani Textiles for Conscious Consumers",
      excerpt: "How traditional Pakistani textile methods are leading the sustainable fashion movement in the UK, offering eco-friendly alternatives.",
      category: "Sustainability",
      author: "Zara Khan",
      authorLocation: "Manchester, England",
      date: "May 15, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      tags: ["Sustainability", "Eco-Fashion", "Textiles"]
    }
  ];

  // Use provided posts or default posts
  const featuredPosts = posts || defaultPosts;

  return (
    <div 
      className="min-h-[calc(100vh-5rem)] py-16 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          rgba(22, 101, 52, 0.03) 0%, 
          rgba(255, 255, 255, 1) 50%, 
          rgba(185, 28, 28, 0.03) 100%)`
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-40 h-40 bg-green-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-red-700 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-3xl">🌙</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-800 via-red-700 to-green-800 bg-clip-text text-transparent">
              Featured Stories
            </h2>
            <span className="text-3xl">👑</span>
          </div>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-green-800 to-red-700 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-green-800 to-red-700 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-red-700 to-green-800 rounded-full"></div>
          </div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Stories that weave together the rich tapestry of Pakistani craftsmanship and British elegance
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredPosts.slice(0, 3).map((post, index) => (
            <article 
              key={post.id}
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Featured Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1594736797933-d0d64a9b9f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center space-x-1 bg-gradient-to-r from-green-800 to-red-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    <Tag size={14} />
                    <span>{post.category}</span>
                  </span>
                </div>

                {/* Featured Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                    FEATURED
                  </span>
                </div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm opacity-90">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags && post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full hover:bg-green-100 hover:text-green-700 transition-colors duration-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Author and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-600 to-red-600 flex items-center justify-center text-white font-bold shadow-md">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{post.author}</p>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <MapPin size={12} />
                        <span>{post.authorLocation}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="group/btn flex items-center space-x-2 text-green-800 hover:text-red-700 transition-colors duration-300 font-medium">
                    <span className="text-sm">Read Story</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-red-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </article>
          ))}
        </div>

        {/* Cultural Bridge Section */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
          <div className="inline-flex items-center space-x-6 bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl border border-gray-200">
            <div className="flex items-center space-x-2">
              <img src="https://flagcdn.com/24x18/pk.png" alt="Pakistan" className="rounded-sm shadow-sm" />
              <span className="text-sm font-medium text-gray-700">Pakistani Heritage</span>
            </div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-green-600 to-red-600 rounded-full"></div>
            <span className="text-sm text-gray-500 font-medium">Bridging Cultures</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-green-600 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">British Elegance</span>
              <img src="https://flagcdn.com/24x18/gb.png" alt="England" className="rounded-sm shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}