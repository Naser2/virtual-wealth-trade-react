import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';



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
