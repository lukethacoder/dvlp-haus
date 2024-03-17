const API_VERSION = 'v0'

export const BASE_URL = `https://dvlp-haus.goatcounter.com/api/${API_VERSION}`

export const fetchWithAuth = async (endpoint: string) =>
  fetch(endpoint, {
    headers: new Headers({
      Authorization: `Bearer ${process.env.GOAT_COUNTER_AUTH_TOKEN || ''}`,
      'Content-Type': `application/json`,
    }),
  })
