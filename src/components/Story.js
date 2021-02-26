import React, { Component } from 'react';
import '../styles/story.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import me from '../assets/me.jpg';


class Story extends Component {

  state = {
    stories: [
      {
        title: "Preamble",
        khronos: "",
        text: "Hey, you have stumbled onto the profile of Sanjiv Pradhanang. This page is designated to introduce myself to current & prospective colleagues."
      },
      {
        title: "Started at Cerner Corporation",
        khronos: "01/20",
        text: "My first full-time job, as a Software Engineer",
        image: {me},
        link: "https://www.cerner.com"
      }
    ]
  }

  render () {
    var stories = this.state.stories;

    return (
      <div className="Storymain">
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
        <div className="Storysubmain">
          {stories.map( (story, idx) => {   
            return (
              <div className="story" key={idx}>
                {/* never use image with no link */}
                {story.image == null ?
                  "" : (
                  <div className="storyimagebox">
                    <a rel='noopener noreferrer' target='_blank' href={story.link}>
                      <img src={me} alt='link preview' />
                    </a>
                  </div>
                  )
                }
                <div className="storydetails">
                  <span className="storykhronos">{story.khronos}</span> &nbsp;
                  <span className="storytitle">{story.title}</span>
                  <p>{story.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Story;