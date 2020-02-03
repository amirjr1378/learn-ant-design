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
          <Sider
            collapsible
            className="sider"
            breakpoint="lg"
            onBreakpoint={br => this.setState({ collapse: br })}
          >
            <DefaultSider {...this.props} />
          </Sider>
          <Layout>
            <Header className="header">
              <DefaultHeader {...this.props} />
            </Header>

            <Content
              style={{
                margin: this.state.collapse
                  ? "10px 2px 10px 80px"
                  : "10px 10px 10px 200px",
                minHeight: "83vh"
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
