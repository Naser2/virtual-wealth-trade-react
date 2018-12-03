import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
    // can use redirect 
    // activeClassName: https://reacttraining.com/react-router/web/api/NavLink


export default class NavBar extends Component {

  state = {
    name: '',
    userName: '',
    password: ''
  }

  checkToken = () => {
    console.log("I got here")
    const token = localStorage.getItem('token');
    console.log("I am a big token", token);
    if(token) {
      return true;
    }
    return false
  }

  handleToken = () => {
    localStorage.removeItem('token')
    console.log('In check User');
    this.props.history.push('/')
  }
   showLogOutAndHandleToken = () => {
    return( <div>
              <NavLink exact style={{width: '100px',
                padding: '12px',
                margin: '0 6px 6px',
                background: 'blue',
                textDecoration: 'none',
                color: 'white'}} activeStyle={{background: 'gray'}} onClick={this.handleToken} to="/">Logout</NavLink>
           </div>)
   }

  render() {
    console.log("I AM RENDERINGGGGGGGGGGGGGGGGGGGGG")
    
    return (
      <div className="ui menu" >
        <div className="item">

        <NavLink to="/" style={{width: '100px',
                padding: '12px',
                width: '100px',
                margin: '0',
                background: '#ADD8E6',
                color: 'white'}} activeStyle={{background: '#0084cc'}} >Home</NavLink>
        </div> 
        <div className="item">
        {this.checkToken() && <NavLink to="/profile" style={{
                width: '100px',
                padding: '12px',
                margin: '0',
                background: '#ADD8E6',
                color: 'white'}} activeStyle={{background: '#0084cc'}}  >Profile</NavLink>
                }
        </div> 
        <div className="item">
        {!this.checkToken() && <NavLink to="/login"  style={{
                width: '100px',
                padding: '12px',
                margin: '0',
                background: '#ADD8E6',
                textDecoration: 'none',
                color: 'white'}} activeStyle={{background: '#0084cc'}} >Login</NavLink>
        }
        </div> 
        <div className="item">
        {!this.checkToken() && <NavLink to="/signupForm"  style={{
                width: '100px',
                padding: '12px',
                margin: '0',
                background: '#ADD8E6',
                textDecoration: 'none',
                color: 'white'}} activeStyle={{background: '#0084cc'}} >Sign up</NavLink>
        }
        </div> 
        <div className="right item">
        {this.checkToken() ? this.showLogOutAndHandleToken() 
          : console.log('redirect me to Login') }
        </div> 

       
      </div>
    )
  }
}
