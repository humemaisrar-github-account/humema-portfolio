 
"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#0e0e0e] py-20 px-6 sm:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Contact Me
        </motion.h2>

        <p className="text-center text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Feel free to reach out if you have a project idea, want to collaborate,
          or just say hello. I’m always open to new opportunities and meaningful conversations.
        </p>

        <motion.form
          action="https://formsubmit.co/humema.israr09@gamil.com"
          method="POST"
          whileHover={{ scale: 1.01 }}
          className="bg-[#1c1c1c]/50 backdrop-blur-md border border-[#33353f] rounded-xl p-8 md:p-10 shadow-lg space-y-6"
        >
          {/* 🔒 Hidden Fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://humema-portfolio.vercel.app/thankpage"

          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="bg-[#121212] text-white border border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="bg-[#121212] text-white border border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="bg-[#121212] text-white border border-gray-600 w-full rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            className="bg-[#121212] text-white border border-gray-600 w-full rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 transition text-white font-semibold py-3 rounded-md shadow-md"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
