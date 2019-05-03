import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  state = {
    // id: this.props.user_id,
    name: '',
    username: '',
    password:''
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if (
      (this.state.username.length === 0 || this.state.password.length === 0) &&
      this.props.showName === false
    ) {
      alert('Fields cannot be left blank.');
    } else if (
      (this.state.username.length === 0 ||
        this.state.password.length === 0 ||
        this.state.name.length === 0) &&
      this.props.showName === true
    ) {
      alert('Fields cannot be left blank.');
    } else {
      this.submitHandler(this.state);
    }
  };
componentDidMount(){
  console.log( 'DID M ALL PROPS ', this.props)
  this.setState({name: this.props.name })
  
}
  render() {
    console.log(
      'FORM STATE',
      this.state,
      'FORM PROPS SHOWNAME',
      this.props.showName
    );
    console.log(
      
      'ALL PROPS ',
      this.props
    );
    return (
      <form onSubmit={e => this.submitHandler(e)} className="profile-form">
      
        {/* {this.props.showName ?  */}
        <label htmlFor="name">Name</label>
        {/* : null} */}
        {/* {this.props.showName ? ( */}
        <input
          type="text"
          name="name"
          value={this.props.name}
          onChange={this.changeHandler}
        />
        {/* )  : null} */}
        {/* {this.props.showName ?  */}
        <br />
        {/* : null } */}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.changeHandler}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={this.changeHandler} />
        <br />
        <input type="submit" />
      </form>
    );
  }
}
