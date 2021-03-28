import React, { Component } from 'react';
import '../styles/sidenav.css';
import me from '../assets/me.jpg';


class Sidenav extends Component {

  render () {
    return (
      <div className="Sidenavmain">
        <div className="ProfileImageBox">
          <img id="ProfileImage" src={me} alt="Sanjiv Pradhanang" />
        </div>
        SANJIV P.
      </div>
    )
  }
}

export default Sidenav;