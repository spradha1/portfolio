import React, { Component } from 'react';
import me from './assets/me.jpg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        <div className="centerPiece">
          <img src={me} alt="my portrait" />
          <p>IT'S SANJIV PRADHANANG!</p>
        </div>
        <div className="Profiles">
          <div><a href="https://github.com/spradha1" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
          </a></div>
          <div><a href="https://www.linkedin.com/in/sanjiv-pradhanang-a05967b5/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
          </a></div>
          <div><a href="mailto:pradhanang.sanjiv@gmail.com" >
            <FontAwesomeIcon icon={["far", "paper-plane"]} size="lg" />
          </a></div>
        </div>
      </div>
    )
  }
}

export default App;
