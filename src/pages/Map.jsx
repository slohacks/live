import React, { Component } from 'react';
import chumash from '../assets/chumash.png';
import uu from '../assets/uu.png';
import campus from '../assets/campus.svg';

const imageURLs = {
  chumash,
  uu,
  campus,
};

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'chumash',
      img: imageURLs.chumash,
    };

    this.updateImage = this.updateImage.bind(this);
  }

  updateImage(event) {
    this.setState({
      selected: event.currentTarget.getAttribute('value'),
      img: imageURLs[event.currentTarget.getAttribute('value')],
    });
  }

  render() {
    return (
      <div>
        <button
          value="chumash"
          onClick={event => this.updateImage(event)}
          className={this.state.selected === 'chumash' && 'selected'}
        >
          Chumash
        </button>
        <button
          value="uu"
          onClick={event => this.updateImage(event)}
          className={this.state.selected === 'uu' && 'selected'}
        >
          University Union
        </button>
        <button
          value="campus"
          onClick={event => this.updateImage(event)}
          className={this.state.selected === 'campus' && 'selected'}
        >
          Cal Poly Campus
        </button>
        <div>
          <img
            src={this.state.img}
            alt={`Map of ${this.state.selected}`}
          />
        </div>
      </div>
    );
  }
}

export default Map;
