import React, {Component} from 'react'

export default class CoinDetails extends Component{

  render(){
    console.log(this.props.coin)
    return(
      <button onClick={this.props.BackHandler}>Go Back</button>
    )
  }
}
