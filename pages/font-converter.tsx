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
    raw: "1",
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
// const initialStateKeys: Array<string> = Object.keys(initialState);

// reducer
// const inputReducer = (allInputs: any, { field, value }: any) => allInputs.set(field, value);

const FontConverterPage: React.FunctionComponent = () => {
  const [px, setPx] = React.useState(16);
  const [base, setBase] = React.useState(16);
  const [multiply, setMultiply] = React.useState(1);
  const [ext, setExt] = React.useState("dvlp");

  React.useEffect(() => {
    setMultiply(px / base);
  }, [base]);

  const updateBase = (e: any) => {
    const { value } = e.target;
    setBase(value);
  };

  const updatePx = (e: any) => {
    const { value } = e.target;
    setPx(value);
    setMultiply(value / base);
  };

  const updateMultiply = (e: any) => {
    const { value } = e.target;
    setMultiply(value);
    setPx(value * base);
  };

  const updateExt = (e: any) => {
    const { value } = e.target;
    setExt(value)
  }

  return (
    <Layout current="Font Converter" title="FONT CONVERTER | DVLP HAUS | toolbox for developers">
      <Container customClass="page__font_converter">
        <div className="font__converter grid grid-2">
          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={`${px}px`}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>PX</label>
              <div className="input__wrapper">
                <input
                  value={px}
                  onChange={(e) => updatePx(e)}
                  name="pixels"
                  type="text"
                  placeholder="16px"
                />
                <div className="append__value"><p>px</p>
                </div>
              </div>
            </div>
          </div>
          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={`${multiply}em`}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>Em</label>
              <div className="input__wrapper">
                <input
                  value={multiply}
                  onChange={(e) => updateMultiply(e)}
                  name="em"
                  type="text"
                  placeholder="1em"
                />
                <div className="append__value"><p>em</p></div>  
              </div>
            </div>
          </div>

          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={`${multiply}rem`}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>Rem</label>
              <div className="input__wrapper">
                <input
                  value={multiply}
                  onChange={(e) => updateMultiply(e)}
                  name="rem"
                  type="text"
                  placeholder="1rem"
                />
                <div className="append__value"><p>rem</p></div>
              </div>
            </div>
          </div>
          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={`${multiply}${ext}`}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>Custom</label>
              <div className="input__wrapper">
                <input
                  value={multiply}
                  onChange={(e) => updateMultiply(e)}
                  name="custom"
                  type="text"
                  placeholder="test"
                />
                <div className="append__value"><p>{ext}</p></div>
              </div>
            </div>
          </div>

          <div className="input_field marginTopLg">
            <div className="input_field_container">
              <label>Base Font Size</label>
              <div className="input__wrapper">
                <input
                  value={base}
                  onChange={e => updateBase(e)}
                  name="base"
                  type="text"
                  placeholder="16px"
                />
                <div className="append__value"><p>px</p></div>
              </div>
            </div>
          </div>

          <div className="input_field marginTopLg">
            <div className="input_field_container">
              <label>Custom Extension</label>
              <div className="input__wrapper">
                <input
                  value={ext}
                  onChange={(e) => updateExt(e)}
                  name="custom_ext"
                  type="text"
                  placeholder="dvlp"
                />
                </div>
            </div>
          </div>

        </div>
      </Container>
    </Layout>
  )
}

export default FontConverterPage
