import About from "./components/About";
import Brands from "./components/Brands";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className=" bg-slate-900">
      <Navbar/>
      <Hero/>
      <Brands/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
