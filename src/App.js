import React from "react";
import About from "./components/About";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import LatestWork from "./components/LatestWork";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimony from "./components/Testimony";

function App() {
  return (
    <div className=" bg-slate-900">
      <Navbar/>
      <Hero/>
      <Brands/>
      <About/>
      <Skills/>
      <LatestWork/>
      <Services/>
      <Testimony/>
      <Contact/>
    </div>
  );
}

export default App;
