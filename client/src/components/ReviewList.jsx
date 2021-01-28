import React from 'react';
import Review from './Review.jsx';

const ReviewList = function (props) {
  return (
    <div className="j-review-list-container">
      <div>
        <div>
          <div className="j-review-list-tagline">
            <h2>What travelers are saying</h2>
          </div>
          <div>
            <div className="j-review-section-preview">
              <Review review={props.reviews[0]}/>
              <Review review={props.reviews[1]}/>
            </div>
            <a className="j-review-section-link black-link" href="#REVIEWS">See all reviews</a>
          </div>
        </div>
        <div className="j-review-improve-container">
          <div className="j-review-improve-spacer">
            <span className="j-ui_icon pencil j-review-improve-pencil"></span>
            <div>
              <a className="j-review-improve-link j-black-link" href="#UPDATE">Improve This Listing</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewList;
