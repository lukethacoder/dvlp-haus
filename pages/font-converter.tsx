import * as React from 'react'
import Clipboard from 'react-clipboard.js';

import Layout from '../components/Layout'
import Container from '../components/Container'

const SvgToCssPage: React.FunctionComponent = () => (
  <Layout current="Font Converter" title="FONT CONVERTER | DVLP HAUS | toolbox for developers">
    <Container>
      <div className="font__converter grid grid-2">
        <div>
          <div className="input_field">
            <div className="btn-settings">
                <Clipboard className="clipboard__btn" data-clipboard-text={'test'}>
                  Copy
                </Clipboard>
              </div>
            <div className="input_field_container">
              <label>From Value</label>
              <input type="text" placeholder="hola"/>
            </div>
          </div>
        </div>
        <div>
          <div className="input_field">
            <div className="input_field_container">
              <label>Rem</label>
              <input type="text" placeholder="hola"/>
            </div>
          </div>
          <div className="input_field">
            <div className="input_field_container">
              <label>Px</label>
              <input type="text" placeholder="hola"/>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </Layout>
)

export default SvgToCssPage
