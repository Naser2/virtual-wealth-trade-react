import React, { Component, Fragment } from 'react'
import Currency from './Currency';

export default class CurrencyCollection extends Component {
  render() {
    console.log('CurrencyCollection cryptos:', this.props)
    let { cryptos, handleOnHomeCurrency } = this.props

    let cryptoArr = cryptos.map(cryptoObj => {
      return <Currency key={cryptoObj.id} crypto={cryptoObj} />
    })


    console.log(cryptoArr)

    return (
        <div className="ui raised container segment">
          <h1 className="ui block header">Top 20 Currencies and More</h1>
          <form className="ui form" id="order-form" onSubmit={this.handleSubmit}>
          <div className="inline fields ui centered grid">
            {cryptoArr}
            </div>

            <br />

            <button className="ui blue big button" type="submit">Save</button>
          </form>
        </div>
    )
  }
}



//     const returnObj = (obj) => {
//       for(var key in cryptos) {
//        return  <Currency key={cryptos[key].id} crypto={cryptos[key]} handleOnHomeCurrency={handleOnHomeCurrency} />
//         // console.log(key, cryptos[key].name)
//    }
// }