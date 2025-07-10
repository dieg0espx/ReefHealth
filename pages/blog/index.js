import React, { useState } from 'react';
import Link from 'next/link';
import { useBlog } from '@/contexts/BlogContext';

const BlogsPage = () => {
  const { blogs, loading, error, getAllCategories } = useBlog();
  const [selectedCategory, setSelectedCategory] = useState('all');

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-main-pink mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blogs...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">Error loading blogs: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  const categories = getAllCategories();
  const filteredBlogs = selectedCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-main-pink to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            💡 Health Insights & Tips
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Health Benefits <span className="text-main-pink">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how Reef Health is revolutionizing healthcare benefits for small businesses and franchisees. 
            Get insights, tips, and strategies to transform your employee benefits.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-main-pink text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  selectedCategory === category
                    ? 'bg-main-pink text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredBlogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`}>
              <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full border border-gray-100 hover:border-pink-200 overflow-hidden">
                {/* Gradient Header */}
                <div className="h-2 bg-gradient-to-r from-main-pink via-pink-500 to-pink-600"></div>
                
                <div className="p-8 h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-pink-100 to-pink-50 text-pink-800 text-xs font-bold px-3 py-1.5 rounded-full capitalize border border-pink-200">
                      {blog.category.replace('-', ' ')}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-main-pink transition-colors line-clamp-2 leading-tight">
                    {blog.title}
                  </h2>

                  {/* Subtitle if exists */}
                  {blog.subtitle && (
                    <p className="text-sm text-gray-600 mb-4 font-semibold italic border-l-3 border-pink-300 pl-3">
                      {blog.subtitle}
                    </p>
                  )}

                  {/* Excerpt */}
                  <p className="text-gray-700 mb-6 flex-grow line-clamp-3 leading-relaxed text-base">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-50 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                    {blog.tags.length > 3 && (
                      <span className="text-xs text-gray-500 px-3 py-1.5">
                        +{blog.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Read More */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-main-pink font-semibold text-sm group-hover:text-pink-700 transition-colors">
                        Read Article
                      </span>
                      <div className="w-8 h-8 bg-pink-50 rounded-full flex items-center justify-center group-hover:bg-main-pink transition-colors">
                        <span className="text-main-pink group-hover:text-white transition-colors text-sm">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* No results message */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">
              No blogs found in the {selectedCategory} category.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-12 shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-main-pink via-pink-500 to-pink-600"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-pink-100 rounded-full opacity-30 -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-main-pink rounded-full opacity-10 translate-y-16 -translate-x-16"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-main-pink to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              ✨ Transform Your Benefits Today
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Revolutionize Your <span className="text-main-pink">Business Benefits?</span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses who have switched to Reef Health for simple, affordable, and effective health benefits. 
              Experience the difference of real care, transparent pricing, and human support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-main-pink text-white px-10 py-4 rounded-xl font-bold hover:bg-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                  Get Started Today
                </button>
              </Link>
              <Link href="/about">
                <button className="bg-white text-main-pink px-10 py-4 rounded-xl font-bold border-2 border-main-pink hover:bg-main-pink hover:text-white transition-all duration-300 text-lg">
                  Learn More About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage; 