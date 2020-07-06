import React, { useState } from 'react';
import * as actions from '../store/actions/auth';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';


class RegistrationForm extends React.Component {

  onFinish = values => {

    this.props.onAuth(
    values.username,
    values.email,
    values.password1,
    values.password2);

    this.props.history.push('/');
  };


  render() {
    return(
    <Form
    name="normal_login"
    onFinish={this.onFinish}>
    <Form.Item
      name="username"
      label = "username"
      rules={[{ required: true, message: 'Please input your Username!' }]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="username" />
    </Form.Item>

    <Form.Item
       name="email"
       label="E-mail"
       rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
     >
       <Input placeholder="Email" />
     </Form.Item>

    <Form.Item
      name="password1"
      label="Password"
      rules={[{ required: true, message: 'Please input your Password!' }]}
    >
    <Input.Password
      placeholder="Password"
    />
    </Form.Item>
    <Form.Item
            name="password2"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password1') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input.Password/>
          </Form.Item>

      <Form.Item>
      <Button type="primary" htmlType="submit">
      signup
      </Button>
      Or

      <NavLink to='/login/'>
        login
      </NavLink>
      </Form.Item>
    </Form>
  );

  }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch =>{
  return{
    onAuth: (username, email, password1, password2)=>dispatch(actions.authSignup(username, email, password1, password2))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
