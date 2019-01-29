import React from 'react';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.home}>
    <div className={styles.info}>
      <h1 className={styles.welcome}>
        Welcome to
        <br />
        <strong>
          SLO Hacks 2019!
        </strong>
      </h1>
      <p className={styles.imageText}>
        SLO Hacks 2019 is a 500-student, 36-hour hackathon
        hosted at Cal Poly SLO. Over the course of the event, you will meet new
        people, develop your skills, and turn your next big idea into a reality!
      </p>
      <button className={styles.individual}>
        Learn More
      </button>
      <button className={styles.individual}>
        <a className={styles.links} href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">
        Code of Conduct
        </a>
      </button>
    </div>
    <div className={styles.event} >
      <h3>
        WiFi Information
      </h3>
      <div className={styles.eventDetails}>
        <p>
          <strong> SSID: </strong>
          SLO Hacks
        </p>
        <p>
          <strong> Password: </strong>
          s10-h@cks!
        </p>
      </div>
      <h3>
        FAQ
      </h3>
      <div className={styles.eventDetails}>
        <p>
          <strong>
            What is the max team size?
          </strong>
          <br />
          The max team size is 4.
        </p>
        <p>
          <strong>
            Where can I find prize information?
          </strong>
          <br />
          {'You can find the judging criteria at '}
          <strong>
            <a className={styles.links} href="https://slohacks2019.devpost.com/" target="_blank" rel="noopener noreferrer">
              slohacks2019.devpost.com.
            </a>
          </strong>
        </p>
        <p>
          <strong>
            How can I claim travel reimbursement, if approved?
          </strong>
          <br />
          You can claim your travel reimbursement at the the help desk.
        </p>

        <p>
          <strong>
            How do I get a mentor?
          </strong>
          <br />
          You should post in the mentors channel on Slack and someone will get back to you.
        </p>
        <p>
          <strong>
            Where can I find the judging criteria?
          </strong>
          <br />
          {'You can find the judging criteria at '}
          <strong>
            <a className={styles.links} href="https://slohacks2019.devpost.com/" target="_blank" rel="noopener noreferrer">
              slohacks2019.devpost.com.
            </a>
          </strong>
        </p>
      </div>
    </div>
    <div className={styles.social}>
      <h3>
        Join our Slack Channel
      </h3>
      <div className={styles.eventDetails}>
        <p>
          <strong>
            <a className={styles.links} href="http://bit.ly/join-slohacks2019" target="_blank" rel="noopener noreferrer">
              bit.ly/join-slohacks2019
            </a>
          </strong>
        </p>
      </div>
      <h3>
        Follow us on social media!
      </h3>
      <div className={styles.eventDetails}>
        <p>
          <strong>
            <a className={styles.links} href="https://instagram.com/slo_hacks" target="_blank" rel="noopener noreferrer">
              slo_hacks
            </a>
          </strong>
        </p>
        <p>
          <strong>
            <a className={styles.links} href="https://facebook.com/slohacks" target="_blank" rel="noopener noreferrer">
                slohacks
            </a>
          </strong>
        </p>
        <p>
          <strong>
            <a className={styles.links} href="https://twitter.com/slohacks" target="_blank" rel="noopener noreferrer">
                slohacks
            </a>
          </strong>
        </p>
      </div>
    </div>
  </div>
);

export default Home;
