import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import { notification} from 'antd';

export default class Addfile extends React.Component{
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    notification.open({
    message: 'Notification Title',
    description: this.state.name ,
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
    const user = {
      name: this.state.name
    };
    axios.post('http://127.0.0.1:8000/communicate/getName/',{
      user
    }).then(res => {
        console.log(res.data);
      })
  }
render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>

          <input type="text" name="name" onChange={this.handleChange} size='small' placeholder="Name your file here"/>
        </label>
        <button type="submit">Add this model</button>
      </form>
    </div>
  )
}
}
