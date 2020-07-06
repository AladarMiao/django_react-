import React from 'react';
import axios from 'axios';
import ReactFileReader from 'react-file-reader';
import { notification} from 'antd';

export default class Uploadcsv extends React.Component {
  state = {
    file: null,
    filename: null,
    columns: [],
    variables:{},
    showform: false,
    df: null
  }


  handleChange = event => {

    const name = event.target.name;
    const newBar = { ...this.state.variables, [name]:event.target.value};
    this.setState({variables:newBar});

  }

  handleChange2 = event => {
    this.setState({ file: event.target.files[0]});
  }

  handleFiles = files => {

    var reader = new FileReader();

    reader.readAsText(files[0]);

    reader.onload = function(e) {
        // Use reader.result
        var first = reader.result.split('\n').shift().split(',');
        this.setState({
          file: reader.result,
          filename: files[0].name
        });
        this.setState({columns:first});
        var new_variables = {};
        for(var i = 0; i < first.length; i++){
          new_variables[first[i]] = '';
        }

        if (Object.keys(new_variables).length> 0){
          this.setState({showform:true, variables:new_variables})
        }
    }.bind(this)


  }

  handleVarSubmit = event =>{
    console.log(this.state.variables);
  }

  handleSubmit = event => {

    event.preventDefault();


    // let formData = new FormData()
    //
    // formData.append('file', this.state.file)
    // formData.append('filename', this.state.filename)

    let settings = { headers: { 'content-type': 'multipart/form-data' } }



    axios.post('http://127.0.0.1:8000/communicate/getName/', this.state.variables)
      .then(res => {

      console.log(res);
      console.log('yes');
      var stringeddata=JSON.stringify(res.data);
      this.setState({ df:stringeddata });


      notification.open({
      message: 'Notification Title',
      description: this.state.df,
      onClick: () => {
        console.log('Notification Clicked!');
      },
      });

      })


      axios.post('http://127.0.0.1:8000/communicate/getCSV/',
      {file: this.state.file, filename: this.state.filename})
        .then(res => {
          console.log(res);
          console.log(res.data);
        })

}


//action="https://www.foo.com" method="POST"
/*      <form class="upload" onSubmit={this.handleSubmit} >
      <input type="file" name="uploadFile" onChange = {this.handleChange}/>
      <br/><br/>
      <input type="submit"/>
      <br/><br/>
      </form>*/


/*      <div class="styleform">
      <form>
      {this.state.columns.map( (col, index) => {return (
        [<label key={index}>{col}</label>,
        <input type="text" name={col}/>,<div class="clear"></div>]
      );} ) }
      </form>
      </div>
*/

//<ul>{this.state.columns.map( (col, index) => {return (<li key={index}>{col}</li>);} ) }</ul>
  render() {

    return (

      <div>
      <ReactFileReader name='csv file' handleFiles={this.handleFiles} fileTypes={'.csv'}>
      <button className='btn'>Upload CSV</button>
      </ReactFileReader>
      <br/><br/>

      {this.state.showform &&(
      <div id="varForm" className="styleform">


      <form className="upload">
      {Object.entries(this.state.variables).map( ([key,value]) => {return (
        [<label >{key}</label>,
        <input type="text" name={key} onChange={this.handleChange} valueLink={value}/>,<div className="clear"></div>]
      );} ) }
      </form>
      <button id="varSubmit" onClick={this.handleSubmit} >Submit</button>
      </div>
      )}

      </div>


    )
  }

}
