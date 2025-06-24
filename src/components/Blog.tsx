import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight, Tag, Pause, Play } from 'lucide-react';

const Blog = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout>();

  const blogPosts = [
    {
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn how to architect large-scale React applications using TypeScript, best practices for type safety, and performance optimization techniques.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      readTime: '8 min',
      category: 'React',
      tags: ['React', 'TypeScript', 'Architecture'],
      featured: true
    },
    {
      title: 'Mastering React Performance Optimization',
      excerpt: 'Deep dive into React performance optimization techniques including code splitting, lazy loading, and advanced hooks patterns.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-08',
      readTime: '12 min',
      category: 'Performance',
      tags: ['React', 'Performance', 'Optimization']
    },
    {
      title: 'The Future of Frontend Development in 2024',
      excerpt: 'Exploring emerging trends in frontend development, from Web3 integration to AI-powered development tools.',
      image: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-01',
      readTime: '6 min',
      category: 'Trends',
      tags: ['Frontend', 'Trends', '2024']
    },
    {
      title: 'Advanced State Management with Redux Toolkit',
      excerpt: 'Complete guide to modern Redux with Redux Toolkit, including best practices and real-world examples.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-20',
      readTime: '10 min',
      category: 'State Management',
      tags: ['Redux', 'State Management', 'React']
    },
    {
      title: 'Creating Accessible React Components',
      excerpt: 'Essential techniques for building accessible React components that work for everyone, including ARIA patterns and testing strategies.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-15',
      readTime: '7 min',
      category: 'Accessibility',
      tags: ['Accessibility', 'React', 'UX']
    },
    {
      title: 'Modern CSS Techniques for React Developers',
      excerpt: 'Explore modern CSS features and how to effectively use them in React applications for better styling and maintainability.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-10',
      readTime: '9 min',
      category: 'CSS',
      tags: ['CSS', 'Styling', 'React']
    },
    {
      title: 'Building Progressive Web Apps with React',
      excerpt: 'Step-by-step guide to creating PWAs with React, including service workers, offline functionality, and app-like experiences.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-05',
      readTime: '11 min',
      category: 'PWA',
      tags: ['PWA', 'React', 'Service Workers']
    },
    {
      title: 'Micro-frontends Architecture with React',
      excerpt: 'Understanding micro-frontends architecture and how to implement it effectively using React and modern build tools.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-11-28',
      readTime: '13 min',
      category: 'Architecture',
      tags: ['Micro-frontends', 'Architecture', 'React']
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling || isPaused || !scrollContainerRef.current) return;

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const scrollAmount = 1; // Pixels per interval
          const maxScroll = container.scrollWidth - container.clientWidth;
          
          if (container.scrollLeft >= maxScroll) {
            // Reset to beginning when reaching the end
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += scrollAmount;
          }
        }
      }, 30); // Smooth scrolling interval
    };

    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
  };

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-blue-400 font-semibold text-lg mb-4 block"
            >
              Latest Insights
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Blog & Articles
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '100px' } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"
            />
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="md:flex">
                  <div className="md:w-1/2 relative overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full text-white text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar size={14} />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Clock size={14} />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-700 rounded text-gray-300 text-sm flex items-center gap-1"
                        >
                          <Tag size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300"
                    >
                      Read Article
                      <ArrowRight size={16} />
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        Read full article
                      </div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Scrollable Blog Posts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            {/* Scroll Controls */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">More Articles</h3>
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 text-gray-400 text-sm">
                  <span>Auto-scrolling</span>
                  <ArrowRight size={16} />
                </div>
                <motion.button
                  onClick={toggleAutoScroll}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative p-2 rounded-lg border transition-all duration-300 ${
                    isAutoScrolling
                      ? 'bg-blue-500/20 border-blue-500/30 text-blue-400'
                      : 'bg-slate-800/50 border-slate-700 text-gray-400 hover:text-white'
                  }`}
                >
                  {isAutoScrolling ? <Pause size={16} /> : <Play size={16} />}
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {isAutoScrolling ? 'Pause auto-scroll' : 'Start auto-scroll'}
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Horizontal Scrollable Container */}
            <div className="relative">
              <div 
                ref={scrollContainerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {regularPosts.map((post, index) => (
                  <motion.div
                    key={post.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="group flex-shrink-0 w-80"
                  >
                    <motion.article
                      whileHover={{ y: -10 }}
                      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full"
                    >
                      {/* Post Image */}
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Post Content */}
                      <div className="p-6 flex flex-col flex-1">
                        {/* Meta Info */}
                        <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            {post.readTime}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-slate-700 rounded text-gray-300 text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 2 && (
                            <span className="px-2 py-1 bg-slate-700 rounded text-gray-400 text-xs">
                              +{post.tags.length - 2}
                            </span>
                          )}
                        </div>

                        {/* Read More */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          className="group/btn relative flex items-center gap-2 text-blue-400 font-medium text-sm hover:text-blue-300 transition-colors duration-300 mt-auto"
                        >
                          Read More
                          <ArrowRight size={14} />
                          {/* Tooltip */}
                          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                            Read full article
                          </div>
                        </motion.button>
                      </div>
                    </motion.article>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Blog;