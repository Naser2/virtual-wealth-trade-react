import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Profile from './Profile';
import jwt from 'jsonwebtoken';
// can use redirect
// activeClassName: https://reacttraining.com/react-router/web/api/NavLink

export default class NavBar extends Component {
  state = {
    name: '',
    userName: '',
    password: '',
    token: ''
  };

  navBarFunc = () => {
    if (this.props.token) { //show log out 
      this.showLogOutAndHandleToken();
    } 

    if (this.checkToken()) {
      return (
        <>
          <div
            className="ui menu darken"
            style={{
              background: '#0d101e !important',
              borderBottom: 'solid 1px #292C41 !important'
            }}
          >
            <div className="item">
              <a href='/'
                to="/"
                style={{
                  width: '100px',
                  padding: '12px',
                  margin: '0',
                  borderRadius: '5px',
                  background: '#ADD8E6',
                  color: 'white'
                }}
                // activeStyle={{ background: '#0084cc' }}
              >
                Home
              </a>
            </div>
            <div className="item">
              {this.checkToken() && (
                <NavLink
                  to="/profile"
                  style={{
                    width: '100px',
                    padding: '12px',
                    margin: '0',
                    borderRadius: '5px',
                    background: '#ADD8E6',
                    color: 'white'
                  }}
                  activeStyle={{ background: '#0084cc' }}
                >
                  Profile
                </NavLink>
              ) //place edit/delete in a container name && link to setting
              }
            </div>

            <div className="item">
              {this.checkToken() === 'false' && (
                <NavLink
                  to="/login"
                  style={{
                    width: '100px',
                    padding: '12px',
                    margin: '0',
                    background: '#ADD8E6',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    color: 'white'
                  }}
                  activeStyle={{ background: '#0084cc' }}
                >
                  Login
                </NavLink>
              )}
            </div>
            {/* <div className="item">
              {!this.props.token && (
                <NavLink
                  to="/signupForm"
                  style={{
                    width: '100px',
                    padding: '12px',
                    margin: '0',
                    background: '#32cd32',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    color: 'white'
                  }}
                  activeStyle={{ background: '#0084cc' }}
                >
                  Sign up
                </NavLink>
              )}
            </div> */}
            
            {
              this.checkToken() ? 
              <div className="right item">
              <NavLink
                exact
                style={{
                  width: '100px',
                  padding: '12px',
                  margin: '0 6px 6px',
                  background: 'gray',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  color: 'white'
                }}
                activeStyle={{ background: 'gray' }}
                onClick={this.handleToken}
                to="/"
              >
                Logout
              </NavLink>
            </div>:
            null
            }
            
          </div>
        </>
      );
    } else {
      return null;
    }
  };

  checkToken = () => {
    const token = localStorage.getItem('token');
    // console.log("CHECK TOKEN FUCN: ", token)
    if (token) {
      return true;
    }
    return false;
  };

  handleToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('auth');
    this.props.logOut();
  };
  showLogOutAndHandleToken = () => {
    return (
      <div>
        <NavLink
          exact
          style={{
            width: '100px',
            padding: '12px',
            margin: '0 6px 6px',
            background: 'gray',
            borderRadius: '5px',
            textDecoration: 'none',
            color: 'white'
          }}
          activeStyle={{ background: 'gray' }}
          onClick={this.handleToken}
          to="/"
        >
          Logout
        </NavLink>
      </div>
    );
  };

  componentDidMount() {
    //console.log('ROUTES')
    let token = localStorage.getItem('token');
    //console.log(token, 'TOKEN')

    if (this.props.token) {
      // const res = jwt.decode(token);
      this.setState({
        token: this.props.token
      });
    }
   
  }
  render() {

    console.log("Active : ", this.props.token, 
    //  " User Props: ", this.props.name, 
      "checkToken: ", this.checkToken() )
      console.log( "checkToken: ", this.checkToken() )
    return (
      <>{
        this.checkToken() ?  
        <>
        {this.navBarFunc()}
        </>
      :
      null
      }
        {/* {this.state.token ? (
          <div className="ui menu">
            <div className="item">
              <NavLink
                to="/"
                style={{
                  width: '100px',
                  padding: '12px',
                  width: '100px',
                  margin: '0',
                  borderRadius: '5px',
                  background: '#ADD8E6',
                  color: 'white'
                }}
                activeStyle={{ background: '#0084cc' }}
              >
                Home
              </NavLink>
            </div>
            <div className="item">
              {this.checkToken() && (
                <NavLink
                  to="/profile"
                  style={{
                    width: '100px',
                    padding: '12px',
                    margin: '0',
                    borderRadius: '5px',
                    background: '#ADD8E6',
                    color: 'white'
                  }}
                  activeStyle={{ background: '#0084cc' }}
                >
                  Profile
                </NavLink>
              ) //place edit/delete in a container name && link to setting
              }
            </div>
            <div className="item">
              {!this.checkToken() && (
                <NavLink
                  to="/login"
                  style={{
                    width: '100px',
                    padding: '12px',
                    margin: '0',
                    background: '#ADD8E6',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    color: 'white'
                  }}
                  activeStyle={{ background: '#0084cc' }}
                >
                  Login
                </NavLink>
              )}
            </div>
            <div className="item">
              {!this.checkToken() && (
                <NavLink
                  to="/signupForm"
                  style={{
                    width: '100px',
                    padding: '12px',
                    margin: '0',
                    background: '#32cd32',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    color: 'white'
                  }}
                  activeStyle={{ background: '#0084cc' }}
                >
                  Sign up
                </NavLink>
              )}
            </div>
            <div className="right item">
              {this.checkToken()
                ? this.showLogOutAndHandleToken()
                : console.log('Please Login')}
            </div>
          </div>
        ) : null} */}
      </>
    );
  }
}
