import React from 'react';
/* import axios from 'axios'; */

class Heart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hearted: this.props.hearted
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleHeart();
  }

  render() {

    return (
      <div  id="j-left1-bottom-right">
        <div  id="j-left1-bottom-right-inner1">
          <div  id="j-left1-bottom-right-inner2">
            <div>
              <div  id="j-left1-bottom-right-inner3">
                <span  id="j-heart" className={this.props.hearted ? "j-fill-heart" : "j-empty-heart"} onClick={this.handleClick}>
                  <svg viewBox="0 0 26 26" width="1em" height="1em"><path stroke="rgb(44,44,44)" strokeWidth="2" d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988z"></path></svg>
                </span>
              </div>
              <div>
                <span>
                  <div>
                    <span>
                      <span className="j-ui_icon share">
                      </span>
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/* function UnclickedHeart(props) {
  return (
    <div>
      <span  id="j-heart" className={props.hearted ? "hide-heart" : "show-heart"} onClick={props.handleClick}>
        <svg viewBox="0 0 24 24" width="1em" height="1em"><path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988z"></path></svg>
      </span>
    </div>

  )
}

function ClickedHeart(props) {
  return (
    <div>
      <span  id="j-clicked-heart" className={props.hearted ? "show-heart" : "hide-heart"} onClick={props.handleClick}>
        <svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="white"d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988zM7.709 5.271a3.935 3.935 0 00-2.727 1.068c-1.578 1.498-1.06 3.708.088 5.128 1.306 1.613 5.333 5.204 6.925 6.605 1.583-1.404 5.58-4.993 6.899-6.601 1.195-1.455 1.685-3.603.085-5.122-.726-.689-1.694-1.069-2.728-1.069s-2.001.38-2.728 1.069l-1.539 1.462-1.551-1.473a3.925 3.925 0 00-2.724-1.067z"></path></svg>
      </span>
    </div>
  )
} */

export default Heart
