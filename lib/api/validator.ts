import { z } from 'zod'

interface ValidateConfig<T extends z.ZodTypeAny> {
  dto: unknown
  schema: T
  schemaName: string
}

export function captureApiError(message: string, extra = {}): void {
  if (process.env.NODE_ENV !== 'production') {
    console.error(message, extra)
  } else {
    // TODO: report to a 3rd party system?
  }
}

export function validateApiSchema<T extends z.ZodTypeAny>(
  config: ValidateConfig<T>
): z.infer<T> {
  const safeParse = config.schema.safeParse(config.dto)

  if (safeParse.success) {
    return safeParse.data
  } else {
    const { error } = safeParse
    captureApiError(`API Validation Error: ${config.schemaName}`, {
      // dto: config.dto ? JSON.stringify(config.dto, undefined, 2) : config.dto,
      dto: config.dto,
      error: error.message,
      issues: error.issues
        ? JSON.stringify(error.issues, undefined, 2)
        : error.issues,
    })

    // throw error
  }
}
