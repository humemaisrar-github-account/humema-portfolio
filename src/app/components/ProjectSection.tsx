"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
   id: 1,
    title: "Ring Royal Website",
    description: "A modern ring collection e‑commerce site built with Next.js and Tailwind CSS.",
    image: "/ringroyal.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/humemaisrar-github-account/Ring-Royal-Website",
    previewUrl: "https://ring-royal-website.vercel.app",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "A full‑featured shopping platform with responsive UI, built using Next.js.",
    image: "/ecommercewebsite.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/humemaisrar-github-account/E-Commerce-Website",
    previewUrl: "https://github.com/humemaisrar-github-account/hackathone-e-commerce-website5.git",
  },
  {
    id: 3,
    title: "My Portfolio",
    description: "Personal developer portfolio showcasing skills, projects, and contact, built using Next.js.",
    image: "/myportolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/humemaisrar-github-account/my-portfolio",
    previewUrl: "https://my-portfolio-tau-blush-32.vercel.app/",
  },
  {
    id: 4,
    title: "Book Library App",
    description: "A digital library app where users can browse and search for books with author details.",
    image: "/booklibrary.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/humemaisrar-github-account/Book-Library",
    previewUrl: "https://book-library-navy-rho.vercel.app/",
  },
  {
    id: 5,
    title: "Book Data Manager",
    description: "A simple CRUD interface for managing book data using React and local storage.",
    image: "/datamanager.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/humemaisrar-github-account/Book-Data",
    previewUrl: "https://book-data-tau.vercel.app/",
  },
  {
    id: 6,
    title: "GrowthMindset Challenge WebApp",
    description: "A motivational Streamlit app supporting growth mindset exercises and development.",
    image: "/growthmindset.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/humemaisrar-github-account/GrowthMindsetProject",
    previewUrl: "https://growthmindsetproject-8ed5wdqthpya5x859az6ke.streamlit.app/",
  },

   {
  id: 7,
  title: "Plant Health Checker",
  description: "A Python + Streamlit app that helps users enter plant names or upload images to get info on plant health and common diseases.",
  image: "/planthealthcare.png",
  tag: ["All", "Python"],
  gitUrl: "https://github.com/humemaisrar-github-account/Plant-Health-Checker",
  previewUrl: "https://plant-health-checker-aaikawkv6awqgp3dncptub.streamlit.app/",
},
{
  id: 8,
  title: "Monthly Budget Planner",
  description: "A smart budgeting tool built with Python & Streamlit to track income, expenses, and savings.",
  image: "/montlybudget.png",
  tag: ["All", "Python"],
  gitUrl: "https://github.com/humemaisrar-github-account/Monthly-Budget-Planner",
  previewUrl: "https://monthly-budget-planner-wfrzqpsfe827lhkjvsxehl.streamlit.app/",
},
{
  id: 9,
  title: "EduTrack – Student Tracker",
  description: "Streamlit‑based web app for parents and teachers to securely add/view student performance notes.",
  image: "/edu.png",
  tag: ["All", "Python"],
  gitUrl: "https://github.com/humemaisrar-github-account/Edu-Track",
  previewUrl: "https://edu-track-hikjmuk3xd4g5uedp8ykzu.streamlit.app/",
},
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({ 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: i * 0.1 
      }
    }),
  };

  return (
    <section
      id="project"
      className="relative bg-[#0e0e0e] py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full filter blur-3xl -translate-x-1/2 -z-10" />
      
      <div className="max-w-7xl mx-auto">
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
            <span className="text-gray-300">Recent Work</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-3 sm:mb-4">
            My Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Explore my latest projects and experiments in web development, AI, and more.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Python"
            isSelected={tag === "Python"}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.ul
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.div>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default ProjectSection;
