import React from "react";
import { Redirect, Switch, withRouter, Route } from "react-router-dom";
import ContentWrapper from "../components/ContentWrapper";
import Products from "../screens/Products";

import { routes } from "./constants";

const MainRouter = () => (
  <ContentWrapper>
    <Switch>
      <Route exact path={`${routes.products}/`} component={Products} />
      <Redirect from={routes.any} to={`${routes.products}/`} />
    </Switch>
  </ContentWrapper>
);

export default withRouter(MainRouter);
