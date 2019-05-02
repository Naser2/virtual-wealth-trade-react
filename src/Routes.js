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

class Routes extends React.Component {
  state = {
    user: null,
    loggedIn: localStorage.getItem('token')
  };

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
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('auth', JSON.stringify(res.data));
        let current_user = {
          user_id: res.data.user_id,
          username: res.data.username
        };
        // console.log('res from backend', this);
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

    return (
      <Fragment>
        <NavBar logOut={this.logOut} />

        <Route
          exact
          path="/"
          render={() => (
            <Home active={this.state.loggedIn} activeUser={this.state.user} />
          )}
        />
        <Route
          exact
          path="/Profile"
          render={() => <Profile activeUser={activeUser} auth={auth} />}
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

        <Route exact path="/currency" component={Currency} />
      </Fragment>
    );
  }
}
export default withRouter(Routes);
