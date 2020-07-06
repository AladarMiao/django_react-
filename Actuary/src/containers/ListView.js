import React from 'react';
import axios from 'axios';
import Articles from '../components/Article';
import CustomForm from "../containers/FileForm";

class ListView extends React.Component{
  state ={
    articles:[]
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/')
      .then(res=>{
        this.setState({
          articles: res.data
        });
        console.log(res.data)

      })
  }
  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchArticles();
    }
  }

  render() {
    return(
      <div>
        <Articles data={this.state.articles} /> <br />
        <h2> Create a model </h2>
        <CustomForm requestType="post" articleID={null} btnText="Create" />
      </div>
    )
  }
}

export default ListView;
