import { Suspense } from 'react'

import { ITool } from '@/lib/tools'
import { Client } from './client'
import MdxContent from './content.mdx'

export function Component() {
  return (
    <span>
      <Suspense fallback={<p>loading</p>}>
        <Client />
      </Suspense>
    </span>
  )
}

export default class Tool implements ITool {
  readonly slug = 'aspect-ratio-calculator'
  name = 'Aspect Ratio Calculator'
  description =
    'Calculate aspect ratio. Supports calculating width, height or the aspect ratio value.'
  readonly category = 'math'
  component = Component
  content = MdxContent
}
