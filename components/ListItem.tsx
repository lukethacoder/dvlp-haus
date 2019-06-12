import * as React from 'react'
import { UsefulLinksProps } from '../interfaces'

type Props = {
  data: UsefulLinksProps
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <>
    <a href={data.url}>
      {data.name}
    </a>
    <div className="links__meta">
      <p> 🔥 {data.flames}</p>
      <a href={data.url}>link</a>
      <p>info</p>
    </div>
  </>
)

export default ListItem
