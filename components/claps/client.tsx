'use client'

import { useEffect, useOptimistic, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { handleIncrementClap } from './actions'

const GOOGLE_RECAPTCHA_KEY = process.env
  .NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string

const numberFormat = new Intl.NumberFormat('en-AU')

export function Client({
  pageKey,
  claps: _claps,
}: {
  pageKey: string
  claps: number
}) {
  const recaptchaEl = useRef<ReCAPTCHA>(null)
  const [claps, setClaps] = useState(_claps)
  const [optimisticState, addOptimistic] = useOptimistic(
    claps,
    (_: number, newValue: number) => newValue
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleUpdateKv()
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [optimisticState])

  async function handleSubmitForm() {
    // increment the claps
    const newClaps = (optimisticState || 0) + 1

    // optimistically update the UI
    addOptimistic(newClaps)
    setClaps(newClaps)
  }

  async function handleUpdateKv() {
    console.log('handleUpdateKv')
    if (recaptchaEl.current) {
      try {
        // reCAPTCHA onCaptchaChange method will fire here
        // the callback from that method handles hitting the endpoint (via a server action)
        const token = await recaptchaEl.current.executeAsync()

        if (token) {
          await handleIncrementClap(pageKey, optimisticState, token)
        }
      } catch (error) {
        console.error('Error ', error)
        // silently fail - no real loss here tbh
      }
    }
  }

  return (
    <form className='relative' action={handleSubmitForm}>
      <TooltipProvider delayDuration={180}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button type='submit' variant='outline' aria-label='Thumbs up tool'>
              👍 {numberFormat.format(optimisticState)}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Show your appreciation</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <span className='absolute'>
        <ReCAPTCHA
          ref={recaptchaEl}
          size='invisible'
          sitekey={GOOGLE_RECAPTCHA_KEY}
        />
      </span>
    </form>
  )
}
