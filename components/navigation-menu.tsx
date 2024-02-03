'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'

const NAVIGATION_MENU: {
  title: string
  href: string
}[] = [
  {
    title: 'Tools',
    href: '/tools',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Change log',
    href: '/change-log',
  },
  {
    title: 'Requests',
    href: 'https://github.com/lukethacoder/dvlp-haus/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=',
  },
  {
    title: 'Dev',
    href: '/dev',
  },
]

export function NavigationMenu() {
  return (
    <nav className='flex items-center'>
      {NAVIGATION_MENU.map((item) =>
        item.href.includes('https') ? (
          <a
            key={item.title}
            href={item.href}
            className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }))}
            target='_blank'
          >
            {item.title}
          </a>
        ) : (
          <Link
            key={item.title}
            href={item.href}
            className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }))}
          >
            {item.title}
          </Link>
        )
      )}
    </nav>
  )
}
