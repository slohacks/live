import React, { Component } from 'react';
import chumash from '../assets/chumash.jpg';
import uu from '../assets/uu.jpg';
import campus from '../assets/calpoly.jpg';
import styles from './map.module.css';

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
      <div className={styles.map}>
        <button
          value="chumash"
          onClick={event => this.updateImage(event)}
          className={styles.mapButton}
        >
          Chumash
        </button>
        <button
          value="uu"
          onClick={event => this.updateImage(event)}
          className={styles.mapButton}
        >
          University Union
        </button>
        <button
          value="campus"
          onClick={event => this.updateImage(event)}
          className={styles.mapButton}
        >
          Cal Poly Campus
        </button>
        <div>
          <img
            src={this.state.img}
            alt={`Map of ${this.state.selected}`}
            className={styles.mapImage}
          />
        </div>
      </div>
    );
  }
}

export default Map;
