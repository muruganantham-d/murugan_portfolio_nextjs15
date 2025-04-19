// components/Services/ServicesCard.tsx
import React from "react";
import "./services-card.css";
import Image from "next/image";

interface ServicesCardProps {
  image: string;
  title: string;
  tags: string[];
}

export const ServicesCard: React.FC<ServicesCardProps> = ({ image, title, tags }) => {
  return (
    <div className="services-card">
      <Image
        src={image}
        alt={title}
        width={500} 
        height={300}
      />
      <h2>{title}</h2>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};
