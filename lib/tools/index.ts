import { ComponentType, ReactNode } from 'react'
import {
  IconMath,
  IconQuestionMark,
  IconSwitchHorizontal,
  IconTransform,
  TablerIconsProps,
} from '@tabler/icons-react'
import TOOLS, { TOOL_NAMES } from '@/tools'

// NOTE: order here determines category order
export const CATEGORY_KEYS = [
  'converters',
  'encoders-decoders',
  'math',
  'other',
] as const

export interface ICategory {
  name: string
  icon: (props: TablerIconsProps) => ReactNode
}

export const CATEGORIES: Record<(typeof CATEGORY_KEYS)[number], ICategory> = {
  converters: {
    name: 'Converters',
    icon: IconSwitchHorizontal,
  },
  'encoders-decoders': {
    name: 'Encoders / Decoders',
    icon: IconTransform,
  },
  math: {
    name: 'Math',
    icon: IconMath,
  },
  other: {
    name: 'Other',
    icon: IconQuestionMark,
  },
}

export const getToolsByCategory = (
  tools: Record<(typeof TOOL_NAMES)[number], ITool>
) =>
  Object.values(tools).reduce(
    (acc, tool) => {
      const { category } = tool

      if (category) {
        if (!Object.hasOwn(acc, category)) {
          acc[category] = []
        }
        acc[category].push(tool)
      }

      return acc
    },
    CATEGORY_KEYS.reduce(
      (acc, item) => ({
        ...acc,
        [item]: [],
      }),
      {}
    ) as Record<(typeof CATEGORY_KEYS)[number], ITool[]>
  )

export const isValidToolName = (
  stringValue: string
): stringValue is keyof typeof TOOLS => {
  return Object.hasOwn(TOOLS, stringValue)
}

export interface ITool {
  readonly slug: (typeof TOOL_NAMES)[number]
  readonly name: string
  readonly description: string
  readonly category: (typeof CATEGORY_KEYS)[number]
  component: ComponentType<any>
}
