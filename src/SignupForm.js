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

  render() {
    return (
      <form onSubmit={(e)=>this.props.handleSubmit(e,this.state)}>
        <h1>Please Sign</h1>
        <input type="text" name="name" placeholder="name" value={this.state.name}  onChange={this.handleChange}/>
        <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
        <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
        <input type="submit" />
        </form>

    )
  }
}
