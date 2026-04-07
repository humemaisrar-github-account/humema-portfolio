"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-3 text-gray-300">
        <li className="flex items-start gap-2">
          <span className="text-purple-400 mt-1 flex-shrink-0">▹</span>
          <span className="text-sm sm:text-base">GIAIC – Artificial Intelligence, Web 3.0 & Metaverse Program</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-purple-400 mt-1 flex-shrink-0">▹</span>
          <span className="text-sm sm:text-base">Intermediate (Commerce)</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="space-y-3 text-gray-300">
        <li className="flex items-start gap-2">
          <span className="text-pink-400 mt-1 flex-shrink-0">▹</span>
          <span className="text-sm sm:text-base">Web & App Development (GIAIC – Ongoing)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-pink-400 mt-1 flex-shrink-0">▹</span>
          <span className="text-sm sm:text-base">AI & Cloud Computing (GIAIC – Ongoing)</span>
        </li>

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="relative bg-[#0e0e0e] py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-24 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-pink-500/5 rounded-full filter blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto md:mx-0 w-full"
          >
            <div className="relative group">
              {/* Decorative border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              
              <Image
                src="/about.webp"
                width={500}
                height={500}
                alt="About Humema Israr"
                className="relative rounded-2xl shadow-xl shadow-pink-500/10 w-full object-cover"
              />
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-lg text-xs sm:text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-semibold">GIAIC Student</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            className="mt-8 md:mt-0 text-left flex flex-col h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>

            <div className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-4 sm:mb-6 space-y-4">
              <p>
                I&apos;m <span className="text-white font-semibold">Humema Israr</span>, an <span className="text-purple-400 font-medium">Agentic AI Developer</span> and web engineer focused on building clean, scalable, and intelligent applications.
              </p>
              
              <p>
                My core stack includes <span className="text-purple-400 font-medium">HTML</span>, <span className="text-pink-400 font-medium">CSS</span>, <span className="text-blue-400 font-medium">TypeScript</span>, <span className="text-purple-400 font-medium">Next.js</span>, <span className="text-cyan-400 font-medium">Tailwind CSS</span>, and <span className="text-yellow-400 font-medium">Python</span>, and I actively work with the <span className="text-green-400 font-medium">OpenAI Agents SDK</span> to design AI-powered workflows and agents. I enjoy prompt and context engineering to make LLMs more reliable, goal-driven, and useful in real-world scenarios.
              </p>
              
              <p>
                I&apos;m currently exploring <span className="text-white font-medium">agentic architectures</span>, <span className="text-white font-medium">autonomous AI agents</span>, and modern web development patterns while building responsive, production-ready UIs. Alongside frontend work, I&apos;m strengthening my backend and API skills to grow into a well-rounded full-stack and AI-focused developer.
              </p>
              
              <p className="text-white font-medium">
                Always open to learning, collaborating on innovative projects, and contributing to teams working at the intersection of web development and AI.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6 flex-wrap">
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
            </div>

            {/* Tab Content */}
            <motion.div 
              className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg bg-white/5 p-3 sm:p-4 rounded-lg border border-white/10"
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
