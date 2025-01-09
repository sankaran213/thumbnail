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
        <button className="bg-[#FF4800] hover:bg-[#FF4800]/90 text-white py-2 px-6 rounded-md">
          Contact us
        </button>
      </motion.div>
    </motion.section>
  );
}
