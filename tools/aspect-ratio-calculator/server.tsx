import { Suspense } from 'react'

import { Client } from './client'

export default function ServerComponent() {
  return (
    <span>
      <Suspense>
        <Client />
      </Suspense>
    </span>
  )
}
