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
  id: 1,
  title: "Plant Health Checker",
  description: "A Python + Streamlit app that helps users enter plant names or upload images to get info on plant health and common diseases. Built with OOP principles and AI analysis features coming soon.",
  image: "/planthealthcare.png",
  tag: ["All", "Data"],
  gitUrl: "https://github.com/humemaisrar-github-account/Plant-Health-Checker",
  previewUrl: "https://plant-health-checker-aaikawkv6awqgp3dncptub.streamlit.app/",
},
{
  id: 2,
  title: "Monthly Budget Planner",
  description: "A smart budgeting tool built with Python & Streamlit to track income, expenses, and savings, including motivational budgeting tips and add/delete controls.",
  image: "/montlybudget.png",
  tag: ["All", "Finance"],
  gitUrl: "https://github.com/humemaisrar-github-account/Monthly-Budget-Planner",
  previewUrl: "https://monthly-budget-planner-wfrzqpsfe827lhkjvsxehl.streamlit.app/",
},
{
  id: 9,
  title: "EduTrack – Student Tracker",
  description: "Streamlit‑based web app for parents and teachers to securely add/view student performance notes, fostering better communication.",
  image: "/edu.png",
  tag: ["All", "Education"],
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
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="project"
      className="bg-[#0e0e0e] py-20 px-6 sm:px-12 lg:px-24 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12">
          My Projects
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
         
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          
        </div>

        <ul
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="list-none"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;
