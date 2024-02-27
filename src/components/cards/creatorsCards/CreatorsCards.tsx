import React from "react";
import "./CreatorsCards.css";

interface CreatorsCardsProps {
  image: string;
  number: number;
  name: string;
  totalSales: string;
}

const CreatorsCards: React.FC<CreatorsCardsProps> = ({
  image,
  number,
  name,
  totalSales,
}) => {
  return (
    <div className="creator-card">
      <div className="creator-container">
        <span className="creator-span-number">{number}</span>
      </div>
      <div className="creator-card-img">
        <img src={image} alt={name} />
      </div>
      <div className="creator-card-text">
        <h1>{name}</h1>
        <p>
          Total Sales: <span className="creator-span-info">{totalSales}</span>
        </p>
      </div>
    </div>
  );
};

export default CreatorsCards;
