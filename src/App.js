import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import React from 'react'
import About from "./components/About"
import Support from "./components/Support";
import Pricing from "./components/Pricing";
function App () {
  return (
    <>
      <Navbar/>
       <Hero/>
       <About/>
       <Support/>
       <Pricing/>
    </>
  );
}

export default App;
