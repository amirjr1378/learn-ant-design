import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import DefaultLayout from "./Layout";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={DefaultLayout} />
    </Switch>
  );
};

export default withRouter(App);
