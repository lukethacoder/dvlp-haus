import { ReactNode } from 'react'
import { Metadata } from 'next'

import { SEO_DEFAULTS, SEO_TITLE_EXTENSION } from '@/lib/constants'
import { Footer } from '@/components/footer'

import { CHANGE_LOG_CONTENT } from './content'

export const metadata: Metadata = {
  ...SEO_DEFAULTS,
  title: `Change log ${SEO_TITLE_EXTENSION}`,
}

const dateFormat = new Intl.DateTimeFormat('en-AU', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

function ChangeLogItem({
  children,
  releaseDate,
}: {
  releaseDate: Date
  children: ReactNode
}) {
  const dateTime = new Date(
    releaseDate.getTime() - releaseDate.getTimezoneOffset() * 60000
  )
    .toISOString()
    .split('T')[0]

  return (
    <div className='relative flex flex-col md:flex-row border-b py-16'>
      <div className='w-full md:w-2/5 pb-4'>
        <time
          dateTime={dateTime}
          className='md:sticky top-0 py-4 text-sm text-muted-foreground'
        >
          {dateFormat.format(releaseDate)}
        </time>
      </div>
      <div className='change-log-content w-full md:w-3/5'>{children}</div>
    </div>
  )
}

export default function ChangeLogPage() {
  return (
    <>
      <main className='w-full min-h-full flex flex-col'>
        <span className='w-full px-4 max-w-5xl mx-auto flex flex-col prose flex-1'>
          <h1 className='text-4xl font-medium mt-16 mb-2'>Change log</h1>

          <div className='change-log flex flex-col gap-2 py-2 px-2 pb-16'>
            {CHANGE_LOG_CONTENT.map((item, key) => (
              <ChangeLogItem
                key={`${key}-${item.date}`}
                releaseDate={item.date}
              >
                {item.content}
              </ChangeLogItem>
            ))}
          </div>
        </span>
        <Footer />
      </main>
    </>
  )
}
