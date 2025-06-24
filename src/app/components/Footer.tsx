 
"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] text-white py-10 px-6 sm:px-12 border-t border-[#2d2d2d]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Column */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-1">Humema Israr</h3>
          <p className="text-gray-400 text-sm">Frontend Developer & IT Learner</p>
        </div>

        {/* Center Column */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Humema Israr. All rights reserved.
          </p>
        </div>

        {/* Right Column - Social Icons */}
        <div className="flex justify-center md:justify-end gap-6 text-2xl">
          <Link
            href="https://www.linkedin.com/in/humema-israr-b184342b5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin aria-label="LinkedIn" />
          </Link>
          <Link
            href="mailto:humemaisrar.dev@gmail.com"
            className="text-gray-400 hover:text-pink-400 transition duration-300"
          >
            <FaEnvelope aria-label="Email" />
          </Link>
          <Link
            href="https://github.com/humemaisrar-github-account"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaGithub aria-label="GitHub" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;