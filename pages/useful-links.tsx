import * as React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import Container from '../components/Container'
import List from '../components/List'
import { UsefulLinksProps } from '../interfaces'
import { findCategory, getAllCategories } from '../utils/api-useful-links'

type Props = {
  items: UsefulLinksProps[]
  pathname?: string
  allCategoryOptions: Array<string>
}

const WithInitialProps: NextPage<Props> = ({ items, allCategoryOptions }) => {
  const [currentCategory, setCategory]: any = React.useState('');
  const [linksData, setlinksData]: any = React.useState(items);
  console.log('currentCategory', currentCategory)
  const changeCategory = async (changeTo: string) => {
    const items: UsefulLinksProps[] = await findCategory(changeTo);
    setCategory(changeTo)
    setlinksData(items);
  }
  return(
  <Layout current="Useful Links" title="Useful Links | DVLP HAUS | toolbox for developers">
    <Container customClass="page__useful_links">
      <ul className="useful__links_categories">
        <li className={`category__item ${currentCategory == '' ? 'active' : ''}`} onClick={() => changeCategory('')}>All</li>
        {
          allCategoryOptions.map(cat => <li className={`category__item ${currentCategory == cat ? 'active' : ''}`} onClick={() => changeCategory(cat)}>{cat}</li>)
        }
      </ul>
      <div className="useful__links">
        <List items={linksData} />
      </div>
    </Container>
  </Layout>
)}

WithInitialProps.getInitialProps = async ({ pathname }) => {
  // const items: UsefulLinksProps[] = await findAll()
  const allCategoryOptions: any = await getAllCategories();
  const items: UsefulLinksProps[] = await findCategory();

  return { items, pathname, allCategoryOptions }
}

export default WithInitialProps
