import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  section?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Sahil Siddiqui - Senior Frontend Developer | React & TypeScript Expert",
  description = "Senior Frontend Developer with 5+ years experience in React, TypeScript, and modern web technologies. Available for hire - Building exceptional digital experiences in Bengaluru, India.",
  keywords = "Frontend Developer, React Developer, TypeScript, JavaScript, Senior Developer, Bengaluru, India, Web Development, UI/UX, Remote Work, Hire Developer",
  image = "https://sahilsiddiqui.xyz/Sahil-Final.png",
  url = "https://sahilsiddiqui.xyz/",
  type = "website",
  section,
}) => {
  const sectionTitle = section ? `${section} | ${title}` : title;
  const sectionUrl = section ? `${url}#${section.toLowerCase()}` : url;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{sectionTitle}</title>
      <meta name="title" content={sectionTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={sectionUrl} />
      <meta property="og:title" content={sectionTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={sectionUrl} />
      <meta property="twitter:title" content={sectionTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={sectionUrl} />

      {/* Additional meta tags for specific sections */}
      {section && (
        <>
          <meta name="section" content={section} />
          <meta property="og:section" content={section} />
        </>
      )}
    </Helmet>
  );
};

export default SEOHead;
