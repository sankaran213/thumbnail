import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Projects from "./components/Work";

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
