import React from "react";
import { Form, Icon, Input, Button, message, Row, Col } from "antd";

class Login extends React.Component {
  state = { loading: false };
  toggle = () => {
    this.setState(state => ({ loading: !state.loading }));
  };
  handleSubmit = async e => {
    e.preventDefault();
    this.toggle();
    console.log("props", this.props.form.getFieldsValue());
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: this.props.form.getFieldsValue()
      });

      message.success("success man");
    } catch {
      message.error("success man");
    } finally {
      this.toggle();
    }
  };
  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const usernameError =
      isFieldTouched("username") && getFieldError("username");
    const passwordError =
      isFieldTouched("password") && getFieldError("password");
    return (
      <Form onSubmit={this.handleSubmit} layout="vertical">
        <Row gutter={[20, 2]}>
          <Col xs={24} md={8}>
            <Form.Item
              hasFeedback
              label="username"
              validateStatus={usernameError ? "error" : ""}
              help={usernameError || ""}
            >
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item
              hasFeedback
              label="passsword"
              validateStatus={passwordError ? "error" : ""}
              help={passwordError || ""}
            >
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input.Password
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
          </Col>
          <Col xs={24} md={15}>
            <Button htmlType="submit" loading={this.state.loading}>
              login
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create({ name: "" })(Login);

export default WrappedLoginForm;
