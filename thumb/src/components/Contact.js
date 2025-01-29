import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Contact() {
  return (
    <motion.section
      className="text-center px-6 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
      <p className="text-gray-600 mb-6">
        Can't find the answer you're looking for? Please chat to our friendly
        team.
      </p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <a
          href="https://calendly.com/tushardodesigns/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-6 py-2 rounded-full text-white bg-[#FF4800] transition-transform duration-200 active:scale-95 custom-button"
        >
          Contact Us
        </a>
      </motion.div>
    </motion.section>
  );
}
