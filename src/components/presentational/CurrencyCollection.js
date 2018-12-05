import React, { Component, Fragment } from 'react'
import Currency from './Currency';
import Profile from '../../Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios'


export default class CurrencyCollection extends Component {
  state = {
    selectedCoins: []

  }

  handleCoinsChange = (event) => {
    const itemId = event.target.id
    const coin = this.props.cryptos.find(c => c.id == itemId);
    let dup = this.state.selectedCoins.find(c => c.id == coin.id)
    if(dup){
      let copyArray = [...this.state.selectedCoins].filter(theCoin => theCoin !== dup)
      console.log(copyArray)
      this.setState({
        selectedCoins: copyArray
      })
    } else {
      this.setState({
        selectedCoins: this.state.selectedCoins.concat(coin)
      })
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const { username } = this.props.activeUser;

    const assets = {
      [username]: [...this.state.selectedCoins]
    };
    let oldAssets = localStorage.getItem('assets');
    if(oldAssets) {
      oldAssets =  JSON.parse(oldAssets);
      //if user already saved assets
      if(oldAssets[username]){ //if user has assets in localStorage
        oldAssets[username] = [ //lets add the existing assets + the
          ...oldAssets[username],
          ...this.state.selectedCoins
        ]
      } else {
        oldAssets = { ...oldAssets, ...assets};
      }
      localStorage.setItem('assets', JSON.stringify(oldAssets))  //stringify
    } else {
      localStorage.setItem('assets', JSON.stringify(assets))
    }


    // this.state.selectedCoins.forEach((c) => {
    //   axios.post(`http://localhost:3000/assets`,
    //   {
    //     name: c.name,
    //     price:c.price,
    //     symbol:c.symbol,
    //     website_slug:c.website_slug,
    //     rank:c.rank,
    //     circulating_supply:c.circulating_supply,
    //     total_supply:c.total_supply,
    //     max_supply:c.max_supply,
    //     volume_24hp:c.volume_24hp,
    //     market_cap: c.market_cap,
    //     percent_change_1h:c.percent_change_1h,
    //     percent_change_24h :c.percent_change_24h,
    //     percent_change_7d :c.percent_change_7d,
    //   })
    // })



  }

  render() {

    let { cryptos } = this.props

    // console.log("Crypto IDDDDD:", cryptos)
    let cryptoArr = cryptos.map(cryptoObj => {
      return <Currency imageHandler={this.props.imageHandler} key={cryptoObj.id} crypto={cryptoObj} active={this.props.active}
        selectedCoins={this.state.selectedCoins} handleCoinsChange={this.handleCoinsChange}
      />
    })

    return (
      <div className="ui raised container segment">
      {this.props.profile ? <h1 className="ui block header">Your Currencies</h1> :<h1 className="ui block header">Top 20 Currencies and More</h1> }
        <form className="ui form" id="order-form" onSubmit={this.handleSubmit}>
        <form>
          <div className="inline fields ui centered grid">
              {cryptoArr}
          </div>
          </form>
          <br />
        {this.props.profile ? null : <button className="ui blue big button" type="submit">Save</button>}
        </form>
        
      </div>
    )
  }
}
