import { Metadata } from 'next'

import { SEO_DEFAULTS, SEO_TITLE_EXTENSION } from '@/lib/constants'
import { AllTools } from '@/components/all-tools'

export const metadata: Metadata = {
  ...SEO_DEFAULTS,
  title: `Tools ${SEO_TITLE_EXTENSION}`,
}

export default async function ToolsPage() {
  return (
    <section className='border-t w-full pt-6 px-4'>
      <span className='w-full flex flex-col max-w-5xl mx-auto'>
        <h3 className='text-3xl font-medium mb-8'>Select a tool</h3>

        <AllTools />
      </span>
    </section>
  )
}
