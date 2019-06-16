import * as React from 'react'
import { Map } from 'immutable'
import Clipboard from 'react-clipboard.js';

import Layout from '../components/Layout'
import Container from '../components/Container'
import { any, string } from 'prop-types';

interface InputVal {
  [key: string]: {
    name: string,
    raw: string,
    value: number,
    ext?: string
  }
}
interface immutableCustomProps {
  [key: string]: InputVal
}
// interface inputState {
//   pixels: InputVal,
//   rem: InputVal,
//   em: InputVal,
//   custom: InputVal,
//   base: InputVal
// }

// the initial state
const initialState: InputVal = {
  pixels: {
    name: 'pixels',
    raw: "16px",
    value: 16,
  },      
  rem: {
    name: 'rem',
    raw: "1rem",
    value: 1
  },      
  em: {
    name: 'em',
    raw: "1em",
    value: 1
  },      
  custom: {
    name: 'custom',
    raw: "1dvlp",
    value: 1,
    ext: 'dvlp'
  },
  base: {
    name: 'base',
    raw: '16px',
    value: 16
  }
}
const initialStateKeys: Array<string> = Object.keys(initialState);

// the reducer
const inputReducer = (allInputs: any, { field, value }: any) => allInputs.set(field, value);

const FontConverterPage: React.FunctionComponent = () => {
  const [ allInputs, setAllInputs ] = React.useReducer<React.Reducer<any, any>>(
    inputReducer, Map(initialState)
  );

  const handlers = initialStateKeys.reduce((m: any, field: any) => {
    // the onChange handler for this field is only re-created if the setAllInputs method changes
    console.log('m', m)
    console.log('field', field)
    m[field] = React.useCallback((e: any) => setAllInputs({ field, value: e.currentTarget.value }), [ field, setAllInputs ])
    return m
  }, {})
  
  // convert the immutable back to an object for easy access
  const stateAsObj = React.useMemo(() => allInputs.toObject(), [allInputs])

  return (
    <Layout current="Font Converter" title="FONT CONVERTER | DVLP HAUS | toolbox for developers">
      <Container customClass="page__font_converter">
        <div className="font__converter grid grid-2">
          <div className="input_field">
            <div className="input_field_container">
              <label>PX</label>
              <input
                value={stateAsObj['pixels'].raw}
                onChange={handlers['pixels']}
                name="pixels"
                type="text"
                placeholder="16px"
              />
            </div>
          </div>
          <div className="input_field">
            <div className="input_field_container">
              <label>Em</label>
              <input
                value={stateAsObj['em'].raw}
                onChange={handlers['em']}
                name="em"
                type="text"
                placeholder="1em"
              />
            </div>
          </div>

          <div className="input_field">
            <div className="input_field_container">
              <label>Rem</label>
              <input
                value={stateAsObj['rem'].raw}
                onChange={handlers['rem']}
                name="rem"
                type="text"
                placeholder="1rem"
              />
            </div>
          </div>
          <div className="input_field">
            <div className="input_field_container">
              <label>Custom</label>
              <input
                value={stateAsObj['custom'].raw}
                onChange={handlers['custom']}
                name="custom"
                type="text"
                placeholder="test"
              />
            </div>
          </div>

          <div className="input_field marginTopLg">
            <div className="input_field_container">
              <label>Base Font Size</label>
              <input
                value={stateAsObj['base'].raw}
                onChange={handlers['base']}
                name="base"
                type="text"
                placeholder="16px"
              />
            </div>
          </div>

          <div className="input_field marginTopLg">
            <div className="input_field_container">
              <label>Custom Extension</label>
              <input
                value={stateAsObj['custom'].ext}
                onChange={handlers['custom']}
                name="customExt"
                type="text"
                placeholder="dvlp"
              />
            </div>
          </div>

        </div>
      </Container>
    </Layout>
  )
}

export default FontConverterPage
