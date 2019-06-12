import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import '../styles/global.scss'

type Props = {
  title?: string
  current?: string
}

const Layout: React.SFC<Props> = ({
  children,
  current,
  title = 'DVLP HAUS | toolbox for developers',
}) => {
  const [isNavToggle, setNavToggle] = React.useState(false);
  console.log('isNavToggle', isNavToggle);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <div className="logo__wrapper">
          <div className="logo" onClick={() => (setNavToggle(!isNavToggle), console.log('isNavToggle', isNavToggle))}>
            <img src="/static/img/logo.svg"/>
          </div>
        </div>
        {
          current ?
            <div className="current__page" onClick={() => setNavToggle(!isNavToggle)}>
              <h3>{current}</h3>
            </div>
          : null
        }
      </header>
      <nav className={isNavToggle ? 'open' : ''}>
        <ul className="nav__list">
          <Link href="/font-converter">
            <li className="nav__item" onClick={() => setNavToggle(!isNavToggle)}>
              <h2>PX</h2>
              <h4>Font Converter</h4>
            </li>
          </Link>
          <Link href="/svg-to-css">
            <li className="nav__item" onClick={() => setNavToggle(!isNavToggle)}>
              <h2>SVG</h2>
              <h4>SVG to CSS</h4>
            </li>
          </Link>
          <Link href="/useful-links">
            <li className="nav__item" onClick={() => setNavToggle(!isNavToggle)}>
              <h2>USE</h2>
              <h4>Useful Links</h4>
            </li>
          </Link>
        </ul>
        
      </nav>
      {children}
      {/* <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer> */}
    </div>
  )
}

export default Layout
