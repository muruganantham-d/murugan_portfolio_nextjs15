'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constants'
import { m } from 'framer-motion'

import { cn } from '@/lib/utils'
import { GitHub, LinkedIn } from '@/components/icons'

import { buttonVariants } from './ui/button'

const HomeScene = dynamic(() => import('@/scenes/home-scene'), {
  ssr: false,
})

const Hero = () => {
  return (
    <m.div
      initial='hidden'
      animate='show'
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className='w-full py-16'
    >
      <div className='flex flex-col justify-between gap-8 lg:flex-row lg:items-center'>
        <div className='space-y-2'>
          <m.div variants={FADE_DOWN_ANIMATION_VARIANTS} className='space-y-2'>
            <m.h1 className='text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl'>
               Hi, I&apos;m Muruganantham.
            </m.h1>
            <m.p className='text-2xl font-semibold text-primary md:text-3xl lg:text-4xl'>
              Full-stack Developer.
            </m.p>
          </m.div>
          <m.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='max-w-2xl text-muted-foreground md:text-lg'
          >
            I&apos;m a passionate software engineer with expertise in full-stack web development, dedicated to crafting innovative, efficient, and user-friendly applications.
          </m.p>

          <m.div
            className='flex flex-row gap-5'
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Link
              className={cn(buttonVariants())}
              href='https://github.com/muruganantham-d'
              target='_blank'
              rel='noopener noreferrer'
              title='View my GitHub profile'
              aria-label='View my GitHub profile'
            >
              <GitHub className='size-6' aria-hidden='true' />
              <span className='sr-only'>GitHub</span>
            </Link>
            <Link
              className={cn(buttonVariants())}
              href='https://www.linkedin.com/in/muruganantham-d-baa770234/'
              title='View my LinkedIn profile'
              aria-label='View my LinkedIn profile'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedIn className='size-6' aria-hidden='true' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
            <Link
              className={cn(buttonVariants({ variant: 'secondary' }))}
              href='https://drive.google.com/file/d/1HPUibPT-guhvdX_moLA6QRmZ9Z_76_R4/view'
              title='Download my resume'
              aria-label='Download my resume'
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume
            </Link>
          </m.div>
        </div>
        <m.div
          className='hidden size-[450px] lg:block'
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <HomeScene />
        </m.div>
      </div>
    </m.div>
  )
}

export default Hero
