import React, { Component } from 'react'

export default class SearchBar extends Component {
  
  render() {
    return (
      <div>
          <input name="searchInput" value={this.props.searchData} onChange={this.props.getSearchedCurrencies} /> <br />
      </div>
    )
  }
}

