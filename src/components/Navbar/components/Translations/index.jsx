import React from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import { StyledTitle, TranslateContainer } from "../../styled-components";
import { Icon } from "semantic-ui-react";

const Translations = ({ handleChangeLanguage,currentLenguage }) => {
  return (
    <StyledTitle>
      <TranslateContainer  >
        <Icon name='translate' size='large' onClick={handleChangeLanguage} value={currentLenguage === "en-us" ? "en-es" : "en-us"} />
      </TranslateContainer>
    </StyledTitle>
  );
};

export default Translations;

Translations.propTypes = {
  handleChangeLanguage: PropTypes.func.isRequired,
};
