"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, CodeBracketIcon, PaintBrushIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

const skill = [
  {
    category: "Frontend Development",
    icon: CodeBracketIcon,
    items: ["HTML5", "CSS3", "Tailwind CSS" , "TypeScript", "Next.js", "Python" , "OpenAi Agent SDK"],
    color: "from-purple-500 to-blue-500"
  },
  {
    category: "UI/UX & Design",
    icon: PaintBrushIcon,
    items: ["Figma", "Responsive Design"],
    color: "from-pink-500 to-purple-500"
  },
  {
    category: "Tools & Platforms",
    icon: WrenchScrewdriverIcon,
    items: ["GitHub", "VS Code", "API Integration", "Vercel", "Streamlit"],
    color: "from-blue-500 to-cyan-500"
  },
];

const Skill = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skill" className="relative min-h-screen bg-[#0e0e0e] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-pink-500/5 rounded-full filter blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4 text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-300">My Expertise</span>
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            My Skills
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Here is a breakdown of my core technical skills. I am always exploring new technologies.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skill.map((group, index) => {
            const IconComponent = group.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <div className={`w-full h-full bg-gradient-to-br ${group.color} filter blur-xl`} />
                </div>
                
                {/* Icon */}
                <motion.div 
                  className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${group.color} mb-3 sm:mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </motion.div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {group.items.map((skill, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center gap-2 sm:gap-3 text-gray-300 group/item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex-shrink-0"
                      >
                        <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 group-hover/item:text-pink-500 transition-colors" />
                      </motion.div>
                      <span className="text-sm sm:text-base group-hover/item:text-white transition-colors">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
