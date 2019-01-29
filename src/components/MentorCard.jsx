import React from 'react';
import PropTypes from 'prop-types';
import styles from './mentorsCard.module.css';

const MentorCard = ({ name, occupation, background }) => (
  <div className={styles.mentorCard}>
    <div className={styles.imgBox} />
    <h2>{name}</h2>
    <h2>{occupation}</h2>
    <p>{background}</p>
  </div>
);

MentorCard.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default MentorCard;
