import React, { Component } from 'react';
import './App.css';
import Sidenav from './components/Sidenav';
import Info from './components/Info';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(
  fab,
  far
);

class App extends Component {

  render () {
    return (
      <div className="App">
        <Sidenav />
        <Info />
      </div>
    )
  }
}

export default App;
