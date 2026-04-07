"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircleIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0e0e0e] text-white px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        {/* Success Icon */}
        <motion.div
          className="mb-8"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
            <CheckCircleIcon className="h-16 w-16 sm:h-20 sm:w-20 text-white" />
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Thank You!
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-lg mx-auto px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Your message has been sent successfully. I&apos;ll get back to you soon! 💌
        </motion.p>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
          >
            <ArrowLeftIcon className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Additional Info */}
        <motion.p
          className="mt-8 text-gray-500 text-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          First time using this form? Check your email inbox for activation message from FormSubmit.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;
