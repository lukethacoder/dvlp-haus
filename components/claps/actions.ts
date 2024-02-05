'use server'

import { kv } from '@vercel/kv'
import { revalidatePath } from 'next/cache'

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY

export const validateRecaptcha = async (token: string | undefined) => {
  if (!RECAPTCHA_SECRET_KEY) {
    return {
      errors: ['reCAPTCHA SSR key not configured'],
    }
  }

  if (token) {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`
    )
    const data = await response.json()

    if (data.success === true) {
      return {
        success: true,
      }
    }

    // reCAPTCHA test failed. Are you a robot?
    return {
      errors: ['reCAPTCHA failed'],
    }
  }

  return {
    errors: ['reCAPTCHA failed or payload empty'],
  }
}

export async function handleIncrementClap(
  slug: string,
  claps: number,
  recaptchToken: string
) {
  const recaptchaResponse = await validateRecaptcha(recaptchToken)
  const { success } = recaptchaResponse

  if (success) {
    await kv.set(slug, claps)
    revalidatePath(`/tools/${slug}`)
  }
}
