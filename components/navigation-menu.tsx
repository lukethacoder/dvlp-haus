'use client';

import {
  NavigationMenu as UiNavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

const NAVIGATION_MENU: { title: string; href?: string; description: string; children?: { title: string; href: string; description: string }[] }[] = [
  {
    title: 'Home',
    href: '/',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Tools',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
    children: [
      {
        title: 'Font Converter',
        href: '/font-converter',
        description: 'A modal dialog that interrupts the user with important content and expects a response.',
      },
      {
        title: 'SVG to CSS',
        href: '/svg-to-css',
        description: 'A modal dialog that interrupts the user with important content and expects a response.',
      },
    ],
  },
];

export function NavigationMenu() {
  return (
    <UiNavigationMenu className='w-full'>
      <NavigationMenuList>
        {NAVIGATION_MENU.map((item) => (
          <NavigationMenuItem key={item.title} className='w-full'>
            {item.children ? (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="w-full">
                  <ul className="flex flex-col gap-2 p-4">
                    {item.children.map((child) => (
                      <Link key={child.title} href={child.href} legacyBehavior passHref className='w-full'>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full`}>{child.title}</NavigationMenuLink>
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              item.href && (
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.title}</NavigationMenuLink>
                </Link>
              )
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </UiNavigationMenu>
  );
}
