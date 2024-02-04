import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'dvlp.haus',
  description: 'Toolbox for Developers',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-background min-h-dvh flex flex-col`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <a
            href='#main'
            className={cn(
              buttonVariants(),
              'absolute top-2 left-2 opacity-0 pointer-events-none focus-visible:pointer-events-auto focus-visible:opacity-100'
            )}
          >
            Skip to main content
          </a>
          <Header />
          <span id='main' className='contents'>
            {children}
          </span>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
