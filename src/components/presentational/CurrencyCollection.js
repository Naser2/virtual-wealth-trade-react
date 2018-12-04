import React, { Component, Fragment } from 'react'
import Currency from './Currency';
import Profile from '../../Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class CurrencyCollection extends Component {
  state = {
    selectedCoins: []
  }


  handleCoinsChange = (event) => {
    console.log('event traget CHECKED: ', event.target)
    console.log(' In Currency Selectorrrr', "name:", event.target.name, "value:", event.target.value)
    const itemType = event.target.name
    const itemId = event.target.id
    const coin = this.props.cryptos.find(selected => selected.id == itemId);// Add to selected coin - && 
    this.setState({
      selectedCoins: this.state.selectedCoins.concat(coin)
    })
  }

  render() {
    console.log('CurrencyCollection cryptos:', this.props)
    let { cryptos } = this.props
    let cryptoArr = cryptos.map(cryptoObj => {
      return <Currency key={cryptoObj.id} crypto={cryptoObj}
        selectedCoins={this.state.selectedCoins} handleCoinsChange={this.handleCoinsChange}
      />
    })


    console.log(cryptoArr)

    return (
      <div className="ui raised container segment">
        <h1 className="ui block header">Top 20 Currencies and More</h1>
        <form className="ui form" id="order-form" onSubmit={this.handleSubmit}>
        <form>
          <div className="inline fields ui centered grid">
            
              {cryptoArr}
            

          </div>
          </form>

          <br />

          <button className="ui blue big button" type="submit">Save</button>
        </form>
      </div>
    )
  }
}



