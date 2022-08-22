import React from "react"
import './App.css';
import About from "./components/about/About";
import AboutCard from "./components/about/AboutCard";
import Developer from "./components/developer/Developer";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Subscribe from "./components/subscribe/Subscribe";

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <AboutCard />
      <Developer />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
