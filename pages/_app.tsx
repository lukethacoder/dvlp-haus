import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import { initGA, logPageView } from '../lib/analytics'

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }: any) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount () {
    initGA()
    logPageView()
    Router.events.on('routeChangeComplete', logPageView)
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}