'use client'

import { useRef, useState } from 'react'
import wkx from 'wkx'

import { handleCopyTextEvent } from '@/lib'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import InputButton from '@/components/input-button'
import { useToast } from '@/components/ui/use-toast'
import InputError from '@/components/ui/inputError'
import Editor from '@/components/editor'
import { Monaco } from '@monaco-editor/react'
import { editor } from 'monaco-editor'

// editor.setValue(defaultValue)

export function Client() {
  const { toast } = useToast()

  const [inputValue, setInputValue] = useState<string>('')
  const [inputValueError, setInputValueError] = useState<string | undefined>()

  const [geoJson, setGeoJson] = useState<string>('')
  const [geoJsonError, setGeoJsonError] = useState<string | undefined>()

  const wkbEditorRef = useRef<editor.IStandaloneCodeEditor | null>(null)
  const geoJsonEditorRef = useRef<editor.IStandaloneCodeEditor | null>(null)

  function handleWkbEditorDidMount(
    editor: editor.IStandaloneCodeEditor,
    _monaco: Monaco
  ) {
    wkbEditorRef.current = editor
  }

  function handleGeoJsonEditorDidMount(
    editor: editor.IStandaloneCodeEditor,
    _monaco: Monaco
  ) {
    geoJsonEditorRef.current = editor
  }

  const handleEditorChangeWkb = async (value) => {
    setInputValueError(undefined)

    try {
      const twkbBuffer = Buffer.from(value, 'hex')
      const geometry = wkx.Geometry.parse(twkbBuffer)

      const geoJson = geometry.toGeoJSON()

      if (geoJsonEditorRef.current !== null) {
        const currentValue = geoJsonEditorRef.current.getValue()
        const geoJsonValue = JSON.stringify(geoJson, undefined, 2)
        if (currentValue !== geoJsonValue) {
          geoJsonEditorRef.current.setValue(geoJsonValue)
        }
      }
    } catch (error) {
      console.warn('Error ', error)
      setInputValueError(`${error}`)
    }

    setIsSettingWkb(false)
  }

  const handleEditorChangeGeoJson = async (value) => {
    setGeoJsonError(undefined)

    try {
      const geometry = wkx.Geometry.parseGeoJSON(JSON.parse(value))

      // setInputValue(geometry.toWkb().toString('hex'))
      const wkbValue = geometry.toWkb().toString('hex')

      if (wkbEditorRef.current !== null) {
        const currentValue = wkbEditorRef.current.getValue()

        // check the new value has changed
        if (currentValue !== wkbValue) {
          wkbEditorRef.current.setValue(wkbValue)
        }
      }
    } catch (error) {
      console.warn('Error ', error)
      setGeoJsonError(`${error}`)
    }
  }

  return (
    <>
      <Card className='w-full max-w-4xl mb-4'>
        <CardHeader>
          <form className='w-full items-center'>
            <div className='w-full grid items-center gap-y-4 gap-x-6'>
              {/* <div className='flex flex-col'>
                <Label className='mb-2' htmlFor='wkb'>
                  WKB (Well Known Binary)
                </Label>
                <span className='flex flex-col relative'>
                  <Textarea
                    id='wkb'
                    value={inputValue}
                    rows={6}
                    onChange={handleInputChange}
                  />
                  {inputValueError && (
                    <InputError>{inputValueError}</InputError>
                  )}
                  <InputButton
                    className='top-2 right-2 h-auto'
                    buttonAriaLabel='Copy WKB string'
                    onClick={(event) =>
                      handleCopyTextEvent(toast, event, 'WKB string')
                    }
                  />
                </span>
              </div> */}
              {/* <div className='flex flex-col'>
                <Label className='mb-2' htmlFor='wkb'>
                  WKB (Well Known Binary)
                </Label>
                <span className='flex flex-col relative'>
                  <Textarea
                    id='wkb'
                    value={inputValue}
                    rows={6}
                    onChange={handleInputChange}
                  />
                  {inputValueError && (
                    <InputError>{inputValueError}</InputError>
                  )}
                  <InputButton
                    className='top-2 right-2 h-auto'
                    buttonAriaLabel='Copy WKB string'
                    onClick={(event) =>
                      handleCopyTextEvent(toast, event, 'WKB string')
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
                    onChange={handleInputChangeGeoJson}
                  />
                  {geoJsonError && <InputError>{geoJsonError}</InputError>}
                  <InputButton
                    className='top-2 right-2 h-auto'
                    buttonAriaLabel='Copy GeoJSON string'
                    onClick={(event) =>
                      handleCopyTextEvent(toast, event, 'GeoJSON string')
                    }
                  />
                </span>
              </div> */}

              <div className='w-full flex flex-col'>
                <Label className='mb-2' htmlFor='geoJsonValue'>
                  WKB
                </Label>
                <span className='flex flex-col relative'>
                  <Editor
                    height='480px'
                    defaultLanguage='text'
                    onChange={handleEditorChangeWkb}
                    onMount={handleWkbEditorDidMount}
                  />
                </span>
              </div>

              <div className='w-full flex flex-col'>
                <Label className='mb-2' htmlFor='geoJsonValue'>
                  GeoJSON
                </Label>
                <span className='flex flex-col relative'>
                  <Editor
                    height='480px'
                    defaultLanguage='json'
                    onChange={handleEditorChangeGeoJson}
                    onMount={handleGeoJsonEditorDidMount}
                  />
                </span>
              </div>
            </div>
          </form>
        </CardHeader>
      </Card>
    </>
  )
}
