import React, { Component } from 'react';
import axios from 'axios';

export default class LogIn extends Component {
  state = {
    username: '',
    password: ''
  }

  loginUser = (e) => {
    e.preventDefault();
    const {username, password} = this.state;
    console.log('Login deatailsss', username, password)
    axios.post('http://localhost:3000/auth/login', {
      username, password
    }).then(res => {
      localStorage.setItem('token', res.data.token);
      console.log('res from backend', this);
      this.props.history.replace('/')
    }).catch(err => console.log('login errr', err))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
          <div>
            <form onSubmit={this.loginUser}>
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