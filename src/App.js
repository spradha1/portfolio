import React, { Component } from 'react';
import './App.css';
import './styles/response.css';
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

  scrollOnNavClick = (eid) => {
    const el = document.querySelector("#" + eid);
    const InfomeatElement = document.querySelector(".Infomeat");
    const windowWidth = window.innerWidth;
    var scrollAdj = 70
    if (windowWidth < 715) {
      scrollAdj = 96;
    }
    else if (windowWidth < 440) {
      scrollAdj = 0;
    }
    InfomeatElement.scroll({ top: (el.offsetTop - scrollAdj), left: 0, behavior: 'smooth' }); // adjusting to 70 px fixed header
  }


  render () {
    return (
      <div className="App">
        <Sidenav scrollOnNavClick={this.scrollOnNavClick} />
        <Info />
      </div>
    )
  }
}

export default App;
