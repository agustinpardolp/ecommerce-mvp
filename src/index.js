import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "../src/assets/styles/index.css";
import App from "./App";
import LanguageWrapper from "../src/components/LenguageWrapper";

ReactDOM.render(
  <LanguageWrapper>
    <App />
  </LanguageWrapper>,
  document.getElementById("root")
);

