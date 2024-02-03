'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'

export const NAVIGATION_MENU_ITEMS: {
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
  ...(process.env.NODE_ENV === 'development'
    ? [
        {
          title: 'Dev',
          href: '/dev',
        },
      ]
    : []),
]

export function NavigationMenu() {
  return (
    <nav className='hidden md:flex items-center flex-wrap'>
      {NAVIGATION_MENU_ITEMS.map((item) =>
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
