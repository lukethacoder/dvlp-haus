/**
 * TODO: create cli for creating new tools and manually updating this file
 */
import dynamic from 'next/dynamic'

import { ITool, ToolData } from '@/lib/tools'

import AspectRatioConverter from './aspect-ratio-calculator'
import FontSizeConverterConfig from './font-size-converter'
import SvgToBase64 from './svg-to-base64'

export const TOOL_NAMES = [
  'aspect-ratio-calculator',
  'font-size-converter',
  'svg-to-base64',
] as const

const TOOLS: Record<(typeof TOOL_NAMES)[number], ITool> = {
  'aspect-ratio-calculator': AspectRatioConverter,
  'font-size-converter': FontSizeConverterConfig,
  'svg-to-base64': SvgToBase64,
}

export const TOOL_COMPONENTS: Record<(typeof TOOL_NAMES)[number], ToolData> = {
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

export default TOOLS
