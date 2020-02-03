import React from "react";
import { Card, Table } from "antd";
import { Typography, Icon, Button, Input, List, Skeleton, Avatar } from "antd";
import Highlighter from "react-highlight-words";

import { Link } from "react-router-dom";
const { Title, Paragraph } = Typography;
export default class Posts extends React.Component {
  state = {
    data: [],
    pagination: {
      total: 100
    },
    loading: false
  };

  toggle = () => {
    this.setState(state => ({ loading: !state.loading }));
  };
  componentDidMount() {
    this.toggle();
    this.fetch({
      url: "https://jsonplaceholder.typicode.com/posts",
      params: {
        _page: 1,
        _limit: 6
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .finally(() => this.toggle());
  }

  fetch = ({ url, params }) => {
    if (!url) return;
    url = new URL(url);
    url.search = new URLSearchParams({
      ...params
    });
    return fetch(url);
  };

  render() {
    const { users, loading, pagination } = this.state;

    return (
      <>
        <Title level={1}>posts</Title>

        <Card title="posts">
          <List
            loading={this.state.loading}
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item
                actions={[
                  <a key="list-loadmore-edit">edit</a>,
                  <a key="list-loadmore-more">more</a>
                ]}
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<Link to={`/posts/${item.id}`}>{item.title}</Link>}
                    description={item.body}
                  />
                  <div>content</div>
                </Skeleton>
              </List.Item>
            )}
          />
        </Card>
      </>
    );
  }
}
