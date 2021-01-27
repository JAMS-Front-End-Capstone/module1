import React from 'react';
import moment from 'moment';

const Review = (props) => {
  return (
    <div className="j-review">
      <div className="j-review-left">
        <span className="j-ui_avatar">
          <div>
            <svg viewBox="0 0 24 24" width="42px" height="42px" className="j-review-avatar _2JndpOur"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7.88 18.85a4.271 4.271 0 018.24 0 8.001 8.001 0 01-8.24 0zm9.89-1.321a6.257 6.257 0 00-11.537 0 8 8 0 1111.537 0z"></path><path d="M12 6a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"></path></svg>
          </div>
        </span>
      </div>
      <div className="j-review-right">
        <div className="j-body-and-tagline">
          <a className="j-tagline j-black-link" href={`#reviews?rid=${props.review.id}`}>"{props.review.tagline}"</a>
          <div>
            {props.review.body.substr(0, 100)}
            <a href={`#reviews?rid=${props.review.id}`} className="j-review-read-more">...Read more</a>
          </div>
          <div className="j-bubbles-and-date">
            <div className="j-bubbles">
              <span className={`j-ui_bubble_rating bubble_${props.review.rating}0`}></span>
            </div>
            <div className="j-date">Reviewed on {moment(props.review.createdAt).format("MMMM D, YYYY")}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review;
