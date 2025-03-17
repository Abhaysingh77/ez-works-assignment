import React from "react";
import Card from "./Card";
import sampleData from "../lib/data.json";
import '../styles/cardContainer.css'

function CardContainer() {
  return (
    <div className="card-container">
      {sampleData.map((cardData) => (
        <Card
        key={cardData.title}
          icon={cardData.icon}
          title={cardData.title}
          description={cardData.description}
        />
      ))}
    </div>
  );
}

export default CardContainer;
