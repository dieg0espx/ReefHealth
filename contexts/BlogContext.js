import React, { createContext, useContext, useState, useEffect } from 'react';

const BlogContext = createContext();

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch('/blogs.json');
        if (!response.ok) {
          throw new Error('Failed to load blogs');
        }
        const data = await response.json();
        setBlogs(data.blogs || []);
      } catch (err) {
        setError(err.message);
        console.error('Error loading blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const getBlogBySlug = (slug) => {
    return blogs.find(blog => blog.slug === slug);
  };

  const getBlogsByCategory = (category) => {
    return blogs.filter(blog => blog.category === category);
  };

  const getBlogsByTag = (tag) => {
    return blogs.filter(blog => blog.tags.includes(tag));
  };

  const getAllCategories = () => {
    const categories = blogs.map(blog => blog.category);
    return [...new Set(categories)];
  };

  const getAllTags = () => {
    const tags = blogs.flatMap(blog => blog.tags);
    return [...new Set(tags)];
  };

  const value = {
    blogs,
    loading,
    error,
    getBlogBySlug,
    getBlogsByCategory,
    getBlogsByTag,
    getAllCategories,
    getAllTags,
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
}; 