import React from 'react';

class NavDots extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      length: this.props.length,
      currentPhoto: this.props.currentPhoto,
      active: [0, 1, 2, 3, 4]
    }
    this.setClasses = this.setClasses.bind(this);
  }

  /* DEVELOPMENT PLAN: TODO
  *   */
  setClasses() {
    let goodRange = [];
    let index = this.state.currentPhoto
    if (this.state.length >= 5) {
      if (index === 0) {
        // finish implementation later
      }
    }
  }

  componentDidMount() {
    let navdots = document.getElementsByClassName('j-nav-dot');
    navdots.className = "j-nav-dot";
    let selected = document.getElementById('j-nd1')
    console.log(selected.className);
    selected.className = "j-nav-dot selected";
  }

  componentDidUpdate() {
    let navdots = document.getElementsByClassName('j-nav-dot');
    navdots.className = "j-nav-dot";
    let selected = document.getElementById(`j-nd${this.props.currentPhoto + 1}`)
    console.log(selected.className);
    selected.className = `j-nav-dot j-nd${this.props.currentPhoto + 1} selected`;

  }

  render() {
    return (
    <div  id="j-j-nav-dots-container">
      <div  id="j-j-nav-dots-inner-wrapper">
        <div  id="j-j-nd-1" transform="translateX(20px)" className="j-nav-dot" opacity="0"></div>
        {this.state.length.map((row, index)=> {
          return (<div id={`j-nd${index}`} key={index} transform={`translateX(${(index - this.state.currentPhoto)*20}px)`} className="j-nav-dot "></div>)
        })}
      </div>
    </div>
    )
  }
}

export default NavDots
