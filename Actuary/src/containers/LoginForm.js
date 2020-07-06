import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { Form, Input, Button, Checkbox} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import * as actions from '../store/actions/auth';

class NormalLoginForm extends React.Component {
  onFinish = values => {
    this.props.onAuth(values.username, values.password)

    this.props.history.push('/');
  };
  render(){
  return (
    <div>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={this.onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
      <Button type="primary" htmlType="submit">
      Login
      </Button>
      Or
      <NavLink to='/signup/'> signup
      </NavLink>
      </Form.Item>
    </Form>
    </div>
  );
}
};



const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch =>{
  return{
    onAuth: (username, password)=>dispatch(actions.authLogin(username, password))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);
