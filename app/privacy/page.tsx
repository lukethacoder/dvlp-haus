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
      <main className='w-full h-full flex-1'>
        <span className='w-full px-4 max-w-4xl mx-auto flex flex-col prose pb-12'>
          <h1 className='text-4xl font-medium mt-16 mb-2'>Privacy</h1>

          <h2>Data Usage</h2>
          <p>
            There are two categories of tools accessible within dvlp.haus tools:
            those conducting processing directly within the browser, and those
            transmitting data to the server for processing through server-side
            processing.
          </p>
          <p>
            Data forwarded to the server serves exclusively for the execution of
            the tool&apos;s processing, such as data conversion, encoding,
            calculating, etc., and will not be employed for any alternative
            purpose. The transmitted data will be promptly obliterated upon
            completion of the tool&apos;s processing, and no data will be
            retained. Furthermore, rest assured that we refrain from
            scrutinizing the contents of any data or files transmitted to our
            server.
          </p>

          <h2>Communication</h2>
          <p>
            All interactions with the server are secured through SSL (Secure
            Socket Layer) encryption. In the unlikely event of data being
            intercepted by a third party, there exists no susceptibility to the
            compromise or theft of the contents.
          </p>

          <h2>Analytics and Tracking</h2>
          <p>
            This website utilizes GoatCounter for general analytical tracking as
            an alternative to Google Analytics. For more information on how
            GoatCounter collects and uses your data, visit{` `}
            <a href='https://www.goatcounter.com/help/privacy'>
              Goat Counter Privacy
            </a>
            .
          </p>
          <p>
            This website utalizes Microsoft Clarity to capture how you use and
            interact with our website through behavioral metrics, heatmaps, and
            session replay to improve and catch bugs within the tools. Website
            usage data is captured using first and third-party cookies and other
            tracking technologies to determine the popularity of the tools. For
            more information about how Microsoft collects and uses your data,
            visit the{' '}
            <a
              href='https://privacy.microsoft.com/en-US/privacystatement'
              target='_blank'
              rel='nofollow noreferrer'
            >
              Microsoft Privacy Statement
            </a>
            .
          </p>

          <h2>Open Source</h2>
          <p>
            The website is all open-sourced, affording transparency to users who
            can access the platform at any time to scrutinize the utilization
            and access of their data. This open-source model empowers users with
            the ability to examine the source code and delve into the
            intricacies of data processing mechanisms. The source code can be
            found{' '}
            <a
              href='https://github.com/lukethacoder/dvlp-haus'
              target='_blank'
              rel='nofollow noreferrer'
            >
              here
            </a>
            .
          </p>
        </span>
      </main>
      <Footer />
    </>
  )
}
