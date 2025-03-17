import React from "react";
import Hero from "./components/Hero";
import CardContainer from "./components/CardContainer";
import Contact from "./components/Contact";
import './App.css' 

const App = () => {
  return (
    <div className="container">
      <div className="left-section">
        <Hero />
        <Contact />
      </div>
      <CardContainer />
    </div>
  );
};

export default App;
