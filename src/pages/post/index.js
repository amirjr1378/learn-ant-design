import React from "react";
import {
  Descriptions,
  Typography,
  Card,
  Skeleton,
  message,
  Comment,
  Divider,
  Avatar
} from "antd";
const { Paragraph, Title } = Typography;
export default class Users extends React.Component {
  state = { loading: false, data: {}, comments: [] };
  id = this.props.match.params.id;
  url = `https://jsonplaceholder.typicode.com/posts/${this.id}`;
  commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${this.id}`;

  toggle = () => {
    this.setState(state => ({ loading: !state.loading }));
  };
  componentDidMount() {
    this.toggle();
    const fetchPost = fetch(this.url)
      .then(res => res.json())
      .then(data => this.setState({ data }));

    const fetchComments = fetch(this.commentsUrl)
      .then(res => res.json())
      .then(comments => this.setState({ comments }));

    Promise.all([fetchPost, fetchComments]).finally(() => this.toggle());
  }
  onChange = (str, key) => {
    this.setState(
      state => ({
        data: {
          ...state.data,
          [key]: str
        }
      }),
      () =>
        fetch(this.url, {
          method: "PUT",
          body: this.state.data
        })
          .then(() => message.success("done"))
          .catch(() => message.error("fail"))
    );
  };
  render() {
    return (
      <Card title={"post"}>
        <Skeleton loading={this.state.loading}>
          <Title>{this.state.data.title}</Title>
          <Paragraph>{this.state.data.body}</Paragraph>
          <Divider />
          {this.state.comments.map(comment => (
            <Comment
              author={comment.name}
              avatar={<Avatar>A</Avatar>}
              content={comment.body}
            />
          ))}
        </Skeleton>
      </Card>
    );
  }
}
