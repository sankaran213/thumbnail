import React from "react";
import { motion } from "framer-motion";
import Logo from "./LogoMark.png";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-md z-50 flex justify-between items-center px-6 py-4"
    >
      <div className="flex items-center">
        <img src={Logo} alt="YouPro Logo" width={100} height={40} />
      </div>
      <nav className="flex items-center gap-6">
        <motion.a
          href="#work"
          className="text-gray-700 hover:text-[#FF4800] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Work
        </motion.a>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button className="relative px-6 py-2 rounded-full text-white bg-[#FF4800] transition-transform duration-200 active:scale-95 custom-button">
            Contact Us
          </button>
        </motion.div>
      </nav>
    </motion.header>
  );
}
