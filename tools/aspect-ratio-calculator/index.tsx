import { ITool } from "@/lib/tools"

export function Component() {
  return (
    <mark>the aspect-ratio calculator tool</mark>
  )
}

export default class Tool implements ITool {
  readonly slug = 'aspect-ratio-calculator'
  name = 'Aspect Ratio Calculator'
  description = 'Calculate aspect ratio. Supports calculating width, height or the aspect ratio value.'
  readonly category = 'math'
  component = Component
}