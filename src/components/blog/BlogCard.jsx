import React, { useEffect } from 'react';
import { ArrowRight, Calendar, Clock, MapPin, Eye, Heart } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BlogCard({ post, index = 0 }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Default post data if none provided
  const defaultPosts = [
    {
      id: 1,
      title: "The Art of Pakistani Hand Embroidery in Modern British Fashion",
      excerpt: "Exploring how traditional Pakistani needlework techniques are being adapted for contemporary British fashion, creating stunning pieces that tell stories of cultural heritage.",
      category: "Cultural Fashion",
      author: "Amina Rashid",
      authorLocation: "Birmingham, England",
      date: "May 22, 2025",
      readTime: "4 min read",
      views: "2.3k",
      likes: "156",
      image: "https://images.unsplash.com/photo-1594736797933-d0d64a9b9f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Embroidery", "Heritage", "Fashion"],
      featured: false
    },
    {
      id: 2,
      title: "Sustainable Textiles: Pakistan's Eco-Friendly Fashion Revolution",
      excerpt: "How Pakistani textile manufacturers are leading the charge in sustainable fashion, creating eco-friendly fabrics that are making waves in the UK market.",
      category: "Sustainability",
      author: "James Mitchell",
      authorLocation: "London, England",
      date: "May 20, 2025",
      readTime: "6 min read",
      views: "1.8k",
      likes: "203",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Sustainability", "Textiles", "Innovation"],
      featured: true
    },
    {
      id: 3,
      title: "From Karachi Workshops to London Runways",
      excerpt: "The inspiring journey of Pakistani designers who are showcasing their traditional craftsmanship on international fashion stages in the UK.",
      category: "Designer Stories",
      author: "Fatima Ali",
      authorLocation: "Manchester, England",
      date: "May 18, 2025",
      readTime: "5 min read",
      views: "3.1k",
      likes: "287",
      image: "https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Designers", "International", "Success"],
      featured: false
    },
    {
      id: 4,
      title: "Cross-Cultural Collaboration in Fashion Design",
      excerpt: "British and Pakistani designers are joining forces to create unique fashion pieces that blend the best of both cultures, resulting in extraordinary collections.",
      category: "Collaboration",
      author: "Sarah Khan",
      authorLocation: "Leeds, England",
      date: "May 16, 2025",
      readTime: "7 min read",
      views: "2.7k",
      likes: "198",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Collaboration", "Design", "Culture"],
      featured: true
    },
    {
      id: 5,
      title: "The Economics of Cross-Border Fashion Trade",
      excerpt: "An in-depth look at how the fashion trade between Pakistan and England is creating economic opportunities and fostering international relationships.",
      category: "Business",
      author: "Ahmed Hassan",
      authorLocation: "Oxford, England",
      date: "May 14, 2025",
      readTime: "8 min read",
      views: "1.5k",
      likes: "134",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Economics", "Trade", "Business"],
      featured: false
    },
    {
      id: 6,
      title: "Traditional Techniques Meet Modern Technology",
      excerpt: "How Pakistani artisans are incorporating modern technology into traditional textile production methods to create innovative fashion pieces for the UK market.",
      category: "Innovation",
      author: "Zara Thompson",
      authorLocation: "Edinburgh, Scotland",
      date: "May 12, 2025",
      readTime: "5 min read",
      views: "2.9k",
      likes: "245",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Technology", "Innovation", "Artisans"],
      featured: false
    }
  ];

  // Use provided post or default based on index
  const currentPost = post || defaultPosts[index % defaultPosts.length];

  return (
    <article 
      className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Post Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={currentPost.image}
          alt={currentPost.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = `https://images.unsplash.com/photo-1594736797933-d0d64a9b9f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`;
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center bg-gradient-to-r from-green-800 to-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            {currentPost.category}
          </span>
        </div>

        {/* Featured Badge */}
        {currentPost.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg">
              FEATURED
            </span>
          </div>
        )}

        {/* Stats Overlay */}
        <div className="absolute bottom-4 right-4 flex items-center space-x-3 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
            <Eye size={14} />
            <span>{currentPost.views}</span>
          </div>
          <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
            <Heart size={14} />
            <span>{currentPost.likes}</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar size={14} className="text-green-600" />
              <span>{currentPost.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={14} className="text-red-600" />
              <span>{currentPost.readTime}</span>
            </div>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-green-800 transition-colors duration-300 leading-tight line-clamp-2">
          {currentPost.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {currentPost.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {currentPost.tags && currentPost.tags.slice(0, 3).map((tag, tagIndex) => (
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
              {currentPost.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">{currentPost.author}</p>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <MapPin size={10} />
                <span>{currentPost.authorLocation}</span>
              </div>
            </div>
          </div>
          
          <button className="group/btn flex items-center space-x-2 text-green-800 hover:text-red-700 transition-colors duration-300 font-semibold">
            <span className="text-sm">Read More</span>
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Cultural Bridge Indicator */}
      <div className="h-1 bg-gradient-to-r from-green-600 via-red-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </article>
  );
}