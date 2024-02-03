import Link from 'next/link'

import { NavigationMenu } from '@/components/navigation-menu'

import { CommandPalette } from '@/components/command-palette'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className='flex flex-row justify-between w-full px-2 py-2 gap-2 border-b'>
      <span className='flex items-center pl-2 justify-between flex-0'>
        <Link href='/'>
          <h1 className='text-xl font-semibold'>dvlp.haus</h1>
        </Link>
        <NavigationMenu />
      </span>
      <span className='w-auto flex flex-col md:flex-row gap-2'>
        <span className='flex gap-2'>
          <CommandPalette />
          <ThemeToggle />
        </span>
      </span>
    </header>
  )
}
