export interface JobExperience {
  ocupation: string
  company: string
  asLink?: boolean
  location: string
  url?: string
  startDate: string
  endDate?: string | null
  description: string
}

export const JOB_EXPERIENCE = [
  {
    ocupation: 'Full Stack Developer',
    company: 'InnogenX',
    location: 'Bengaluru, Karnataka',
    url: 'https://innogenx.in/',
    startDate: '2024-08-01',
    endDate: '2025-03-31',
    description:
      'Led the development of a role-based e-commerce platform for admins, distributors, and customers. Improved UI/UX by 60% and optimized deployment using Hostinger VPS. Tech stack: JavaScript, ReactJS, NodeJS, ExpressJS, MySQL, Redux.',
  },
  {
    ocupation: 'Freelance Software Developer',
    company: 'Self-employed / Freelance',
    location: 'Remote',
    url: '#',
    startDate: '2024-02-01',
    endDate: '2024-07-31',
    description:
      'Developed the front end of a React and Next.js-based educational platform for a UAE client, integrating multilingual support via Google Translate API and implementing server-side rendering (SSR) to improve SEO and performance. Tech stack: ReactJS, Next.js, TypeScript, Redux, HTML5, CSS3.',
  },
  {
    ocupation: 'Software Engineer',
    company: 'Aaludra Technology',
    location: 'Coimbatore, Tamil Nadu',
    url: 'https://aaludra.com/',
    startDate: '2023-01-01',
    endDate: '2024-01-31',
    description:
      'Built a cloud comparison platform using microservices architecture to integrate AWS, Azure, and GCP. Reduced cloud selection time by 85%. Tech stack: MERN stack, Material UI, TypeScript, JWT, REST APIs.',
  },
] satisfies JobExperience[]