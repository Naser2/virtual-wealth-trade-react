import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Routes from './Routes';
import NavBar from './NavBar'


// will have Nav bar[search] and main components 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
