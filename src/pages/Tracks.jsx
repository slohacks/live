import React from 'react';
import ai from '../assets/ai_ml.png';
import game from '../assets/game_dev.png';
import iot from '../assets/iot.png';
import Track from '../components/Track';
import styles from './Tracks.module.css';

const Tracks = () => (
  <div className={styles.tracks}>
    <div className={styles.gamedev}>
      <Track
        image={game}
        title={'GAME\nDESIGN'}
        blurb="Utilize interactive experiences to teach us something new, tell a captivating story, or just have a ton of fun."
        starterPack="https://bit.ly/2G1zgf7"
      />
    </div>
    <div className={styles.ai}>
      <Track
        image={ai}
        title="AI + MACHINE LEARNING"
        blurb="Train your computer to solve complex problems like cancer detection or homelessness with huge open-source datasets and large amounts of information."
        starterPack="https://bit.ly/2G3YqKm"
      />
    </div>
    <div className={styles.iot}>
      <Track
        image={iot}
        title="IoT + HARDWARE"
        blurb="Interested in escaping the digital world? Explore the intersection of hardware and software to create the next piece of physical technology."
        starterPack="https://bit.ly/2UkrJfq"
      />
    </div>
  </div>
);

export default Tracks;
