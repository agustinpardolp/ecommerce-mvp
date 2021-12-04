import React from 'react'
import { Header } from 'semantic-ui-react'
import { StyledNavbar } from './styled-components'

const Navbar = () => (
  <StyledNavbar as='h2'>
    Ecommerce - Challenge - MVP
    <Header.Subheader  as='h4'>
    All-In-One integrated shop platform
    </Header.Subheader>
  </StyledNavbar>
)

export default Navbar
