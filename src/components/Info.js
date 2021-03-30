import React, { Component } from 'react';
import '../styles/info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from '../firestore';
import 'firebase/firestore';
import 'firebase/storage';


class Info extends Component {

  state = {
    stories: [],
    loaded: false
  }

  componentDidMount = () => {
    this.fetchStories();
  }


  // get stories collection data from firestore
  fetchStories = () => {
    const db = firebase.firestore();
    const storage = firebase.storage().ref();
    const holder = this.state.stories;
    const storiesRef = db.collection('stories');
    storiesRef.get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let item = doc.data();  
        if (item.image != null) {
          storage.child(`${item.image}`).getDownloadURL().then(url => {
            item.url = url;
          }).then(() => {
            holder.push(item);
            this.setState({stories: holder});
          }).catch(function(e) {
            console.log(e.message);
          });
        }
        else {
          holder.push(item);
          this.setState({stories: holder});
        }
      });
    });
  }

  // compare function for stories via timestamps to sort them in reverse chronological order
  storyTimestamps = (a, b) => {
    if (a.timestamp > b.timestamp)
      return -1;
    else
      return 1;
  }


  render () {
    
    var stories = this.state.stories;
    stories.sort(this.storyTimestamps);
    return (
      <div className="Info">
        <div className="Profiles">
          <div id="sectiontitle">TIMELINE</div>
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
        <div className="Infomeat">
          <div className="Storymain">
            {stories.map((story, idx) => {
              return (
                <div className="story" key={idx}>
                  {story.image != null ?
                    <div className="storyimagebox">
                      <a rel='noopener noreferrer' target='_blank' href={story.link}>
                        <img src={story.url} alt='Related view' />
                      </a>
                    </div>
                    : ""
                  }
                  <div className="storydetails">
                    {story.khronos == null ?
                      "" : (
                        <span className="storykhronos">{story.khronos}</span>
                      )
                    }
                    <span className="storytitle">{story.title}</span>
                    <p>{story.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Info;