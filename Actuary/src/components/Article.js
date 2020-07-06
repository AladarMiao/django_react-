
import React from 'react';
import { List, Avatar, Space, notification } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import axios from 'axios';
import {updateGraph} from './Canvas'


const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);


class Article extends React.Component{
  state ={
    articles:[]
  }

  handleClick = event => {
    notification.open({
    message: 'Notification Title',
    description: 'File Uploaded!',

  });
  };

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/')
      .then(res=>{
        this.setState({
          articles: res.data
        });

      })
  }

  render() {
      return (

        <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={this.state.articles}
      footer={
        <div>

        </div>
      }
      renderItem={item => (
        <List.Item
          key={item.title}
        >
        <button id="varSubmit" onClick={this.handleClick}>Submit</button>
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
        );

  }
}
export default Article
