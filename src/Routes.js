import React, { Fragment, Switch } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Currency from './components/presentational/Currency';
import NoMatch from './NoMatch';
import NavBar from './NavBar'



const Routes = () => (
  <Router>
    <Fragment>
     <NavBar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/currency" component={Currency} />
      
    </Fragment>

</Router>
);
export default Routes;
