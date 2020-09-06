import React, { Component } from 'react';
import me from './assets/me.jpg';
import './App.css';

class App extends Component {

  render () {
    return (
      <div className="App">
        <div className="centerPiece">
          <img src={me} alt="my portrait" />
          <p>SANJIV PRADHANANG!</p>
        </div>
      </div>
    )
  }
}

export default App;
