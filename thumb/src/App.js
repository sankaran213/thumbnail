import "./App.css";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Categories } from "./components/Catogaries";
import { Testimonials } from "./components/Testemonial";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader"; // Import the loader
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
