import { ITool } from "@/lib/tools"

export function Component() {
  return (
    <div>
      <h2>the svg-to-base64 tool</h2>
    </div>
  )
}

export default class Tool implements ITool {
  readonly slug = 'svg-to-base64'
  name = 'SVG to base64'
  description = 'Convert SVG markup to Base64. Handy to convert SVGs to CSS.'
  readonly category = 'converters'
  component = Component
}