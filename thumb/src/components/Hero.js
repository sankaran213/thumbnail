import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

export function Hero() {
  const heroRef = useRef(null);
  const thumbnailsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isThumbnailsInView = useInView(thumbnailsRef, { once: true });

  return (
    <motion.section
      ref={heroRef}
      className="text-center py-32 px-4 mt-16"
      initial="hidden"
      animate={isHeroInView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12">
        GET YOUR HIGH-RES
        <br />
        THUMBNAIL HERE
      </h1>

      <motion.div
        ref={thumbnailsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20"
        variants={staggerChildren}
        initial="hidden"
        animate={isThumbnailsInView ? "visible" : "hidden"}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            className="relative aspect-video rounded-lg overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/placeholder.svg"
              alt={`Thumbnail ${i + 1}`}
              className="object-cover transition-transform group-hover:scale-110 w-full h-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
