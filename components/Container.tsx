import * as React from 'react'

const Container: React.FunctionComponent<any> = ({
  children,
}) => {
  return (
    <div className="item__container">
      {children}
    </div>
  )
}

export default Container
