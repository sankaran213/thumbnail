import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const initialThumbnails = [
  {
    category: "Horror",
    title: "The Haunted Amity Mansion Forest | Horror Story | By Neels Barrett",
    image: "/horror-thumbnail.png",
  },
  {
    category: "Documentary",
    title:
      "How this terrorist killing Indians yet NOBODY can stop it | ft. Air Pollution",
    image: "/documentary-thumbnail.png",
  },
];

const additionalThumbnails = [
  {
    category: "Self-Growth",
    title: "10 Steps to Unlock Your Potential | By John Doe",
    image: "/self-growth-thumbnail.png",
  },
  {
    category: "Video Editing",
    title: "Step by Step | Video Editing Tips | By Jane Smith",
    image: "/video-editing-thumbnail.png",
  },
];

export function Categories() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <motion.h2
        className="text-5xl font-bold mb-8 text-center"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        SOME THUMBNAILS
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {initialThumbnails.map((thumbnail, i) => (
          <motion.div
            key={thumbnail.category}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="mb-4 text-xl font-semibold">{thumbnail.category}</h3>
            <motion.div className="relative aspect-video rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <img
                src="https://a.storyblok.com/f/262429/1280x1920/07372621d1/digital-design.jpg/m/"
                alt={`${thumbnail.category} thumbnail`}
                className="object-cover w-full h-full"
                style={{ filter: "blur(2px)" }}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-semibold text-lg">
                {thumbnail.title}
              </div>
            </motion.div>
          </motion.div>
        ))}
        {showMore &&
          additionalThumbnails.map((thumbnail, i) => (
            <motion.div
              key={thumbnail.category}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="mb-4 text-xl font-semibold">
                {thumbnail.category}
              </h3>
              <motion.div className="relative aspect-video rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <img
                  src={thumbnail.image}
                  alt={`${thumbnail.category} thumbnail`}
                  className="object-cover w-full h-full"
                  style={{ filter: "blur(2px)" }}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-semibold text-lg">
                  {thumbnail.title}
                </div>
              </motion.div>
            </motion.div>
          ))}
      </div>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-2"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <button
          className="w-full sm:w-auto border-2 border-gray-500 py-2 px-4 rounded-full text-gray-800 bg-white transition-colors duration-300 hover:bg-orange-500 hover:text-white"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "SHOW LESS" : "SEE ALL"}
        </button>
        <button className="relative px-4 py-3 rounded-full text-white bg-[#FF4800] transition-transform duration-200 active:scale-95 custom-button">
          Contact us
        </button>
      </motion.div>
    </section>
  );
}
