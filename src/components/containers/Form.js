import React, {Component} from 'react'

export default class Form extends Component{
  state={
    id:1,
    name:this.props.name,
    username:this.props.username,
    password:""
  }

  changeHandler = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitHandler = (e) =>{
    e.preventDefault()
      if(this.state.name.length===0 || this.state.username.length===0 || this.state.password.length===0){
      alert('Fields cannot be left blank.')
    }
    else{
      this.props.patchOrPost(this.state)
    }
  }

  render(){
    return (
      <form onSubmit={(e) => this.submitHandler(e)}>
      <label htmlFor="name">Name</label>
      <input type ="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
      <br/>
      <label htmlFor="username">Username</label>
      <input type ="text" name="username" value={this.state.username} onChange={this.changeHandler}/>
      <br/>
      <label htmlFor="password">Password</label>
      <input type ="password" name="password" onChange={this.changeHandler}/>
      <br/>
      <input type ="submit"/>
      </form>
    )
  }
}
