"use client";
import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="relative flex items-center justify-center cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* 3D Rotating Ring */}
      <motion.div
        className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-transparent border-t-purple-500 border-r-pink-500"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Inner Ring rotating opposite direction */}
      <motion.div
        className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-transparent border-b-blue-500 border-l-pink-500"
        animate={{ rotate: -360 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Center dot with glow */}
      <motion.div
        className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
        animate={{
          boxShadow: [
            "0 0 8px 2px rgba(168, 85, 247, 0.4)",
            "0 0 16px 4px rgba(236, 72, 153, 0.6)",
            "0 0 8px 2px rgba(168, 85, 247, 0.4)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* HI Text */}
      <motion.span
        className="ml-8 text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      >
        HI
      </motion.span>
    </motion.div>
  );
};

export default Logo;
