import React from "react";
import { Descriptions, Typography, Card, Skeleton, message } from "antd";
const { Paragraph } = Typography;
export default class Users extends React.Component {
  state = { loading: false, data: {} };
  url = `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`;
  toggle = () => {
    this.setState(state => ({ loading: !state.loading }));
  };
  componentDidMount() {
    this.toggle();
    fetch(this.url)
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .finally(() => this.toggle());
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
    console.log("data", this.state.data);
    return (
      <Card title={"user"}>
        <Skeleton loading={this.state.loading}>
          <Descriptions title="User Info">
            {!this.state.loading &&
              Object.entries(this.state.data).map(([key, value]) => (
                <Descriptions.Item key={key} label={key}>
                  {typeof value == "string" || typeof value == "number" ? (
                    <Paragraph
                      editable={{
                        onChange: str => this.onChange(str, key)
                      }}
                    >
                      {value.toString()}
                    </Paragraph>
                  ) : (
                    "dont know"
                  )}
                </Descriptions.Item>
              ))}
          </Descriptions>
        </Skeleton>
      </Card>
    );
  }
}
