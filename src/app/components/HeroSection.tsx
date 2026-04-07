"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen lg:py-10 py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#0e0e0e] overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 order-2 lg:order-1 place-self-center text-center lg:text-left px-2 sm:px-4 md:px-0 md:pl-4 lg:pl-8"
        >
          <motion.div
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6 backdrop-blur-sm text-xs sm:text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-gray-300">👋 Welcome to my portfolio</span>
          </motion.div>

          <h1 className="text-white mb-4 sm:mb-6 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Humema Israr",
                1000,
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
                "Creative Coder",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 block sm:inline"
            />
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 max-w-2xl leading-relaxed mx-auto lg:mx-0 px-2 sm:px-0">
            I&apos;m an <span className="text-purple-400 font-medium">Agentic AI Developer</span> and web engineer focused on building clean, scalable, and intelligent applications. 
            My core stack includes <span className="text-purple-400 font-medium">Next.js</span>,
             <span className="text-pink-400 font-medium">Tailwind CSS</span>, <span className="text-blue-400 font-medium">TypeScript</span>, and
             <span className="text-yellow-400 font-medium">Python</span>. I actively work with the <span className="text-green-400 font-medium">OpenAI Agents SDK</span> to design AI-powered workflows and agents.
          </p>

          <motion.div 
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/#contact"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-pink-600 hover:to-purple-600 transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 overflow-hidden"
            >
              <span className="relative z-10">Hire Me</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <Link
              href="/MyResume.pdf"
              download
              className="group px-6 py-3 sm:px-8 sm:py-4 rounded-full border-2 border-gray-500 text-gray-300 hover:text-white hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-base sm:text-lg font-medium backdrop-blur-sm"
            >
              Download CV
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-gray-400 text-xs sm:text-sm">Follow me:</span>
            <motion.a
              href="https://www.linkedin.com/in/humema-israr-b184342b5"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500 transition-all duration-300 text-xs sm:text-sm"
            >
              in
            </motion.a>
            <motion.a
              href="https://github.com/humemaisrar-github-account"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300 text-xs sm:text-sm"
            >
              GH
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 order-1 lg:order-2 place-self-center mt-6 sm:mt-0"
        >
          <motion.div 
            className="rounded-full w-[200px] h-[200px] xs:w-[250px] xs:h-[250px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[350px] lg:h-[350px] relative"
            animate={{ 
              boxShadow: [
                "0 0 20px 5px rgba(168, 85, 247, 0.3)",
                "0 0 40px 10px rgba(236, 72, 153, 0.4)",
                "0 0 20px 5px rgba(168, 85, 247, 0.3)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Rotating ring around image */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="rounded-full w-full h-full overflow-hidden absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-2">
              <Image
                src="/my.jpeg"
                alt="Humema Israr - Frontend Developer"
                className="rounded-full object-cover"
                width={350}
                height={350}
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5 sm:p-2">
          <motion.div 
            className="w-1 h-1.5 sm:h-2 bg-white rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
