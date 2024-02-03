'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

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

export function CommandPalette() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [isMac, setIsMac] = useState(false)

  useEffect(() => {
    setIsMac(navigator.userAgent.toUpperCase().indexOf('MAC') >= 0)

    const down = (event: KeyboardEvent) => {
      if (event.key === 'p' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <Button variant='outline' className='text-sm w-full md:w-auto justify-between' onClick={() => setOpen((open) => !open)}>
        <span className='pr-6'>Search</span>
        <span className='text-xs text-muted-foreground'>
          Press{' '}
          <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
            <span className='text-xs'>{isMac ? '⌘' : 'CTRL'}</span>P
          </kbd>
        </span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Tools'>
            {Object.entries(TOOLS).map(([key, item]) => 
              <CommandItem key={key} onSelect={() => {
                // don't forget to close the command palette
                setOpen(false)

                // redirect to the page
                router.push(`/tools/${key}`)
              }}>
                {/* <IconCalendar className='mr-2 h-4 w-4' /> */}
                <span>{item.name}</span>
              </CommandItem>
            )}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Settings'>
            <CommandItem>
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
