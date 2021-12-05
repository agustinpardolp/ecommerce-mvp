import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import PropTypes from "prop-types";
import Spanish from "../../translations/en-es/index.json";
import { lenguageConfig, LENGUAGES } from "./constants";

export const Context = React.createContext();

const LanguageWrapper = (props) => {
  //HOC with context to provide traslations over components
  const [locale, setLocale] = useState(LENGUAGES.EN_ES);
  const [messages, setMessages] = useState(Spanish);

  //function to translate
  const changeLanguage = (e) => {
    const newLocale = e.target.getAttribute("value");
    setLocale(newLocale);
    setMessages(lenguageConfig[newLocale]);
  };
  return (
    <Context.Provider value={{ changeLanguage, locale }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

LanguageWrapper.propTypes = {
  children: PropTypes.object,
};

export default LanguageWrapper;
