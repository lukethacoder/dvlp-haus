import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Header } from '@/components/header'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider'

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
    <html lang='en' className='h-full'>
      <body className={`${inter.className} bg-background h-full flex flex-col`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
