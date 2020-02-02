import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from "react-router-dom";
import { nav } from "../nav.config";
const { SubMenu } = Menu;

export default function Header(props) {
  console.log("props", props.location.pathname);
  return (
    <Menu
      mode="inline"
      activeKey={props.location.pathname}
      selectedKeys={props.location.pathname}
    >
      {nav.map(n => {
        if (!n.children) {
          return (
            <Menu.Item key={n.url}>
              <Link to={n.url}>{n.name}</Link>
            </Menu.Item>
          );
        }
        return (
          <SubMenu
            key={n.url}
            title={
              <span>
                <Icon type={n.icon} />
                <span>{n.name}</span>
              </span>
            }
          >
            {n.children.map(child => (
              <Menu.Item key={child.url}>
                <Link to={child.url}>{child.name}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        );
      })}
    </Menu>
  );
}
