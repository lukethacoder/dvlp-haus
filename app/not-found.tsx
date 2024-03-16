import Link from 'next/link'
import { Footer } from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <main id='main' className='flex flex-col flex-0'>
        <div className='max-w-5xl mx-auto w-full px-6 py-12 flex flex-col'>
          <h1 className='text-3xl font-bold mb-4'>Error 404</h1>
          <p>
            We can&apos;t find what you are looking for, try going back to the
            previous page or check out the{' '}
            <Link
              href='/tools'
              className='text-primary underline mr-auto mt-8 lg:mt-12'
            >
              Tools
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
