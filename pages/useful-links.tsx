import * as React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import Container from '../components/Container'
import List from '../components/List'
import { UsefulLinksProps } from '../interfaces'

import { getUsefulLinks } from '../lib/api';
import { CapitaliseFirstLetter } from '../lib/helpers';

type Props = {
  items: {
    useful_links: UsefulLinksProps[]
    categories: Array<string>
  }
  pathname?: string
}

const WithInitialProps: NextPage<Props> = ({ items }) => {
  const [currentCategory, setCategory]: any = React.useState('all');
  const [linksData, setlinksData]: any = React.useState(items.useful_links);

  const changeCategory = async (changeTo: string) => {
    setCategory(changeTo)
    console.log(setlinksData)
  }
  return(
  <Layout current="Useful Links" title="Useful Links | DVLP HAUS | toolbox for developers">
    <Container customClass="page__useful_links">
      <ul className="useful__links_categories">
        <li
          key="all"
          className={`category__item ${currentCategory == 'all' ? 'active' : ''}`}
          onClick={() => changeCategory('all')}
        >
          All
        </li>
        {
          items.categories.map((cat: string) =>
            <li
              key={cat}
              className={`category__item ${currentCategory == cat ? 'active' : ''}`}
              onClick={() => changeCategory(cat)}
            >
              {CapitaliseFirstLetter(cat)}
            </li>
          )
        }
      </ul>
      <div className="useful__links">
        <List items={linksData} />
      </div>
    </Container>
  </Layout>
)}

WithInitialProps.getInitialProps = async ({ pathname }) => {
  let items: UsefulLinksProps[] | any = await getUsefulLinks();
  return { items, pathname }
}

export default WithInitialProps
