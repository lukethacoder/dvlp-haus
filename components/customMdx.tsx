'use server'

import React, { ReactNode, Suspense } from 'react'

import Link from 'next/link'
// import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { codeToHtml } from 'shiki'

// function Table({ data }) {
//   let headers = data.headers.map((header, index) => (
//     <th key={index}>{header}</th>
//   ))
//   let rows = data.rows.map((row, index) => (
//     <tr key={index}>
//       {row.map((cell, cellIndex) => (
//         <td key={cellIndex}>{cell}</td>
//       ))}
//     </tr>
//   ))

//   return (
//     <table>
//       <thead>
//         <tr>{headers}</tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   )
// }

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

function Callout(props: { emoji: string; children: ReactNode }) {
  return (
    <div className='px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8'>
      <div className='flex items-center w-4 mr-4'>{props.emoji}</div>
      <div className='w-full callout'>{props.children}</div>
    </div>
  )
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
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
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
  Callout,
  code: Code,
  // Table,
  // LiveCode,
}

export async function CustomMDX(props: { source: string; components?: any }) {
  return (
    <MDXRemote
      source={props.source}
      components={{ ...COMPONENTS, ...(props.components || {}) }}
    />
  )
}
