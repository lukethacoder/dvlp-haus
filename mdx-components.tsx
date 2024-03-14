import { ReactNode, createElement } from 'react'
import Link from 'next/link'
import { codeToHtml } from 'shiki'
import type { MDXComponents } from 'mdx/types'

function CustomLink(props: { href: string; children: ReactNode }) {
  const { href, ...props2 } = props

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props2}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />
}

async function Code({ children, ...props }: any) {
  const isMultiline = /[\n\r]/.test(children)

  const html = await codeToHtml(children, {
    lang: 'typescript',
    theme: 'one-dark-pro',
    transformers: [
      {
        pre(node) {
          this.addClassToHast(
            node,
            `rounded text-sm ${
              isMultiline ? 'p-4 overflow-auto' : 'px-1 py-0.5 inline-block'
            }`
          )
        },
        code(node) {
          this.addClassToHast(node, 'not-prose')
        },
      },
    ],
  })

  return <span dangerouslySetInnerHTML={{ __html: html }} {...props} />
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
  const createHeadingChild = ({ children }: { children: string }) => {
    const slug = slugify(children)
    return createElement(
      `h${level}`,
      { id: slug },
      [
        createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  return createHeadingChild
}

const COMPONENTS = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  code: Code,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // @ts-ignore
  return {
    ...COMPONENTS,
    ...components,
  }
}
