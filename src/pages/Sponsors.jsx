import React from 'react';
import f5 from '../assets/logos/f5.svg';
import itrade from '../assets/logos/itradenetwork.svg';
import wd from '../assets/logos/wd.svg';
import viasat from '../assets/logos/Viasat.svg';
import godaddy from '../assets/logos/godaddy.svg';
import micro from '../assets/logos/microvu.svg';
import platinum from '../assets/logos/platinum.svg';
import gcp from '../assets/logos/googlecp.svg';
import splunk from '../assets/logos/splunk.svg';
import github from '../assets/logos/github.png';
import hathway from '../assets/logos/hathway.png';
import balsamiq from '../assets/logos/balsamiq.svg';
import linode from '../assets/logos/linode.png';
import flume from '../assets/logos/flume.png';
import td from '../assets/logos/tech.svg';
import corsair from '../assets/logos/corsair.png';
import wolfram from '../assets/logos/wolfram.svg';
import sketch from '../assets/logos/sketch.svg';
import mule from '../assets/logos/stickermule.png';
import calpolycs from '../assets/logos/cs.svg';
import cpe from '../assets/logos/CPE.svg';
import hc from '../assets/logos/hackclub.svg';
import mlh from '../assets/logos/MLH.svg';
import styles from './Sponsors.module.css';
import '../layouts/index.css';


