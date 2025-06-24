import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Eye, Code, ArrowRight, Pause, Play, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout>();

  const categories = ['All', 'React', 'Dashboard', 'E-commerce', 'Mobile'];

  const projects = [
    {
      title: 'EV Admin Dashboard',
      category: 'Dashboard',
      description: 'Comprehensive dashboard for managing 20+ Charge Point Operators with real-time data visualization and performance monitoring.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Material-UI', 'AG Grid', 'Chart.js'],
      features: ['Real-time Analytics', 'Data Visualization', 'Performance Monitoring'],
      stats: { users: '1M+', performance: '3x faster', components: '50+' },
      links: { demo: '#', github: '#' },
      featured: true
    },
    {
      title: 'Live Docs Collaboration',
      category: 'React',
      description: 'Real-time document editing system with multi-user collaboration and minimal latency using React JS and Firebase.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'WebRTC', 'Material-UI'],
      features: ['Real-time Collaboration', 'Auto-save', 'Version Control'],
      stats: { latency: 'Minimal', users: 'Multi-user', sync: 'Real-time' },
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Fortune 500 Migration',
      category: 'React',
      description: 'Successfully migrated legacy .NET application to modern React architecture, improving performance and user experience.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'JavaScript', 'REST APIs', 'CSS3'],
      features: ['Legacy Migration', 'Performance Boost', 'Modern UI'],
      stats: { performance: '20% faster', migration: 'Complete', apis: '100+' },
      links: { demo: '#', github: '#' }
    },
    {
      title: 'E-commerce Platform',
      category: 'E-commerce',
      description: 'Full-featured e-commerce platform with advanced filtering, payment integration, and responsive design.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Redux', 'Stripe API', 'SASS'],
      features: ['Payment Integration', 'Advanced Filtering', 'Responsive Design'],
      stats: { conversion: '25% higher', products: '1000+', mobile: '100%' },
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Mobile-First Portfolio',
      category: 'Mobile',
      description: 'Responsive portfolio website with advanced animations and progressive web app features.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Framer Motion', 'PWA', 'TypeScript'],
      features: ['PWA Features', 'Advanced Animations', 'Mobile-First'],
      stats: { performance: '95/100', animations: 'Smooth', mobile: 'First' },
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Data Analytics Dashboard',
      category: 'Dashboard',
      description: 'Interactive dashboard for data visualization with real-time charts and advanced filtering capabilities.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Chart.js', 'TypeScript'],
      features: ['Interactive Charts', 'Real-time Data', 'Advanced Filters'],
      stats: { charts: '15+', data: 'Real-time', filters: 'Advanced' },
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Task Management App',
      category: 'React',
      description: 'Collaborative task management application with team features, real-time updates, and advanced project tracking.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      features: ['Team Collaboration', 'Real-time Updates', 'Project Tracking'],
      stats: { teams: '500+', tasks: '10K+', uptime: '99.9%' },
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Crypto Trading Platform',
      category: 'Dashboard',
      description: 'Advanced cryptocurrency trading platform with real-time market data, portfolio management, and trading tools.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'WebSocket', 'Chart.js', 'Redux'],
      features: ['Real-time Trading', 'Portfolio Management', 'Market Analysis'],
      stats: { trades: '1M+', users: '50K+', latency: '<10ms' },
      links: { demo: '#', github: '#' }
    }
  ];

  const featuredProject = projects.find(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);
  
  const filteredProjects = selectedCategory === 'All' 
    ? regularProjects 
    : regularProjects.filter(project => project.category === selectedCategory);

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
  }, [isAutoScrolling, isPaused, selectedCategory]);

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
    <section id="projects" className="py-20 relative">
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
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '100px' } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"
            />
          </div>

          {/* Featured Project */}
          {featuredProject && (
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
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full text-white text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={featuredProject.links.demo}
                        className="group relative p-3 bg-blue-600 rounded-full text-white shadow-lg"
                      >
                        <Eye size={18} />
                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          View Demo
                        </div>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={featuredProject.links.github}
                        className="group relative p-3 bg-slate-700 rounded-full text-white shadow-lg"
                      >
                        <Github size={18} />
                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          View Code
                        </div>
                      </motion.a>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                        {featuredProject.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {featuredProject.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredProject.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(featuredProject.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-slate-900/50 rounded-xl border border-slate-600">
                          <div className="text-lg font-bold text-white">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-700 rounded text-gray-300 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={featuredProject.links.demo}
                        className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          View live demo
                        </div>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={featuredProject.links.github}
                        className="group relative flex items-center gap-2 px-6 py-3 border border-slate-600 rounded-lg text-gray-300 font-medium hover:border-blue-500/50 hover:text-white transition-all duration-300"
                      >
                        <Code size={16} />
                        View Code
                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          View source code
                        </div>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-300 hover:text-white border border-slate-700 hover:border-blue-500/30'
                }`}
              >
                {category}
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  Filter by {category}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Scrollable Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            {/* Scroll Controls */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">More Projects</h3>
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
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  ref={scrollContainerRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex-shrink-0 w-80"
                    >
                      <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full"
                      >
                        {/* Project Image */}
                        <div className="relative overflow-hidden h-48">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                              {project.category}
                            </span>
                          </div>
                          
                          {/* Overlay Actions */}
                          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <motion.a
                              whileHover={{ scale: 1.1 }}
                              href={project.links.demo}
                              className="group/btn relative p-3 bg-blue-600 rounded-full text-white shadow-lg"
                            >
                              <Eye size={18} />
                              {/* Tooltip */}
                              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                View Demo
                              </div>
                            </motion.a>
                            <motion.a
                              whileHover={{ scale: 1.1 }}
                              href={project.links.github}
                              className="group/btn relative p-3 bg-slate-700 rounded-full text-white shadow-lg"
                            >
                              <Github size={18} />
                              {/* Tooltip */}
                              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                View Code
                              </div>
                            </motion.a>
                          </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-6 flex flex-col flex-1">
                          {/* Title */}
                          <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1 line-clamp-3">
                            {project.description}
                          </p>

                          {/* Features */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.features.slice(0, 2).map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-emerald-400 text-xs"
                              >
                                {feature}
                              </span>
                            ))}
                            {project.features.length > 2 && (
                              <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-emerald-400 text-xs">
                                +{project.features.length - 2}
                              </span>
                            )}
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            {Object.entries(project.stats).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-sm font-bold text-white">{value}</div>
                                <div className="text-xs text-gray-400 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-slate-700 rounded text-gray-300 text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-slate-700 rounded text-gray-400 text-xs">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3 mt-auto">
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              href={project.links.demo}
                              className="group/btn relative flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all duration-300"
                            >
                              <ExternalLink size={14} />
                              Demo
                              {/* Tooltip */}
                              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                View live demo
                              </div>
                            </motion.a>
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              href={project.links.github}
                              className="group/btn relative flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-slate-600 rounded-lg text-gray-300 text-sm font-medium hover:border-blue-500/50 hover:text-white transition-all duration-300"
                            >
                              <Code size={14} />
                              Code
                              {/* Tooltip */}
                              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                View source code
                              </div>
                            </motion.a>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
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

export default Projects;