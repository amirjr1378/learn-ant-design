import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./less/main.less";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ConfigProvider } from "antd";
import faIR from "antd/es/locale-provider/fa_IR";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
