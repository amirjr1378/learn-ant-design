import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import DefaultHeader from "./Header";
import DefaultContent from "./Content";
import DefaultFooter from "./Footer";
import DefaultSider from "./Sider";
const { Header, Content, Footer, Sider } = Layout;
export default class DefaultLayout extends React.Component {
  state = { collapse: false };
  render() {
    return (
      <Layout>
        <Layout>
          <Header className="header">
            <DefaultHeader {...this.props} />
          </Header>
        </Layout>
        <Layout>
          <Sider
            collapsible
            className="sider"
            breakpoint="lg"
            onBreakpoint={br => this.setState({ collapse: br })}
            collapsedWidth={0}
          >
            <DefaultSider {...this.props} />
          </Sider>

          <Layout>
            <Content
              style={{
                margin: this.state.collapse ? "10x" : "30px 20px"
              }}
            >
              <DefaultContent {...this.props} />
            </Content>
            <Footer className="footer">
              <DefaultFooter {...this.props} />
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
