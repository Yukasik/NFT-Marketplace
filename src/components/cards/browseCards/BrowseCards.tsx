import React from "react";
import "./BrowseCards.css";

interface BrowseCardsProps {
  image: string;
  text: string;
}

const BrowseCards: React.FC<BrowseCardsProps> = ({ image, text }) => {
  return (
    <div className="browse-card">
      <img src={image} alt={text} />
      <h1>{text}</h1>
    </div>
  );
};

export default BrowseCards;
