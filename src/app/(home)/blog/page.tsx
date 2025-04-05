import type { Metadata } from 'next'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constants'
import { allPosts } from 'content-collections'
import { FileWarningIcon } from 'lucide-react'

import { siteConfig } from '@/config/site'
import { slugify } from '@/lib/utils'
import { PaginationButtons } from '@/components/ui/pagination-buttons'
import { PostCard } from '@/components/cards/post-card'
import CategoryButtons from '@/components/category-buttons'
import { FramerDiv } from '@/components/framer'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Here my last resources about web development, mobile development, ui/ux design, devops, blogs etc',
  keywords: [
    'web development',
    'mobile development',
    'ui/ux design',
    'devops',
    'blogs',
    'resources',
  ],
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { category, page: activePage } = await searchParams
  const page = Number.parseInt(activePage as string) || 1
  const postsPerPage = 6
  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage

  return (
    <>
      <PageHeader
        title='Recources for developers'
        page
        description='Here my last resources about web development, mobile development, ui/ux design, devops, blogs etc'
      />

      <FramerDiv
        initial='hidden'
        animate='show'
        viewport={{ once: true }}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className='flex flex-row gap-5 md:flex-col'
      >
        <div className='relative flex flex-col gap-5 md:flex-row'>
          <CategoryButtons
            categories={siteConfig.blogCategories}
            className='top-32 flex flex-row flex-wrap gap-3 md:sticky md:flex-col'
            withAll
            withIcons
            buttonVariant={'ghost'}
            buttonSize={'lg'}
            iconStyle='size-4 md:size-5'
            buttonClassName='text-sm md:text-base '
            activeCategory='bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground/90'
          />
          <div className='flex w-full flex-col items-center justify-center gap-5 md:grid md:grid-cols-2'>
            {category ? (
              allPosts.filter((post) =>
                post.categories
                  .map((category) => slugify(category))
                  .includes(
                    Array.isArray(category) ? category.join('') : category,
                  ),
              ).length > 0 ? (
                allPosts
                  .slice(startIndex, endIndex)
                  .map((post, i) => (
                    <PostCard key={post._id} post={post} i={i} />
                  ))
              ) : (
                <NotFoundPosts />
              )
            ) : allPosts.length === 0 ? (
              <NotFoundPosts />
            ) : (
              allPosts
                .slice(startIndex, endIndex)
                .map((post, i) => <PostCard key={post._id} post={post} i={i} />)
            )}
          </div>
        </div>
      </FramerDiv>
      <PaginationButtons
        className='mt-10'
        page={page}
        totalPage={Math.ceil(allPosts.length / postsPerPage)}
      />
    </>
  )
}

const NotFoundPosts = () => (
  <div className='col-span-2 flex min-h-[26.25rem] w-full flex-col items-center justify-center'>
    <FileWarningIcon className='mb-5 mt-7 size-12 text-primary' />

    <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
      No posts found 😢
    </h2>
    <p className='leading-7 [&:not(:first-child)]:mt-2'>
      Try changing the filters or reloading the page
    </p>
  </div>
)
