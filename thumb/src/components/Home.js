import React from "react";
import { Hero } from "./Hero";
import { Categories } from "./Catogaries";
import { Testimonials } from "./Testemonial";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";

const Home = () => {
  return (
    <main className="flex-grow space-y-2">
      <Hero />
      <Categories />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
