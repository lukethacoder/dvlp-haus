import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="static/img/icons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="static/img/icons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="static/img/icons/favicon-16x16.png"/>
          <link rel="manifest" href="static/img/icons/site.webmanifest"/>
          <link rel="mask-icon" href="static/img/icons/safari-pinned-tab.svg" color="#101017"/>
          <meta name="apple-mobile-web-app-title" content="DVLP HAUS"/>
          <meta name="application-name" content="DVLP HAUS"/>
          <meta name="msapplication-TileColor" content="#101017"/>
          <meta name="theme-color" content="#101017"/>
          <meta name="Description" content="toolbox for developers">
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}