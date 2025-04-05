// components/Services/ServicesCard.tsx
import React from "react";
import "./services-card.css";

interface ServicesCardProps {
  image: string;
  title: string;
  tags: string[];
}

export const ServicesCard: React.FC<ServicesCardProps> = ({ image, title, tags }) => {
  return (
    <div className="services-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};
