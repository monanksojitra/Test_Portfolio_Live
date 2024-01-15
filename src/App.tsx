import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servies from "./components/Servies";
import InfoCard from "./components/InfoCard";
import Details from "./components/Details";
import Plans from "./components/Plans";
import Sheredata from "./components/Sheredata";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="  font-jos overflow-hidden p-3 w-full">
      <Navbar />
      <Hero />
      <Servies />
      <Details />
      <Plans />
      <Sheredata/>
      <Footer/>
    </div>
  );
};

export default App;
