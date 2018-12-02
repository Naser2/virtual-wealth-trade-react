import React, { Component } from 'react'

export default class Currency extends Component {

render() {

  // name={crypto.name}
  // price={crypto.price}
  // symbol={crypto.symbol}
  // website_slug={crypto.website_slug}
  // rank={crypto.rank}
  // circulating_supply={crypto.circulating_supply}
  // total_supply={crypto.total_supply}
  // max_supply={crypto.max_supply}
  // volume_24hp={crypto.volume_24hp}
  // market_cap={market_cap}
  // percent_change_1h={crypto.percent_change_1h}
  // percent_change_24h ={crypto.percent_change_24h}
  // percent_change_7d ={crypto.percent_change_7d}
  // onChange={this.props.handleOnHomeCurrency}

  const crypto = this.props.crypto
  return (
      <div className="field">
        <div className="ui checkbox">
          <input
            id="barbacoa"
            type="checkbox"
            value="Barbacoa"
            name="protein"
          />
          <img src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${crypto.id}.png`} height="40px" width="40px" alt="barbacoa" />
          <label htmlFor="barbacoa">{crypto.name}</label>
        </div>
      </div>
  )
}
}
