import React from 'react';
import Sponsor from '../components/Sponsor';
import styles from './Sponsors.module.css';


const Sponsors = () => (
  <div className={styles.sponsors}>
    <h2>
      Thank you to all of our 2019 sponsors!
    </h2>
    <Sponsor
      sponsor_name=""
      logo=""
      blurb_text=""
      link=""
    />
  </div>
);

export default Sponsors;
