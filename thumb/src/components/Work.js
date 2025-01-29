import React, { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "./Header";
// Ensure Header component exists

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const thumbnails = [
  {
    category: "Horror",
    title: "The Haunted Amity Mansion Forest | Horror Story | By Neels Barrett",
    image: "Crime.png",
  },
  {
    category: "Documentary",
    title:
      "How this terrorist killing Indians yet NOBODY can stop it | ft. Air Pollution",
    image: "Pollution.png",
  },
  {
    category: "Self-Growth",
    title: "10 Steps to Unlock Your Potential | By John Doe",
    image: "Prac-1.png",
  },
  {
    category: "Video Editing",
    title: "Step by Step | Video Editing Tips | By Jane Smith",
    image: "Artboard 1.png",
  },
];

export default function Projects() {
  return (
    <>
      <Header />
      <section className="px-6 py-12 max-w-6xl mx-auto text-center mt-28">
        <motion.h2
          className="text-5xl font-bold mb-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Projects That Speak for Themselves
        </motion.h2>
        <p className="text-lg text-gray-600 mb-12">
          A showcase of our designs that turn scrollers into viewers and viewers
          into subscribers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {thumbnails.map((thumbnail, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="border p-2 rounded-lg"
            >
              <h3 className="mb-2 text-lg font-semibold text-left">
                {thumbnail.category}
              </h3>
              <motion.div
                className="relative aspect-video rounded-lg overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={thumbnail.image}
                  alt={thumbnail.category}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </motion.div>
              <p className="mt-2 text-left">{thumbnail.title || "Title"}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
