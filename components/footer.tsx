import Link from 'next/link'

const NAVIGATION = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Change log',
    href: '/change-log',
  },
  {
    label: 'Requests',
    href: 'https://github.com/lukethacoder/dvlp-haus/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=',
  },
  {
    label: 'Privacy',
    href: '/privacy',
  },
  {
    label: 'Disclaimer',
    href: '/disclaimer',
  },
]

export function Footer() {
  return (
    <footer className='flex w-full justify-between items-center px-4 py-4 gap-2 border-t'>
      <ul className='flex flex-wrap gap-x-4 gap-y-2 text-sm'>
        {NAVIGATION.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              target={item.href.includes('https') ? '_blank' : '_self'}
              className='hover:underline rounded-sm focus-visible:outline outline-2 outline-offset-2 outline-primary'
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <span className='text-sm whitespace-nowrap'>
        made by{' '}
        <a
          href='https://lukesecomb.digital?utm_campaign=dvlp.haus'
          className='hover:underline rounded-sm focus-visible:outline outline-2 outline-offset-2 outline-primary'
        >
          luke
        </a>
        .
      </span>
    </footer>
  )
}
