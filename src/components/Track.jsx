import React from 'react';
import PropTypes from 'prop-types';
import './Track.module.css';
import styles from '../layouts/index.module.css';

const Track = props => (
  <div>
    <img src={props.image} alt={props.title} />
    <h2>
      {props.title}
    </h2>
    <br />
    <p>
      {props.blurb}
    </p>
    <button className={styles.regular}>
      <a href={props.starterPack} target="_blank" rel="noopener noreferrer">
        Starter Pack
      </a>
    </button>
  </div>
);

Track.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  starterPack: PropTypes.string.isRequired,
};

export default Track;
