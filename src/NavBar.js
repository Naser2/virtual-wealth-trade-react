import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Profile from './Profile'
    // can use redirect
    // activeClassName: https://reacttraining.com/react-router/web/api/NavLink


export default class NavBar extends Component {

  state = {
    name: '',
    userName: '',
    password: ''
  }

  checkToken = () => {
    const token = localStorage.getItem('token');
    if(token) {
      return true;
    }
    return false
  }

  handleToken = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('auth')
    this.props.logOut()
  }
   showLogOutAndHandleToken = () => {
    return( <div>
              <NavLink exact style={{width: '100px',
                padding: '12px',
                margin: '0 6px 6px',
                background: 'gray',
                borderRadius: '5px',
                textDecoration: 'none',
                color: 'white'}} activeStyle={{background: 'gray'}} onClick={this.handleToken} to="/">Logout</NavLink>
           </div>)
   }

  render() {

    return (
      <div className="ui menu" >
        <div className="item">

        <NavLink to="/" style={{width: '100px',
                padding: '12px',
                width: '100px',
                margin: '0',
                borderRadius: '5px',
                background: '#ADD8E6',
                color: 'white'}} activeStyle={{background: '#0084cc'}} >Home</NavLink>
        </div>
        <div className="item">
        {this.checkToken() && <NavLink to="/profile" style={{
                width: '100px',
                padding: '12px',
                margin: '0',
                borderRadius: '5px',
                background: '#ADD8E6',
                color: 'white'}} activeStyle={{background: '#0084cc'}}  >Profile</NavLink> //place edit/delete in a container name && link to setting 
                }
        </div>
        <div className="item">
        {!this.checkToken() && <NavLink to="/login"  style={{
                width: '100px',
                padding: '12px',
                margin: '0',
                background: '#ADD8E6',
                borderRadius: '5px',
                textDecoration: 'none',
                color: 'white'}} activeStyle={{background: '#0084cc'}} >Login</NavLink>
        }
        </div>
        <div className="item">
        {!this.checkToken() && <NavLink to="/signupForm"  style={{
                width: '100px',
                padding: '12px',
                margin: '0',
                background: '#32cd32',
                borderRadius: '5px',
                textDecoration: 'none',
                color: 'white'}} activeStyle={{background: '#0084cc'}} >Sign up</NavLink>
        }
        </div>
        <div className="right item">
        {this.checkToken() ? this.showLogOutAndHandleToken()
          : console.log('Please Login') }
        </div>


      </div>
    )
  }
}
