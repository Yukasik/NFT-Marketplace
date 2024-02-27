import "./RankingsCards.css";
import React from "react";

interface RankingsCardsProps {
  image: string;
  number: number;
  name: string;
}

const RankingsCards: React.FC<RankingsCardsProps> = ({
  image,
  number,
  name,
}) => {
  return (
    <div className="rankings-card">
      <div className="rankings-container">
        <span className="rankings-span-number">{number}</span>
      </div>
      <div className="rankings-card-user">
        <img src={image} alt={name} />
        <h1>{name}</h1>
      </div>
      <div className="rankings-card-info">
        <p className="rankings-span-change">+1.41%</p>
        <p className="rankings-span-nfts-sold">602</p>
        <p className="rankings-span-volume">12.4 ETH</p>
      </div>
    </div>
  );
};

export default RankingsCards;
