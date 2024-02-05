'use server'

import { kv } from '@vercel/kv'
import { Client } from './client'

export async function Claps({ pageKey }: { pageKey: string }) {
  const claps = await kv.get<number>(pageKey)

  return <Client pageKey={pageKey} claps={claps || 0} />
}
