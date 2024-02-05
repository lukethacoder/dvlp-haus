import { Metadata } from 'next'

import TOOLS from '@/tools'
import { isValidToolName } from '@/lib/tools'
import { getTimestamp } from '@/lib/git'
import { cn } from '@/lib/utils'

import { SEO_TITLE_EXTENSION, SEO_DEFAULTS } from '@/lib/constants'
import { Claps } from '@/components/claps'
import { buttonVariants } from '@/components/ui/button'

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

  const { name, description, component: Component } = component

  // get Last Updated value from .git
  const timestamp = await getTimestamp(`tools/${slug}`)

  return (
    <div>
      <header className='w-full border-b px-4 pt-12 pb-8 flex flex-row justify-between items-end'>
        <span className='flex flex-col'>
          <h1 className='text-3xl font-bold'>{name}</h1>
          {description && <p>{description}</p>}
        </span>
      </header>
      <Component />

      <div className='w-full p-4 border-t flex gap-4 items-center justify-between'>
        <Claps pageKey={slug} />
        <span className='flex items-center gap-4'>
          {timestamp && (
            <span className='text-sm mt-0 mb-0 text-muted-foreground'>
              Last updated on <time>{dateFormat.format(timestamp)}</time>
            </span>
          )}
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
