import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Elocity Technologies',
      location: 'Remote',
      period: 'Sep 2022 - Present',
      description: 'Spearheaded EV Admin Dashboard development using 20+ Charge Point Operators, enhancing operational efficiency.',
      achievements: [
        'Created 50+ reusable UI components with Material-UI, R Suite, and AG Grid',
        'Integrated AG Grid, Chart.js, and Re charts for handling 1M+ data records',
        'Enhanced frontend performance by 3x using code splitting, lazy loading, and React performance monitoring',
        'Led a distributed team of 4 developers across multiple time zones',
        'Ensured 100% accessibility compliance and cross-browser compatibility'
      ],
      tags: ['React JS', 'TypeScript', 'Material-UI', 'AG Grid', 'Chart.js']
    },
    {
      title: 'Project Engineer',
      company: 'Wipro',
      location: 'Bengaluru',
      period: 'Sep 2019 - Aug 2022',
      description: 'Migrated a Fortune 500 client\'s web application from .NET to React JS, improving performance and maintainability.',
      achievements: [
        'Developed 40+ scalable UI components using React, JavaScript (ES6+), HTML5, and CSS3',
        'Reduced frontend load times by 20% through code splitting, lazy loading, and API optimization',
        'Integrated RESTful APIs with React-based UI, resolving 100+ API-related issues',
        'Collaborated with cross-functional remote teams across global locations',
        'Conducted asynchronous code reviews and sprint planning using Jira, Slack, and MS Teams'
      ],
      tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs']
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
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
              Professional Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Work Experience
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '100px' } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"
            />
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="relative"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-400 to-emerald-400 opacity-30" />
                )}
                
                <div className="flex gap-8">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.2 }}
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25"
                    >
                      <Building className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 group min-w-0">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6 gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 break-words">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                            <Building className="w-4 h-4 flex-shrink-0" />
                            <span className="break-words">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col lg:items-end gap-2 flex-shrink-0">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span className="whitespace-nowrap">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span className="whitespace-nowrap">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <p className="text-gray-300 leading-relaxed break-words">{exp.description}</p>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.8 + index * 0.2 + achIndex * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-300 leading-relaxed break-words flex-1">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 1 + index * 0.2 + tagIndex * 0.05 }}
                            className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium whitespace-nowrap"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;