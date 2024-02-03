import { Metadata } from 'next'

import { SEO_DEFAULTS, SEO_TITLE_EXTENSION } from '@/lib/constants'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  ...SEO_DEFAULTS,
  title: `Privacy ${SEO_TITLE_EXTENSION}`,
}

export default function PrivacyPage() {
  return (
    <>
      <main className='w-full h-full'>
        <span className='w-full px-4 max-w-4xl mx-auto flex flex-col prose'>
          <h1 className='text-4xl font-medium mt-16 mb-2'>Privacy</h1>

          <p>TODO:</p>
        </span>
      </main>
      <Footer />
    </>
  )
}
