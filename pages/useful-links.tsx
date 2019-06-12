import { NextPage } from 'next'
import Layout from '../components/Layout'
import Container from '../components/Container'
import List from '../components/List'
import { UsefulLinksProps } from '../interfaces'
import { findAll } from '../utils/api-useful-links'

type Props = {
  items: UsefulLinksProps[]
  pathname?: string
}

const WithInitialProps: NextPage<Props> = ({ items }) => (
  <Layout current="Useful Links" title="Useful Links | DVLP HAUS | toolbox for developers">
    <Container>
      <div className="useful__links">
        <List items={items} />
      </div>
    </Container>
  </Layout>
)

WithInitialProps.getInitialProps = async ({ pathname }) => {
  // Example for including initial props in a Next.js function compnent page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: UsefulLinksProps[] = await findAll()

  return { items, pathname }
}

export default WithInitialProps
