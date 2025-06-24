"use client";
import React from "react";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0e0e0e] text-white px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
        Thank You!
      </h1>
      <p className="text-lg text-gray-400 mb-8">
        Your message has been sent successfully. I’ll get back to you soon! 💌
      </p>
      <Link
        href="/"
        className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
