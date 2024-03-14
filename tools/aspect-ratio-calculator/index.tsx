import dynamic from 'next/dynamic'
import { ITool } from '@/lib/tools'

export default class Tool implements ITool {
  readonly slug = 'aspect-ratio-calculator'
  name = 'Aspect Ratio Calculator'
  description =
    'Calculate aspect ratio. Supports calculating width, height or the aspect ratio value.'
  readonly category = 'math'
  component = dynamic(() => import('./server'))
  content = dynamic(() => import('./content.mdx'))
}
