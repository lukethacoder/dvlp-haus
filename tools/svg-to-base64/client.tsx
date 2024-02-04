'use client'

import { ChangeEvent, MouseEventHandler, useEffect, useState } from 'react'
import { IconCopy } from '@tabler/icons-react'
import DOMPurify from 'dompurify'

import { handleCopyTextEvent } from '@/lib'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Textarea } from '@/components/ui/textarea'
import { checkIfValidSvg, encodeSvg } from './utils'

function InputButton({
  suffix,
  buttonAriaLabel,
  onClick,
}: {
  suffix?: string
  buttonAriaLabel: string
  onClick: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <span className='absolute top-2 right-2 flex'>
      {suffix && (
        <span className='text-sm text-muted-foreground mr-1'>{suffix}</span>
      )}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type='button'
              variant='outline'
              aria-label={buttonAriaLabel}
              size='icon'
              className='w-7 h-7'
              onClick={onClick}
            >
              <IconCopy />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{buttonAriaLabel}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </span>
  )
}

export function Client() {
  const { toast } = useToast()
  const [svgInput, setSvgInput] = useState<string | undefined>()
  const [svgInputErrorMessage, setSvgInputErrorMessage] = useState<
    string | undefined
  >()
  const [svgInputValidated, setSvgInputValidated] = useState<
    string | undefined
  >()
  const [base64String, setBase64String] = useState<string | undefined>()
  const [cssBackgroundImageString, setCssBackgroundImageString] = useState<
    string | undefined
  >()

  const handleSvgInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    handleSetSvgValue(event.target.value)
  }

  const handleSetSvgValue = (value: string | undefined) => {
    // update SVG input
    setSvgInput(value)
    setSvgInputErrorMessage(undefined)

    if (value && checkIfValidSvg(value)) {
      const _sanitized = DOMPurify.sanitize(value)
      setSvgInputValidated(_sanitized)

      const encoded = encodeSvg(_sanitized)
      setBase64String('data:image/svg+xml,' + encoded)
      setCssBackgroundImageString(
        `background-image: url('data:image/svg+xml,${encoded}');`
      )

      return
    }

    setSvgInputValidated(undefined)
    setBase64String(undefined)
    setCssBackgroundImageString(undefined)

    setSvgInputErrorMessage('Invalid SVG code')
  }

  return (
    <span className='flex flex-col gap-4 p-4'>
      <div className='w-full max-w-7xl grid md:grid-cols-2 gap-4'>
        <Card className='w-full max-w-3xl'>
          <CardHeader>
            <form className='w-full flex flex-col gap-6'>
              <div className='w-full flex flex-col'>
                <Label className='mb-2' htmlFor='svgInput'>
                  SVG Code
                </Label>
                <Textarea
                  id='svgInput'
                  placeholder='Paste <svg></svg> code here'
                  value={svgInput}
                  rows={8}
                  onChange={handleSvgInputChange}
                />

                {svgInputErrorMessage && (
                  <p className='text-sm font-medium text-destructive mt-1'>
                    {svgInputErrorMessage}
                  </p>
                )}
              </div>

              <div className='w-full flex flex-col'>
                <Label className='mb-2' htmlFor='svgInput'>
                  Base64 Output
                </Label>
                <span className='flex relative'>
                  <Textarea
                    id='svgInput'
                    value={base64String}
                    rows={8}
                    readOnly
                  />
                  <span className={base64String ? 'flex' : 'hidden'}>
                    <InputButton
                      buttonAriaLabel='Copy base64 output'
                      onClick={(event) =>
                        handleCopyTextEvent(
                          toast,
                          event,
                          base64String || '',
                          `base64 string`
                        )
                      }
                    />
                  </span>
                </span>
              </div>

              <div className='w-full flex flex-col'>
                <Label className='mb-2' htmlFor='cssBackgroundImage'>
                  CSS Background Image
                </Label>
                <span className='flex relative'>
                  <Textarea
                    id='cssBackgroundImage'
                    value={cssBackgroundImageString}
                    rows={8}
                    readOnly
                  />
                  <span
                    className={cssBackgroundImageString ? 'flex' : 'hidden'}
                  >
                    <InputButton
                      buttonAriaLabel='Copy CSS background-image'
                      onClick={(event) =>
                        handleCopyTextEvent(
                          toast,
                          event,
                          cssBackgroundImageString || '',
                          `background-image string`
                        )
                      }
                    />
                  </span>
                </span>
              </div>
            </form>
          </CardHeader>
        </Card>
        <Card className='w-full max-w-4xl'>
          <CardHeader>
            <div className='w-full'>
              <span className='w-full flex flex-col'>
                <h3 className='text-sm font-medium leading-none mb-2'>
                  SVG Preview
                </h3>
                <span className='svg-preview flex items-center justify-center relative rounded-md border border-input bg-background p-8'>
                  <span
                    className='text-foreground w-full h-full'
                    dangerouslySetInnerHTML={{
                      __html: svgInputValidated ? svgInputValidated : '',
                    }}
                  ></span>
                </span>
              </span>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div className='w-full max-w-7xl flex flex-col gap-4'>
        <Card className='w-full'>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent className='prose'>
            <p>SVG to base64 uses regex to encode the provided SVG input.</p>
            <pre>{`const encodeSvg = (data: string) => {
  const symbols = /[${'\\'}r${'\\'}n%#()<>?\[\\\]^\`{|}]/g

  data = data.replace(/'/g, '"')
  data = data.replace(/>\s{1,}</g, '><')
  data = data.replace(/\s{2,}/g, ' ')

  return data.replace(symbols, encodeURIComponent)
}`}</pre>
            <p>
              The SVG input is purified at runtime using{' '}
              <a
                href='https://github.com/cure53/DOMPurify'
                target='_blank'
                rel='nofollow noreferrer'
              >
                DOMPurify
              </a>{' '}
              before being injected into the DOM as a live preview.
            </p>
          </CardContent>
        </Card>
      </div>
    </span>
  )
}
