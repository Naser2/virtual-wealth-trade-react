import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
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
              <NavLink onClick={this.checkUser} to="/">Logout</NavLink>
           </div>)
   }

  render() {
    return (
      <div className="ui menu" >
        <div className="item">

        <NavLink to="/">Home</NavLink>
        </div> 
        <div className="item">
        <NavLink to="/profile">Profile</NavLink>
        </div> 
        <div className="item">
        <NavLink to="/login">Login</NavLink>
        </div> 
        <div className="right item">
        {this.state.name ? this.greetUser() : alert('Nobody home') }
        </div> 

       
      </div>
    )
  }
}
