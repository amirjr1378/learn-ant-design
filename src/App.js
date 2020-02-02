import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "./Layout";
const App = () => {
  return <Route path="/" render={DefaultLayout} />;
};

export default App;
