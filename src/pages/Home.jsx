import React from 'react';
import styles from './Home.module.css';
import fb from '../assets/footer/facebook.png';
import insta from '../assets/footer/instagram.png';
import twitter from '../assets/footer/twitter.png';
import slack from '../assets/footer/slack.png';

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
      <a className={styles.links} href="https://www.slohacks.com/club/" target="_blank" rel="noopener noreferrer">
        <button className={styles.individual}>
          Learn More
        </button>
      </a>
      <a className={styles.links} href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">
        <button className={styles.individual}>
          Code of Conduct
        </button>
      </a>
    </div>
    <div className={styles.event} >
      <h3>
        WiFi Information
      </h3>
      <div className={styles.eventDetails}>
        <p>
          <span className={styles.bolded}> SSID: </span>
          SLO Hacks
        </p>
        <p>
          <span className={styles.bolded}> Password: </span>
          s10-h@cks!
        </p>
      </div>
      <h3>
        FAQ
      </h3>
      <div className={styles.eventDetails}>
        <p>
          <span className={styles.bolded}>
            What is the max team size?
          </span>
          <br />
          The max team size is 4.
        </p>
        <p>
          <span className={styles.bolded}>
            Where can I find prize information?
          </span>
          <br />
          {'You can find the judging criteria at '}
          <span className={styles.bolded}>
            <a className={styles.links} href="https://slohacks2019.devpost.com/" target="_blank" rel="noopener noreferrer">
              slohacks2019.devpost.com.
            </a>
          </span>
        </p>
        <p>
          <span className={styles.bolded}>
            How can I claim travel reimbursement, if approved?
          </span>
          <br />
          You can claim your travel reimbursement at the the help desk.
        </p>

        <p>
          <span className={styles.bolded}>
            How do I get a mentor?
          </span>
          <br />
          You should post in the mentors channel on Slack and someone will get back to you.
        </p>
        <p>
          <span className={styles.bolded}>
            Where can I find the judging criteria?
          </span>
          <br />
          {'You can find the judging criteria at '}
          <span className={styles.bolded}>
            <a className={styles.links} href="https://slohacks2019.devpost.com/" target="_blank" rel="noopener noreferrer">
              slohacks2019.devpost.com.
            </a>
          </span>
        </p>
      </div>
    </div>
    <div className={styles.social}>
      <h3>
        Join our Slack Channel
      </h3>
      <div className={styles.eventDetails}>
        <div className={styles.socialMedia}>
          <img src={slack} alt="Slack" />
          <p className={styles.socialText}>
            <a className={styles.bolded} href="http://bit.ly/join-slohacks2019" target="_blank" rel="noopener noreferrer">
              slack.slohacks.com
            </a>
          </p>
        </div>
      </div>
      <h3>
        Follow us on social media!
      </h3>
      <div className={styles.eventDetails}>
        <div className={styles.socialMedia}>
          <img src={insta} alt="slo_hacks" />
          <p className={styles.socialText}>
            <a className={styles.bolded} href="https://instagram.com/slo_hacks" target="_blank" rel="noopener noreferrer">
              slo_hacks
            </a>
          </p>
        </div>
        <div className={styles.socialMedia}>
          <img src={fb} alt="slo_hacks" />
          <p className={styles.socialText}>
            <a className={styles.bolded} href="https://facebook.com/slohacks" target="_blank" rel="noopener noreferrer">
                slohacks
            </a>
          </p>
        </div>
        <div className={styles.socialMedia}>
          <img src={twitter} alt="slo_hacks" />
          <p className={styles.socialText}>
            <a className={styles.bolded} href="https://twitter.com/slohacks" target="_blank" rel="noopener noreferrer">
                slohacks
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
