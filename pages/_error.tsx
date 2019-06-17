import * as React from 'react'
import { NextPage } from 'next'

import Layout from '../components/Layout'
import Container from '../components/Container'

type Props = {
  statusCode: number | null | undefined,
  pathname: string
}

const ErrorPage: NextPage<Props> = ({ statusCode, pathname }) => {
  console.log('statusCode', statusCode)
  console.log('pathname', pathname)
  let error_message = 'page not found';
  switch (statusCode) {
    case 404: {
      error_message = `${pathname} not found`
    }
  }

  return (
    <Layout current={statusCode ? `error ${statusCode.toString()}` : ''} title={`Error ${statusCode ? statusCode.toString() : ''} | DVLP HAUS | toolbox for developers`}>
      <Container>
        <h3>error {statusCode}</h3>
        <p>{error_message}</p>
      </Container>
    </Layout>
  )
}

export default ErrorPage

ErrorPage.getInitialProps = async ({ res, err, pathname }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode, pathname };
}
