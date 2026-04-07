"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
   {
    title: "Home",
    path: "#",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skill",
  },
  {
    title: "Projects",
    path: "#project",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed mx-auto top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#121212]/80 backdrop-blur-xl shadow-lg shadow-purple-500/10 border-b border-white/10" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Logo />
        
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded-lg border-slate-200/30 text-slate-200 hover:text-white hover:border-white hover:bg-white/5 transition-all"
            >
              <Bars3Icon className="h-6 w-6" />
            </motion.button>
          ) : (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded-lg border-slate-200/30 text-slate-200 hover:text-white hover:border-white hover:bg-white/5 transition-all"
            >
              <XMarkIcon className="h-6 w-6" />
            </motion.button>
          )}
        </div>
        
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-6 lg:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink href={link.path} title={link.title} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      
      <AnimatePresence>
        {navbarOpen && <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
