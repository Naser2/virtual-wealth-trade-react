import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/containers/Form';
import Search from './SearchBar';
import { SearchBar } from 'material-ui-search-bar';
import { AutoComplete } from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignupForm from './SignupForm';
import CoinDetails from './CoinDetails';
import { NavLink, Link } from 'react-router-dom';
import CurrencyCollection from './components/presentational/CurrencyCollection';
import Profile from './Profile';
import SweetAlert from 'react-bootstrap-sweetalert'

class Home extends Component {
  state = {
    initial: true,
    signup: false,
    login: false,
    search: '',
    cryptos: [],
    rerender: [],
    theCoin: null,
    showCoin: false
  };
getCryptos = () => {
  axios.get(`http://localhost:3001/cryptos`).then(res =>
      this.setState(
        {
          cryptos: res.data,
          rerender: res.data
        },
        () => console.log('CRYTOS : ', this.state)
      )
    );
}
  componentDidMount() {
    console.log('HELLO HOME : ');
    this.getCryptos()
    
  }

  getSearchedCurrencies = e => {
    console.log('searchdata', e.target.value);
    this.setState(
      {
        search: e.target.value
      },
      () => {
        const regex = new RegExp(this.state.search, 'i');
        const filteredCurrencies = this.state.cryptos.filter(crypto =>
          regex.test(crypto.name)
        );
        this.setState({
          rerender: filteredCurrencies
        });
      }
    );
  };

  signupForm = obj => {
    this.setState({
      signup: true,
      initial: false
    });
  };

  signupHandler = obj => {
    axios.post(`http://localhost:3001/users`, {
      name: obj.name,
      username: obj.username,
      password: obj.password
    });
    this.setState({
      signup: true
    });
  };

  loginForm = () => {
    this.setState({
      login: true,
      initial: false
    });
  };

  loginHandler = obj => {
    axios
      .get(`http://localhost:3001/users/${obj.username}`)
      .then(response => console.log(response.data));
  };

  loginRender = () => {
    if (this.state.initial === true) {
      return (
        <div>
          <button onClick={this.signupForm}>Sign Up</button>
          <button onClick={this.loginForm}>Login</button>
        </div>
      );
    } else if (this.state.signup === true) {
      return (
        <Form
          // showName={true}
          name=""
          username=""
          password=""
          SubmitHandler={this.signupHandler}
        />
      );
    } else if (this.state.login === true) {
      return (
        <Form
          // showName={false}
          name=""
          username=""
          password=""
          SubmitHandler={this.loginHandler}
        />
      );
    } else {
      //person is logged in, show search component,currencyContainer, etc.
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
  redirectToSignUp = () => {
    window.location.assign('/signupForm');
  };
  redirectToLogIn = () => {
    window.location.assign('/login');
  };
  render() {
    const { rerender } = this.state;
    console.log("HOME STATE: ", this.state )
    console.log("HOME RERENDER:  ", rerender )
    
    console.log(this.state.showCoin);
    console.log('Checking Props: ', this.props.active);
    return (
      <div className="multithemeWrapper">
        <MuiThemeProvider>
          <>
            <section className="jsx-1013649062 marketingSection">
            {/* <SweetAlert
                show={this.state.newAddressSaved}
                title="New Address"
                text="New Address Saved Successfully"
                onConfirm={() => {
                  this.setState({ newAddressSaved: false });
                  window.location.href = '/profile';
                }}
              /> */}
              {this.props.active ? (
                <>
                  <h3 className="hold_divs landing-title">
                    Get the best coins out there.
                  </h3>
                </>
              ) : (
                <>
                  <p className="jsx-1013649062 landing-tagline">
                    Stop wasting time tracking individual coins and take away
                    the element of surprise by having the best platform to do
                    it. It gives you an instant relief as you track the coins
                    fluctuation. Learn, and build wealth all in one place.
                  </p>

                  <div style={{ marginTop: '2em' }} className="button_div">
                    <div
                      className="signup-button"
                      Link="/signup"
                      onClick={this.redirectToSignUp}
                    >
                      Sign up
                    </div>{' '}
                    <div
                      className="login-button"
                      href="/login"
                      onClick={this.redirectToLogIn}
                    >
                      Login
                    </div>
                  </div>

                  <div className="landing-btc">
                    <img
                      alt="#!"
                      src="./bc.jpeg"
                      className="btc"
                      syle={{ width: '40px' }}
                    />
                  </div>
                </>
              )}
            </section>
          </>
          <h1 className="ui block header w-o-Border">
            Top 20 Currencies and More
          </h1>{' '}
          <Search
            searchData={this.state.search}
            getSearchedCurrencies={this.getSearchedCurrencies}
          />{' '}
        </MuiThemeProvider>

        <div className="insideMultithemeWrapper">
          <CurrencyCollection
            imageHandler={this.imageHandler}
            active={this.props.active ? true : false}
            cryptos={this.state.loggedIn ? rerender : rerender}
            activeUser={this.props.activeUser}
            //   token={this.state.token}
            //  name={this.state.name}
            username={this.props.username}
            //  user_id={this.state.user_id}
          />
          {/* {this.loginRender()} */}

          {this.state.showCoin ? (
            <CoinDetails
              BackHandler={this.BackHandler}
              coin={this.state.theCoin}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;
