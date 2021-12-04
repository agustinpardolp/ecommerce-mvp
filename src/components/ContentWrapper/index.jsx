import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './styled-components.js';

function ContentWrapper({ children }) {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
export default ContentWrapper;
