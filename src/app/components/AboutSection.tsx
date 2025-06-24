
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
 
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-2 text-gray-300">
        <li>GIAIC – Artificial Intelligence, Web 3.0 & Metaverse Program</li>
        <li>Intermediate (Commerce)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 space-y-2 text-gray-300">
        <li>Web & App Development (GIAIC – Ongoing)</li>
        <li>AI & Cloud Computing (GIAIC – Ongoing)</li>
        
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
    <section id="about" className="bg-[#0e0e0e] py-20 px-6 sm:px-10 lg:px-24 text-white">
      <div className="md:grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <Image
          src="/about.webp"
          width={500}
          height={500}
          alt="About Me Image"
          className="rounded-xl shadow-xl shadow-pink-500/10"
        />

        {/* Text Section */}
        <div className="mt-10 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            About Me
          </h2>

          <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
            I am <span className="text-white font-semibold">Humema Israr</span>, a passionate Frontend Developer and GIAIC student. I love building clean, responsive, and creative websites using{" "}
            <span className="text-pink-500 font-medium">Next.js</span>,{" "}
            <span className="text-pink-500 font-medium">Tailwind CSS</span>, and{" "}
            <span className="text-pink-500 font-medium">TypeScript </span> 
            <span className="text-pink-500 font-medium">& Python</span>.
             I enjoy designing modern user interfaces and constantly learning new technologies. My dream is to become a skilled IT professional and contribute meaningfully to the tech industry.
          </p>

          {/* Tabs */}
          <div className="flex gap-4 mt-10 flex-wrap">
 
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
          <div className="mt-6 text-gray-300 text-base lg:text-lg">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
