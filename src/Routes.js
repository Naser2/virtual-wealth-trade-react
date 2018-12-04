import React, { Fragment, Switch } from "react";
import { BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Login from './components/Login';
import Currency from './components/presentational/Currency';
import NoMatch from './NoMatch';
import NavBar from './NavBar'
import SignupForm from './SignupForm'
import axios from 'axios'





class Routes extends React.Component{
state={
  user:null,
  loggedIn: localStorage.getItem('token')
}

componentDidMount = () => {
   let token = localStorage.getItem("token");
   console.log(token)
   
   if (token) {
     fetch("http://localhost:3000/auth/current_user", {
       headers: {
         "Content-Type": "application/json",
         Accepts: "application/json",
         Authorization: token
       }
     })
       .then(resp => resp.json())
       .then(resp => {
         console.log("CDMount", resp);
         this.setState({
           user: resp
         });
       });
   } else {
     this.props.history.push("/signup");
   }
 };
loginUser = (e,user) => {
  e.preventDefault();
  const {username, password} = user;
  // console.log('Login deatailsss', username, password)
  axios.post('http://localhost:3000/auth/login', {
     username: username, password: password//can send this.state instead if preffered and know whats in state
  }).then(res => {
    localStorage.setItem('token', res.data.token);
    let current_user={user_id: res.data.user_id, username:res.data.username}

    // console.log('res from backend', this);
    this.setState({loggedIn:localStorage.getItem('token'),user:current_user})
    this.props.history.replace('/') //route props
  }).catch(err => console.log('login err', err))
}

handleSubmit = (e,user) =>{
  e.preventDefault()
  axios.post('http://localhost:3000/users',{
    name: user.name, username: user.username, password:user.password
  })
  .then(user =>{
        localStorage.setItem("token",user.data.token)
        let token=localStorage.getItem('token')

        let current_user={user_id: user.data.user_id, username:user.data.username}
        this.setState({
          user:current_user,
          loggedIn:localStorage.getItem('token')
        })
        // this.props.history.replace("/")
        }

  )
  .catch(err => alert("Blank field or user already created"))

}

logOut = () =>{
  this.setState({
    loggedIn:null
  })
}
render(){
  console.log(this.state)
return(

    <Fragment>
     <NavBar logOut={this.logOut}/>
      <Route exact path="/" render= {() => <Home active={this.state.loggedIn}/>} />
      <Route exact path="/signupForm" render= {() => <SignupForm handleSubmit={this.handleSubmit} />} />
      <Route exact path="/login" render={() => <Login loginUser={this.loginUser}/>} />
      <Route exact path="/Profile" render={()=><Profile loginUser={this.state.user}/>}/>
      <Route exact path="/currency" component={Currency} />
    </Fragment>

)
}
}
export default withRouter(Routes);
