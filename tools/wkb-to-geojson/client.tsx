'use client'

import { useState } from 'react'
import wkx from 'wkx'

import { handleCopyTextEvent } from '@/lib'

import { Card, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import InputButton from '@/components/input-button'
import { useToast } from '@/components/ui/use-toast'
import InputError from '@/components/ui/inputError'
import { Button } from '@/components/ui/button'

const EXAMPLE_GEOJSON: string = JSON.stringify(
  {
    type: 'GeometryCollection',
    geometries: [
      {
        type: 'Point',
        coordinates: [4, 6],
      },
      {
        type: 'LineString',
        coordinates: [
          [4, 6],
          [7, 10],
        ],
      },
    ],
  },
  undefined,
  2
)

export function Client() {
  const { toast } = useToast()

  const [wkb, setWkb] = useState<string>('')
  const [wkbError, setWkbError] = useState<string | undefined>()

  const [geoJson, setGeoJson] = useState<string>('')
  const [geoJsonError, setGeoJsonError] = useState<string | undefined>()

  const handleEditorChangeWkb = async (value: string) => {
    setWkbError(undefined)
    setWkb(value)

    try {
      const twkbBuffer = Buffer.from(value, 'hex')
      const geometry = wkx.Geometry.parse(twkbBuffer)

      setGeoJson(JSON.stringify(geometry.toGeoJSON(), undefined, 2))
    } catch (error) {
      console.warn('Error ', error)
      setWkbError(`${error}`)
    }
  }

  const handleEditorChangeGeoJson = async (value: string) => {
    setGeoJsonError(undefined)
    setGeoJson(value)

    try {
      const geometry = wkx.Geometry.parseGeoJSON(JSON.parse(value))

      setWkb(geometry.toWkb().toString('hex'))
    } catch (error) {
      console.warn('Error ', error)
      setGeoJsonError(`${error}`)
    }
  }

  const handleSetExampleValues = () => {
    setGeoJson(EXAMPLE_GEOJSON)
    handleEditorChangeGeoJson(EXAMPLE_GEOJSON)
  }

  const handleClear = () => {
    setWkb('')
    setGeoJson('')
  }

  return (
    <>
      <Card className='w-full max-w-4xl mb-4'>
        <CardHeader>
          <form className='w-full items-center'>
            <div className='w-full grid items-center gap-y-4 gap-x-6'>
              <div className='flex flex-col'>
                <Label className='mb-2' htmlFor='wkb'>
                  WKB (Well Known Binary)
                </Label>
                <span className='flex flex-col relative'>
                  <Textarea
                    id='wkb'
                    value={wkb}
                    rows={6}
                    onChange={(event) =>
                      handleEditorChangeWkb(event.target.value)
                    }
                  />
                  {wkbError && <InputError>{wkbError}</InputError>}
                  <InputButton
                    className='top-2 right-2 h-auto'
                    buttonAriaLabel='Copy WKB string'
                    onClick={(event) =>
                      handleCopyTextEvent(toast, event, wkb, 'WKB string')
                    }
                  />
                </span>
              </div>

              <div className='w-full flex flex-col'>
                <Label className='mb-2' htmlFor='geoJsonValue'>
                  GeoJSON
                </Label>
                <span className='flex flex-col relative'>
                  <Textarea
                    id='geoJsonValue'
                    value={geoJson}
                    rows={6}
                    onChange={(event) =>
                      handleEditorChangeGeoJson(event.target.value)
                    }
                  />
                  {geoJsonError && <InputError>{geoJsonError}</InputError>}
                  <InputButton
                    className='top-2 right-2 h-auto'
                    buttonAriaLabel='Copy GeoJSON string'
                    onClick={(event) =>
                      handleCopyTextEvent(
                        toast,
                        event,
                        geoJson,
                        'GeoJSON string'
                      )
                    }
                  />
                </span>
              </div>

              <div className='flex gap-2'>
                <Button
                  variant='secondary'
                  type='button'
                  onClick={handleSetExampleValues}
                >
                  Set example values
                </Button>
                <Button variant='secondary' type='button' onClick={handleClear}>
                  Clear
                </Button>
              </div>
            </div>
          </form>
        </CardHeader>
      </Card>
    </>
  )
}
