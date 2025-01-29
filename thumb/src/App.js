import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Categories } from "./components/Catogaries";
import { Testimonials } from "./components/Testemonial";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import { useState, useEffect } from "react";
import Projects from "./components/Work";

function Home() {
  return (
    <main className="flex-grow space-y-2">
      <Hero />
      <Categories />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Loader />
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
