import React from "react";
import { Redirect, Switch, withRouter, Route } from "react-router-dom";
import ContentWrapper from "../components/ContentWrapper";
import ErrorPage from "../screens/ErrorPage";
import Products from "../screens/Products";

import { ROUTES } from "./constants";

const MainRouter = () => (
  <ContentWrapper>
    <Switch>
      <Route exact path={`${ROUTES.PRODUCTS}/`} component={Products} />
      <Route exact path={`${ROUTES.ERROR}/`} component={ErrorPage} />
      <Redirect from={ROUTES.ANY} to={`${ROUTES.PRODUCTS}/`} />
    </Switch>
  </ContentWrapper>
);

export default withRouter(MainRouter);
