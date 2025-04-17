'use client'

// components/Services/Services.tsx
import React from "react";
import "./services.css";
// import { ServicesCard } from "components/Services/ServicesCard";
// import { Heading } from "components/Heading/Heading";
// import { servicesData } from "data/servicesData";
import { ServicesCard } from "./services-card";
import { servicesData } from "./skills-data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/constants";
import Link from "next/link";
import { m } from 'framer-motion'

const SkillsPage: React.FC = () => {
    const pathname = usePathname()
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
      {pathname?.startsWith('/skills') && (
      <m.div variants={FADE_DOWN_ANIMATION_VARIANTS} className={'self-start'}>
        <Link className={cn(buttonVariants(), 'my-5')} href='/about'>
          View next page
        </Link>
      </m.div>
    )}
    </section>
  );
};

export default SkillsPage;
