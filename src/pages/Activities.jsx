import React from 'react';
import data from '../data/activities.json';
import styles from './activities.module.css';

const Activities = () => {
  function renderActivities(eventSection) {
    const { body } = data;
    return body[eventSection].events.map((event) => { // eslint-disable-line arrow-body-style
      return (
        <div key={event.id}className={styles.event}>
          <h3>{event.title}</h3>
          <h3>{`${event.time}, ${event.location}`}</h3>
        </div>
      );
    });
  }

  return (
    <div className={styles.activities}>
      <div className={styles.eventContainer}>
        <div className={styles.dayContainer}>
          <h2 className={`${styles.dayHeader} ${styles.friday}`}>Friday</h2>
          {renderActivities(0)}
        </div>
        <div className={styles.dayContainer}>
          <h2 className={`${styles.dayHeader} ${styles.saturday}`}>Saturday</h2>
          {renderActivities(1)}
        </div>
        <div className={styles.dayContainer}>
          <h2 className={`${styles.dayHeader} ${styles.sunday}`}>Sunday</h2>
          {renderActivities(2)}
        </div>
      </div>
    </div>
  );
};

export default Activities;
