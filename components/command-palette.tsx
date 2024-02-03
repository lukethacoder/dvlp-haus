'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { IconMenuDeep } from '@tabler/icons-react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { Button } from './ui/button'

import TOOLS from '@/tools'
import { NAVIGATION_MENU_ITEMS } from './navigation-menu'
import { CATEGORIES, getToolsByCategory } from '@/lib/tools'
import { getEntries } from '@/lib/ts'

export function CommandPalette() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [isMac, setIsMac] = useState(false)

  useEffect(() => {
    setIsMac(navigator.userAgent.toUpperCase().indexOf('MAC') >= 0)

    const down = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <Button
        variant='outline'
        className='text-sm sm:w-full md:w-auto justify-between py-2 px-2'
        onClick={() => setOpen((open) => !open)}
      >
        {/* become the main menu on mobile */}
        <span className='md:pr-6 flex sm:hidden'>
          <IconMenuDeep />
        </span>
        <span className='pr-6 hidden sm:flex'>Search</span>
        <span className='hidden sm:inline-block text-xs text-muted-foreground'>
          Press{' '}
          <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
            <span className='text-xs'>{isMac ? '⌘' : 'CTRL'}</span>K
          </kbd>
        </span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {getEntries(getToolsByCategory(TOOLS))
            // hide categories that have no tools
            .filter(([_, category]) => category.length > 0)
            .map(([key, category]) => {
              const CategoryIcon = CATEGORIES[key].icon

              return (
                <CommandGroup
                  heading={
                    <span className='flex items-center'>
                      <CategoryIcon size={12} />
                      <span className='ml-1'>{CATEGORIES[key].name}</span>
                    </span>
                  }
                >
                  {category.map((item) => (
                    <CommandItem
                      key={item.slug}
                      onSelect={() => {
                        // don't forget to close the command palette
                        setOpen(false)

                        // redirect to the page
                        router.push(`/tools/${item.slug}`)
                      }}
                    >
                      <span>{item.name}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )
            })}
          <CommandSeparator />
          <CommandGroup heading='Main Navigation'>
            {NAVIGATION_MENU_ITEMS.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  // don't forget to close the command palette
                  setOpen(false)

                  if (item.href.includes('https')) {
                    if (window) {
                      window.open(item.href, '_blank')
                    }
                    return
                  }

                  // redirect to the page
                  router.push(item.href)
                }}
              >
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
