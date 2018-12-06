import React, { Component } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types'

export default class LogIn extends Component {
  state = {
    username: '',
    password: ''
  }



  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (

  <div class="ui grid container middle aligned" >
    <div class="column">
<div className="ui segment top attached" > Login</div>
      <form class="ui form segment top attached green" onSubmit={(e) => this.props.loginUser(e,this.state)}>
      
        <div class="field ui left icon input fluid">
          <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
          <i class="users icon"></i>
        </div>
        <div class="field ui left icon input fluid">
          <input type="text" name="password" placeholder="Password" onChange={this.handleChange}/>  
          <i class="key icon"></i>
        </div>
        <button class="ui button fluid positive" type="submit" value="Login"style={{background: '#0084cc'}} >Submit</button>
      </form>  
      <div class="ui segment bottom attached">Not registered? <a >Sign up here</a>.</div>
    </div>
  </div>

        
       )
      }
    }
