'use client'

import Link from 'next/link'

export default function Error() {
  return (
    <main id='main' className='flex flex-col flex-0'>
      <div className='max-w-5xl mx-auto w-full px-6 py-12 flex flex-col'>
        <h1 className='text-3xl font-bold'>500 Internal Error page</h1>
        <p>
          Apologies, we&apos;re experiencing technical difficulties. Our team is
          working to fix this. Please try again later.
        </p>
        <Link href='/tools' className='btn-primary mr-auto mt-8 lg:mt-12'>
          Back to Tools
        </Link>
      </div>
    </main>
  )
}
