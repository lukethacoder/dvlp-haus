import { Metadata } from 'next'

import { SEO_DEFAULTS } from '@/lib/constants'
import { Footer } from '@/components/footer'

export const metadata: Metadata = SEO_DEFAULTS

export default function Home() {
  return (
    <>
      <main className='w-full px-4 flex h-full'>
        <h1>home</h1>
      </main>
      <Footer />
    </>
  )
}
