import {
  ComponentType,
  ForwardRefExoticComponent,
  FunctionComponent,
  ReactNode,
  RefAttributes,
} from 'react'
import {
  IconMath,
  IconQuestionMark,
  IconSwitchHorizontal,
  IconTransform,
  IconProps,
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
  readonly name: string
  readonly icon: ForwardRefExoticComponent<
    Omit<IconProps, 'ref'> & RefAttributes<FunctionComponent<IconProps>>
  >
  readonly iconRef: URL
}

export const CATEGORIES: Record<(typeof CATEGORY_KEYS)[number], ICategory> = {
  converters: {
    name: 'Converters',
    icon: IconSwitchHorizontal,
    iconRef: new URL(
      '../../node_modules/@tabler/icons/icons/outline/switch-horizontal.svg',
      import.meta.url
    ),
  },
  'encoders-decoders': {
    name: 'Encoders / Decoders',
    icon: IconTransform,
    iconRef: new URL(
      '../../node_modules/@tabler/icons/icons/outline/transform.svg',
      import.meta.url
    ),
  },
  math: {
    name: 'Math',
    icon: IconMath,
    iconRef: new URL(
      '../../node_modules/@tabler/icons/icons/outline/math.svg',
      import.meta.url
    ),
  },
  other: {
    name: 'Other',
    icon: IconQuestionMark,
    iconRef: new URL(
      '../../node_modules/@tabler/icons/icons/outline/question-mark.svg',
      import.meta.url
    ),
  },
}

export const isValidCategoryName = (
  stringValue: string
): stringValue is keyof typeof CATEGORIES => {
  return Object.hasOwn(CATEGORIES, stringValue)
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
  readonly openGraphFontSize?: number
  component: ComponentType<any>
  content?: ComponentType<any>
}
