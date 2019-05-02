import React, { Component, Fragment } from 'react';
import Currency from './Currency';
import Profile from '../../Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';

export default class CurrencyCollection extends Component {
  state = {
    selectedCoins: []
  };
  onConfirm = () => {};
  handleCoinsChange = event => {
    const itemId = event.target.id;
    const coin = this.props.cryptos.find(c => c.id == itemId);
    let dup = this.state.selectedCoins.find(c => c.id == coin.id);
    if (dup) {
      let copyArray = [...this.state.selectedCoins].filter(
        theCoin => theCoin !== dup
      );
      console.log('ytuytutytyh', copyArray);
      this.setState({
        selectedCoins: copyArray
      });
    } else {
      this.setState({
        selectedCoins: this.state.selectedCoins.concat(coin)
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.activeUser === null) {
      return (
        <SweetAlert title="Here's a message!" onConfirm={this.onConfirm} />
      );
    } else {
      const { username } = this.props.activeUser;
      const assets = {
        [username]: [...this.state.selectedCoins]
      };
      let oldAssets = localStorage.getItem('assets');
      if (oldAssets) {
        oldAssets = JSON.parse(oldAssets);
        //if user already saved assets
        if (oldAssets[username]) {
          //if user has assets in localStorage

          this.state.selectedCoins.forEach(c => {
            console.log('ccccc', c, 'oldddddd', oldAssets[username]);
            if (
              oldAssets[username].find(a => {
                console.log('ew Coinnn', c);
                console.log('Old coinnn', a);
                return a.id === c.id;
              })
            ) {
              console.log(`${c.name} this coin was already added`);
            } else {
              console.log(`${c.name} This coin was not  added`);
              oldAssets[username] = [
                //lets add the existing assets + the
                ...oldAssets[username],
                c
              ];
            }
          });
        } else {
          oldAssets = { ...oldAssets, ...assets };
        }
        localStorage.setItem('assets', JSON.stringify(oldAssets)); //stringify
      } else {
        localStorage.setItem('assets', JSON.stringify(assets));
      }
    }
  };

  btnMessage = () => {
   
      alert("You need to LOGIN to Save")
      // <h1 className="alert">
      //   alert(You need to <span style={{ color: '#ffcd0b' }}>LOGIN</span> to Save)
      // </h1>
    // );
    // window.location.href ='http://localhost:3000/login'
  };
  verifySaveBtnOption = () => {
    if (this.props.profile) {
      return null;
    } else if (!this.props.profile && !this.props.loggedIn) {
      return (
        <button
          className="ui blue big button button_ele"
          type="submit"
          onClick={this.btnMessage}
        >
          Save
        </button>
      );
    } else {
      return (
        <button className="ui blue big button button_ele" type="submit">
          Save
        </button>
      );
    }
  };
  render() {
    let { cryptos } = this.props;

    // console.log("Crypto IDDDDD:", cryptos)
    let cryptoArr = cryptos.map(cryptoObj => {
      return (
        <Currency
          imageHandler={this.props.imageHandler}
          key={cryptoObj.id}
          crypto={cryptoObj}
          active={this.props.active}
          selectedCoins={this.state.selectedCoins}
          handleCoinsChange={this.handleCoinsChange}
        />
      );
    });

    return (
      <div className="ui raised container segment">
        {this.props.profile ? (
          <h1 className="ui block header">Your Currencies</h1>
        ) : (
          <>
            {/* <>
              <h3 class="hold_divs landing-title">Get your ideas out there.</h3>
              <div style={{ marginTop: '2em' }} className="hold_divs">
                <p class="hold_divs landing-tagline">
                  Stop wasting time setting up a development environment.
                  Repl.it gives you an instant IDE to learn, build, collaborate,
                  and host all in one place.
                </p>
                <div className="hold_divs signup-button" href="/signup">
                  Sign up
                </div>
              </div>
            </> */}
            <h1 className="ui block header title">Search for Currencies </h1>{' '}
          </>
        )}
        <form className="ui form" id="order-form" onSubmit={this.handleSubmit}>
          <form>
            <div className="custom fields ui centered grid">{cryptoArr}</div>
          </form>
          <br />
          {this.verifySaveBtnOption()}
          {/* {this.props.profile  ?
            null : 
          
          (
            <button className="ui blue big button" type="submit">
              Save
            </button>
          )
         
          }  */}
        </form>
      </div>
    );
  }
}
