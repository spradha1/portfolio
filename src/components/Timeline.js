import React, { Component } from 'react';
import firebase from '../firestore';
import 'firebase/firestore';
import 'firebase/storage';
import "../styles/timeline.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(
  fas
);


class Timeline extends Component {

  state = {
    chapters: [],
    timeStart: 0,
    timeEnd: 0,
    loaded: false
  }

  componentDidMount = () => {
    this.fetchChapters();
  }

  // get firestore data
  fetchChapters = () => {
    const db = firebase.firestore();
    const holder = [];
    const chaptersRef = db.collection('chapters').orderBy('Time');
    chaptersRef.get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let item = doc.data();
        holder.push(item);
      });
    }).then(() => {
      this.setState({ 
        chapters: holder,
        timeStart: holder[0].Time.toDate(),
        timeEnd: holder[holder.length-1].Time.toDate(),
        loaded: true
      });
    });
  }

  render () {
    if (this.state.loaded) {
      const chapters = this.state.chapters;
      const scaleStart = this.state.timeStart.getFullYear();
      const scaleEnd = this.state.timeEnd.getFullYear() + 1;
      const scale = [];
      for (var i=scaleStart; i<=scaleEnd; i++) { scale.push(i); }
      return (
        <div className="Timeline">
          <div className="Chapters">
            <div id="Pointer">
              <div><FontAwesomeIcon icon={["fas", "long-arrow-alt-down"]} size="2x" /></div>
            </div>
            <div id="Line"></div>
          </div>
          <div className="Scale">
            {scale.map((item, index) => {
              return (
                <div className="scaleMarking" key={index}>
                  <div className="year">{item}</div>
                  <div className="marking">|</div>
                </div>
              )
            })}
          </div>
        </div>
      )
    } else { return (<></>) }
  }
}

export default Timeline;