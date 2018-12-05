import React, {Component} from 'react'

export default class CoinDetails extends Component{

  render(){
    console.log(this.props.coin);
    const {coin} =  this.props;

    return(
      <div>
      <h1>{coin.name}</h1>
      <ul>
      <li>Name: {coin.symbol}</li>
      <li>Ranking Number: {coin.rank}</li>
      <li>Circulating Supply: {coin.circulating_supply}</li>
      <li>Total Supply: {coin.total_supply}</li>
      <li>Max Supply: {coin.max_supply}</li>
      <li>Volume: {coin.volume}</li>
      <li> Market Cap: {coin.market_cap}</li>
      <li>{coin.percent_change_1h}</li>
      <li>{coin.percent_change_24h}</li>
      <li>{coin.volume_24hp}</li> 
      </ul>
      <button onClick={this.props.BackHandler}>Go Back</button>
      </div>
    )
  }
}
// price:c.price,
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