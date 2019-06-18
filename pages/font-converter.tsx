import * as React from 'react'
import { Map } from 'immutable'
import Clipboard from 'react-clipboard.js';

import Layout from '../components/Layout'
import Container from '../components/Container'
import { mathRound } from '../lib/helpers';

interface InputVal {
  [key: string]: {
    name: string,
    raw: string,
    value: number | string
  }
}
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
    value: 1
  },
  custom_ext: {
    name: 'custom_ext',
    raw: "dvlp",
    value: "dvlp"
  },
  base: {
    name: 'base',
    raw: '16px',
    value: 16
  }
}
const initialStateKeys: Array<string> = Object.keys(initialState);

// reducer
const inputReducer = (allInputs: any, { field, value }: any) => allInputs.set(field, value);

const FontConverterPage: React.FunctionComponent = () => {
  const [ allInputs, dispatch ] = React.useReducer<React.Reducer<any, any>>(
    inputReducer, Map(initialState)
  );
  
  // convert the immutable back to an object for easy access
  const stateAsObj = React.useMemo(() => allInputs.toObject(), [allInputs])

  const handlers = initialStateKeys.reduce((state_temp: any, field: any) => {
    // the onChange handler for this field is only re-created if the dispatch method changes
    switch (field) {
      case 'pixels':  
        state_temp.pixels = React.useCallback((e: any) => {
          dispatch({
            field: 'pixels',
            value: {
              value: parseFloat(e.currentTarget.value) ? parseFloat(e.currentTarget.value) : '',
              raw: e.currentTarget.value,
            }
          })
          dispatch({
            field: 'rem',
            value: {
              value: parseFloat(e.currentTarget.value) ? `${(parseFloat(e.currentTarget.value) / stateAsObj["base"].value )}` : '',
              raw: parseFloat(e.currentTarget.value) ? `${(
                mathRound( parseFloat(e.currentTarget.value) / stateAsObj["base"].value, 3)
              )}rem` : '',
            }
          })
          dispatch({
            field: 'custom',
            value: {
              value: parseFloat(e.currentTarget.value) ? `${(parseFloat(e.currentTarget.value) / stateAsObj["base"].value )}` : '',
              raw: parseFloat(e.currentTarget.value) ? `${(
                mathRound( parseFloat(e.currentTarget.value) / stateAsObj["base"].value, 3 )
              )}${stateAsObj["custom_ext"].value ? stateAsObj["custom_ext"].value : ''}` : '',
            }
          })
          return dispatch({
            field: 'em',
            value: {
              value: parseFloat(e.currentTarget.value) ? `${(parseFloat(e.currentTarget.value) / stateAsObj["base"].value )}` : '',
              raw: parseFloat(e.currentTarget.value) ? `${(
                mathRound(parseFloat(e.currentTarget.value) / stateAsObj["base"].value, 3)
              )}em` : '',
            }
          })
        }, [ "pixels", dispatch ])
        break;
      case 'em':
        state_temp[field] = React.useCallback((e: any) => {
          dispatch({
            field: 'pixels',
            value: {
              value: parseFloat(e.currentTarget.value) ? `${(parseFloat(e.currentTarget.value) * stateAsObj["base"].value)}px` : '',
              raw: (mathRound(parseFloat(e.currentTarget.value) * stateAsObj["base"].value, 3)),
            }
          })
          dispatch({
            field: 'rem',
            value: {
              value: parseFloat(e.currentTarget.value) ? `${parseFloat(e.currentTarget.value)}` : '',
              raw: parseFloat(e.currentTarget.value) ? `${mathRound(parseFloat(e.currentTarget.value), 3)}rem` : '',
            }
          })
          dispatch({
            field: 'custom',
            value: {
              value: parseFloat(e.currentTarget.value) ? `${parseFloat(e.currentTarget.value)}` : '',
              raw: parseFloat(e.currentTarget.value) ? `${mathRound(parseFloat(e.currentTarget.value), 3)}${stateAsObj["custom_ext"].value ? stateAsObj["custom_ext"].value : ''}` : '',
            }
          })
          return dispatch({
            field,
            value: {
              value: parseFloat(e.currentTarget.value) ? `${parseFloat(e.currentTarget.value)}` : '',
              raw: e.currentTarget.value,
            }
          })
        }, [ field, dispatch ])
        break;
      case 'rem':
        state_temp[field] = React.useCallback((e: any) => {
          dispatch({
            field: 'pixels',
            value: {
              value: parseFloat(e.currentTarget.value) ? `${(parseFloat(e.currentTarget.value) * stateAsObj["base"].value)}px` : '',
              raw: (mathRound(parseFloat(e.currentTarget.value) * stateAsObj["base"].value, 3)),
            }
          })
          dispatch({
            field: 'em',
            value: {
              value: parseFloat(e.currentTarget.value) ? `${parseFloat(e.currentTarget.value)}` : '',
              raw: parseFloat(e.currentTarget.value) ? `${mathRound(parseFloat(e.currentTarget.value), 3)}em` : '',
            }
          })
          dispatch({
            field: 'custom',
            value: {
              value: parseFloat(e.currentTarget.value) ? `${parseFloat(e.currentTarget.value)}` : '',
              raw: parseFloat(e.currentTarget.value) ? `${mathRound(parseFloat(e.currentTarget.value), 3)}${stateAsObj["custom_ext"].value ? stateAsObj["custom_ext"].value : ''}` : '',
            }
          })
          return dispatch({
            field,
            value: {
              value: parseFloat(e.currentTarget.value) ? `${parseFloat(e.currentTarget.value)}` : '',
              raw: e.currentTarget.value,
            }
          })
        }, [ field, dispatch ])
        break;
      case 'custom':
        state_temp[field] = React.useCallback((e: any) => {
          dispatch({
            field: 'pixels',
            value: {
              value: parseFloat(e.currentTarget.value) ? `${(parseFloat(e.currentTarget.value) * stateAsObj["base"].value)}px` : '',
              raw: (mathRound(parseFloat(e.currentTarget.value) * stateAsObj["base"].value, 3)),
            }
          })
          dispatch({
            field: 'em',
            value: {
              value: parseFloat(e.currentTarget.value) ? `${parseFloat(e.currentTarget.value)}` : '',
              raw: parseFloat(e.currentTarget.value) ? `${mathRound(parseFloat(e.currentTarget.value), 3)}em` : '',
            }
          })
          dispatch({
            field: 'rem',
            value: {
              value: parseFloat(e.currentTarget.value) ? `${parseFloat(e.currentTarget.value)}` : '',
              raw: parseFloat(e.currentTarget.value) ? `${mathRound(parseFloat(e.currentTarget.value), 3)}rem` : '',
            }
          })
          return dispatch({
            field,
            value: {
              value: parseFloat(e.currentTarget.value) ? `${parseFloat(e.currentTarget.value)}` : '',
              raw: e.currentTarget.value,
            }
          })
        }, [ field, dispatch ])
        break;
      case 'custom_ext':
        state_temp[field] = React.useCallback((e: any) => {
          dispatch({
            field: 'custom',
            value: {
              raw: `${mathRound(stateAsObj["pixels"].value / stateAsObj["base"].value, 3)}${e.currentTarget.value}`,
            }
          })
          return dispatch({
            field,
            value: {
              value: e.currentTarget.value,
              raw: e.currentTarget.value,
            }
          })
        }, [ field, dispatch ])
        break;
      case 'base':
        state_temp[field] = React.useCallback((e: any) => {
          dispatch({
            field: 'em',
            value: {
              value: parseFloat(e.currentTarget.value) ? `${stateAsObj["pixels"].value / parseFloat(e.currentTarget.value)}` : '',
              raw: parseFloat(e.currentTarget.value) ? `${mathRound(stateAsObj["pixels"].value / parseFloat(e.currentTarget.value), 3)}em` : '',
            }
          })
          dispatch({
            field: 'rem',
            value: {
              value: parseFloat(e.currentTarget.value) ? `${stateAsObj["pixels"].value / parseFloat(e.currentTarget.value)}` : '',
              raw: parseFloat(e.currentTarget.value) ? `${mathRound(stateAsObj["pixels"].value / parseFloat(e.currentTarget.value), 3)}rem` : '',
            }
          })
          dispatch({
            field: 'custom',
            value: {
              value: parseFloat(e.currentTarget.value) ? `${stateAsObj["pixels"].value / parseFloat(e.currentTarget.value)}` : '',
              raw: parseFloat(e.currentTarget.value) ? `${mathRound(stateAsObj["pixels"].value / parseFloat(e.currentTarget.value), 3)}${stateAsObj["custom_ext"].value ? stateAsObj["custom_ext"].value : ''}` : '',
            }
          })
          return dispatch({
            field,
            value: {
              value: e.currentTarget.value,
              raw: e.currentTarget.value,
            }
          })
        }, [ field, dispatch ])
        break;
      default: 
        // console.log('defautl switch', field)
    }
    return state_temp
  }, {})
  


  return (
    <Layout current="Font Converter" title="FONT CONVERTER | DVLP HAUS | toolbox for developers">
      <Container customClass="page__font_converter">
        <div className="font__converter grid grid-2">
          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={stateAsObj["pixels"].raw}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>PX</label>
              <input
                value={stateAsObj["pixels"].raw}
                onChange={handlers['pixels']}
                name="pixels"
                type="text"
                placeholder="16px"
              />
            </div>
          </div>
          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={stateAsObj["em"].raw}>
                Copy
              </Clipboard>
            </div>
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
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={stateAsObj["rem"].raw}>
                Copy
              </Clipboard>
            </div>
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
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={stateAsObj["custom"].raw}>
                Copy
              </Clipboard>
            </div>
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
                value={stateAsObj['custom_ext'].raw}
                onChange={handlers['custom_ext']}
                name="custom_ext"
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
