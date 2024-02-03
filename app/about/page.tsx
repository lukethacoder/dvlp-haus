import { Metadata } from 'next'

import { SEO_DEFAULTS, SEO_TITLE_EXTENSION } from '@/lib/constants'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  ...SEO_DEFAULTS,
  title: `About ${SEO_TITLE_EXTENSION}`,
}

const BUILT_WITH = [
  {
    label: 'NextJS',
    href: 'https://nextjs.org/',
  },
  {
    label: 'TailwindCSS',
    href: 'https://tailwindcss.com/',
  },
]

export default function AboutPage() {
  return (
    <>
      <main className='w-full h-full'>
        <span className='w-full px-4 max-w-4xl mx-auto flex flex-col prose'>
          <h1 className='text-4xl font-medium mt-16 mb-2'>About</h1>

          <p>
            dvlp.haus (Develop House) is a free and open source project built by{' '}
            <a
              href='https://lukesecomb.digital?utm_campaign=dvlp.haus'
              target='_blank'
            >
              luke
            </a>
            . You can checkout the Github repo{' '}
            <a
              href='https://github.com/lukethacoder/dvlp-haus'
              target='_blank'
              rel='nofollow noreferrer'
            >
              here
            </a>
            .
          </p>
          <p>
            This project aims to be a one stop shop for developer tools.
            Providing conversion, formatting, calculating, encoding/decoding
            etc. tools to make your life easier.
          </p>

          <h2>🤔 Why?</h2>
          <p>
            There may already be plenty of tools scattered across the web that
            do what dvlp.haus does, but a lot of them are outdated, filled with
            ads and not taking advantage of modern technology and standards.
            Many also lack simple SSL certificates. dvlp.haus aims to use the
            latest and greatest to provide fast and reliable tools.
          </p>

          <h2>⚙️ Tech Stack</h2>
          <p className='mb-0'>dvlp.haus has been built with:</p>
          <ul className='mt-2'>
            {BUILT_WITH.map((item) => (
              <li key={item.label}>
                <a href={item.href} target='_blank' rel='nofollow noreferrer'>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </span>
      </main>
      <Footer />
    </>
  )
}
