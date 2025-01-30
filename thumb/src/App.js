import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ❌ Don't use Router here
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        {" "}
        {/* ✅ Keep only Routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Projects />} />
        <Route
          path="*"
          element={
            <h1 className="text-center mt-10 text-3xl">404 Page Not Found</h1>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
