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
    console.log('In check User')
  }
   greetUser = () => {
    return(  
           <div>
             <p></p>
             <NavLink onClick={this.checkUser} to="/">Logout</NavLink>
           </div>)
   }

  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
       {this.state.name ? this.greetUser() : console.log('Nobody home') }
      </div>
    )
  }
}
