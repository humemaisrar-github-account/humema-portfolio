"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Quick Links", links: [
      { label: "Home", href: "#", external: false },
      { label: "About", href: "#about", external: false },
      { label: "Skills", href: "#skill", external: false },
      { label: "Projects", href: "#project", external: false },
    ]},
    { title: "Connect", links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/humema-israr-b184342b5", external: true },
      { label: "GitHub", href: "https://github.com/humemaisrar-github-account", external: true },
      { label: "Email", href: "mailto:humema.israr09@gmail.com", external: true },
    ]},
  ];

  return (
    <motion.footer 
      className="relative bg-gradient-to-t from-[#0a0a0a] to-[#121212] text-white pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 md:px-12 border-t border-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2">
            <motion.div
              className="mb-3 sm:mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-1 sm:mb-2">
                Humema Israr
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">Agentic AI Developer & Web Engineer</p>
            </motion.div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-md">
              Passionionate about creating beautiful, functional, and user-friendly experiences. 
              Always learning, always building.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4">
              <motion.a
                href="https://www.linkedin.com/in/humema-israr-b184342b5"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500 transition-all duration-300"
              >
                <FaLinkedin size={16} />
              </motion.a>
              <motion.a
                href="https://github.com/humemaisrar-github-account"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
              >
                <FaGithub size={16} />
              </motion.a>
              <motion.a
                href="mailto:humema.israr09@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-500 hover:border-pink-500 transition-all duration-300"
              >
                <FaEnvelope size={16} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{footerLinks[0].title}</h4>
            <ul className="space-y-2">
              {footerLinks[0].links.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{footerLinks[1].title}</h4>
            <ul className="space-y-2">
              {footerLinks[1].links.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link 
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              &copy; {currentYear} Humema Israr. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-2">
              Made with <FaHeart className="text-pink-500" size={12} /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
