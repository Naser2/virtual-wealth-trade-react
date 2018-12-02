import React, { Component } from 'react'

export default class Currency extends Component {
  render() {

    const {crypto} = this.props.crypto 
    return (
      <div>
        Hello Currency
        <div className="inline fields ui centered grid">
        <div className="field">
            <input
              name={this.props.crypto.name}
              price={crypto.price}
              symbol={crypto.symbol}
              website_slug={crypto.website_slug}
              rank={crypto.rank}
              circulating_supply={crypto.circulating_supply}
              total_supply={crypto.total_supply}
              max_supply={crypto.max_supply}
              volume_24hp={crypto.volume_24hp}
              // market_cap={market_cap}
              percent_change_1h={crypto.percent_change_1h}
              percent_change_24h ={crypto.percent_change_24h}
              percent_change_7d ={crypto.percent_change_7d}
              onChange={this.props.handleOnHomeCurrency}
            />
            <img src={""} height="100px" width="100px" alt="white rice" />

          </div>
        </div>
        <button className="ui blue big button" type="submit">Submit</button>
      </div>
    )
  }
}
