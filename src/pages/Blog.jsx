import React from 'react';
import BlogCard from '../components/blog/BlogCard';
import BlogHero from '../components/blog/BlogHero';
import BlogSidebar from '../components/blog/BlogSidebar';
import FeaturedPosts from '../components/blog/FeaturedPosts';
import NewsLetter from '../components/blog/NewsLetter';
import Pagination from '../components/blog/Pagination';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blog Hero Section */}
      <BlogHero />
      
      {/* Main Blog Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Featured Posts Section */}
        <section className="mb-16">
          <FeaturedPosts />
        </section>

        {/* Main Blog Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
            
            {/* Pagination */}
            <Pagination />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>

        {/* Newsletter Section */}
        <section className="mt-16">
          <NewsLetter />
        </section>
      </div>
    </div>
  );
};

export default Blog;