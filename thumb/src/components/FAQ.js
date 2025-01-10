import React, { useState, useRef } from "react";
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

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqItems = [
    {
      question: "How to design a product that can grow itself 10x in a year?",
      answer: "To design a product that scales, focus on user feedback, iterative improvements, and leveraging virality or network effects.",
    },
    {
      question: "Understanding color theory: the color wheel and finding complementary colors.",
      answer: "Color theory involves understanding primary, secondary, and tertiary colors and how they interact to create harmony and contrast.",
    },
    {
      question: "Any mechanical keyboard enthusiasts in design?",
      answer: "Mechanical keyboards offer customizability, tactile feedback, and durability, making them a favorite among designers and tech enthusiasts.",
    },
  ];

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
          {faqItems.map((item, index) => (
            <motion.div key={index} variants={fadeIn}>
              <div
                className="border rounded-md shadow-sm"
                onClick={() => toggleAccordion(index)}
              >
                <div className="py-4 px-6 cursor-pointer flex justify-between items-center">
                  <h3 className="font-medium">{item.question}</h3>
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </div>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="py-4 px-6"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
