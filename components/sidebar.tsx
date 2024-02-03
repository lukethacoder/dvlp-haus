'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { CATEGORIES, getToolsByCategory } from '@/lib/tools'
import { getEntries } from '@/lib/ts'

import TOOLS from '@/tools'
import { buttonVariants } from '@/components/ui/button'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className='flex flex-col gap-1 py-2 px-2'>
      {getEntries(getToolsByCategory(TOOLS))
        // hide categories that have no tools
        .filter(([_, category]) => category.length > 0)
        .map(([key, category]) => {
          const CategoryIcon = CATEGORIES[key].icon
          return (
            <ul key={key} className='flex flex-col py-2'>
              <li className='flex items-center gap-2 h-9 px-2'>
                <CategoryIcon size={16} className='w-4 h-4' />
                <span className='flex-1 font-bold text-muted-foreground text-ellipsis overflow-hidden text-xs uppercase'>
                  {CATEGORIES[key].name}
                </span>
              </li>
              <li className='flex flex-col gap-1'>
                {category.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/tools/${item.slug}`}
                    className={cn(
                      pathname === `/tools/${item.slug}`
                        ? buttonVariants({ variant: 'secondary', size: 'sm' })
                        : buttonVariants({ variant: 'ghost', size: 'sm' }),
                      'w-full justify-start'
                    )}
                  >
                    <span className='text-ellipsis overflow-hidden'>
                      {item.name}
                    </span>
                  </Link>
                ))}
              </li>
            </ul>
          )
        })}
    </nav>
  )
}
