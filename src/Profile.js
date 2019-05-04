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
import jwt from 'jsonwebtoken';

class Profile extends Component {
  state = {
    edit: false,
    editted: false,
    delete: false,
    redirect: false,
    selected: [],
    theCoin: null,
    user_id: '',
    username: this.props.username,
    email: '',
    token: this.props.loggedIn
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

  // handleClick = clickedCoin => {
  //   let assets = localStorage.getItem('assets');
  //   console.log('ASSETS: ', assets);
  //   console.log('PROPS DOT USERNAME UN_WATCH 1 : ', this.props.username);
  //   if (assets) {
  //     assets = JSON.parse(assets);
  //     const username = this.props.username;
  //     console.log('USERNAME DESTRUCTURED IN COLLECTION 1: ', username);
  //     console.log('APPEDING USERNAME to ASSESR: ', assets[this.props.username]);

  //     assets[this.props.username] = assets[this.props.username].filter(coin => {
  //       return coin.id !== clickedCoin.id;
  //     });
  //     localStorage.setItem('assets', JSON.stringify(assets));
  //     this.setState({
  //       selected: assets[this.props.username],
  //       theCoin: null
  //     });
  //     console.log('Asked to delete thissss');
  //   }
  // };
  // getAssets(){
  //   this.setState({
  //     username: this.props.username
  //   })
  //     console.log('PROFIEL PROPS USERNAME  : ', this.props.username);
  //     console.log('PROFILE TOKEN ', this.props.token);
  //     console.log('PROFILE LOGGEDIN ', this.props.loggedIn);
  //     if (!this.props.loggedIn) {
  //       this.props.history.replace('/');
  //     }
  //     if (this.props.loggedIn) {
  //       let auth = localStorage.getItem('auth');
  //       // const auth = jwt.decode(aut)

  //       let username = this.props.username;
  //       console.log('PROPS USERNAME  : ', username);
  //       let assets = localStorage.getItem('assets');
  //       // const username = this.props.username;
  //       console.log('PROFILE USERNAME: ', username, 'ASSETS: ', assets);
  //       if (assets) {
  //         assets = JSON.parse(assets);
  //         if (assets[username]) {
  //           this.setState({
  //             selected: assets[username]
  //           });
  //         }
  //       }
  //     }
  // }
  // componentDidMount() {
  //   this.getAssets()
  //   // alert("Hello Profile")
  // // this.setState({
  // //   username: this.props.username
  // // })
  // //   console.log('PROFIEL PROPS USERNAME  : ', this.props.username);
  // //   console.log('PROFILE TOKEN ', this.props.token);
  // //   console.log('PROFILE LOGGEDIN ', this.props.loggedIn);
  // //   if (!this.props.loggedIn) {
  // //     this.props.history.replace('/');
  // //   }
  // //   if (this.props.loggedIn) {
  // //     let auth = localStorage.getItem('auth');
  // //     // const auth = jwt.decode(aut)

  // //     let username = this.props.username;
  // //     console.log('PROPS USERNAME  : ', username);
  // //     let assets = localStorage.getItem('assets');
  // //     // const username = this.props.username;
  // //     console.log('PROFILE USERNAME: ', username, 'ASSETS: ', assets);
  // //     if (assets) {
  // //       assets = JSON.parse(assets);
  // //       if (assets[username]) {
  // //         this.setState({
  // //           selected: assets[username]
  // //         });
  // //       }
  // //     }
  //   // }
  //   console.log('PROFILE  DI MD :', this.props);
  // }
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
    console.log('COMPONENT DID MOUNT');
    console.log('LOGIN USER ==== NULL: ', this.props.loggedIn);
    if (this.props.loggedIn === null) {
      this.props.history.replace('/');
    }
    const loggedIn = this.props.loggedIn;
    console.log('LOGIN USER 2==== NULL: ', loggedIn);

    let token = localStorage.getItem('token');
    console.log('TOKEN : ', token);

    if (token) {
      let userDataItems = localStorage.getItem('auth');
      let auth = JSON.parse(userDataItems);
      console.log('USERNAME AUTH  :', auth);
      console.log('USERNAME  :', auth['username']);
      let username = auth['username'];
      let assets = localStorage.getItem('assets');
      // const { username } = this.props.activeUser;
      console.log(username, assets, 'username, assets');
      if (assets) {
        assets = JSON.parse(assets);
        if (assets[username]) {
          this.setState({
            selected: assets[username]
          });
        }
      }
    }
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
    let username = this.props.username;
    let assets = localStorage.getItem('assets');
    console.log('PROFILE USERNAME: ', username, 'ASSETS: ', assets);
    console.log('HEADER RENDER CHECK ', this.props.username);


    return (
      <div>
        <div className="ui raised container segment profile-header-wrapper-style">
          <ProfileHeader
            // username={username}
            user_id={this.props.user_id}
            name={this.props.name}
            username={this.props.username}
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
        <div class="btn-wrapper">
        <a href="#!" className="to-delete button"  onClick={this.deleteHandler}>Delete profile</a>
        </div>
        {/* <button onClick={this.deleteHandler}>Delete Profile</button> */}
      </div>
    );
  }
}

export default withRouter(Profile);
