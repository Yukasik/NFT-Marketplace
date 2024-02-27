import React from "react";
import "./NFTsCards.css";

interface NFTsCardsProps {
  mainImage: string;
  name: string;
  authorImage: string;
  authorName: string;
  price: string;
  highestBid: string;
  type: string;
}

const NFTsCards: React.FC<NFTsCardsProps> = ({
  mainImage,
  name,
  authorImage,
  authorName,
  price,
  highestBid,
  type,
}) => {
  return (
    <div className={type}>
      <img src={mainImage} alt={name} />
      <div className="nfts-card-info">
        <h1>{name}</h1>
        <div className="nfts-card-user">
          <img src={authorImage} alt={authorName} />
          <p>{authorName}</p>
        </div>
        <div className="nfts-card-info-block-text">
          <div className="nfts-card-info-title">
            <p>
              Price <br /> <span>{price}</span>
            </p>
          </div>

          <div className="nfts-card-info-title">
            <p>
              Highest Bid <br /> <span>{highestBid}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTsCards;
