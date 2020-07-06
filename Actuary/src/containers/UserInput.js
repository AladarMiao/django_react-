

import { Checkbox, Button, Menu, Dropdown, Input, notification} from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import React from 'react'
import {useState} from 'react'

const UserInput = (props) => {

  return (
  <Input style={{ width: '20%' }} size="small"
  placeholder="因子 list, separated by commas and a space. e.g. Age, Gender..."
  onPressEnter={open}/>

  )

}

const open = () => {
  notification.open({
    message: 'Your input',
    description: "hi"
    });
};

export default UserInput


