import React, { Fragment, Switch } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Login from './components/Login';
import Currency from './components/presentational/Currency';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import SignupForm from './SignupForm';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import CurrencyCollection from './components/presentational/CurrencyCollection';

class Routes extends React.Component {
  state = {
    user: null,
    loggedIn: localStorage.getItem('token'),
    username: localStorage.getItem('username')
  };

  // componentDidMount() {
  //   //console.log('ROUTES')
  //   // let token = localStorage.getItem('token');
  //   // //console.log(token, 'TOKEN')

  //   // if (token) {
  //   //   const res = jwt.decode(token);
  //   //   this.setState({
  //   //     user: res.data
  //   //   });
  //   // }
  //   let token = localStorage.getItem('token');
  //   let auth = localStorage.getItem('auth');
  //   console.log(auth, 'auth');
  //   let name = localStorage.getItem('name');

  //   auth = JSON.parse(auth);
  //   console.log(auth, 'auth');
  //   let activeUser = null;
  //   if (token) {
  //     const res = jwt.decode(token);
  //     console.log('DECODED RES:', res);
  //     console.log('auth:', auth.name);
  //     activeUser = {
  //       user_id: auth.user_id,
  //       name: auth.name,
  //       username: auth.username,
  //       token: auth.token
  //     };
  //     this.setState(
  //       {
  //         user_id: auth.user_id,
  //         name: auth.name,
  //         username: auth.username,
  //         token: auth.token
  //       },
  //       () => console.log('STATE ACTIVE USER-NAME: ', this.state.username)
  //     );
  //     console.log('ACTIVE USER: ', activeUser.user_id);
  //   }
  // }

  componentDidMount() {
    //console.log('ROUTES')
    let token = localStorage.getItem('token');
    //console.log(token, 'TOKEN')

    if (token) {
      const res = jwt.decode(token);
      this.setState({
        user: res.data
      });
      //  fetch("http://localhost:3000/auth/current_user", {
      //    headers: {
      //      "Content-Type": "application/json",
      //      Accepts: "application/json",
      //      Authorization: token
      //    }
      //  }).then(resp => resp.json())
      //    .then(resp => {
      //      console.log(resp, 'api call')
      //      this.setState({
      //        user: resp
      //      });
      //    });
    } else {
     return  null;
    }
  }

  loginUser = (e, user) => {
    e.preventDefault();
    const { username, password } = user;
    axios
      .post('http://localhost:3001/auth/login', {
        username: username,
        password: password
      })
      .then(res => {
        console.log('LOGIN RES: ', res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('name', res.data.name);
        localStorage.setItem('auth', JSON.stringify(res.data));
        let current_user = {
          user_id: res.data.user_id,
          name: res.data.name,
          username: res.data.username
        };
        console.log('LOGGED IN :', localStorage.getItem('token'));
        this.setState({
          loggedIn: localStorage.getItem('token'),
          user: current_user
        });
        this.props.history.replace('/'); //route props
      })
      .catch(err => console.log('login err', err));
  };

  handleSubmit = (e, user) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/users', {
        name: user.name,
        username: user.username,
        password: user.password
      })
      .then(user => {
        localStorage.setItem('token', user.data.token);
        let token = localStorage.getItem('token');

        let current_user = {
          user_id: user.data.user_id,
          username: user.data.username
        };
        this.setState({
          user: current_user,
          loggedIn: localStorage.getItem('token')
        });
        // this.props.history.replace("/")
      })
      .catch(err => alert('Blank field or user already created'));
  };

  logOut = () => {
    this.setState({
      loggedIn: null
    });
  };
  render() {
    let token = localStorage.getItem('token');
    let auth = localStorage.getItem('auth');
    auth = JSON.parse(auth);
    console.log(auth, 'auth');
    let activeUser = null;
    if (token) {
      const res = jwt.decode(token);
      activeUser = res.data;
    }

    //   let token = localStorage.getItem("token");
    //   let auth = localStorage.getItem("auth");
    //   auth = JSON.parse(auth)
    //   console.log(auth, 'auth')
    //   let activeUser = null;
    //   if (token) {
    //     const res = jwt.decode(token);
    //     activeUser = res.data
    //   }
    // // let token = localStorage.getItem('token');
    // // let auth = localStorage.getItem('auth');
    // console.log('ROUTESSSsSS: ', this.state);
    // let name = localStorage.getItem('name');

    // auth = JSON.parse(auth);
    // console.log(auth, 'auth');
    // let activeUser = null;
    // if (token) {
    //   const res = jwt.decode(token);
    //   console.log('DECODED RES:', res);
    //   activeUser = {
    //     user_id: auth.user_id,
    //     name: auth.name,
    //     user_name: auth.username,
    //     token: auth.token
    //   };
    //   console.log('ACTIVE USER: ', this.state.user);
    // }

    return (
      <Fragment>
        <NavBar
          logOut={this.logOut}
          token={this.state.token}
          name={this.state.name}
          username={this.state.username}
          user_id={this.state.user_id}
        />

        <Route
          exact
          path="/"
          render={() => (
            <Home
              active={this.state.loggedIn}
              user={this.state.user}
              token={this.state.token}
              name={this.state.name}
              username={this.state.username}
              user_id={this.state.user_id}
            />
          )}
        />

        <Route
          exact
          path="/Profile"
          render={() => (
            <Profile
              activeUser={this.state.user}
              token={this.state.token}
              name={this.state.name}
              username={this.state.username}
              user_id={this.state.user_id}
              auth={this.state.user}
              loggedIn={this.state.loggedIn}
            />
          )}
        />

        <Route
          exact
          path="/signupForm"
          render={() => <SignupForm handleSubmit={this.handleSubmit} />}
        />
        <Route
          exact
          path="/login"
          render={() => <Login loginUser={this.loginUser} />}
        />
        <Route
          exact
          path="!#"
          render={() => (
            <CurrencyCollection
              token={this.state.token}
              name={this.state.name}
              username={this.state.username}
              user_id={this.state.user_id}
            />
          )}
        />
        <Route
          exact
          path="/currency"
          component={Currency}
          token={this.state.token}
          name={this.state.name}
          username={this.state.username}
          user_id={this.state.user_id}
        />
      </Fragment>
    );
  }
}
export default withRouter(Routes);
