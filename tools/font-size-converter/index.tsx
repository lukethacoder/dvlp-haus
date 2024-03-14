import { Suspense } from 'react'

import { ITool } from '@/lib/tools'
import { Client } from './client'
import MdxContent from './content.mdx'

function Component() {
  return (
    <span>
      <Suspense>
        <Client />
      </Suspense>
    </span>
  )
}

export default class Tool implements ITool {
  readonly slug = 'font-size-converter'
  name = 'Font Size Converter'
  description = 'Convert between px, rem, em or custom font size types.'
  readonly category = 'converters'
  component = Component
  content = MdxContent
}
