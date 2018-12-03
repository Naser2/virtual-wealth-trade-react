import React, { Component } from 'react'

export default class SignupForm extends Component {
  
  state ={
    name: '',
    username:'',
    password: ''
  }


  handleChange = (e) => {
     this.setState({
      [ e.target.name]: e.target.value
     })
  }
  handleSubmit = () => {
  
  }
  render() {
    return (
      <div>
        <h1>Please Sign</h1>
        <input type="text" name="name" placeholder="name" value={this.state.name}  />
        <input type="text" name="username" placeholder="username" value={this.state.username}/>
        <input type="text" name="password" placeholder="password" value={this.state.password}  />
        <button onSubmit={this.handleSubmit}>Signup</button>
      </div>
    )
  }
}
