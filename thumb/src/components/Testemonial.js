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

const testimonials = [
  {
    text: "YouPro's YouTube thumbnails are game-changers! The designs are eye-catching and professional, helping my videos get more clicks!",
    name: "John Doe",
    role: "Content Creator",
    image: "/john-doe.jpg",
  },
  {
    text: "Absolutely love the creativity and uniqueness of the thumbnails. They helped my videos stand out and increased engagement significantly!",
    name: "Sarah Smith",
    role: "Digital Marketer",
    image: "/sarah-smith.jpg",
  },
  {
    text: "The best investment I've made for my channel! YouPro's thumbnails have given my videos a professional look and boosted views.",
    name: "Michael Brown",
    role: "YouTuber",
    image: "/michael-brown.jpg",
  },
];

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
          Our Happy Clients
        </motion.h2>
        <motion.p variants={fadeIn} className="text-xl mb-12">
          What they say about us
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
