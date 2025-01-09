import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function Testimonials() {
  const testimonialsRef = useRef(null);
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });

  return (
    <section className="bg-gray-50 px-6 py-16">
      <motion.div
        ref={testimonialsRef}
        className="max-w-4xl mx-auto text-center"
        variants={staggerChildren}
        initial="hidden"
        animate={isTestimonialsInView ? "visible" : "hidden"}
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-2">
          Our happy clients
        </motion.h2>
        <motion.p variants={fadeIn} className="text-xl mb-12">
          say about us
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <p className="text-gray-600 mb-4">
                I am extremely impressed with the YouTube thumbnails by YouPro.
                The professional designs and beautiful colors make them stand
                out.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div className="text-left">
                  <p className="font-semibold">Client Name</p>
                  <p className="text-sm text-gray-500">Role</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
