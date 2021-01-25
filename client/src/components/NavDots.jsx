import React from 'react';

class NavDots extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      length: this.props.length,
      currentPhoto: this.props.currentPhoto
    }
/*     this.animate = this.animate.bind(this); */
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
  }

  render() {
    return (
    <div id="nav-dots-container">
      <div id="nav-dots-inner-wrapper">
        {["brawp" * this.state.length].map((row, index)=> {
          return (<div id={`nd${index}`} key={index} className="nav-dot"></div>)
        })}
      </div>
    </div>
    )
  }
}

export default NavDots
