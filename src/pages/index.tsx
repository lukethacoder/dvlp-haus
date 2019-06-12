import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Header />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
