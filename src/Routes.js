import React, { Fragment, Switch } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Login from './components/Login';
import Currency from './components/presentational/Currency';
import NoMatch from './NoMatch';
import NavBar from './NavBar'
import SignupForm from './SignupForm'






const Routes = () => (
  <Router>
    <Fragment>
     <NavBar/>
     <switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/singup" component={SignupForm} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/currency" component={Currency} />
    </switch>
    </Fragment>

</Router>
);
export default Routes;
