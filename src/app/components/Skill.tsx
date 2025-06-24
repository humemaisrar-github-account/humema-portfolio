"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const skill = [
  {
    category: "Frontend Development",
    items: ["HTML5", "CSS3", "Tailwind CSS" , "TypeScript", "Next.js", "Python" , "OpenAi Agent SDK"]
  },
  {
    category: "UI/UX & Design",
    items: ["Figma" ]
  },
  {
    category: "Tools & Platforms",
    items: ["GitHub", "VS Code", "API Integration"]
  },
];

const Skill = () => {
  return (
    <section id="skill" className="min-h-screen bg-[#0e0e0e] text-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            My Skills
          </h1>
          <p className="text-gray-400 text-lg">
            Here is a breakdown of my core technical skills categorized for clarity. I am always exploring new technologies to expand this list.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skill.map((group, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-pink-500/20 transition"
            >
              <h3 className="text-xl font-semibold text-pink-500 mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300">
                    <CheckCircleIcon className="h-5 w-5 text-purple-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;