import React, { Component } from 'react'

export default class SearchBar extends Component {
  
  render() {
    return (
      <div>
          <input name="searchInput" value={this.props.searchData} onChange={this.props.getSearchedCurrencies} 
          style={{
            margin: '0 auto',
            maxWidth: '800',
            color: 'black',
            width: '100',
            position: 'relative ' ,
            height: '40px',
            border:' 1px solid #00B4CC',
            background: '#white',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '30px'
      }}/> <br />
      </div>
    )
  }
}

