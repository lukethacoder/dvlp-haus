import * as React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'

const SvgToCssPage: React.FunctionComponent = () => (
  <Layout current="Font Converter" title="FONT CONVERTER | DVLP HAUS | toolbox for developers">
    <Container>
      <div className="font__converter grid grid-2">
        <div>
          <div className="input_field hasSettings">
            <div className="btn-settings">Settings</div>
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
