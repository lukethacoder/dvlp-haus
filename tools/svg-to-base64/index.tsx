import dynamic from 'next/dynamic'
import { ITool } from '@/lib/tools'

export default class Tool implements ITool {
  readonly slug = 'svg-to-base64'
  name = 'SVG to base64'
  description = 'Convert SVG markup to Base64. Handy to convert SVGs to CSS.'
  readonly category = 'converters'
  readonly openGraphFontSize = 172
  component = dynamic(() => import('./server'))
  content = dynamic(() => import('./content.mdx'))
}
