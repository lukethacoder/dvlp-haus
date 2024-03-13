import type { Metadata, Viewport } from 'next'
import { Cabin, Fira_Code } from 'next/font/google'
import './globals.css'

import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'
import { buttonVariants } from '@/components/ui/button'
import dynamic from 'next/dynamic'

const rubik = Cabin({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})
const firaCode = Fira_Code({ subsets: ['latin'] })

const AnalyticsBlock = dynamic(() => import(`@/components/analytics`), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'dvlp.haus',
  description:
    'Essential developer tools to make your life easier. Productive. Accessible. Open Source.',
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://dvlp.haus'
      : process.env.VERCEL_URL || 'http://localhost:3000'
  ),
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0c0a09' },
    { media: '(prefers-color-scheme: light)', color: '#e11d48' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <AnalyticsBlock />
      </head>
      <body
        className={`${rubik.className} bg-background min-h-dvh flex flex-col`}
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
