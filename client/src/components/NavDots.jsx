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
/*     this.animate = this.animate.bind(this); */
  }

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
    let navdots = document.getElementsByClassName('nav-dot');
    navdots.className = "nav-dot";
    let selected = document.getElementById('nd1')
    console.log(selected.className);
    selected.className = "nav-dot selected";
  }

  componentDidUpdate() {
    let navdots = document.getElementsByClassName('nav-dot');
    navdots.className = "nav-dot";
    let selected = document.getElementById(`nd${this.props.currentPhoto + 1}`)
    console.log(selected.className);
    selected.className = `nav-dot nd${this.props.currentPhoto + 1} selected`;
    /* this.setClasses(); */
  }

  render() {
    return (
    <div id="nav-dots-container">
      <div id="nav-dots-inner-wrapper">
        <div id="nd-1" transform="translateX(20px)" className="nav-dot" opacity="0"></div>
        {this.state.length.map((row, index)=> {
          return (<div id={`nd${index}`} key={index} transform={`translateX(${(index - this.state.currentPhoto)*20}px)`} className="nav-dot "></div>)
        })}
      </div>
    </div>
    )
  }
}

export default NavDots
