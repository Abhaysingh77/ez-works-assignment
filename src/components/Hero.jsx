import React from "react";
import logo from "/EZ Works Blue.png";
import "../styles/hero.css"; 

function Hero() {
  return (
    <div className="hero">
      <img src={logo} alt="logo" />
      <h1>Suite Of Business Support Services</h1>
      <h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
        architecto est consequuntur amet illum suscipit, porro expedita dolor
        minima nostrum dolores eaque, harum, earum accusantium eveniet! Ipsum
        quae nisi a.
      </h2>
    </div>
  );
}

export default Hero;
