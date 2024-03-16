'use client'

import { useReducer } from 'react'

import { handleCopyTextEvent } from '@/lib'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import InputButton from '@/components/input-button'
import { useToast } from '@/components/ui/use-toast'

import { INITIAL_STATE, reducer } from './reducer'
import { ConversionTable } from './conversion-table'

export function Client() {
  const { toast } = useToast()
  const [componentState, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <>
      <Card className='w-full max-w-4xl mb-4'>
        <CardHeader>
          <form className='w-full items-center'>
            <div className='w-full grid lg:grid-cols-2 items-center gap-y-4 gap-x-6'>
              <span className='flex flex-col'>
                <Label className='mb-2' htmlFor='px'>
                  px
                </Label>
                <span className='flex relative'>
                  <Input
                    type='number'
                    max={10001}
                    min={0}
                    maxLength={4}
                    id='px'
                    value={componentState.px}
                    onChange={(event) =>
                      dispatch({
                        type: 'setNumber',
                        payload: {
                          key: 'px',
                          value: Number(event.target.value || 0),
                        },
                      })
                    }
                  />
                  <InputButton
                    suffix='px'
                    buttonAriaLabel='Copy px value'
                    onClick={(event) =>
                      handleCopyTextEvent(
                        toast,
                        event,
                        `${componentState.px}px`
                      )
                    }
                  />
                </span>
              </span>
              <span className='flex flex-col'>
                <Label className='mb-2' htmlFor='em'>
                  em
                </Label>
                <span className='flex relative'>
                  <Input
                    type='number'
                    max={10001}
                    min={0}
                    maxLength={4}
                    id='em'
                    value={componentState.em}
                    onChange={(event) =>
                      dispatch({
                        type: 'setNumber',
                        payload: {
                          key: 'em',
                          value: Number(event.target.value || 0),
                        },
                      })
                    }
                  />
                  <InputButton
                    suffix='em'
                    buttonAriaLabel='Copy em value'
                    onClick={(event) =>
                      handleCopyTextEvent(
                        toast,
                        event,
                        `${componentState.em}em`
                      )
                    }
                  />
                </span>
              </span>
              <span className='flex flex-col'>
                <Label className='mb-2' htmlFor='rem'>
                  rem
                </Label>
                <span className='flex relative'>
                  <Input
                    type='number'
                    max={10001}
                    min={0}
                    maxLength={4}
                    id='rem'
                    value={componentState.rem}
                    onChange={(event) =>
                      dispatch({
                        type: 'setNumber',
                        payload: {
                          key: 'rem',
                          value: Number(event.target.value || 0),
                        },
                      })
                    }
                  />
                  <InputButton
                    suffix='rem'
                    buttonAriaLabel='Copy rem value'
                    onClick={(event) =>
                      handleCopyTextEvent(
                        toast,
                        event,
                        `${componentState.rem}rem`
                      )
                    }
                  />
                </span>
              </span>
              <span className='flex flex-col'>
                <Label className='mb-2' htmlFor='customExtension'>
                  Custom Extension
                </Label>
                <span className='flex relative'>
                  <Input
                    type='number'
                    max={10001}
                    min={0}
                    maxLength={4}
                    id='customExtension'
                    value={componentState.customExtension}
                    onChange={(event) =>
                      dispatch({
                        type: 'setNumber',
                        payload: {
                          key: 'customExtension',
                          value: Number(event.target.value || 0),
                        },
                      })
                    }
                  />
                  <InputButton
                    suffix={componentState.customExtensionText || 'none'}
                    buttonAriaLabel='Copy custom extension value'
                    onClick={(event) =>
                      handleCopyTextEvent(
                        toast,
                        event,
                        `${componentState.customExtension}${componentState.customExtensionText}`
                      )
                    }
                  />
                </span>
              </span>
            </div>

            <hr className='my-6' />

            <div className='w-full grid lg:grid-cols-2 items-center gap-y-4 gap-x-6'>
              <span className='flex flex-col'>
                <Label className='mb-2' htmlFor='baseFontSize'>
                  Base Font Size
                </Label>
                <span className='flex relative'>
                  <Input
                    type='number'
                    max={10001}
                    min={0}
                    maxLength={4}
                    id='baseFontSize'
                    value={componentState.baseFontSize}
                    onChange={(event) =>
                      dispatch({
                        type: 'setNumber',
                        payload: {
                          key: 'baseFontSize',
                          value: Number(event.target.value || 0),
                        },
                      })
                    }
                  />
                </span>
              </span>
              <span className='flex flex-col'>
                <Label className='mb-2' htmlFor='customExtensionText'>
                  Custom Extension Text
                </Label>
                <span className='flex relative'>
                  <Input
                    type='text'
                    id='customExtensionText'
                    maxLength={20}
                    value={componentState.customExtensionText}
                    onChange={(event) =>
                      dispatch({
                        type: 'setString',
                        payload: {
                          key: 'customExtensionText',
                          value: event.target.value as string,
                        },
                      })
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
          <CardTitle>px to em/rem conversion</CardTitle>
        </CardHeader>
        <CardContent>
          <ConversionTable baseFontSize={componentState.baseFontSize} />
        </CardContent>
      </Card>
    </>
  )
}
