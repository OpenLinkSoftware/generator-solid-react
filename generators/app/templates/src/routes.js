import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Home, PageNotFound } from "./containers";

const Routes = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/404" component={PageNotFound} />
        <Route exact path="/" component={Home} />
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;