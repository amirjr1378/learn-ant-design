import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Route } from "react-router-dom";
import { routes } from "../routes";

import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
export default function Content(props) {
  console.log("routes", props.routes);
  return (
    <div style={{ padding: 24, minHeight: 280 }}>
      <Breadcrumbs />

      <div style={{ marginTop: 50, display: "block" }} />
      {routes && routes.map((route, i) => <Route key={i} {...route} />)}
    </div>
  );
}
