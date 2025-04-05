// data/servicesData.ts

export interface Service {
    title: string;
    icon: string; // URL of the icon image
    tags: string[];
  }
  
  export const servicesData: Service[] = [
    {
      title: "MERN Stack Development",
      icon: "/skills-icon/mern-icon.webp",
      tags: ["MongoDB", "Express.js", "React.js", "Typescript", "Next.js", "REST APIs"],
    },
    {
      title: "OpenAI Integration",
      icon: "/skills-icon/openai-icon.ico",
      tags: ["ChatGPT Integration", "OpenAI API Integration"],
    },
    {
      title: "Ecommerce Development",
      icon: "/skills-icon/e-icon.png",
      tags: ["React.js", "Next.js", "Typescript", "CMS", "React-Admin"],
    },
    {
      title: "Frontend Development",
      icon: "/skills-icon/react-icon.png",
      tags: ["HTML", "CSS", "Sass", "ReactJs", "NextJs", "Tailwind-css", "Material-UI", "Bootstrap", "Firebase", "Vite", "Figma", "Canva"],
    }
  ];
  