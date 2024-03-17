import { z } from 'zod'

import { validateApiSchema } from '@/lib/api/validator'
import { BASE_URL, fetchWithAuth } from './utils'

export type ApiResponse = z.infer<typeof schema>

export type ResponseItem = ApiResponse['refs'][number]

const schema = z.object({
  refs: z.array(
    z.object({
      name: z.string(),
      count: z.number(),
    })
  ),
})

function validate(dto: unknown): ApiResponse {
  return validateApiSchema({
    dto,
    schema,
    schemaName: 'goatcounter/stats/hits/{path_id}',
  })
}

export async function getHitsByPathId([pathId]: [
  pathId: number
]): Promise<number> {
  if (!pathId) {
    return 0
  }

  const endpoint = `${BASE_URL}/stats/hits/${pathId}?start=2020-01-01T00:00:00.000Z`

  try {
    const response = await fetchWithAuth(endpoint)
    const data = await response.json()

    const payload = validate(data)
    const totalHits = payload.refs.reduce((acc, item) => acc + item.count, 0)

    return totalHits
  } catch (error) {
    console.log(`❌ ${endpoint}`)
    console.error('Error ', error)
    return 0
  }
}
