import { ITool } from '@/lib/tools'
import { Suspense } from 'react'
import { Client } from './client'

export function Component() {
  return (
    <Suspense>
      <Client />
    </Suspense>
  )
}

export default class Tool implements ITool {
  readonly slug = 'aspect-ratio-calculator'
  name = 'Aspect Ratio Calculator'
  description =
    'Calculate aspect ratio. Supports calculating width, height or the aspect ratio value.'
  readonly category = 'math'
  component = Component
}
