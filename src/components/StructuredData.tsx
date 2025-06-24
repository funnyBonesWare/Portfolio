import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData: React.FC = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sahil Siddiqui",
    "jobTitle": "Senior Frontend Developer",
    "description": "Senior Frontend Developer with 5+ years experience in React, TypeScript, and modern web technologies",
    "url": "https://sahilsiddiqui.dev",
    "image": "https://sahilsiddiqui.dev/Sahil-Final.png",
    "email": "sahilsiddiquihere@gmail.com",
    "telephone": "+91-9561706100",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://www.linkedin.com/in/sahil-siddiqui-senior-frontend-developer/",
      "https://github.com/funnyBonesWare",
      "https://x.com/_SahilSiddiqui"
    ],
    "knowsAbout": [
      "React",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Web Development",
      "UI/UX Design",
      "Material-UI",
      "Redux",
      "HTML5",
      "CSS3",
      "SASS",
      "Responsive Design",
      "Performance Optimization",
      "Team Leadership"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Elocity Technologies"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Wipro"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sahil Siddiqui - Frontend Development Services",
    "description": "Professional frontend development services specializing in React, TypeScript, and modern web technologies",
    "provider": {
      "@type": "Person",
      "name": "Sahil Siddiqui"
    },
    "areaServed": "Worldwide",
    "serviceType": "Frontend Development",
    "url": "https://sahilsiddiqui.dev"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sahil Siddiqui Portfolio",
    "description": "Professional portfolio of Sahil Siddiqui, Senior Frontend Developer",
    "url": "https://sahilsiddiqui.dev",
    "author": {
      "@type": "Person",
      "name": "Sahil Siddiqui"
    },
    "inLanguage": "en-US",
    "copyrightYear": "2024",
    "copyrightHolder": {
      "@type": "Person",
      "name": "Sahil Siddiqui"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sahilsiddiqui.dev/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://sahilsiddiqui.dev/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Experience",
        "item": "https://sahilsiddiqui.dev/#experience"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Skills",
        "item": "https://sahilsiddiqui.dev/#skills"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Projects",
        "item": "https://sahilsiddiqui.dev/#projects"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Blog",
        "item": "https://sahilsiddiqui.dev/#blog"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Contact",
        "item": "https://sahilsiddiqui.dev/#contact"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;