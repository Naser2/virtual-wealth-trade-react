import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
    // can use redirect 
    // activeClassName: https://reacttraining.com/react-router/web/api/NavLink


export default class NavBar extends Component {

  state = {
    name: 'Tyler',
    userName: 'tyler@something',
    password: '123'
  }


  checkUser = () => {
    localStorage.removeItem('token')
    console.log('In check User');
    this.props.history.replace('/')
  }
   greetUser = () => {
    return( <div>
              <NavLink exact style={{width: '100px',
                padding: '12px',
                margin: '0 6px 6px',
                background: 'blue',
                textDecoration: 'none',
                color: 'white'}} activeStyle={{background: 'gray'}} onClick={this.checkUser} to="/">Logout</NavLink>
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
                background: '#ADD8E6',
                color: 'white'}} activeStyle={{background: '#0084cc'}} >Home</NavLink>
        </div> 
        <div className="item">
        <NavLink to="/profile" style={{
                width: '100px',
                padding: '12px',
                margin: '0',
                background: '#ADD8E6',
                color: 'white'}} activeStyle={{background: '#0084cc'}}  >Profile</NavLink>
        </div> 
        <div className="item">
        <NavLink to="/login"  style={{
                width: '100px',
                padding: '12px',
                margin: '0',
                background: '#ADD8E6',
                textDecoration: 'none',
                color: 'white'}} activeStyle={{background: '#0084cc'}} >Login</NavLink>
        </div> 
        <div className="right item">
        {this.state.name ? this.greetUser() : alert('Nobody home') }
        </div> 

       
      </div>
    )
  }
}
