import { ITool } from '@/lib/tools'
import { Client } from './client'
import { Suspense } from 'react'

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
  readonly slug = 'svg-to-base64'
  name = 'SVG to base64'
  description = 'Convert SVG markup to Base64. Handy to convert SVGs to CSS.'
  readonly category = 'converters'
  readonly openGraphFontSize = 172
  component = Component
}
