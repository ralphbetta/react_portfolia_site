import About from "./components/About";
import Brands from "./components/Brands";
import Hero from "./components/Hero";
import LatestWork from "./components/LatestWork";
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
      <LatestWork/>
    </div>
  );
}

export default App;
