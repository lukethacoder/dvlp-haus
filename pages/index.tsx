import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'

// import { loadFirebase } from '../lib/db'

const IndexPage: NextPage<any> = () => {
  // static async getInitialProps() {
  //   console.log('hola')
  // }
  return (
    <Layout title="DVLP HAUS | toolbox for developers">
      <nav className="open">
        <ul className="nav__list">
          <Link href="/font-converter">
            <li className="nav__item">
              <h2>PX</h2>
              <h4>Font Converter</h4>
            </li>
          </Link>
          <Link href="/svg-to-css">
            <li className="nav__item">
              <h2>SVG</h2>
              <h4>SVG to CSS</h4>
            </li>
          </Link>
          <Link href="/useful-links">
            <li className="nav__item">
              <h2>USE</h2>
              <h4>Useful Links</h4>
            </li>
          </Link>
        </ul>
      </nav>
    </Layout>
  )
}

// IndexPage.getInitialProps = async () => {
//   // const items: UsefulLinksProps[] = await findAll()
//   const allCategoryOptions: any = await getAllCategories();
//   const items: UsefulLinksProps[] = await findCategory();

//   return { items, allCategoryOptions }
// }

export default IndexPage
