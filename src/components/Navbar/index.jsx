import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl';
import { StyledNavbar, StyledNavbarContainer } from './styled-components'
import { Context } from '../LenguageWrapper';
import Translations from './components/Translations';

const Navbar = () => {
  const context = useContext(Context);
  const handleChangeLanguage = (e) => {
    context.changeLanguage(e);
  };
  return (
    <StyledNavbarContainer>
      <StyledNavbar>
        <h2>
          <FormattedMessage id="navbar.title" />
        </h2>
        <h4>
          <FormattedMessage id="navbar.subtitle" />
        </h4>
      </StyledNavbar>
      <Translations handleChangeLanguage={handleChangeLanguage} currentLenguage={context.locale} />
    </StyledNavbarContainer>
  )
}
export default Navbar;
