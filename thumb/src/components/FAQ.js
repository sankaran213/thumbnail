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

export function FAQ() {
  const faqRef = useRef(null);
  const isFaqInView = useInView(faqRef, { once: true });

  return (
    <section className="px-6 py-16 max-w-3xl mx-auto">
      <motion.div
        ref={faqRef}
        initial="hidden"
        animate={isFaqInView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl font-bold mb-8 text-center"
        >
          FAQs
        </motion.h2>
        <div className="space-y-4">
          {[
            "How to design a product that can grow itself 10x in year:",
            "Understanding color theory: the color wheel and finding complementary colors",
            "Any mechanical keyboard enthusiasts in design?",
          ].map((question, i) => (
            <motion.div key={i} variants={fadeIn}>
              <div className="border rounded-md shadow-sm">
                <div className="py-4 px-6 cursor-pointer">
                  <h3 className="font-medium">{question}</h3>
                </div>
                <div className="py-4 px-6">
                  Content for this FAQ item goes here.
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
