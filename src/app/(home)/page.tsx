
import { getLatestProjectsQuery } from '@/lib/querys'
// import { client } from '@/lib/sanity'
// import { client } from '@/sanity/lib/client';
import Hero from '@/components/hero'
import { PageHeader } from '@/components/page-header'
import Projects from '@/components/projects'


import type { ProjectsEntity } from '../../types/sanity'
import { client } from '@/sanity/lib/client'
import SkillsPage from './skills/page'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default async function Home() {
  const projects = await client.fetch<ProjectsEntity[]>(getLatestProjectsQuery)

  return (
    <section>
      <Hero />
      {/* <Scroll /> */}
      <SkillsPage/>
      <PageHeader
        title='Recent Projects'
        description="View the latest projects I've worked on"
      />

      <Projects projects={projects} />

            {/* <m.div variants={FADE_DOWN_ANIMATION_VARIANTS}> */}
              <Link className={cn(buttonVariants(), 'my-5')} href='/projects'>
                View next page
              </Link>
            {/* </m.div> */}

      {/* <PageHeader
        title='Recent Resourses'
        description='View my latest shared resources and articles'
      /> */}
      {/* {allPosts.slice(0, 3).map((post, i) => (
        <PostCard i={i} key={post.slug} post={post} />
      ))} */}
    </section>
  )
}
