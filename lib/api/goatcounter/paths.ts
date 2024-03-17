import { z } from 'zod'

import { validateApiSchema } from '@/lib/api/validator'
import { BASE_URL, fetchWithAuth } from './utils'

export type ApiResponse = z.infer<typeof schema>

export type ResponseItem = ApiResponse['paths'][number]

const schema = z.object({
  paths: z.array(
    z.object({
      id: z.number(),
      path: z.string(),
      title: z.string(),
      event: z.boolean(),
    })
  ),
})

function validate(dto: unknown): ApiResponse {
  return validateApiSchema({ dto, schema, schemaName: 'goatcounter/paths' })
}

export async function getPaths(): Promise<ResponseItem[]> {
  const endpoint = `${BASE_URL}/paths`

  try {
    const response = await fetchWithAuth(endpoint)
    const data = await response.json()

    return validate(data).paths
  } catch (error) {
    console.log(`❌ ${endpoint}`)
    console.error('Error ', error)
    return []
  }
}
