import * as React from 'react'
import Clipboard from 'react-clipboard.js';

import Layout from '../components/Layout'
import Container from '../components/Container'

interface NiceInputs {
  px: string;
  rem: string;
  em: string;
  custom: string;
  base: string;
  custom_ext: string;
}

const SvgToCssPage: React.FunctionComponent = () => {
  const [pxVal, setPxVal] = React.useState('');
  const [remVal, setRemVal] = React.useState('');
  const [baseFontSize, setBaseFontSize] = React.useState(16);
  const [customExt, setCustomExt] = React.useState('dvlp');
  const [niceInputs, setNiceInputs] = React.useState({
    px: `${pxVal ? pxVal : '' }px`,
    rem: `${remVal ? remVal : ''}rem`,
    em: `${remVal ? remVal : ''}em`,
    custom: `${remVal ? remVal : ''}${customExt ? customExt : ''}`,
    base: `${baseFontSize ? baseFontSize : '16'}px`,
    custom_ext: `${customExt ? customExt : 'dvlp'}`,
  });

  const handleInputChange = (event: any) => {
    console.log(event.target.name)

    switch (event.target.name) {
      case 'px':
        console.log('px');
        setPxVal(`${event.target.value}`)
        setRemVal(`${event.target.value / baseFontSize}`)
        break;
      case 'em':
      case 'custom':
      case 'rem':
        console.log('rem');
        setRemVal(event.target.value)
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      case 'baseFont':
        console.log('baseFont');
        setBaseFontSize(event.target.value);
        setRemVal(`${ Number(pxVal) / baseFontSize }`);
        break;
      case 'customExt':
        console.log('customExt');
        setCustomExt(event.target.value);
        break;
      default:
        console.log('Sorry, we are out of ' + event.target.name + '.');
    }
  }

  return (
    <Layout current="Font Converter" title="FONT CONVERTER | DVLP HAUS | toolbox for developers">
      <Container customClass="page__font_converter">
        <div className="font__converter grid grid-2">
          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={'test'}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>PX</label>
              <input
                value={`${niceInputs.px}`}
                name="px"
                type="text"
                placeholder="16px"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={'test'}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>Em</label>
              <input
                value={`${remVal}`}
                name="em"
                type="text"
                placeholder="1em"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={'test'}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>Rem</label>
              <input
                value={`${remVal}`}
                name="rem"
                type="text"
                placeholder="1rem"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="input_field">
            <div className="btn-settings">
              <Clipboard className="clipboard__btn" data-clipboard-text={'test'}>
                Copy
              </Clipboard>
            </div>
            <div className="input_field_container">
              <label>Custom</label>
              <input
                value={`${remVal}`}
                name="custom"
                type="text"
                placeholder={`1${customExt}`}
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
              <label>Base Font Size</label>
              <input
                value={`${baseFontSize}`}
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
                value={`${customExt}`}
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
