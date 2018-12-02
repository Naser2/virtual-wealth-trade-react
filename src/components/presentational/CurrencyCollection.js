import React, { Component, Fragment } from 'react'
import Currency from './Currency';

export default class CurrencyCollection extends Component {
  render() {
    console.log('CurrencyCollection cryptos:', this.props)
    let {cryptos, handleOnHomeCurrency} = this.props
    console.log('CurrencyCollection check:',cryptos)
    const  crypto = Object.keys(cryptos).forEach(item => item); 
    console.log(crypto)
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



