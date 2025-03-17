import React from "react";
import "../styles/card.css";

function Card({ title, icon, description }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={icon} alt={title} className="card-icon" />
        <span className="card-title">{title}</span>
      </div>
      <div className="card-desc">{description}</div>
    </div>
  );
}

export default Card;
