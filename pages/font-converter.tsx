import * as React from 'react'
import Clipboard from 'react-clipboard.js';

import Layout from '../components/Layout'
import Container from '../components/Container'

interface InputVal {
  name: string,
  raw: string,
  value: number,
  ext?: string
}

const SvgToCssPage: React.FunctionComponent = () => {
  const [allInputs, setAllInputs] = React.useReducer(
    (state, newState) => ({...state, ...newState}),
    {
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
  )

  /*
    key - input name
    raw - input value from <input>
    value - computed value (number)
  */
  const updateInput = (key: string, raw: any, value: any) => {
    console.warn('key => ', key, 'raw => ', raw, 'value => ', value)
    setAllInputs({
      ...allInputs,
      [key]: {
        value: value,
        raw: raw,
        ...allInputs[key],
      }
    })
  }

  function changeInput(event: any) {
    console.log('name => ', event.target.name, "value => ", event.target.value)
    updateInput(
      event.target.name,
      event.target.value,
      (parseFloat(event.target.value) ? parseFloat(event.target.value) : 0)
    );
  }

  async function handleInputChange(event: any) {
    let name = event.target.name;
    let value = event.target.value;
    console.log('name => ', event.target.name, "value => ", event.target.value)
    
    Object.keys(allInputs).map((key: string) => {
      // update field with users input if currently focused field
      if (allInputs[key].name === name) {
        console.log('does equal', key)
        console.warn('value => ', value, 'key => ', key)
        // updateInput(allInputs[key].name, event.target.value, (parseFloat(event.target.value) ? parseFloat(event.target.value) : 0));
      } else {
        console.log('not allInputs.base.value => ', (allInputs.base.value));
        // calculate other values based on users input val
        if (allInputs[key].name === 'pixels') {
          console.log('does equal', key)
        }
        else if (allInputs[key].name === 'rem') {
          console.table({
            base: allInputs.base.value,
            name: allInputs[key].name,
            parse: parseFloat(event.target.value),
            computed: (parseFloat(event.target.value) / allInputs.base.value),
          })
          // updateInput(
          //   'rem',
          //   'test',
          //   (value !== '' ? parseFloat(value) ? `${(parseFloat(value) / allInputs.base.value)}rem` : allInputs.rem.value : ''),
          // )
        }
        
        // updateInput(allInputs[key].name, allInputs[key].raw, value);
      }
    })
  }

  return (
    <Layout current="Font Converter" title="FONT CONVERTER | DVLP HAUS | toolbox for developers">
      <Container customClass="page__font_converter">
        <div className="font__converter grid grid-2">
          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={`${allInputs.pixels.raw}`}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>PX</label>
              <input
                value={`${allInputs.pixels.raw}`}
                name="pixels"
                type="text"
                placeholder="16px"
                onKeyUp={handleInputChange}
                onChange={changeInput}
              />
            </div>
          </div>
          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={`${allInputs.em.raw}`}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>Em</label>
              <input
                value={`${allInputs.em.raw}`}
                name="em"
                type="text"
                placeholder="1em"
                onKeyPress={handleInputChange}
                onChange={changeInput}
              />
            </div>
          </div>

          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={`${allInputs.rem.raw}`}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>Rem</label>
              <input
                value={`${allInputs.rem.raw}`}
                name="rem"
                type="text"
                placeholder="1rem"
                onKeyPress={handleInputChange}
                onChange={changeInput}
              />
            </div>
          </div>
          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={`${allInputs.custom.raw}`}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>Custom</label>
              <input
                value={`${allInputs.custom.raw}`}
                name="custom"
                type="text"
                placeholder={`1${allInputs.custom.ext ? allInputs.custom.ext : 'dvlp'}`}
                onChange={changeInput}
              />
            </div>
          </div>

          <div className="input_field marginTopLg">
            <div className="input_field_container">
              <label>Base Font Size</label>
              <input
                value={`${allInputs.base.raw}`}
                name="base"
                type="text"
                placeholder="16px"
                onChange={changeInput}
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
                value={`${allInputs.custom.ext}`}
                name="customExt"
                type="text"
                placeholder="dvlp"
                onChange={changeInput}
              />
            </div>
          </div>

        </div>
      </Container>
    </Layout>
  )
}

export default SvgToCssPage
