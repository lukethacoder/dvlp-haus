import * as React from 'react'
import Link from 'next/link'

import { UsefulLinksProps } from '../interfaces'

type Props = {
  data: UsefulLinksProps
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href={`/detail?id=${data.id}`}>
    <a>
      {data.name}
    </a>
  </Link>
)

export default ListItem