const Sponsors = () => (
  <div className={styles.sponsors}>
    <h2>
      SPONSORS
    </h2>
    <div className={styles.content}>
      <div className={styles.logos}>
        <div className={styles.sponsor}>
          <img className={styles.sponsorImage} src={f5} alt="F5 Networks" />
          <p className={styles.sponsorBlurb}>
           At F5, our mission is straightforward: to deliver the fastest, most secure, and most
           reliable applications to any user, anywhere, on any device. The world’s largest
           enterprises, service providers, financial and educational institutions, government
           entities, and consumer brands rely on F5 to stay ahead of security, cloud, and mobility
           trends.
          </p>
          <p>
            {'Learn More: '}
            <a href="https://www.f5.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
                F5 Networks
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.sponsorImage} src={itrade} alt="iTradeNetwork" />
          <p className={styles.sponsorBlurb}>
            With a powerful network of over 5,000 food and beverage trading partners, iTradeNetwork
            has been the leader in perishables supply chain management for 20 years. iTrade’s suite
              of end-to-end supply chain solutions tackles the complexities that occur at all
              waypoints of the perishables supply chain, from procurement and quality to
                traceability and spend management, so that you can focus on your core business.
          </p>
          <p>
            {'Learn More: '}
            <a href="https://www.itradenetwork.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
                iTradeNetwork
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.sponsorImage} src={wd} alt="Western Digital" />
          <p className={styles.sponsorBlurb}>
            Western Digital® creates environments for data to thrive. Everywhere data is captured,
             preserved, accessed and transformed, we’re leading the charge to unlock its potential.
             From advanced data centers to mobile sensors to personal devices, our industry leading
             solutions create environments where the flow of information leads to smarter decisions,
             breakthrough discoveries and deeper connections.
          </p>
          <p>
            {'Learn More: '}
            <a href="https://www.westerndigital.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
                Western Digital
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.sponsorImage} src={viasat} alt="Viasat" />
          <p>
            {'Learn More: '}
            <a href="https://www.viasat.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
                Viasat
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.sponsorImage} src={godaddy} alt="GoDaddy" />
          <p className={styles.sponsorBlurb}>
          GoDaddy powers the world&apos;s largest cloud platform dedicated to small, independent
           ventures. With nearly 18 million customers worldwide and over 77 million domain names
           under management, GoDaddy is the place people come to name their idea, build a
           professional website, attract customers and manage their work. Our mission is to give
           our customers the tools, insights and the people to transform their ideas and personal
           initiative into success. To learn more about the company visit www.GoDaddy.com.
          </p>
          <p>
            {'Learn More: '}
            <a href="https://www.godaddy.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
                GoDaddy
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.sponsorImage} src={micro} alt="Micro Vu" />
          <p className={styles.sponsorBlurb}>
          Micro-Vu is an automation company specializing in 3D scanning and measuring.
           Micro-Vu engineers use technologies such as 3D software, image processing,
           precision mechanics and motion control, lasers, tactile probes, 3D sensors,
           machine learning and robotics to develop state-of-the-art solutions.
          </p>
          <p className={styles.sponsorBlurb}>
          Micro-Vu designs and manufactures in a highly-automated factory at its campus in
           Windsor, California near the Russian River. Micro-Vu was established in 1959 and is
           privately-held. Micro-Vu engineers must be highly-motivated, capable and passionate
           about bringing the best possible products and technologies to the market.
          </p>
          <p>
            {'Learn More: '}
            <a href="https://www.microvu.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
                Micro Vu
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.sponsorImage} src={platinum} alt="Platinum Performance" />
          <p className={styles.sponsorBlurb}>
          Platinum Performance® is a premier animal health company co-founded in 1996 by a Cal Poly
           graduate at a renowned equine veterinary hospital on the central coast of California.
           The brand is based on the belief that wellness and nutrition are the foundation of
           exceptional health for both people and the animals we love.  Inspired by its roots in
           veterinary medicine, and committed to a culture of innovation and quality,
           Platinum Performance® aims to change lives, improve performance and influence disease
           through powerful nutrition. The effects of Platinum Performance formulas are studied in
           colleges of veterinary medicine across the country.
          </p>
          <p>
            {'Learn More: '}
            <a href="https://www.platinumperformance.com/horses" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
                Platinum Performance
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.sponsorImage} src={gcp} alt="Google Cloud Platform" />
          <p className={styles.sponsorBlurb}>
          Google Cloud Platform lets you build and host applications and websites, store data,
           and analyze data on Google’s scalable and reliable infrastructure.
          </p>
          <p>
            {'Learn More: '}
            <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
              Google Cloud Platform
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.sponsorImage} src={splunk} alt="Splunk" />
          <p className={styles.sponsorBlurb}>
          Splunk was founded to pursue a disruptive new vision: make machine data accessible,
           usable and valuable to everyone. By monitoring and analyzing everything from customer
           clickstreams and transactions to network activity and call records—and more—Splunk turns
           machine data into valuable insights no matter what business you&apos;re in.
           It&apos;s what we call operational intelligence. Splunk is growing rapidly worldwide —
           we’re hiring self-starters who want to help top companies solve huge challenges by
           turning data into answers.
          </p>
          <p>
            {'Learn More: '}
            <a href="https://www.splunk.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
              Splunk
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.largeLogos} src={github} alt="GitHub" />
          <p>
            {'Learn More: '}
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
                GitHub
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.largeLogos} src={hathway} alt="Hathway" />
          <p>
            {'Learn More: '}
            <a href="https://wearehathway.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
              Hathway
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.sponsorImage} src={balsamiq} alt="Balsamiq" />
          <p>
            {'Learn More: '}
            <a href="https://balsamiq.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
              Balsamiq
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.largeLogos} src={linode} alt="Linode" />
          <p className={styles.sponsorBlurb}>
          Linode is a leading cloud hosting provider founded in 2003. Today, the company boasts
           more than 400,000 customers worldwide and operates nine data centers across three
           continents.
          </p>
          <p className={styles.sponsorBlurb}>
          Linode subscribers can create a cloud server in under a minute and then dynamically scale
           their environments to meet demands, paying only for resources used without long-term
           commitments. Lightning-quick SSD servers starting at $5/month for 1GB RAM.
          </p>
          <p>
            {'Learn More: '}
            <a href="https://www.linode.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
              Linode
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.largeLogos} src={flume} alt="Flume" />
          <p className={styles.sponsorBlurb}>
          Flume, a fast growing, venture-backed startup, shares the common belief that our current
           interaction with water usage, as well as the infrastructure for collecting water usage
           data, is in desperate need of improvement. At Flume, we have developed a connected home
           product that provides homeowners with real-time water usage and leak detection
           information.
          </p>
          <p>
            {'Learn More: '}
            <a href="https://www.flumetech.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
              Flume
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.largeLogos} src={td} alt=".Tech" />
          <p className={styles.sponsorBlurb}>
          Frontliners in the tech industry are building the future on .TECH: The Consumer
           Electronics Show upgraded from .org to CES.TECH, Viacom has Viacom.TECH to host their
           tech division, and Intel chose Insight.TECH for their latest initiative.
          </p>
          <p>
            {'Learn More: '}
            <a href="https://get.tech/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
              .Tech
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.largeLogos} src={corsair} alt="Corsair" />
          <p>
            {'Learn More: '}
            <a href="https://www.corsair.com/us/en/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
              Corsair
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.largeLogos} src={wolfram} alt="Wolfram Language" />
          <p>
            {'Learn More: '}
            <a href="https://www.wolfram.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
              Wolfram Language
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.largeLogos} src={sketch} alt="Sketch" />
          <p>
            {'Learn More: '}
            <a href="https://www.sketchapp.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
              Sketch
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.largeLogos} src={mule} alt="Stickermule" />
          <p>
            {'Learn More: '}
            <a href="https://www.stickermule.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
              Stickermule
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.sponsorImage} src={calpolycs} alt="Cal Poly Computer Science" />
          <p>
            {'Learn More: '}
            <a href="https://csc.calpoly.edu/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
              Cal Poly Computer Science
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.sponsorImage} src={cpe} alt="Cal Poly Computer Engineering" />
          <p>
            {'Learn More: '}
            <a href="https://cpe.calpoly.edu/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
              Cal Poly Computer Engineering
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.sponsorImage} src={hc} alt="Hack Club" />
          <p>
            {'Learn More: '}
            <a href="https://hackclub.com/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
              Hack Club
              </span>
            </a>
          </p>
        </div>
        <div className={styles.sponsor}>
          <img className={styles.largeLogos} src={mlh} alt="Major League Hacking" />
          <p>
            {'Learn More: '}
            <a href="https://mlh.io/" target="_blank" rel="noopener noreferrer">
              <span className={styles.links}>
              Major League Hacking
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Sponsors;
