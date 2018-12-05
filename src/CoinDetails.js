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
              <span className="date">Price: ${coin.quotes.USD.price}</span> <br />
              <span className="date">Market Cap: ${coin.quotes.USD.market_cap}</span> <br />
              <span className="date">24hr Percent Change: {coin.quotes.USD.percent_change_24h}%</span>
            </div>
            <div className="description">
              Nasser is an art director living in New York.
            </div>
          </div>
        </div>
      </div>
    )
  }
}