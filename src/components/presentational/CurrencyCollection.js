import React, { Component, Fragment } from 'react'
import Currency from './Currency';

export default class CurrencyCollection extends Component {
  render() {
    console.log('CurrencyCollection cryptos:', this.props)
    let {cryptos, handleOnHomeCurrency} = this.props
    console.log('CurrencyCollection:',cryptos, handleOnHomeCurrency)
    //  console.log( cryptos.map(crypto => crypto.name))
    // const crypto = cryptos.map(crypto => {
    //   return ( <Currency key={crypto.id}
    //            crypto={crypto}
    //            handleOnHomeCurency ={handleOnHomeCurrency}
    //     />
    //   )}
    // )

    return (
      <Fragment>
      <h1><label htmlFor="cryptos">Currencies Collection</label></h1>
    </Fragment>
    )
  }
}



