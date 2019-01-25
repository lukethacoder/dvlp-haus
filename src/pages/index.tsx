import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Link to="/toolbox" className="desktop_item">
          <div></div>
          <p>toolbox.exe</p>
        </Link>

        <Link to="/word_repo" className="desktop_item">
          <div></div>
          <p>word_repo.exe</p>
        </Link>



      </Container>
    </Page>
  </IndexLayout >
)

export default IndexPage
