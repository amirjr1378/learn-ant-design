import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import DefaultHeader from "./Header";
import DefaultContent from "./Content";
import DefaultFooter from "./Footer";
import DefaultSider from "./Sider";
const { Header, Content, Footer, Sider } = Layout;
export default function DefaultLayout(props) {
  return (
    <Layout>
      <Layout>
        <Sider collapsible className="sider" breakpoint="lg">
          <DefaultSider {...props} />
        </Sider>
        <Layout>
          <Header className="header">
            <DefaultHeader {...props} />
          </Header>

          <Content style={{ margin: 10 }}>
            <DefaultContent {...props} />
          </Content>

          <Footer>
            <DefaultFooter {...props} />
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
