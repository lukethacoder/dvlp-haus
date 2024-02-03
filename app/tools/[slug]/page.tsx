import { Metadata } from 'next'

import { SEO_TITLE_EXTENSION, SEO_DEFAULTS } from '@/lib/constants'
import { isValidToolName } from '@/lib/tools'
import TOOLS from '@/tools'

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
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}

type PageProps = {
  params: { slug: string }
}

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

  return (
    <div>
      <header className='w-full border-b px-4 pt-12 pb-8'>
        <h1 className='text-3xl font-semibold'>{name}</h1>
        {description && <p>{description}</p>}
      </header>
      <Component />
    </div>
  )
}
