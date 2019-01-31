import React from 'react';
import WorkshopCard from '../components/WorkshopCard';
import styles from './workshop.module.css';
import data from '../data/mentors.json';

const Workshop = () => {
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
        <WorkshopCard key={id} name={name} occupation={occupation} background={background} />
      );
    });
  }

  return (
    <div className={styles.mentors}>
      {renderMentors()}
    </div>
  );
};

export default Workshop;
