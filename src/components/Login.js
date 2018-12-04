import React, { Component } from 'react';
import axios from 'axios';

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
          <div>
            <form onSubmit={(e) => this.props.loginUser(e,this.state)}>
              <div>
                <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
                <label htmlFor="username">Username</label>
              </div>
              <div>
                <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                <label htmlFor="password">Password</label>
              </div>
              <input type="submit" value="Login" />
            </form>
          </div>
       )
      }
    }
