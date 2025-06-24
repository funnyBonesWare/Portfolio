import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import CursorEffect from './components/CursorEffect';
import SEOHead from './components/SEOHead';
import StructuredData from './components/StructuredData';

function App() {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'blog', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSectionSEO = (section: string) => {
    const seoData = {
      hero: {
        title: "Sahil Siddiqui - Senior Frontend Developer | React & TypeScript Expert",
        description: "Senior Frontend Developer with 5+ years experience in React, TypeScript, and modern web technologies. Available for hire - Building exceptional digital experiences.",
        keywords: "Frontend Developer, React Developer, TypeScript, JavaScript, Senior Developer, Bengaluru, India, Web Development, UI/UX, Remote Work, Hire Developer"
      },
      about: {
        title: "About Sahil Siddiqui - Senior Frontend Developer",
        description: "Learn about Sahil Siddiqui's 5+ years of frontend development experience, expertise in React and TypeScript, and passion for creating exceptional digital experiences.",
        keywords: "About Sahil Siddiqui, Frontend Developer Experience, React Expert, TypeScript Developer, Web Development Skills"
      },
      experience: {
        title: "Work Experience - Sahil Siddiqui | Frontend Developer",
        description: "Explore Sahil Siddiqui's professional journey from Wipro to Elocity Technologies, leading teams and delivering 50+ UI components with React and TypeScript.",
        keywords: "Work Experience, Frontend Developer Career, Elocity Technologies, Wipro, React Projects, Team Leadership"
      },
      skills: {
        title: "Technical Skills - React, TypeScript & Frontend Technologies",
        description: "Comprehensive overview of Sahil Siddiqui's technical expertise including React, TypeScript, JavaScript, Material-UI, Redux, and modern frontend technologies.",
        keywords: "React Skills, TypeScript Expert, JavaScript Developer, Material-UI, Redux, Frontend Technologies, Web Development Skills"
      },
      projects: {
        title: "Portfolio Projects - React & TypeScript Applications",
        description: "Showcase of Sahil Siddiqui's featured projects including EV Admin Dashboard, Live Docs Collaboration, and Fortune 500 application migrations.",
        keywords: "React Projects, TypeScript Applications, EV Dashboard, Live Collaboration, Frontend Portfolio, Web Applications"
      },
      blog: {
        title: "Frontend Development Blog - React & TypeScript Insights",
        description: "Latest articles and insights on React, TypeScript, performance optimization, and modern frontend development best practices by Sahil Siddiqui.",
        keywords: "Frontend Blog, React Articles, TypeScript Tips, Performance Optimization, Web Development Insights, JavaScript Best Practices"
      },
      contact: {
        title: "Contact Sahil Siddiqui - Hire Frontend Developer",
        description: "Get in touch with Sahil Siddiqui for frontend development opportunities. Available for full-time, contract, and freelance React/TypeScript projects.",
        keywords: "Hire Frontend Developer, Contact Sahil Siddiqui, React Developer for Hire, TypeScript Expert, Remote Frontend Developer"
      }
    };

    return seoData[section as keyof typeof seoData] || seoData.hero;
  };

  const currentSEO = getSectionSEO(currentSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-x-hidden">
      <SEOHead 
        title={currentSEO.title}
        description={currentSEO.description}
        keywords={currentSEO.keywords}
        section={currentSection !== 'hero' ? currentSection : undefined}
      />
      <StructuredData />
      
      <ParticlesBackground />
      <CursorEffect />
      
      <Header />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </motion.main>
      
      <Footer />
    </div>
  );
}

export default App;