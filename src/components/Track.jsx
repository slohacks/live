import React from 'react';
import PropTypes from 'prop-types';
import styles from './Track.module.css';

const Track = props => (
  <div>
    <img className={styles.logo} src={props.image} alt={props.title} />
    <h2>
      {props.title}
    </h2>
    {props.other !== '' ? <h2> {props.other} </h2> : null }
    <br />
    <p>
      {props.blurb}
    </p>
    <a href={props.starterPack} target="_blank" rel="noopener noreferrer">
      <button className={styles.sp}>
        Starter Pack
      </button>
    </a>
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
