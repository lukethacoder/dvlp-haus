import * as React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import Container from '../components/Container'
import { UsefulLinksProps } from '../interfaces'

// import { CapitaliseFirstLetter } from '../lib/helpers';

import { useCollection } from 'react-firebase-hooks/firestore';
import { loadFirebase } from '../lib/firebase';
import ListItem from '../components/ListItem';
import Loading from '../components/Loading';

type Props = {
  items?: {
    useful_links: UsefulLinksProps[]
    categories?: Array<string>
  }
  pathname?: string
}

const WithInitialProps: NextPage<Props> = () => {
  // const [currentCategory, setCategory]: any = React.useState('all');
  
  const [value, loading, error] = useCollection(
    loadFirebase().firestore().collection('useful-links'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  let data: any = value;
  console.log(data ? data.docs ? data.docs : '' : '');

  error ? console.error(error) : '';
  loading ? console.warn(loading) : '';
  
  // let categories: any = data ? data.docs ? [...new Set(data.docs.map((item: UsefulLinksProps) => item.category))] : [] : [];
  
  // const changeCategory = async (changeTo: string) => {
  //   setCategory(changeTo)
  // }

  return(
  <Layout current="Useful Links" title="Useful Links | DVLP HAUS | toolbox for developers">
    <Container customClass="page__useful_links">
      {/* <ul className="useful__links_categories">
        <li
          key="all"
          className={`category__item ${currentCategory == 'all' ? 'active' : ''}`}
          onClick={() => changeCategory('all')}
        >
          All
        </li>
        {
          categories.map((cat: string) =>
            <li
              key={cat}
              className={`category__item ${currentCategory == cat ? 'active' : ''}`}
              onClick={() => changeCategory(cat)}
            >
              {cat ? CapitaliseFirstLetter(cat) : ''}
            </li>
          )
        }
      </ul> */}
      <div className="useful__links">
        <ul>
          {data ? data.docs ? data.docs.map((doc: any) => (
            <li key={doc.id}>
              <ListItem data={doc.data()} />
            </li>
          )) : <Loading data="house"/> : <Loading data="house"/>}
        </ul>
      </div>
    </Container>
  </Layout>
)}

export default WithInitialProps
