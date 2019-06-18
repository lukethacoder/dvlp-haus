import * as React from 'react'

interface ContainerProps {
  customClass?: string;
}

const Container: React.FunctionComponent<ContainerProps> = ({
  children,
  customClass
}) => {
  return (
    <div className={`item__container ${customClass ? customClass : ''}`}>
      {children}
    </div>
  )
}

export default Container
