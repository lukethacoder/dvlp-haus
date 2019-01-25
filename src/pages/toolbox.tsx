import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import ToolbookCard from '../components/ToolbookCard'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <header className="page_header">
          <h2>The Dev Toolbox</h2>
          <h4>Jack of all Trades</h4>
        </header>

        <ToolbookCard title="font title" />







      </Container>
    </Page>
  </IndexLayout >
)

export default IndexPage
