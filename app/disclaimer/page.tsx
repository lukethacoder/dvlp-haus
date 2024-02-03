import { Metadata } from 'next'

import { SEO_DEFAULTS, SEO_TITLE_EXTENSION } from '@/lib/constants'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  ...SEO_DEFAULTS,
  title: `Disclaimer ${SEO_TITLE_EXTENSION}`,
}

export default function DisclaimerPage() {
  return (
    <>
      <main className='w-full h-full'>
        <span className='w-full px-4 max-w-4xl mx-auto flex flex-col prose'>
          <h1 className='text-4xl font-medium mt-16 mb-2'>Disclaimer</h1>

          <h2>Information on this site</h2>
          <p>
            While we strive to provide accurate information and tools on
            dvlp.haus ("this site"), we cannot guarantee their absolute
            correctness.
          </p>
          <p>
            Please note that you use any tools available here at your own risk.
            This site takes no liability for any harm or inconvenience caused by
            their use.
          </p>
          <p>
            Furthermore, please be aware that tools on this site can be changed
            or removed without prior notice.
          </p>
        </span>
      </main>
      <Footer />
    </>
  )
}
