import { cn } from '@/lib/utils'
import { BundledLanguage, codeToHtml } from 'shiki'

export async function CodeBlock({
  code,
  language = 'typescript',
  className,
}: {
  code: string
  language?: BundledLanguage
  className?: string
}) {
  console.log('syntax highlighting yo')
  const html = await codeToHtml(code, {
    lang: language,
    theme: 'one-dark-pro',
  })

  return (
    <span
      className={cn(
        'relative flex flex-col rounded-b-lg overflow-hidden',
        className
      )}
    >
      <span
        className='flex w-full'
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></span>
    </span>
  )
}
