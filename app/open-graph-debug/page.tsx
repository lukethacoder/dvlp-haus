import { notFound } from 'next/navigation'
import { Footer } from '@/components/footer'
import { getEntries } from '@/lib/ts'
import TOOLS from '@/tools'

export default function OpenGraphDebugPage() {
  if (process.env.NODE_ENV !== 'development') {
    notFound()
  }

  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-between'>
        <div className='w-full pb-16'>
          <section className='max-w-5xl mx-auto w-full px-4 mt-16'>
            <h2 className='text-2xl mb-4'>Open Graph Image Test Page</h2>
            <div className='w-full grid grid-cols-3 gap-4'>
              {getEntries(TOOLS).map(([key, item]) => {
                return (
                  <span
                    key={key}
                    className='flex bg-secondary'
                    style={{ width: '100%', aspectRatio: `1200 / 630` }}
                  >
                    <img src={`/tools/${item.slug}/opengraph-image`} />
                  </span>
                )
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
