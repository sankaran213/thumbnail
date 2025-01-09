import "./App.css";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Categories } from "./components/Catogaries";
import { Testimonials } from "./components/Testemonial";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
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
