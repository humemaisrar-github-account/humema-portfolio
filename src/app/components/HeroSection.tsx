"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-5 px-6 sm:px-12 lg:px-24 bg-[#0e0e0e]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left sm:pl-8"
        >
          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
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
              className="text-primary-400"
            />
          </h1>

          <p className="text-gray-400 text-base sm:text-lg lg:text-xl mt-4 max-w-2xl leading-relaxed">
            I’m <span className="text-white font-medium">Humema Israr</span>, a passionate frontend developer with a strong interest in UI/UX design and modern 
            technologies. I specialize in building responsive websites using <span className="text-primary-400">Next.js</span>,
             <span className="text-primary-400">Tailwind CSS</span>, and <span className="text-primary-400">TypeScript</span>,
             <span className="text-primary-400">Pyhton</span>.
              As a student of GIAIC, I’m always growing and turning creative ideas into engaging digital experiences.
              Currently, I’m also learning how to build intelligent tools using the OpenAI Agent SDK — exploring how 
              AI can be integrated into web development for smarter and more interactive user experiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white hover:from-pink-600 hover:to-purple-500 transition duration-300 text-lg font-semibold"
            >
              Hire Me
            </Link>
            <Link
              href="/MyResume.pdf"
              download
              className="px-8 py-3 rounded-full border border-gray-500 text-gray-300 hover:text-white hover:border-white transition duration-300 text-lg font-medium"
            >
              Download CV
            </Link>
     
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-10 sm:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative shadow-lg shadow-purple-500/20">
            <Image
              src="/my.jpeg"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
              width={300}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
