import React from "react";
import { Avatar, Layout, Menu, Breadcrumb, Icon, Dropdown } from "antd";
const { SubMenu } = Menu;

export default function Header() {
  const menu = (
    <Menu style={{ padding: 20 }}>
      <Menu.Item>
        <Icon type="user" />
        profile
      </Menu.Item>
      <Menu.Item>
        <Icon type="logout" />
        exit
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="navbar">
      <Dropdown overlay={menu}>
        <Avatar icon="user" size={45} style={{ cursor: "pointer" }} />
      </Dropdown>
    </div>
  );
}
