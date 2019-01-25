import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import WordRepoCard from '../components/WordRepoCard'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <header className="page_header">
          <h2>Word Repo</h2>
          <h4>Some useful info</h4>
        </header>

        <WordRepoCard title="title here" />



      </Container>
    </Page>
  </IndexLayout >
)

export default IndexPage
