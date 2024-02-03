import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import image_20240203 from '@/public/change-log/2024-02-03.jpg'
import image_20190106 from '@/public/change-log/2019-01-06.jpg'

export const CHANGE_LOG_CONTENT: { date: Date; content: ReactNode }[] = [
  {
    date: new Date('2024-02-03'),
    content: (
      <>
        <Image
          src={image_20240203}
          alt='Pablo escobar acting as an old neglected side project waiting to be finished.'
        />
        <h2>New Build: Initial Release</h2>
        <p>
          After many years of neglect we're back to build dvlp.haus into the
          website it was meant to be.
        </p>

        <p>Initial release includes the two tools from the original build:</p>
        <ul>
          <li>
            <Link href='/tools/svg-to-base64'>SVG to CSS</Link>
          </li>
          <li>
            <Link href='/tools/font-size-converter'>Font Converter</Link>
          </li>
        </ul>

        <p>
          If you're keen to see a specific tool added, feel free to{' '}
          <a
            href='https://github.com/lukethacoder/dvlp-haus/issues/new?assignees=&labels=&projects=&template=feature_request.md&title='
            target='_blank'
            rel='nofollow noreferrer'
          >
            open a request
          </a>
          .
        </p>
      </>
    ),
  },
  {
    date: new Date('2019-01-29'),
    content: (
      <>
        <h2>First Production Release</h2>
        <p>Featuring two tools:</p>
        <ul>
          <li>
            <Link href='/tools/svg-to-base64'>SVG to CSS</Link>
          </li>
          <li>
            <Link href='/tools/font-size-converter'>Font Converter</Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    date: new Date('2019-01-06'),
    content: (
      <>
        <Image
          src={image_20190106}
          alt="Silly developer meme: man staring at a 'new side project' whilst his existing side projects stare at him."
        />
        <h2>Initial Commit</h2>
        <p>
          First commit to dvlp.haus{' '}
          <a
            href='https://github.com/lukethacoder/dvlp-haus'
            target='_blank'
            rel='nofollow noreferrer'
          >
            Github repo
          </a>
        </p>
      </>
    ),
  },
]
