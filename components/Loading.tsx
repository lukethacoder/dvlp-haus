import * as React from 'react'

type Props = {
  data: string
}

const Loading: React.FunctionComponent<Props> = ({ data }) => {
  if (data === 'house') {
    return (
      <div className="loading__container icon">
        <svg version="1.1" id="Layer_1" focusable="false"x="0px" y="0px" viewBox="0 0 576 512">
          <path id="base" d="M280.4,148.3L96,300.1V464c0,8.8,7.2,16,16,16l112.1-0.3c8.8,0,15.9-7.2,15.9-16V368c0-8.8,7.2-16,16-16h64
            c8.8,0,16,7.2,16,16v95.6c0,8.8,7.1,16,15.9,16c0,0,0,0,0.1,0l112,0.3c8.8,0,16-7.2,16-16V300L295.7,148.3
            C291.2,144.7,284.8,144.7,280.4,148.3L280.4,148.3z"/>
          <path id="roof" d="M571.6,251.5C571.6,251.5,571.6,251.5,571.6,251.5L571.6,251.5L488,182.6l-80-65.9L318.5,43c-17.7-14.6-43.3-14.6-61,0
            L4.3,251.5c-5.1,4.2-5.8,11.8-1.6,16.9c0,0,0,0,0,0l25.5,31c4.2,5.1,11.8,5.9,16.9,1.6c0,0,0,0,0,0l235.2-193.7
            c4.5-3.6,10.8-3.6,15.3,0L530.9,301c5.1,4.2,12.7,3.5,16.9-1.6c0,0,0,0,0,0l25.5-31C577.5,263.3,576.8,255.7,571.6,251.5z"/>
          <path id="extra" d="M488,44c0-6.6-5.4-12-12-12h-56c-6.6,0-12,5.4-12,12v72.6l0,0l80,65.9V44z"/>
        </svg>
        <p>Loading</p>
      </div>
    )
  } else {
    return (
      <div className="loading__container"><p>Loading</p></div>
    )
  }
}

export default Loading
