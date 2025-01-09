import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Categories() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-8"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        SOME THUMBNAILS
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {["Horror", "Documentary"].map((category, i) => (
          <motion.div
            key={category}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="mb-4">{category}</h3>
            <motion.div
              className="relative aspect-video rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/placeholder.svg"
                alt={`${category} thumbnail`}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <button className="w-full sm:w-auto border-2 border-gray-500 py-2 px-4 rounded">
          SEE ALL
        </button>
        <button className="w-full sm:w-auto bg-[#FF4800] hover:bg-[#FF4800]/90 py-2 px-4 rounded text-white">
          Contact us
        </button>
      </motion.div>
    </section>
  );
}
