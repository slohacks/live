import React from 'react';
import MentorCard from '../components/MentorCard';
import styles from './mentors.module.css';
import data from '../data/mentors.json';

const Mentors = () => {
  function renderMentors() {
    const { body } = data;
    return body.map((mentor) => {
      const {
        name,
        occupation,
        background,
        id,
      } = mentor;
      return (
        <MentorCard key={id} name={name} occupation={occupation} background={background} />
      );
    });
  }

  return (
    <div className={styles.mentors}>
      {renderMentors()}
    </div>
  );
};

export default Mentors;
