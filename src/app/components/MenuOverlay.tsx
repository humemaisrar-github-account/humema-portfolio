import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

// Define the type for each link object
type LinkItem = {
  path: string;
  title: string;
};

// Define props type
type MenuOverlayProps = {
  links: LinkItem[];
  onClose?: () => void;
};

const MenuOverlay = ({ links, onClose }: MenuOverlayProps) => {
  return (
    <motion.div 
      className="flex flex-col py-4 items-center bg-[#121212]/95 backdrop-blur-xl border-t border-white/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {links.map((link, index) => (
        <motion.li 
          key={index} 
          className="list-none py-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <NavLink href={link.path} title={link.title} onClick={onClose} />
        </motion.li>
      ))}
    </motion.div>
  );
};

export default MenuOverlay;
