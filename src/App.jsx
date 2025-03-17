import React from "react";
import Hero from "./components/Hero";
import CardContainer from "./components/CardContainer";
import Contact from "./components/Contact";
import "./App.css";
import useWindowWidth from "./hooks/useWindowWidth";

const App = () => {
  const width = useWindowWidth();
  console.log(width)
  return (
    <div className="container">
      <div className="left-section">
        <Hero />
        {width > 768 && <Contact />}
      </div>
      <div className="right-section">
        <CardContainer />
      </div>
      {width <= 768 && <Contact />}
    </div>
  );
};

export default App;
