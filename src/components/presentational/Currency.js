import React, { Component } from 'react'

export default class Currency extends Component {
  constructor() {
    super()
    this.state = {
      checked: false,
    }
  }
  showCheckBox= () =>{
    if(this.props.active){
      return (<input
        type="checkbox"
        key={this.props.crypto.id}
        id={this.props.crypto.id}
        value={this.state.checked}
        name={crypto.name}
        checked={this.props.selectedCoins.find(selected  => selected.id == crypto.id)}
        onChange={this.props.handleCoinsChange}
      />)
    }
    else{
      return null
    }
  }
  render() {
    const crypto = this.props.crypto
    return (
      <div className="field">
      
        {/* <div  className="ui checkbox" > */}
        {this.showCheckBox()}

        <img src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${crypto.id}.png`} height="40px" width="40px" alt="image" />
        <label htmlFor={crypto.name}>{crypto.name}</label>
      </div>
      // </div>
    )
  }
}
