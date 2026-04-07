"use client";
import React from "react";
import { motion } from "framer-motion";

type ProjectTagProps = {
  name: string;
  onClick: (tag: string) => void;
  isSelected: boolean;
};

const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  return (
    <motion.button
      className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
        isSelected
          ? "text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/30"
          : "text-gray-400 bg-white/5 border border-white/10 hover:text-white hover:border-purple-500/50"
      }`}
      onClick={() => onClick(name)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
      {isSelected && (
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 -z-10 blur-md opacity-50"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
};

export default ProjectTag;
