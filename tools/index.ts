/**
 * TODO: create cli for creating new tools and manually updating this file
 */

import { ITool } from '@/lib/tools'

import FontSizeConverter from './font-size-converter'
import SvgToBase64 from './svg-to-base64'
import AspectRatioConverter from './aspect-ratio-calculator'

export const TOOL_NAMES = [
  'aspect-ratio-calculator',
  'font-size-converter',
  'svg-to-base64',
] as const

const TOOLS: Record<(typeof TOOL_NAMES)[number], ITool> = {
  'aspect-ratio-calculator': new AspectRatioConverter(),
  'font-size-converter': new FontSizeConverter(),
  'svg-to-base64': new SvgToBase64(),
}

export default TOOLS
