import React from "react";
import PropTypes from "prop-types";

import {StyledTranslations } from "../../styled-components";
import { Icon } from "semantic-ui-react";

const Translations = ({ handleChangeLanguage,currentLenguage }) => {
  return (
    <StyledTranslations>
        <Icon name='translate' size='big' onClick={handleChangeLanguage} value={currentLenguage === "en-us" ? "en-es" : "en-us"} />
    </StyledTranslations>
  );
};

export default Translations;

Translations.propTypes = {
  handleChangeLanguage: PropTypes.func.isRequired,
};
