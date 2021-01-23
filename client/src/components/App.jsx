import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Heart from './Heart.jsx';

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
    this.handleClick = this.handleClick.bind(this);
    this.iteratePhoto = this.iteratePhoto.bind(this);
  }

  componentDidMount() {
    axios.get('/api/attraction').then((response) => {
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
  }

  iteratePhoto() {
    this.setState((state) => {
      return {currentPhoto: state.currentPhoto + 1}
    })
    console.log(`Current Index is ${this.state.currentPhoto}`)
  }

  render() {
    if (this.state.attraction.reviews) {
      return (
        <div className="module1">
          <link rel="stylesheet" href="style.css"/>
          <div id="container" className="ui_container">
            <div id="AOleft">
              <div id="left1">
                <div id="left1-fix">
                  <div id="left1-fix2">
                    <OverviewHeader attraction={this.state.attraction} />
                    <RankAndCategory attraction={this.state.attraction} />
                    <Heart hearted={this.state.hearted} toggleHeart={this.toggleHeart} />
                  </div>
                </div>
              </div>
              <div className="left2">
                <ReviewList reviews={this.state.attraction.reviews.slice(0, 2)}/>
              </div>
              <div className="left3">
                <Tours tourCount={this.state.attraction.tourCount} tourCategories={this.state.attraction.tourCategories}/>
              </div>
            </div>
            <div id="AOright">
              <div id="AOright-inner1">
                <div id="AOright-inner2">
                  <div id="AOright-inner3">
                    <div id="AOright-inner4">
                      <div id="AOright-inner5">
                        <ul id="photo-list">
{/*                           <PhotoCarousel photos={this.state.attraction.photos} currentPhoto={this.state.currentPhoto} iteratePhoto={this.state.iteratePhoto}/> */}
                          {this.state.attraction.photos.map((photo, index) => {
                              return (
                                <li className={"carousel " + (this.state.currentPhoto === index ? "active" : "inactive")} key={index} onClick={this.handleClick}>
                                  <div className="carousel-photo">
                                    <img className="reviewPhoto" src={photo.imageURL}/>
                                    <div className="reviewPhoto"></div>
                                  </div>
                                </li>
                              )
                            })}
                        </ul>
                        <div id="photo-overlay-container">
                          <span id="full-view" >
                            <svg id="central-gallery-launcher svg" viewBox="0 0 24 24" width="1em" height="1em">
                              <path fill="white" d="M21.5 2h-4.7c-.4 0-.7.5-.4.9L18 4.5l-5 5 1.4 1.4 5-5 1.7 1.7c.3.3.9.1.9-.4V2.5c0-.3-.3-.5-.5-.5zM2.5 22h4.7c.4 0 .7-.5.4-.9l-1.7-1.7 5-5L9.5 13l-5 5-1.7-1.7c-.3-.2-.8 0-.8.5v4.7c0 .3.2.5.5.5z">
                              </path>
                            </svg>
                            Full view
                          </span>
                        </div>
                        <div id="arrow-container"></div>
                        <div id="navigate-left"><div>&#10094;</div></div>
                        <div id="navigate-right"><div>&#10095;</div></div>
                        <div id="nav-dots-container">
                          <div id="nav-dots-inner-wrapper">
                            <div className="nav-dot first-dot"></div>
                            <div className="nav-dot selected"></div>
                            <div className="nav-dot next-dot"></div>
                            <div className="nav-dot"></div>
                            <div className="nav-dot"></div>
                            <div className="nav-dot"></div>
                            <div className="nav-dot last-dot"></div>
                          </div>
                        </div>
                        <div id="all-photos-container">
                          <div id="all-photos-inner-wrapper">
                            <button id="all-photos-button">
                              <svg viewBox="0 0 24 24" height="20px" width="20px" id="all-photos-svg">
                                <path d="M20 20H4c-1.103 0-2-.897-2-2V8c0-1.103.897-2 2-2h3.086l2-2h5.828l2 2H20c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2zM4 8v10h16.002L20 8h-3.914l-2-2H9.914l-2 2H4z"></path>
                                <path d="M12 16.5c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path>
                              </svg>
                              <span id="all-photos-text-padding">
                                <span id="all-photos-text">{`All Photos (${this.state.attraction.photos.length})`}</span>
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

function OverviewHeader(props) {
  return (
    <div id="left1-top">
      <h1 id="overview-header">{props.attraction.attractionName}</h1>
      <div id="overview-subtitle">
        <span className={`ui_bubble_rating bubble_${props.attraction.averageRating}`}>
        </span>
        <span id="review-count">{`${props.attraction.reviewCount} Reviews`}</span>
      </div>
    </div>
  )
}

function RankAndCategory(props) {
  return (
    <div id="left1-bottom-left">
      <div id="left1-bottom-left-inner">
        <ul>
          <li>
            <div id="rank-container">
              <div id="rank-container-inner">
                <span>
                    <b>
                      <span>
                      {`#${props.attraction.rank}`}
                      </span>
                    </b>
                    {`  of ${props.attraction.ranked} `}
                    <a href="about/blank" className="black-link">{`things to do in ${props.attraction.greaterArea}`}</a>
                </span>
              </div>
            </div>
          </li>
          <li></li>
          <li id="category-container">
            <span>
              <a href="about/blank" className="black-link">{props.attraction.category}</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

const ReviewList = (props) => {
  return (
    <div className="review-list-container">
      <div>
        <div>
          <div className="review-list-tagline">
            <h2>What travelers are saying</h2>
          </div>
          <div>
            <div className="review-section-preview">
              <Review review={props.reviews[0]}/>
              <Review review={props.reviews[1]}/>
            </div>
            <a className="review-section-link black-link" href="#REVIEWS">See all reviews</a>
          </div>
        </div>
        <div className="review-improve-container">
          <div className="review-improve-spacer">
            <span className="ui_icon pencil review-improve-pencil"></span>
            <div>
              <a className="review-improve-link black-link" href="#UPDATE">Improve This Listing</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Review = (props) => {
  return (
    <div className="review">
      <div className="review-left">
        <span className="ui_avatar">
          <div>
            <svg viewBox="0 0 24 24" width="42px" height="42px" className="review-avatar _2JndpOur"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7.88 18.85a4.271 4.271 0 018.24 0 8.001 8.001 0 01-8.24 0zm9.89-1.321a6.257 6.257 0 00-11.537 0 8 8 0 1111.537 0z"></path><path d="M12 6a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"></path></svg>
          </div>
        </span>
      </div>
      <div className="review-right">
        <div className="body-and-tagline">
          <a className="tagline">"{props.review.tagline}"</a>
          <div>
            {props.review.body.substr(0, 100)}
            <a href="#reviews" className="review-read-more">...Read more</a>
          </div>
          <div className="bubbles-and-date">
            <div className="bubbles">
              <span className={`ui_bubble_rating bubble_${props.review.rating}0`}></span>
            </div>
            <div className="date">Reviewed on {moment(props.review.createdAt).format("MMMM D, YYYY")}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Tours = (props) => {
  return (
    <div className="tours-outer">
      <div className="tours-inner">
        <div className="tours-top">
          <div className="tours-top-left">
            <span className="ui_icon activities"></span>
          </div>
          <div className="tours-top-right">
            <div className="tours-top-right-top">
              <span>{`${props.tourCount} Tours & Experiences`}</span>
            </div>
            <div className="tours-top-right-bottom">
              <span>{`${props.tourCategories} & more`}</span>
            </div>
          </div>
        </div>
        <button className="ui_button primary fullwidth tours-bottom">
          <div className="tours-bottom-inner">
            <div className="tours-bottom-text">See available tour options</div>
            <div className="tours-bottom-arrow">
              <span className="ui_icon arrow-down"></span>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

/* const PhotoList = (props) => {
  return (
    <ul id="photo-list">
      {props.photos.map((photo, index) => {
        <Photo photo={photo} key={index} onClick={props.onClick} className={index === props.currentPhoto ? "active" : "inactive"}/>
      })}
    </ul>
  )
} */

/* const Photo = (props) => {
  console.log(props);
  return (
    <li className={`carousel ${props.className}`} key={props.key} onClick={props.onClick}>
      <div className="carousel-photo">
        <img className="reviewPhoto" src={props.photo.imageURL}/>
        <div className=""></div>
      </div>
    </li>
  )
} */

export default AttractionOverview
