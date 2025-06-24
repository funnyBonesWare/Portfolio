import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = async () => {
    try {
      // Google Drive file ID from the URL
      const fileId = "1wVDbqB48IjpX6340tKWuxkGglhv_BJpx";
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "Sahil_Siddiqui_Resume.pdf";
      link.target = "_blank";

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
      // Fallback: open in new tab
      window.open(
        "https://drive.google.com/file/d/1wVDbqB48IjpX6340tKWuxkGglhv_BJpx/view?usp=sharing",
        "_blank"
      );
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-blue-400 font-medium mb-4 text-lg"
              >
                Hello, I'm
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent"
              >
                Sahil Siddiqui
              </motion.h1>

              {/* Animated Title */}
              <div className="text-xl md:text-3xl lg:text-4xl font-semibold mb-8 h-16 flex items-center justify-center lg:justify-start">
                <TypeAnimation
                  sequence={[
                    "Senior Frontend Developer",
                    2000,
                    "React Specialist",
                    2000,
                    "JavaScript Expert",
                    2000,
                    "UI/UX Enthusiast",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
                  repeat={Infinity}
                />
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              >
                With 5+ years of experience crafting exceptional digital
                experiences. Specialized in React, Javascript, TypeScript, and
                modern frontend technologies. Based in Bengaluru, open to remote
                opportunities worldwide.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 justify-center"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span>Get In Touch</span>
                  <ExternalLink size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={downloadResume}
                  className="w-full sm:w-auto border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="flex gap-6 justify-center lg:justify-start"
              >
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="https://github.com/funnyBonesWare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  href="https://www.linkedin.com/in/sahil-siddiqui-senior-frontend-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="https://x.com/_SahilSiddiqui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Twitter size={24} />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image with Square Layout */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center lg:justify-end"
            >
              <div className="relative group">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />

                {/* Main Image Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 group-hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden">
                    <motion.img
                      src="/Sahil-Final.png"
                      alt="Sahil Siddiqui - Senior Frontend Developer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />

                    {/* Professional Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full text-white text-sm font-medium shadow-lg"
                    >
                      Senior Frontend Developer
                    </motion.div>

                    {/* Experience Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="absolute bottom-4 right-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-slate-600"
                    >
                      5+ Years
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-80 shadow-lg"
                />

                <motion.div
                  animate={{
                    y: [10, -10, 10],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 -left-6 w-6 h-6 bg-emerald-400 rounded-full opacity-80 shadow-lg"
                />

                <motion.div
                  animate={{
                    x: [-5, 5, -5],
                    y: [5, -5, 5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-400 rounded-full opacity-60 shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-white transition-colors duration-300 flex flex-col items-center gap-2"
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
