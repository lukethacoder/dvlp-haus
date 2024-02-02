import { isValidToolName } from '@/lib/tools'
import TOOLS from '@/tools'

export async function generateStaticParams() { 
  return Object.values(TOOLS).map((tool) => ({
    slug: tool.slug,
  }))
}

type PageProps = {
  params: { slug: string }
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = params

  if (!isValidToolName(slug)) {
    return <div>
      <p>invalid tool name</p>
    </div>
  }

  const component = TOOLS[slug]

  const { name, description, component: Component } = component
  
  return (
    <div>
      <header className='w-full border-b px-4 py-4'>
        <h1 className='text-3xl font-semibold'>{name}</h1>
        {description && <p>{description}</p>}
      </header>
      <Component/>
    </div>
  )
}