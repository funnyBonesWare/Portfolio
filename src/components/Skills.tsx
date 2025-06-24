import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Palette, 
  Database, 
  Zap, 
  TestTube, 
  Cloud,
  Users,
  Wrench
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React JS', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Redux', level: 80 },
      ]
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'Material-UI', level: 90 },
        { name: 'SASS/SCSS', level: 85 },
        { name: 'R Suite UI', level: 80 },
        { name: 'AG Grid', level: 85 },
        { name: 'Responsive Design', level: 95 },
      ]
    },
    {
      title: 'Performance & Optimization',
      icon: Zap,
      color: 'from-orange-500 to-yellow-500',
      skills: [
        { name: 'Code Splitting', level: 85 },
        { name: 'Lazy Loading', level: 90 },
        { name: 'React Performance', level: 88 },
        { name: 'Webpack', level: 75 },
        { name: 'Micro-frontends', level: 70 },
      ]
    },
    {
      title: 'Testing & Quality',
      icon: TestTube,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Vitest', level: 80 },
        { name: 'React Testing Library', level: 85 },
        { name: 'Cypress', level: 75 },
        { name: 'ESLint & Prettier', level: 90 },
        { name: 'Unit Testing', level: 85 },
      ]
    },
    {
      title: 'Data & Integration',
      icon: Database,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'RESTful APIs', level: 90 },
        { name: 'Chart.js', level: 85 },
        { name: 'Re charts', level: 80 },
        { name: 'JSON', level: 95 },
        { name: 'Data Visualization', level: 85 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'AWS (S3, CloudFront)', level: 75 },
        { name: 'CI/CD Pipelines', level: 80 },
        { name: 'GitHub Actions', level: 85 },
        { name: 'Vercel', level: 90 },
        { name: 'GitLab CI', level: 75 },
      ]
    },
    {
      title: 'Leadership & Collaboration',
      icon: Users,
      color: 'from-rose-500 to-pink-500',
      skills: [
        { name: 'Team Leadership', level: 90 },
        { name: 'Mentoring', level: 85 },
        { name: 'Code Reviews', level: 90 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Remote Collaboration', level: 95 },
      ]
    },
    {
      title: 'Tools & Workflow',
      icon: Wrench,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Jira', level: 85 },
        { name: 'Slack & MS Teams', level: 90 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 75 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
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
              Technical Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Skills & Technologies
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '100px' } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"
            />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + categoryIndex * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 h-full hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  {/* Category Header */}
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} p-3 mb-4 shadow-lg`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                          <span className="text-gray-400 text-xs">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05, 
                              duration: 1,
                              ease: "easeOut"
                            }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-sm`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;