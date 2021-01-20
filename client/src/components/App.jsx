import React from 'react';
import axios from 'axios';

class AttractionOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attraction: {}
    }
  }

  componentDidMount() {
    axios.get('/api/attraction').then((response) => {
      this.setState({
        attraction: response.data[0]
      });
      document.getElementById("container").append(JSON.stringify(response.data[0]));
    }).then(()=> {overviewHeader.call(this)}).catch(err => console.log(err));
  }

  render() {
    return (
      <div id="container">
        <div id="AOleft">
          <div id="left1">
            {_.once(overviewHeader.call(this))}
            <div id="left1-bottom-left">
              <ul>
                <li>
                  <div>
                    <div>
                      <span>
                          <b>
                            <span>
                            {`#${this.state.attraction.rank}`}
                            </span>
                          </b>
                          {` of ${this.state.attraction.ranked} `}
                          <a href="about/blank">things to do in {this.state.attraction.greaterArea}</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li></li>
                <li>
                  <span>
                    <a href="about/blank">{this.state.attraction.category}</a>
                  </span>
                </li>
              </ul>
            </div>
            <div id="left1-bottom-right">

              <div className="heart-clicked">
                <svg viewBox="0 0 24 24" width="1em" height="1em"><path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988z"></path></svg>
              </div>

              <div className="heart-unclicked">
                <svg viewBox="0 0 24 24" width="1em" height="1em"><path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988zM7.709 5.271a3.935 3.935 0 00-2.727 1.068c-1.578 1.498-1.06 3.708.088 5.128 1.306 1.613 5.333 5.204 6.925 6.605 1.583-1.404 5.58-4.993 6.899-6.601 1.195-1.455 1.685-3.603.085-5.122-.726-.689-1.694-1.069-2.728-1.069s-2.001.38-2.728 1.069l-1.539 1.462-1.551-1.473a3.925 3.925 0 00-2.724-1.067z"></path></svg>
              </div>

            </div>
          </div>
          <div className="left2">

          </div>
          <div className="left3">

          </div>
        </div>
        <div id="AOright">

        </div>
      </div>
    )
  }
}

const overviewHeader = function () {
  if (this === undefined) {
    return
  } else {
    return (
      <div id="left1-top">
        <div id="overview-header">{this.state.attraction.attractionName}</div>
        <div id="overview-subtitle">
          <span className="review-bubble">{this.state.attraction.averageRating}</span>
          <span id="review-count">{this.state.attraction.reviews ? this.state.attraction.reviews.length : ''} Reviews</span>
        </div>
      </div>
    )
  }
}

export default AttractionOverview
