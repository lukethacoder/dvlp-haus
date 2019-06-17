import * as React from 'react'
import ListItem from './ListItem'
import { UsefulLinksProps } from '../interfaces'

type Props = {
  items: UsefulLinksProps[]
}

const List: React.FunctionComponent<Props> = ( items: any ) => {
  // console.log(items);
  return (
  <ul>
    <li>test</li>
    {/* {items.items.map((item: any) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))} */}
  </ul>
)}

export default List
