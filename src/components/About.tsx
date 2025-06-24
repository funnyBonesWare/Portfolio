import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Globe, Zap, Users } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { label: 'Years Experience', value: '5+', icon: Code },
    { label: 'Projects Completed', value: '50+', icon: Globe },
    { label: 'Technologies Mastered', value: '20+', icon: Zap },
    { label: 'Team Members Led', value: '10+', icon: Users },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-blue-400 font-semibold text-lg mb-4 block"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Crafting Digital Experiences
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '100px' } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative group">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                
                {/* Main Image Container */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 group-hover:border-blue-500/30 transition-all duration-300">
                  <div className="relative w-full aspect-square max-w-sm mx-auto rounded-xl overflow-hidden">
                    <img
                      src="/Sahil-Final.png"
                      alt="Sahil Siddiqui - Senior Frontend Developer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Professional Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full text-white text-sm font-medium shadow-lg">
                      Senior Frontend Developer
                    </div>
                    
                    {/* Experience Badge */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-slate-600">
                      5+ Years
                    </div>
                  </div>
                  
                  {/* Stats Grid Below Image */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {stats.map(({ label, value, icon: Icon }, index) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="text-center p-4 bg-slate-900/50 rounded-xl border border-slate-600 hover:border-blue-500/30 transition-colors duration-300"
                      >
                        <Icon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                        <div className="text-xl font-bold text-white mb-1">{value}</div>
                        <div className="text-xs text-gray-400">{label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate Senior Frontend Developer with <strong className="text-white">5+ years</strong> of experience 
                  creating exceptional digital experiences. Specialized in <strong className="text-blue-400">React</strong>, 
                  <strong className="text-blue-400"> TypeScript</strong>, and modern web technologies.
                </p>
                
                <p>
                  Currently leading frontend development at <strong className="text-emerald-400">Elocity Technologies</strong>, 
                  where I've successfully delivered 50+ reusable UI components and improved performance by 3x through 
                  advanced optimization techniques.
                </p>
                
                <p>
                  My expertise spans from architecting scalable applications to mentoring junior developers and 
                  ensuring 100% accessibility compliance. I'm passionate about writing clean, maintainable code 
                  and delivering pixel-perfect user interfaces.
                </p>
              </div>

              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="space-y-3"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Key Highlights:</h3>
                {[
                  'Led distributed teams across multiple time zones',
                  'Migrated Fortune 500 client\'s application from .NET to React',
                  'Built and optimized 50+ dynamic UI components',
                  'Delivered fully remote client demos and features',
                  'Ensured 100% accessibility compliance',
                ].map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{highlight}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                className="pt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Let's Work Together
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;