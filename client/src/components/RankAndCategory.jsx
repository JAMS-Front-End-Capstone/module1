import React from 'react';

const RankAndCategory = function (props) {
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
                    <a href="about:blank" className="j-black-link">{`things to do in ${props.attraction.greaterArea}`}</a>
                </span>
              </div>
            </div>
          </li>
          <li></li>
          <li id="category-container">
            <span>
              <a href="about:blank" className="j-black-link">{props.attraction.category}</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RankAndCategory
