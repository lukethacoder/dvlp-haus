'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

function event(path: string, title?: string) {
  if (window.goatcounter) {
    window.goatcounter.count({
      path,
      title,
      event: true,
    })
  }
}

export const GoatCounterScript: React.FC<{
  siteUrl: string
  scriptSrc?: string
}> = ({ siteUrl, scriptSrc }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const queryString = searchParams.toString()
    const url = `${pathname}${queryString ? `?${queryString}` : ''}`

    event(url)
  }, [pathname, searchParams])

  return (
    <Script
      strategy='afterInteractive'
      data-goatcounter={siteUrl}
      src={scriptSrc ?? '//gc.zgo.at/count.js'}
    />
  )
}
