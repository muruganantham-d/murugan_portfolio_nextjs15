// components/Services/Services.tsx
import React from "react";
import "./services.css";
// import { ServicesCard } from "components/Services/ServicesCard";
// import { Heading } from "components/Heading/Heading";
// import { servicesData } from "data/servicesData";
import { ServicesCard } from "./services-card";
import { servicesData } from "./skills-data";

const SkillsPage: React.FC = () => {
  return (
    <section
      data-aos="fade-right"
      className="services-container"
      id="services"
    >
      {/* <Heading text="Services" /> */}
      <div className="heading-container">
      <h2 className="heading primary2">Skills</h2>
      <span></span>
    </div>

      <div className="services-cards">
        {servicesData.map(({ title, icon, tags }, index) => (
          <ServicesCard key={index} image={icon} title={title} tags={tags} />
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
