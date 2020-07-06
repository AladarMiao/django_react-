
import React, { Component, Input, notification } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import CustomLayout from './containers/Layout'
import UserInput from './containers/UserInput'
import LoginForm from './containers/LoginForm'
import FileForm from './containers/LoginForm'
import {Layout, Breadcrumb, Menu} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Aladar from './components/Aladar';
import Uploadcsv from './components/Uploadcsv';
import Addfile from './components/addfilename';
import Article from './components/Article';
import Canvas from './components/Canvas';
import BaseRouter from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import './graph-creator.css';
import {connect} from 'react-redux';
import * as actions from './store/actions/auth';

const {SubMenu} = Menu;
const { Header, Footer, Sider, Content } = Layout;


class App extends Component {
  constructor(props){
        super(props);

        this.state = {input: ''};
    }
  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  handleChange = event => {
   this.setState({ input: event.target.value });
  };
  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
        // Use reader.result
        alert(reader.result)
    }
    reader.readAsText(files[0]);

}
//<iframe id="graph" title="canvas" src="graph_canvas.html"/> #This is an iframe that displays the original graph creator

  render() {

    return (

      <Layout>
    <Header className="header">
      <div className="logo" />

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Life and Death Chain</Menu.Item>

      </Menu>
    </Header>
    <Layout>
      <Sider width={300} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title='Input 因子 List'>
            <Menu.Item key="1"><Aladar/></Menu.Item>
            <Menu.Item key="2"><Aladar/></Menu.Item>
            <Menu.Item key="3"><Aladar/></Menu.Item>
            <Menu.Item key="4"> </Menu.Item>
          </SubMenu>

        </Menu>
      </Sider>
      <Layout style={{ padding: '0 30px 30px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>

        <Uploadcsv/>
        <br/><br/>

        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >

        <br/>


          <Canvas/>
          <br/><br/>

          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

          <Article/>
          <br/>
          
                  <Router>
                  <CustomLayout {...this.props}>
                    <BaseRouter/>

                  </CustomLayout>
                  </Router>


        </Content>
      </Layout>
    </Layout>
  </Layout>


    );
  }
}

const mapStateToProps=state=>{
  return {
    isAuthenticated: state.token!==null

  }
}

const mapDispatchToProps=dispatch=>{
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
