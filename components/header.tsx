'use client'

import { NavigationMenu } from "@/components/navigation-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Header() {
  return (
    <header className="flex justify-between w-full px-4 py-4">
      <span className="flex items-center gap-4">
        <h1 className="text-xl font-semibold">dvlp.haus</h1>
        <NavigationMenu />
      </span>
      <span>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className='sr-only' htmlFor="search">Search</Label>
          <Input id="search" type="text" placeholder="Search for a tool"/>
        </div>
      </span>
    </header>
  )
}