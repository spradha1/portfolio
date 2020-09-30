import React, { Component } from 'react';
import DragScroll from 'react-dragscroll';
import "../styles/timeline.css";



class Timeline extends Component {

  state = {
    
  }

  render () {
    return (
      <DragScroll className="Timeline">
        <div>
          Site
        </div>
        <div>
          is
        </div>
        <div>
          under
        </div>
        <div>
          construction
        </div>
        <div>
          kids!
        </div>
      </DragScroll>
    )
  }
}

export default Timeline;