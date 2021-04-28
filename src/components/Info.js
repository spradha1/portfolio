import React, { Component } from 'react';
import Story from './Story';
import Contact from './Contact';
import Gallery from './Gallery';
import '../styles/info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Info extends Component {

  state = {

  }


  render () {

    // Date computation
    const date = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes: minutes;
    var clock = hours > 12 ? hours%12 + ":" + minutes: hours + ":" + minutes;
    clock += hours < 12 ? " AM": " PM";
    const datestring = days[date.getDay()] + 'day, ' + months[date.getMonth()] + ' ' + date.getDate() + ", " + date.getFullYear() + ', ' + clock;
    
    

    return (
      <div className="Info">
        <div className="Profiles">
          <div id="topbarclock">{datestring}</div>
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
        <div className="Infomeat" id="Infomeat">
          <Story />
          <Gallery />
          <Contact />
        </div>
      </div>
    )
  }
}

export default Info;