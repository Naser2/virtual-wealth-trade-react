import React, { Component } from 'react';
import Form from './components/containers/Form';
import axios from 'axios';
import { Redirect } from 'react-router';
import Search from './SearchBar';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import CurrencyCollection from './components/presentational/CurrencyCollection';
import CoinDetails from './CoinDetails';
import RevealExampleFade from './components/presentational/editProfile';
import DividerExampleVerticalForm from './components/ProfileHeader';
import ProfileHeader from './components/ProfileHeader';

class Profile extends Component {
  state = {
    edit: false,
    editted: false,
    delete: false,
    redirect: false,
    selected: [],
    theCoin: null,
    user_id: '',
    username: '',
    email: '',
    token: ''
    //showCoin: false
  };
  showEditForm = () => {
    console.log('CLICKED ');
    return (
      <form
        // showName={true}
        name="Nasser"
        username={this.username}
        password=""
        SubmitHandler={this.SubmitHandler}
      />
    );
  };

  handleClick = clickedCoin => {
    let assets = localStorage.getItem('assets');
    assets = JSON.parse(assets);
    const { username } = this.props.activeUser;
    console.log(username, 'user');
    assets[username] = assets[username].filter(coin => {
      return coin.id !== clickedCoin.id;
    });
    localStorage.setItem('assets', JSON.stringify(assets));
    this.setState({
      selected: assets[username],
      theCoin: null
    });
    console.log('Asked to delete thissss');
  };

  componentDidMount() {
    console.log('PROFILE', this.props.loginUser);
    if (this.props.loginUser === null) {
      this.props.history.replace('/');
    }
    if (this.props.token !== null) {
      let assets = localStorage.getItem('assets');
      const { username } = this.props;
      console.log('PROFILE', username, assets, 'username, assets');
      if (assets) {
        assets = JSON.parse(assets);
        if (assets[username]) {
          this.setState({
            selected: assets[username]
          });
        }
      }
    }
    console.log('PROFILE  DI MD :', this.props);
  }

  editHandler = () => {
    this.setState({
      edit: true
    });
  };

  deleteHandler = () => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete your account?'
    );
    if (isConfirmed) {
      this.setState({
        delete: true
      });
    }
  };

  patchOrPost = obj => {
    const isConfirmed = window.confirm('Are you sure?');
    if (isConfirmed) {
      axios
        .patch(`http://localhost:3001/users/${obj.id}`, {
          name: obj.name,
          username: obj.username,
          password: obj.password
        })
        .then(response =>
          this.setState({
            editted: true,
            edit: false
          })
        );
    }
  };

  YesHandler = () => {
    axios.delete(`http://localhost:3001/users/7`);
    this.setState({
      redirect: true,
      delete: false
    });
  };

  NoHandler = () => {
    this.setState({
      delete: false
    });
  };

  deleteProfile = () => {
    if (this.state.edit) {
      return (
        <Form
          // showName={true}
          name="Nasser"
          username="Nas"
          password="123"
          SubmitHandler={this.patchOrPost}
        />
      );
    } else if (this.state.delete) {
      return (
        <div>
          <h1>Are You Sure you want to delete your profile?</h1>
          <button onClick={() => this.YesHandler()}>Yes</button>
          <button onClick={() => this.NoHandler()}>Take Me Back</button>
        </div>
      );
    } else if (this.state.redirect) {
      console.log('redirect');
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          {this.state.editted ? <p>Edit Saved</p> : null}
          {/* <RevealExampleFade /> */}

          <p>Options</p>
          <table className="editProfile">
            <tbody>
              <tr className="options" onClick={this.editHandler}>
                Edit
              </tr>
              <tr className="options" onClick={this.deleteHandler}>
                Delete
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  };

  imageHandler = obj => {
    console.log('image handler');
    this.setState({
      theCoin: obj,
      showCoin: true
    });
  };

  BackHandler = () => {
    this.setState({
      theCoin: null,
      showCoin: false
    });
  };
  render() {
    // const {user_id, name, user_name, token } = this.props.user
    // console.log('HEADER RENDER CHECK1 ', user_name, user_id, name );

    console.log('HEADER RENDER CHECK ', this.props.user);
    // const { username } = this.props.user;
    return (
      <div>
        <div className="ui raised container segment">
          {/* <h1 className="ui block header">Edit Profile</h1> */}
          {/* <RevealExampleFade username={username} SubmitHandler={this.patchOrPost} showEditForm={this.showEditForm}/> */}
          <ProfileHeader
            // username={username}
            user_id= {this.props.user_id}
            name= {this.props.name}
            username= {this.props.username}

            patchOrPost={this.patchOrPost}
            showEditForm={this.showEditForm}
            user={this.props.user}
          />
        </div>
        {this.state.theCoin !== null ? (
          <CoinDetails
            BackHandler={this.BackHandler}
            coin={this.state.theCoin}
            handleClick={this.handleClick}
          />
        ) : null}
        <CurrencyCollection
          imageHandler={this.imageHandler}
          active={this.props.active ? true : false}
          cryptos={this.state.selected}
          activeUser={this.props.activeUser}
          profile={true}
        />
        <button onClick={this.deleteHandler}>Delete Profile</button>
      </div>
    );
  }
}

export default withRouter(Profile);
