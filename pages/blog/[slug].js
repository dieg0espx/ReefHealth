import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useBlog } from '@/contexts/BlogContext';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { getBlogBySlug, loading, error, blogs } = useBlog();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-main-pink mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog post...</p>
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
            <p className="text-red-600">Error loading blog: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <button className="bg-main-pink text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                Back to Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Format content for display - split by double newlines for paragraphs
  const formatContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => {
      // Check if it's a main heading (starts with capital letter and is short)
      if (paragraph.length < 100 && paragraph.match(/^[A-Z][^.]*$/) && !paragraph.includes('•') && !paragraph.includes('\t')) {
        return (
          <div key={index} className="mt-12 mb-6 first:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-pink-200 inline-block">
              {paragraph}
            </h2>
          </div>
        );
      }
      
      // Check if it's a subheading or section title
      if (paragraph.match(/^[A-Z][^.]*:$/) || (paragraph.length < 80 && paragraph.match(/^[0-9]+\./))) {
        return (
          <div key={index} className="mt-8 mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
              <span className="w-2 h-2 bg-main-pink rounded-full"></span>
              {paragraph}
            </h3>
          </div>
        );
      }

      // Check if it's a list item or bullet point
      if (paragraph.includes('•') || paragraph.startsWith('\t•')) {
        const listItems = paragraph.split('\n').filter(item => item.trim());
        return (
          <div key={index} className="my-6">
            <ul className="space-y-3">
              {listItems.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3 text-gray-700 text-lg leading-relaxed">
                  <span className="w-2 h-2 bg-main-pink rounded-full mt-3 flex-shrink-0"></span>
                  <span>{item.replace(/^\t?•\s*/, '')}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      }

      // Check if it contains numbered points
      if (paragraph.match(/^[0-9]+\./)) {
        return (
          <div key={index} className="my-6 p-6 bg-gray-50 rounded-xl border-l-4 border-main-pink">
            <p className="text-gray-800 text-lg leading-relaxed font-medium">
              {paragraph}
            </p>
          </div>
        );
      }

      // Regular paragraph with enhanced styling
      return (
        <p key={index} className="text-gray-700 mb-6 text-lg leading-relaxed">
          {paragraph}
        </p>
      );
    });
  };

  // Get related blogs (same category, different post)
  const relatedBlogs = blogs
    .filter(b => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-main-pink hover:text-pink-700">
              Home
            </Link>
            <span className="mx-2 text-gray-500">›</span>
            <Link href="/blog" className="text-main-pink hover:text-pink-700">
              Blog
            </Link>
            <span className="mx-2 text-gray-500">›</span>
            <span className="text-gray-700">{blog.title}</span>
          </nav>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Blog Header */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-10 mb-12 border border-gray-100 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-main-pink via-pink-500 to-pink-600"></div>
              
              {/* Category Badge */}
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-pink-100 to-pink-50 text-pink-800 text-sm font-bold px-4 py-2 rounded-full capitalize border border-pink-200 shadow-sm">
                  📚 {blog.category.replace('-', ' ')}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {blog.title}
              </h1>

              {/* Subtitle */}
              {blog.subtitle && (
                <div className="mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-16 bg-gradient-to-b from-main-pink to-pink-600 rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed italic">
                      {blog.subtitle}
                    </p>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-white text-gray-700 px-4 py-2 rounded-full border border-gray-300 font-medium shadow-sm hover:shadow-md transition-shadow"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Blog Content */}
            <div className="bg-white rounded-2xl shadow-lg p-10 mb-12 border border-gray-100">
              <div className="prose prose-xl max-w-none">
                <div className="text-gray-800 leading-relaxed space-y-6">
                  {formatContent(blog.content)}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-16 p-8 bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl border border-pink-200 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-main-pink rounded-full opacity-10 translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-main-pink rounded-full flex items-center justify-center text-white text-xl">
                      🚀
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Ready to Transform Your Benefits?
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Join thousands of businesses who have transformed their health benefits with Reef Health. 
                    Get started with our simple, affordable, and comprehensive health benefits solution.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <button className="bg-main-pink text-white px-8 py-4 rounded-xl font-bold hover:bg-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Contact Us Today
                      </button>
                    </Link>
                    <Link href="/blog">
                      <button className="bg-white text-main-pink px-8 py-4 rounded-xl font-bold border-2 border-main-pink hover:bg-main-pink hover:text-white transition-all duration-300">
                        Read More Articles
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Blogs */}
            {relatedBlogs.length > 0 && (
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-10 border border-gray-100">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-main-pink to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                    📖 Related Reading
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Continue Learning
                  </h3>
                  <p className="text-gray-600">Explore more insights about health benefits and business solutions</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedBlogs.map((relatedBlog) => (
                    <Link key={relatedBlog.id} href={`/blog/${relatedBlog.slug}`}>
                      <article className="bg-white border border-gray-200 rounded-xl p-6 hover:border-pink-300 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                        <div className="h-2 bg-gradient-to-r from-main-pink to-pink-600 rounded-full mb-4"></div>
                        <span className="inline-block bg-pink-50 text-pink-800 text-xs font-bold px-3 py-1 rounded-full capitalize mb-3 border border-pink-200">
                          {relatedBlog.category.replace('-', ' ')}
                        </span>
                        <h4 className="font-bold text-gray-900 mb-3 line-clamp-2 text-lg group-hover:text-main-pink transition-colors">
                          {relatedBlog.title}
                        </h4>
                        <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                          {relatedBlog.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <span className="text-main-pink text-sm font-bold group-hover:text-pink-700 transition-colors">
                            Read Article
                          </span>
                          <div className="w-6 h-6 bg-pink-50 rounded-full flex items-center justify-center group-hover:bg-main-pink transition-colors">
                            <span className="text-main-pink group-hover:text-white transition-colors text-xs">→</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog */}
            <div className="text-center mt-8">
              <Link href="/blog">
                <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                  ← Back to All Blogs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 