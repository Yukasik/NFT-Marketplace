import "./TrendingCards.css";
import React from "react";

interface TrendingCardsProps {
  mainImage: string;
  secondaryImages: string[];
  title: string;
  authorImage: string;
  authorName: string;
}

const TrendingCards: React.FC<TrendingCardsProps> = ({
  mainImage,
  secondaryImages,
  title,
  authorImage,
  authorName,
}) => {
  return (
    <div className="trending-card">
      <img src={mainImage} alt={title} />
      <div className="trending-card-img">
        {secondaryImages.map((image, index) => (
          <img key={index} src={image} alt={title} />
        ))}
      </div>
      <div className="trending-card-info">
        <h1>{title}</h1>
        <div className="trending-card-user">
          <img src={authorImage} alt={authorName} />
          <p>{authorName}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingCards;
