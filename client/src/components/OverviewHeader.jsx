import React from 'react'

const OverviewHeader = function (props) {
  return (
    <div  id="j-left1-top">
      <h1  id="j-overview-header">{props.attraction.attractionName}</h1>
      <div  id="j-overview-subtitle">
        <span className={`j-ui_bubble_rating bubble_${props.attraction.averageRating}`}>
        </span>
        <div className="j-review-count-wrapper">
          <span  id="j-review-count">{`${props.attraction.reviewCount} Reviews`}</span>
        </div>
      </div>
    </div>
  )
}

export default OverviewHeader
