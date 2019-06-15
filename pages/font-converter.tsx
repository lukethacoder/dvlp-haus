import * as React from 'react'
import Clipboard from 'react-clipboard.js';

import Layout from '../components/Layout'
import Container from '../components/Container'

const SvgToCssPage: React.FunctionComponent = () => {
  const [pixels, setPixels] = React.useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      name: 'px',
      raw_input: '',
      value: 16,
    }
  )
  const [rem, setRem] = React.useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      name: 'rem',
      raw_input: '',
      value: 1,
    }
  )
  const [em, setEm] = React.useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      name: 'em',
      raw_input: '',
      value: 1,
    }
  )
  const [custom, setCustom] = React.useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      name: 'custom',
      ext: 'dvlp',
      raw_input: '',
      value: 1,
    }
  )
  const [baseFont, setBaseFont] = React.useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      name: 'base',
      raw_input: '16',
      value: 16,
    }
  )
  // const [remVal, setRemVal] = React.useState('');
  // const [baseFontSize, setBaseFontSize] = React.useState(16);
  // const [customExt, setCustomExt] = React.useState('dvlp');

  async function handleInputChange(event: any) {
    console.log(event.target.name)
    switch (event.target.name){
      case 'px': 
        setPixels({
          ...pixels,
          value: (event.target.value !== '' ? parseFloat(event.target.value) ? parseFloat(event.target.value) : pixels.value : ''),
          raw_input: event.target.value,
        })
        setRem({
          ...rem,
          raw_input: (event.target.value !== '' ? parseFloat(event.target.value) ? `${(parseFloat(event.target.value) / baseFont.value)}rem` : rem.value : ''),
        })
        setEm({
          ...em,
          raw_input: (event.target.value !== '' ? parseFloat(event.target.value) ? `${(parseFloat(event.target.value) / baseFont.value)}em` : em.value : ''),
        })
        setCustom({
          ...custom,
          raw_input: (event.target.value !== '' ? parseFloat(event.target.value) ? `${(parseFloat(event.target.value) / baseFont.value)}custom` : custom.value : ''),
        })
        break;
      case 'rem' || 'em' || 'custom':
        const value = event.target.value;
        switch (event.target.name) {
          case 'rem':
            setRem({
              ...rem,
              value: (value !== '' ? parseFloat(value) ? parseFloat(value) : rem.value : ''),
              raw_input: value,
            })
            setEm({
              ...em,
              raw_input: (value !== '' ? parseFloat(value) ? `${parseFloat(value)}em` : `${em.value}em` : ''),
            })
            setCustom({
              ...custom,
              raw_input: (value !== '' ? parseFloat(value) ? `${parseFloat(value)}custom` : custom.value : ''),
            })
            break;
          case 'em':
            setEm({
              ...em,
              value: (value !== '' ? parseFloat(value) ? parseFloat(value) : em.value : ''),
              raw_input: value,
            })
            setRem({
              ...rem,
              raw_input: (value !== '' ? parseFloat(value) ? `${parseFloat(value)}rem` : rem.value : '')
            })
            setCustom({
              ...custom,
              raw_input: (value !== '' ? parseFloat(value) ? `${parseFloat(value)}custom` : custom.value : ''),
            })
            break;
          case 'custom':
            setCustom({
              ...custom,
              value: (value !== '' ? parseFloat(value) ? parseFloat(value) : custom.value : ''),
              raw_input: value,
            })
            break;
        }
        setPixels({
          ...pixels,
          raw_input: (value !== '' ? parseFloat(value) ? `${(parseFloat(value) * baseFont.value)}px` : pixels.value : ''),
        })
        break;
      case 'baseFont': 
        setBaseFont({
          ...baseFont,
          value: (event.target.value !== '' ? parseFloat(event.target.value) ? parseFloat(event.target.value) : rem.value : ''),
          raw_input: event.target.value,
        })
        setPixels({
          ...pixels,
          raw_input: (value !== '' ? parseFloat(value) ? `${(parseFloat(value) * event.target.value)}px` : pixels.value : '')
        })
        setRem({
          ...rem,
          raw_input: (rem.value !== '' ? parseFloat(rem.value) ? `${parseFloat(rem.value) / parseFloat(event.target.value)}rem` : rem.value : ''),
        })
        setEm({
          ...em,
          raw_input: (rem.value !== '' ? parseFloat(em.value) ? `${parseFloat(em.value) / parseFloat(event.target.value) }em`: em.value : ''),
        })
        break;
    }
  }

  return (
    <Layout current="Font Converter" title="FONT CONVERTER | DVLP HAUS | toolbox for developers">
      <Container customClass="page__font_converter">
        <div className="font__converter grid grid-2">
          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={`${pixels.raw_input}`}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>PX</label>
              <input
                value={`${pixels.raw_input}`}
                name="px"
                type="text"
                placeholder="16px"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={`${em.raw_input}`}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>Em</label>
              <input
                value={`${em.raw_input}`}
                name="em"
                type="text"
                placeholder="1em"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={`${rem.raw_input}`}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>Rem</label>
              <input
                value={`${rem.raw_input}`}
                name="rem"
                type="text"
                placeholder="1rem"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={`${custom.raw_input}`}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>Custom</label>
              <input
                value={`${custom.raw_input}`}
                name="custom"
                type="text"
                placeholder={`1${custom.customExt ? custom.customExt : 'dvlp'}`}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="input_field marginTopLg">
            <div className="input_field_container">
              <label>Base Font Size</label>
              <input
                value={`${baseFont.raw_input}`}
                name="baseFont"
                type="text"
                placeholder="16px"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="input_field marginTopLg">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={'test'}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>Custom Extension</label>
              <input
                value={`${custom.ext}`}
                name="customExt"
                type="text"
                placeholder="dvlp"
                onChange={handleInputChange}
              />
            </div>
          </div>

        </div>
      </Container>
    </Layout>
  )
}

export default SvgToCssPage
