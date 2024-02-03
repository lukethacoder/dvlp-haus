import { Metadata } from 'next'

import { SEO_DEFAULTS, SEO_TITLE_EXTENSION } from '@/lib/constants'

export const metadata: Metadata = {
  ...SEO_DEFAULTS,
  title: `Tools ${SEO_TITLE_EXTENSION}`,
}

export default async function ToolsPage() {
  return (
    <div className='flex items-center justify-center h-full'>
      <h2>Select a tool</h2>
    </div>
  )
}
