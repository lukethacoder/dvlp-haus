import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'

// import { loadFirebase } from '../lib/db'

const IndexPage: NextPage<any> = () => {
  // static async getInitialProps() {
  //   console.log('hola')
  // }
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>HOME 👋</h1>
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
