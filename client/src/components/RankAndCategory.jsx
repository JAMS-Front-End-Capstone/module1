import React from 'react';

const RankAndCategory = function (props) {
  return (
    <div  id="j-left1-bottom-left">
      <div  id="j-left1-bottom-left-inner">
        <ul>
          <li>
            <div  id="j-rank-container">
              <div  id="j-rank-container-inner">
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
          <li  id="j-category-container">
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
