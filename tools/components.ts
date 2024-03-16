import dynamic from 'next/dynamic'
import { ToolData } from '@/lib/tools'
import { TOOL_NAMES } from './index'

const TOOL_COMPONENTS: Record<(typeof TOOL_NAMES)[number], ToolData> = {
  'aspect-ratio-calculator': {
    component: dynamic(() => import('@/tools/aspect-ratio-calculator/server')),
    content: dynamic(
      () => import('@/tools/aspect-ratio-calculator/content.mdx')
    ),
  },
  'font-size-converter': {
    component: dynamic(() => import('@/tools/font-size-converter/server')),
    content: dynamic(() => import('@/tools/font-size-converter/content.mdx')),
  },
  'svg-to-base64': {
    component: dynamic(() => import('@/tools/svg-to-base64/server')),
    content: dynamic(() => import('@/tools/svg-to-base64/content.mdx')),
  },
}

export default TOOL_COMPONENTS
