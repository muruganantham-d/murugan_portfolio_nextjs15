import type { Metadata } from 'next'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constants'

import { JOB_EXPERIENCE } from '@/config/experience'
import { Experience } from '@/components/experience'
import { FramerDiv, FramerSection } from '@/components/framer'
import { MyResumen } from '@/components/my-resumen'
import { PageHeader } from '@/components/page-header'
import { React } from '@/components/icons' // ✅ named import
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'


type Certificate = {
  name: string
  provider: string
  issuedDate: string
  imageUrl: string
}

const certificateList: Certificate[] = [
  {
    name: 'JavaScript with HTML5 and CSS3',
    provider: 'Udemy',
    issuedDate: 'Aug 2022',
    imageUrl: 'https://raw.githubusercontent.com/muruganantham-d/project_images/main/portfolio/udemy-cource.jpg',
  },
  {
    name: 'Fundamentals of Digital Marketing',
    provider: 'Google',
    issuedDate: 'Sep 2022',
    imageUrl: 'https://raw.githubusercontent.com/muruganantham-d/project_images/main/portfolio/google-cert.jpg',
  },
  {
    name: 'Software Testing Basics',
    provider: 'G-Learning',
    issuedDate: 'Oct 2022',
    imageUrl: 'https://raw.githubusercontent.com/muruganantham-d/project_images/main/portfolio/software-test.jpg',
  },
  {
    name: 'Communication Skills',
    provider: 'TCS iON',
    issuedDate: 'Nov 2022',
    imageUrl: 'https://raw.githubusercontent.com/muruganantham-d/project_images/main/portfolio/tcs-communication.jpg',
  },
  {
    name: 'TCS iON Career Edge',
    provider: 'TCS iON',
    issuedDate: 'Feb 2022',
    imageUrl: 'https://raw.githubusercontent.com/muruganantham-d/project_images/main/portfolio/TCS-professionals.jpg',
  },
]




export const metadata: Metadata = {
  title: 'About me',
  description:
    'I am a front-end web developer with experience in JavaScript, React, Next.js and Astro. My goal is to become a FullStack programmer. I enjoy creating beautiful and easy to use web applications that connect with users. I am always looking for new opportunities to grow and collaborate on exciting projects.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About me" page />
      <FramerSection
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="mx-auto max-w-[75ch]"
      >
        <FramerDiv variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <p className="leading-7 text-foreground/70 md:text-lg [&:not(:first-child)]:mt-6">
            Full-Stack Developer (MERN) with 2.6 years of experience in building scalable SaaS and enterprise-grade applications. Passionate about microservices, DevOps, and developing AI-integrated solutions. Skilled in React, Next.js, Node.js, MongoDB, and cloud-native development.
            <br />
            <br />
            I am always looking for new opportunities to grow and collaborate on exciting projects that push boundaries and create real impact.
          </p>
        </FramerDiv>

        <FramerDiv
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="my-10 flex flex-col items-center justify-center"
        >
          <MyResumen />
        </FramerDiv>

        <FramerDiv
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="my-10 flex flex-col items-center justify-center"
        >
          <h3 className="text-3xl font-bold">Experience</h3>
          <section className="my-5">
            <Experience experience={JOB_EXPERIENCE} />
          </section>
        </FramerDiv>

        {/* ✅ Replacing "My Stack" with Course & Certification */}
        <FramerDiv
  variants={FADE_DOWN_ANIMATION_VARIANTS}
  initial="hidden"
  animate="show"
  className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
>
  <h3 className="mb-8 text-center text-3xl font-bold">Course & Certification</h3>

  <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
    {certificateList.map((cert, idx) => (
      <div
        key={idx}
        className="overflow-hidden rounded-2xl border border-border bg-muted shadow-lg transition-transform duration-300 hover:scale-[1.02]"
      >
        <div className="relative h-56 w-full">
          <Image
            src={cert.imageUrl}
            alt={cert.name}
            referrerPolicy="no-referrer"
            fill
            className="size-full rounded-t-2xl object-cover"
          />
        </div>
        <div className="bg-background/80 p-5 backdrop-blur-sm">
          <h4 className="text-lg font-semibold text-foreground">{cert.name}</h4>
          <p className="text-sm text-muted-foreground">{cert.provider}</p>
          <p className="text-xs text-muted-foreground">Issued: {cert.issuedDate}</p>

          <a
      href={cert.imageUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
    >
      View Certificate
    </a>
        </div>
      </div>
    ))}
  </div>
</FramerDiv>

{/*  */}

        <Link className={cn(buttonVariants(), 'my-5')} href='/'>
          Go to Home Page
        </Link>
  
      </FramerSection>
    </>
  )
}


















