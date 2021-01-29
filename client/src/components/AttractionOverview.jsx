import React from 'react';
import axios from 'axios';
import Heart from './Heart.jsx';
import NavDots from './NavDots.jsx';
import OverviewHeader from './OverviewHeader.jsx';
import RankAndCategory from './RankAndCategory.jsx';
import ReviewList from './ReviewList.jsx';
import Tours from './Tours.jsx';
import '../attraction-overview.css';

const proxyUrl = document.getElementById('proxyUrl');
const serverUrl = proxyUrl ? proxyUrl.attributes[2].nodeValue + '/api/attraction?attactionId=1' : '/api/attraction?attactionId=1';

class AttractionOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attraction: {},
      hearted: false,
      currentPhoto: 0
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.toggleHeart = this.toggleHeart.bind(this);
    this.iteratePhoto = this.iteratePhoto.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get(serverUrl, ).then((response) => {
      this.setState({
        attraction: response.data[0],
        hearted: false,
        currentPhoto: 0
      });
    }).catch(err => console.log(err));
  }

  toggleHeart() {
    this.setState((state) => {
      return {hearted: !state.hearted}
    })
    console.log(this.state.hearted)
  }

  handleClick() {
    console.log(this.state.attractions.photos);
    // launch modal on clicked photo
  }

  iteratePhoto(direction) {
    let index = this.state.currentPhoto;
    let length = this.state.attraction.photos.length;
    if (direction === -1 && index === 0) {
      return
    } else if (direction === 1 && index === length - 1) {
      return
    } else {
      this.setState((state) => {
        if (direction === -1) {
          if (state.currentPhoto === 1) {
            document.getElementById("j-navigate-left").style.display = "none";
          } else if (state.currentPhoto === length - 1) {
            document.getElementById("j-navigate-right").style.display = "inline-block";
          }
        } else if (index === length - 2) {
          document.getElementById("j-navigate-right").style.display = "none";
        } else if (direction && state.currentPhoto === 0) {
          document.getElementById("j-navigate-left").style.display = "inline-block";
        }
        console.log(`clicked! ${state.currentPhoto} out of ${length}`);
        return {currentPhoto: state.currentPhoto + direction};
      })
    }
  }

  render() {
    if (this.state.attraction.reviews) {
      return (
        <div className="j-module1">
          <div  id="j-container" className="j-ui_container">
            <div  id="j-AOleft">
              <div  id="j-left1">
                <div  id="j-left1-fix">
                  <div  id="j-left1-fix2">
                    <OverviewHeader attraction={this.state.attraction} />
                    <RankAndCategory attraction={this.state.attraction} />
                    <Heart hearted={this.state.hearted} toggleHeart={this.toggleHeart} />
                  </div>
                </div>
              </div>
              <div className="j-left2">
                <ReviewList reviews={this.state.attraction.reviews.slice(0, 2)}/>
              </div>
              <div className="j-left3">
                <Tours tourCount={this.state.attraction.tourCount} tourCategories={this.state.attraction.tourCategories}/>
              </div>
            </div>
            <div  id="j-AOright">
              <div  id="j-AOright-inner1">
                <div  id="j-AOright-inner2">
                  <div  id="j-AOright-inner3">
                    <div  id="j-AOright-inner4">
                      <div  id="j-AOright-inner5">
                        <ul  id="j-photo-list">
{/*                           <PhotoCarousel photos={this.state.attraction.photos} currentPhoto={this.state.currentPhoto} iteratePhoto={this.state.iteratePhoto}/> */}
                          {this.state.attraction.photos.map((photo, index) => {
                              return (
                                <li className={"j-carousel " + (this.state.currentPhoto === index ? "j-active" : "j-inactive")} key={index} onClick={this.handleClick}>
                                  <div className="j-carousel-photo">
                                    <img className="j-photo" src={photo.imageURL}/>
                                    <div className="j-photo"></div>
                                  </div>
                                </li>
                              )
                            })}
                        </ul>
                        <div  id="j-photo-overlay-container">
                          <span  id="j-full-view" /* onClick={this.launchModalOnImage} */>
                            <svg  id="j-central-gallery-launcher svg" viewBox="0 0 24 24" width="1em" height="1em">
                              <path fill="white" d="M21.5 2h-4.7c-.4 0-.7.5-.4.9L18 4.5l-5 5 1.4 1.4 5-5 1.7 1.7c.3.3.9.1.9-.4V2.5c0-.3-.3-.5-.5-.5zM2.5 22h4.7c.4 0 .7-.5.4-.9l-1.7-1.7 5-5L9.5 13l-5 5-1.7-1.7c-.3-.2-.8 0-.8.5v4.7c0 .3.2.5.5.5z">
                              </path>
                            </svg>
                            Full view
                          </span>
                        </div>
                        <div  id="j-arrow-container"></div>
                        <div  id="j-navigate-left" onClick={()=>{this.iteratePhoto(-1)}}><div>&#10094;</div></div>
                        <div  id="j-navigate-right" onClick={()=>{this.iteratePhoto(1)}}><div>&#10095;</div></div>
                        {/* <NavDots length={this.state.attraction.photos} currentPhoto={this.state.currentPhoto}/> */}
                        <div  id="j-all-photos-container">
                          <div  id="j-all-photos-inner-wrapper">
                            <button  id="j-all-photos-button">
                              <svg viewBox="0 0 24 24" height="20px" width="20px"  id="j-all-photos-svg">
                                <path d="M20 20H4c-1.103 0-2-.897-2-2V8c0-1.103.897-2 2-2h3.086l2-2h5.828l2 2H20c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2zM4 8v10h16.002L20 8h-3.914l-2-2H9.914l-2 2H4z"></path>
                                <path d="M12 16.5c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path>
                              </svg>
                              <span  id="j-all-photos-text-padding">
                                <span  id="j-all-photos-text">{`All Photos (${this.state.attraction.photos.length})`}</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default AttractionOverview
