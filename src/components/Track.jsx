import React from 'react';
import PropTypes from 'prop-types';
import base from './Track.module.css';
import styles from '../layouts/index.module.css';

const Track = props => (
  <div>
    <img className={base.logo} src={props.image} alt={props.title} />
    <h2>
      {props.title}
    </h2>
    {props.other !== '' ? <h2> {props.other} </h2> : null }
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
  other: PropTypes.string,
};

Track.defaultProps = {
  other: '',
};

export default Track;