// import type { Metadata } from 'next'
// import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constants'

// import { JOB_EXPERIENCE } from '@/config/experience'
// import { Experience } from '@/components/experience'
// import { FramerDiv, FramerSection } from '@/components/framer'
// import { Next, Prisma, React, Tailwind, Typescript } from '@/components/icons'
// import { MyResumen } from '@/components/my-resumen'
// import { PageHeader } from '@/components/page-header'

// export const metadata: Metadata = {
//   title: 'About me',
//   description:
//     'I am a front-end web developer with experience in JavaScript, React, Next.js and Astro. My goal is to become a FullStack programmer. I enjoy creating beautiful and easy to use web applications that connect with users. I am always looking for new opportunities to grow and collaborate on exciting projects.',
// }

// export default function AboutPage() {
//   return (
//     <>
//       <PageHeader title='About me' page />
//       <FramerSection
//         initial='hidden'
//         animate='show'
//         viewport={{ once: true }}
//         variants={{
//           hidden: {},
//           show: {
//             transition: {
//               staggerChildren: 0.15,
//             },
//           },
//         }}
//         className='mx-auto max-w-[75ch]'
//       >
//         <FramerDiv variants={FADE_DOWN_ANIMATION_VARIANTS}>
//           <p className='leading-7 text-foreground/70 md:text-lg [&:not(:first-child)]:mt-6'>
//           Full-Stack Developer (MERN) with 2.6 years of experience in building scalable SaaS and enterprise-grade applications. Passionate about microservices, DevOps, and developing AI-integrated solutions. Skilled in React, Next.js, Node.js, MongoDB, and cloud-native development.

//           I am always looking for new opportunities to grow and collaborate on exciting projects that push boundaries and create real impact.
//           </p>
//         </FramerDiv>

//         <FramerDiv
//           variants={FADE_DOWN_ANIMATION_VARIANTS}
//           className='my-10 flex flex-col items-center justify-center'
//         >
//           <MyResumen />
//         </FramerDiv>

//         <FramerDiv
//           variants={FADE_DOWN_ANIMATION_VARIANTS}
//           className='my-10 flex flex-col items-center justify-center'
//         >
//           <h3 className='text-3xl font-bold'>Experience</h3>
//           <section className='my-5'>
//             <Experience experience={JOB_EXPERIENCE} />
//           </section>
//         </FramerDiv>
//         <FramerDiv
//           variants={FADE_DOWN_ANIMATION_VARIANTS}
//           className='flex flex-col items-center justify-center'
//         >
//           <h3 className='text-3xl font-bold'>My stack</h3>
//           <div className='my-7 flex flex-wrap items-center justify-center gap-5'>
//             <div className='flex items-center justify-center gap-1.5 rounded-md bg-[#61DAFB]/20 px-4 py-2'>
//               <React className='size-5' />
//               <span>React</span>
//             </div>
//             <div className='flex items-center justify-center gap-1.5 rounded-md bg-[#202021] px-4 py-2'>
//               <Next className='size-5' />
//               <span>Next</span>
//             </div>
//             <div className='flex items-center justify-center gap-1.5 rounded-md bg-[#49c1cf]/25 px-4 py-2'>
//               <Tailwind className='size-5' />
//               <span>Tailwind</span>
//             </div>
//             <div className='flex items-center justify-center gap-1.5 rounded-md bg-[#3583d7]/30 px-4 py-2'>
//               <Typescript className='size-5' />
//               <span>Typescript</span>
//             </div>
//             <div className='flex items-center justify-center gap-1.5 rounded-md bg-[#2D3748] px-4 py-2'>
//               <Prisma className='size-5' />
//               <span>Prisma</span>
//             </div>
//           </div>
//         </FramerDiv>
//       </FramerSection>
//     </>
//   )
// }
