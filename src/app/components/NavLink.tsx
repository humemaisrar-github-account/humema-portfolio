"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type NavLinkProps = {
  href: string;
  title: string;
  onClick?: () => void;
};

const NavLink = ({ href, title, onClick }: NavLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white relative group"
    >
      {title}
      <motion.span 
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
      />
    </Link>
  );
};

export default NavLink;
 
