import React, { Component } from 'react'

export default class CoinDetails extends Component {



  
  render() {
    console.log(this.props.coin)
    const { coin } = this.props;
    return (
      <div className="ui container centered aligned">
        <div className="ui centered card">
          <div className="image">
            <img src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${coin.id}.png`} />
          </div>
          <div className="content">
            <a className="header">{coin.name}</a>
            <div className="meta">
              <span className="date">Price: <a>${coin.quotes.USD.price}</a></span> <br />
              <span className="date">Market Cap: $<a>{coin.quotes.USD.market_cap}</a></span> <br />
              <span className="date">24hr Percent Change: <a>{coin.quotes.USD.percent_change_24h}%</a></span>
            </div>
            <div className="description">
              Latest Update
            </div>
            <button onClick={() => this.props.handleClick(coin) }>Un-Wactch</button>
          </div>
        </div>
      </div>
    )
  }
}