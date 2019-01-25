import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'
// import { Logo } from './content/img/dvlp_haus_logo.svg'
import logo from '../content/img/dvlp_haus_logo.svg'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'
// import { Link } from '@reach/router';

const StyledHeader = styled.header`
  /* height: ${heights.header}px; */
  padding: 0 ${dimensions.containerPadding}rem;
  /* background-color: ${colors.brand}; */
  color: ${transparentize(0.5, colors.white)};
  padding: 48px 0;
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

// const HeaderLogoLarge = styled('h1')`
//   color: ${colors.white};
//   font-size: 1.5rem;
//   font-weight: 600;

//   &:hover,
//   &:focus {
//     text-decoration: none;
//   }
// `
// const HeaderLogoSmall = styled('h1')`
//   color: ${colors.white};
//   font-size: 1rem;
//   font-weight: 600;

//   &:hover,
//   &:focus {
//     text-decoration: none;
//   }
// `

interface HeaderProps {
  title: string,
  logo: string,
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <Link to="/" >
        <img src={logo} />
      </Link>
    </HeaderInner>
  </StyledHeader>
)

export default Header
