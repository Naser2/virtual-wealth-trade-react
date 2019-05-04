import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          name="searchInput"
          value={this.props.searchData}
          onChange={this.props.getSearchedCurrencies}
          placeholder="Search..."
          style={{
            margin: '0 auto',
            maxWidth: '800',
            color: 'black',
            width: '100',
            position: 'relative ',
            height: '40px',
            border: ' 2.5px solid #00B4CC',
            border: '4px solid #4286f4',
            background: '#white',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '30px',
            padding: '26px',
            borderRadius: '30px',
            marginBottom: '15px'
          }}
        />{' '}
        <br />
      </div>
    );
  }
}
