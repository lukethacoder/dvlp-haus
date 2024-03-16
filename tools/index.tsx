/**
 * TODO: create cli for creating new tools and manually updating this file
 */
import { ITool } from '@/lib/tools'

import AspectRatioConverter from './aspect-ratio-calculator'
import FontSizeConverterConfig from './font-size-converter'
import SvgToBase64 from './svg-to-base64'

export const TOOL_NAMES = [
  'aspect-ratio-calculator',
  'font-size-converter',
  'svg-to-base64',
] as const

export const TOOLS: Record<(typeof TOOL_NAMES)[number], ITool> = {
  'aspect-ratio-calculator': AspectRatioConverter,
  'font-size-converter': FontSizeConverterConfig,
  'svg-to-base64': SvgToBase64,
}
