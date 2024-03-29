import { Metadata } from 'next'

import { TOOLS } from '@/tools'
import TOOL_COMPONENTS from '@/tools/components'
import { isValidToolName } from '@/lib/tools'
// import { getTimestamp } from '@/lib/git'
import { cn } from '@/lib/utils'
import { SEO_TITLE_EXTENSION, SEO_DEFAULTS } from '@/lib/constants'

import { buttonVariants } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import Views from '@/components/views'
import { getPaths } from '@/lib/api/goatcounter/paths'
import { Suspense } from 'react'

export async function generateStaticParams() {
  return Object.values(TOOLS).map((tool) => ({
    slug: tool.slug,
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params

  if (!isValidToolName(slug)) {
    return {
      ...SEO_DEFAULTS,
      title: `Invalid Tool ${SEO_TITLE_EXTENSION}`,
    }
  }

  const toolData = TOOLS[slug]

  return {
    ...SEO_DEFAULTS,
    title: `${toolData.name} ${SEO_TITLE_EXTENSION}`,
    description: toolData.description,
  }
}

type PageProps = {
  params: { slug: string }
}

const dateFormat = new Intl.DateTimeFormat('en-AU', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

export default async function ToolPage({ params }: PageProps) {
  const { slug } = params

  if (!isValidToolName(slug)) {
    return (
      <div>
        <p>invalid tool name</p>
      </div>
    )
  }

  const component = TOOLS[slug]
  const components = TOOL_COMPONENTS[slug]

  const { name, description, goatPathId } = component
  let _goatPathId = goatPathId

  const { component: Component, content: Content } = components

  if (!goatPathId) {
    const paths = await getPaths()

    // prefer `/` prefixed path, but take non `/` prefixed path if found
    _goatPathId = paths.find((item) => item.path === `/tools/${slug}`)?.id
    if (!_goatPathId) {
      _goatPathId = paths.find((item) => item.path === `tools/${slug}`)?.id
    }
  }

  return (
    <div>
      <header className='w-full border-b px-4 pt-12 pb-8 flex flex-row justify-between items-end'>
        <span className='flex flex-col'>
          <h1 className='text-3xl font-bold'>{name}</h1>
          {description && <p>{description}</p>}
        </span>
      </header>

      <span className='flex flex-col gap-4 p-4'>
        {Component && <Component />}
        {Content && (
          <Card className='w-full max-w-4xl'>
            <CardHeader className='prose'>
              <h2 id='#about'>
                <a href='#about' className='anchor'></a>
                About
              </h2>
              <Content />
            </CardHeader>
          </Card>
        )}
      </span>

      <div className='w-full p-4 border-t flex gap-4 items-center justify-between'>
        <span>
          {_goatPathId && (
            <Suspense>
              <Views pathId={_goatPathId} />
            </Suspense>
          )}
        </span>
        <span className='flex items-center gap-4'>
          {/* {timestamp && (
            <span className='text-sm mt-0 mb-0 text-muted-foreground'>
              Last updated on <time>{dateFormat.format(timestamp)}</time>
            </span>
          )} */}
          <a
            href={`https://github.com/lukethacoder/dvlp-haus/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=${name}%20Bug`}
            className={cn(buttonVariants({ variant: 'outline' }))}
            target='_blank'
            rel='nofollow noreferrer'
          >
            🐛 Report a bug
          </a>
        </span>
      </div>
    </div>
  )
}
