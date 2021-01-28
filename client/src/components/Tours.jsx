import React from 'react';

const Tours = function (props) {
  return (
    <div className="j-tours-outer">
      <div className="j-tours-inner">
        <div className="j-tours-top">
          <div className="j-tours-top-left">
            <span className="j-ui_icon activities"></span>
          </div>
          <div className="j-tours-top-right">
            <div className="j-tours-top-right-top">
              <span>{`${props.tourCount} Tours & Experiences`}</span>
            </div>
            <div className="j-tours-top-right-bottom">
              <span>{`${props.tourCategories} & more`}</span>
            </div>
          </div>
        </div>
        <button className="j-ui_button primary fullwidth tours-bottom">
          <div className="j-tours-bottom-inner">
            <div className="j-tours-bottom-text">See available tour options</div>
            <div className="j-tours-bottom-arrow">
              <span className="j-ui_icon arrow-down"></span>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Tours
