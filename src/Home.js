import React, { Component } from 'react'
import axios from 'axios'
import Form from './components/containers/Form'

class Home extends Component {
  state={
    login:true,
  }
  patchOrPost = (obj) =>{
    axios.post(`http://localhost:3000/users`,{name:obj.name,username:obj.username,password:obj.password})
    this.setState({login:false})
  }
  loginRender = () => {
    if (this.state.login){
      return <Form name="" username="" password="" patchOrPost={this.patchOrPost}/>
      }
      else{
        //person is logged in, show search component,currencyContainer, etc.
      }
  }
  render() {
    return (
      <div>
        {this.loginRender()}
      </div>
    )
  }
}

export default Home;
