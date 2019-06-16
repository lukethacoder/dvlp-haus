import * as React from 'react'
import { NextPage } from 'next'

import Layout from '../components/Layout'
import Container from '../components/Container'

const ErrorPage: NextPage = () => {
  return(
    <Layout current="Error" title="Error | DVLP HAUS | toolbox for developers">
      <Container>
        <h1>error page</h1>
      </Container>
    </Layout>
  )
}

export default ErrorPage