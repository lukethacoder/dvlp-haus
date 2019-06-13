import * as React from 'react'
import { UsefulLinksProps } from '../interfaces'
import { setUsefulLinkFlame } from '../lib/api';

type Props = {
  data: UsefulLinksProps
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => {
  const [flameCount, incrementFlame] = React.useState(data.flames);
  const [hasUserFlammed, setUserFlammed] = React.useState(false);
  const [isInfoOpen, setInfoOpen] = React.useState(false);
  
  const handleAddFlame = (id: string) => {
    setUsefulLinkFlame(id);
    const newFlame = Number(flameCount) + 1;
    incrementFlame(newFlame);
    setUserFlammed(true);
  }
  const toggleInfo = (show: boolean) => {
    setInfoOpen(show);
  }
  return (
    <>
      <a className="name" href={`https://${data.url}`} target="_blank">
        {data.name}
      </a>
      <div className="links__meta">
        <p onClick={() => handleAddFlame(data.id)} className={`flame ${hasUserFlammed ? 'flammed' : ''}`}> 🔥 {flameCount}</p>
        <a className="url" href={`https://${data.url}`}>link</a>
        <p className="info" onClick={() => toggleInfo(!isInfoOpen)} onMouseEnter={() => toggleInfo(true)} onMouseLeave={() => toggleInfo(false)}>info</p>
      </div>
      <div className={`desc ${isInfoOpen ? 'open' : ''}`}>
        {data.desc}
      </div>
    </>
  )
}

export default ListItem
