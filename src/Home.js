import React, { Component } from 'react'
import axios from 'axios'
import Form from './components/containers/Form'

class Home extends Component {
  state={
    initial:true,
    signup:false,
    login:false
  }
  signupForm = (obj) =>{
    this.setState({
      signup:true,
      initial:false
    })
  }

  signupHandler =(obj)=>{
    axios.post(`http://localhost:3000/users`,{name:obj.name,username:obj.username,password:obj.password})
    this.setState({signup:true})
  }

  loginForm = () =>{
    this.setState({
      login:true,
      initial:false
    })
  }

  loginHandler = (obj) =>{
    axios.get(`http://localhost:3000/users/${obj.username}`)
    .then(response => console.log(response.data))
  }

  loginRender = () => {

    if (this.state.initial===true){
      return(
        <div>
        <button onClick={this.signupForm}>Sign Up</button>
        <button onClick={this.loginForm}>Login</button>
        </div>
      )
      }
      else if(this.state.signup===true){
        return <Form showName={true} name="" username="" password="" SubmitHandler={this.signupHandler}/>

      }
      else if(this.state.login===true){
        return <Form showName={false} name="" username="" password="" SubmitHandler={this.loginHandler}/>

      }
      else{
        //person is logged in, show search component,currencyContainer, etc.
      }
  }

  LoggedIn = () => {

  }
  render() {
    return (
      <div>
        {/*this.loginRender()*/}
        {this.LoggedIn()}
      </div>
    )
  }
}

export default Home;
