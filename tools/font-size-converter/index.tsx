import dynamic from 'next/dynamic'
import { ITool } from '@/lib/tools'

export default class Tool implements ITool {
  readonly slug = 'font-size-converter'
  name = 'Font Size Converter'
  description = 'Convert between px, rem, em or custom font size types.'
  readonly category = 'converters'
  component = dynamic(() => import('./server'))
  content = dynamic(() => import('./content.mdx'))
}
