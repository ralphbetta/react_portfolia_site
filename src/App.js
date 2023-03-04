import Brands from "./components/Brands";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" bg-slate-900">
      <Navbar/>
      <Hero/>
      <Brands/>
    </div>
  );
}

export default App;
