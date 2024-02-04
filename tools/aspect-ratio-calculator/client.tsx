'use client'

import { MouseEvent, MouseEventHandler, useReducer } from 'react'
import { IconCopy } from '@tabler/icons-react'

import { copyToClipboard } from '@/lib'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

import { INITIAL_STATE, reducer } from './reducer'

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
    <span className='absolute right-1.5 h-full flex items-center'>
      {suffix && (
        <span className='text-sm text-muted-foreground mr-1'>{suffix}</span>
      )}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type='button'
              variant='ghost'
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
  const [componentState, dispatch] = useReducer(reducer, INITIAL_STATE)

  const handleCopyText = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    value: string
  ) => {
    event.preventDefault()
    event.stopPropagation()

    copyToClipboard(value)

    toast({
      title: 'Copied to clipboard',
      description: (
        <p>
          Copied <span className='text-primary'>{value}</span> to clipboard
        </p>
      ),
    })
  }

  return (
    <span className='flex flex-col gap-4 p-4'>
      <Card className='w-full max-w-4xl'>
        <CardHeader>
          <form className='w-full items-center'>
            <div className='w-full grid lg:grid-cols-2 items-center gap-y-4 gap-x-6'>
              <span className='flex flex-col'>
                <Label className='mb-2' htmlFor='width'>
                  Width
                </Label>
                <span className='flex relative'>
                  <Input
                    type='number'
                    max={10001}
                    min={0}
                    maxLength={4}
                    id='width'
                    value={componentState.width}
                    onChange={(event) =>
                      dispatch({
                        type: 'setNumber',
                        payload: {
                          key: 'width',
                          value: Number(event.target.value || 0),
                        },
                      })
                    }
                  />
                  <InputButton
                    buttonAriaLabel='Copy width value'
                    onClick={(event) =>
                      handleCopyText(event, `${componentState.width}`)
                    }
                  />
                </span>
              </span>
              <span className='flex flex-col'>
                <Label className='mb-2' htmlFor='height'>
                  Height
                </Label>
                <span className='flex relative'>
                  <Input
                    type='number'
                    max={10001}
                    min={0}
                    maxLength={4}
                    id='height'
                    value={componentState.height}
                    onChange={(event) =>
                      dispatch({
                        type: 'setNumber',
                        payload: {
                          key: 'height',
                          value: Number(event.target.value || 0),
                        },
                      })
                    }
                  />
                  <InputButton
                    buttonAriaLabel='Copy height value'
                    onClick={(event) =>
                      handleCopyText(event, `${componentState.height}`)
                    }
                  />
                </span>
              </span>
              <span className='flex flex-col'>
                <Label className='mb-2' htmlFor='ratioWidth'>
                  Ratio Width
                </Label>
                <span className='flex relative'>
                  <Input
                    type='number'
                    max={10001}
                    min={0}
                    maxLength={4}
                    id='ratioWidth'
                    value={componentState.ratioWidth}
                    onChange={(event) =>
                      dispatch({
                        type: 'setNumber',
                        payload: {
                          key: 'ratioWidth',
                          value: Number(event.target.value || 0),
                        },
                      })
                    }
                  />
                  <InputButton
                    buttonAriaLabel='Copy Ratio Width value'
                    onClick={(event) =>
                      handleCopyText(event, `${componentState.ratioWidth}`)
                    }
                  />
                </span>
              </span>
              <span className='flex flex-col'>
                <Label className='mb-2' htmlFor='ratioHeight'>
                  Ratio Height
                </Label>
                <span className='flex relative'>
                  <Input
                    type='number'
                    max={10001}
                    min={0}
                    maxLength={4}
                    id='ratioHeight'
                    value={componentState.ratioHeight}
                    onChange={(event) =>
                      dispatch({
                        type: 'setNumber',
                        payload: {
                          key: 'ratioHeight',
                          value: Number(event.target.value || 0),
                        },
                      })
                    }
                  />
                  <InputButton
                    buttonAriaLabel='Copy custom extension value'
                    onClick={(event) =>
                      handleCopyText(event, `${componentState.ratioHeight}`)
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
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent className='prose'>
          <p>
            Aspect Ratio Calculate runs various calculations to dynamically
            calculate <code>width</code> and <code>height</code> or
            <code>ratioWidth</code> and <code>ratioHeight</code>.
          </p>

          {/* TODO: write up logic for aspect ratio calculations */}
          {/* <h4 className='text-lg'>px</h4>
          <p>
            when changed, adjusts the <code>rem</code> and <code>em</code>{' '}
            values by taking the <code>px</code> value and dividing by the{' '}
            <code>baseFontSize</code>.
          </p>
          <code>rem = px / baseFontSize</code>

          <h4 className='text-lg'>rem/em</h4>
          <p>
            when changed, adjusts the <code>px</code> value by taking the{' '}
            <code>rem</code>/<code>em</code> value and multiplying by the{' '}
            <code>baseFontSize</code>.
          </p>
          <code>px = rem * baseFontSize</code> */}
        </CardContent>
      </Card>
    </span>
  )
}
