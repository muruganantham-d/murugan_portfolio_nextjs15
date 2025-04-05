'use client'

import Link from 'next/link'
import { GitHub, LinkedIn, Twitter } from '@/components/icons'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const currentYear = new Date().getFullYear()

const SiteFooter = () => {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
        {/* Section 1: Name & Year */}
        <div className="text-center md:text-left">
          Terms & Conditions | Privacy Policy
        </div>

        {/* Section 2: Social Icons */}
        <div className="flex gap-3">
          <Link
            href="https://x.com/assafenrique"
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
            className={cn(buttonVariants({ size: 'icon', variant: 'outline' }))}
          >
            <Twitter className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="https://linkedin.com/in/jorge-enrique-assaf/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={cn(buttonVariants({ size: 'icon', variant: 'outline' }))}
          >
            <LinkedIn className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="https://github.com/jorgeassaf"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={cn(buttonVariants({ size: 'icon', variant: 'outline' }))}
          >
            <GitHub className="size-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Section 3: Credits */}
        <div className="text-center md:text-right">
 
        <p>
    <a href="mailto:youremail@example.com" className="hover:underline">muruganantham2399@gmail.com</a> |{' '}
    <a href="tel:+919876543210" className="hover:underline">+91 9344391547</a>
  </p>
     
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
