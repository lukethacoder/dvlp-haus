import * as React from 'react'
import Clipboard from 'react-clipboard.js';

import Layout from '../components/Layout'
import Container from '../components/Container'
import { encodeSVG, checkIfValidSVG, inverseQuoteType } from '../lib/helpers';

const SvgToCssPage: React.FunctionComponent = () => {
  const [svgInput, setSvgInput] = React.useState();
  const [pureDataOutput, setPureDataOutput] = React.useState();
  const [cssBackgroundOutput, setCssBackgroundOutput] = React.useState();
  const [svgPreview, setSvgPreview] = React.useState();

  const handleInputChange = (event: any) => {
    event.persist();
    console.log(event.target.name);
    if (event.target.name = 'svgCode') {
      if (checkIfValidSVG(event.target.value)) {
        console.log('valid svg');
        
        console.log(`"data:image/svg+xml,${inverseQuoteType(encodeSVG(event.target.value), 'single' )}"`);
        setPureDataOutput(`"data:image/svg+xml,${inverseQuoteType(encodeSVG(event.target.value), 'single' )}"`);
        setCssBackgroundOutput(`background-image: url("data:image/svg+xml,${inverseQuoteType(encodeSVG(event.target.value), 'single' )}");`);
        setSvgPreview(event.target.value);
      } else {
        setSvgPreview('');
        setPureDataOutput('');
        setCssBackgroundOutput('');
      }
      setSvgInput(event.target.value);
    } else {
      setSvgInput('');
      setSvgPreview('');
      setPureDataOutput('');
      setCssBackgroundOutput('');
    }
  }

  return (
    <Layout current="SVG to CSS" title="SVG to CSS | DVLP HAUS | toolbox for developers">
      <Container>
        <div className="grid grid-2 svg__to__css">
          <div className="grid grid-1">
            <div className="input_field">
              <div className="btn-settings">
                <Clipboard className="clipboard__btn" data-clipboard-text={svgInput}>
                  Copy
                </Clipboard>
              </div>
              <div className="input_field_container">
                <label>SVG Code</label>
                <textarea
                  value={svgInput}
                  name="svgCode"
                  placeholder="Paste your <svg>here</svg>"
                  spellCheck={false}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
            <div className="input_field">
              <div className="btn-settings">
                <Clipboard className="clipboard__btn" data-clipboard-text={pureDataOutput}>
                  Copy
                </Clipboard>
              </div>
              <div className="input_field_container">
                <label>Pure Data Output</label>
                <textarea 
                  value={pureDataOutput}
                  name="pureDataOutput"
                  spellCheck={false}
                  readOnly={true}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
            <div className="input_field">
              <div className="btn-settings">
                <Clipboard className="clipboard__btn" data-clipboard-text={cssBackgroundOutput}>
                  Copy
                </Clipboard>
              </div>
              <div className="input_field_container">
                <label>CSS Background Image</label>
                <textarea  
                  value={cssBackgroundOutput}
                  name="cssBackgroundImage"
                  spellCheck={false}
                  readOnly={true}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            <div className="input_field">
              <div className="input_field_container">
                <label>SVG Preview</label>
                <div className="svg__preview"
                  dangerouslySetInnerHTML={
                    { __html:
                      `${
                        svgPreview ?
                          svgPreview.toString().includes('<svg') && svgPreview.toString().includes('</svg>') ?
                            svgPreview : ''
                            : ''
                      }`
                    }
                  }
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default SvgToCssPage