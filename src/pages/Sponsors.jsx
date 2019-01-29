import React from 'react';
import Sponsor from '../components/Sponsor';
import f5 from '../assets/logos/f5-logo.png';
import itrade from '../assets/logos/itrade.png';
import wd from '../assets/logos/wd.png';
import viasat from '../assets/logos/viasat.png';
import godaddy from '../assets/logos/godaddy.svg';
import micro from '../assets/logos/microvu.svg';
import platinum from '../assets/logos/platinum.svg';
import gcp from '../assets/logos/gcp.svg';
import splunk from '../assets/logos/splunk.png';
import github from '../assets/logos/github.png';
import hathway from '../assets/logos/hathway.png';
import balsamiq from '../assets/logos/balsamiq.svg';
import linode from '../assets/logos/linode.png';
import flume from '../assets/logos/flume.svg';
import td from '../assets/logos/tech.png';
import corsair from '../assets/logos/corsair.png';
import wolfram from '../assets/logos/wolfram.svg';
import sketch from '../assets/logos/sketch.svg';
import mule from '../assets/logos/stickermule.png';
import calpolycs from '../assets/logos/calpolycs.png';
import cpe from '../assets/logos/cpe.png';
import styles from './Sponsors.module.css';


const Sponsors = () => (
  <div className={styles.sponsors}>
    <h2>
      Thank you to all of our 2019 sponsors!
    </h2>
    <div className={styles.content}>
      <div className={styles.logos}>
        <Sponsor
          sponsorName="F5 Networks"
          logo={f5}
          blurb="At F5, our mission is straightforward: to deliver the fastest, most secure, and most reliable applications to any user, anywhere, on any device. The world’s largest enterprises, service providers, financial and educational institutions, government entities, and consumer brands rely on F5 to stay ahead of security, cloud, and mobility trends."
          link="https://www.f5.com/"
        />
        <Sponsor
          sponsorName="iTradeNetwork"
          logo={itrade}
          blurb="With a powerful network of over 5,000 food and beverage trading partners, iTradeNetwork has been the leader in perishables supply chain management for 20 years. iTrade’s suite of end-to-end supply chain solutions tackles the complexities that occur at all waypoints of the perishables supply chain, from procurement and quality to traceability and spend management, so that you can focus on your core business."
          link="https://www.itradenetwork.com/"
        />
        <Sponsor
          sponsorName="Western Digital"
          logo={wd}
          blurb=""
          link="https://www.westerndigital.com/"
        />
        <Sponsor
          sponsorName="Viasat"
          logo={viasat}
          blurb=""
          link="https://www.viasat.com/"
        />
        <Sponsor
          sponsorName="GoDaddy"
          logo={godaddy}
          blurb="GoDaddy powers the world's largest cloud platform dedicated to small, independent ventures. With nearly 18 million customers worldwide and over 77 million domain names under management, GoDaddy is the place people come to name their idea, build a professional website, attract customers and manage their work. Our mission is to give our customers the tools, insights and the people to transform their ideas and personal initiative into success. To learn more about the company visit www.GoDaddy.com."
          link="https://www.godaddy.com/"
        />
        <Sponsor
          sponsorName="Micro Vu"
          logo={micro}
          blurb="Micro-Vu is an automation company specializing in 3D scanning and measuring. Micro-Vu engineers use technologies such as 3D software, image processing, precision mechanics and motion control, lasers, tactile probes, 3D sensors, machine learning and robotics to develop state-of-the-art solutions. 
          Micro-Vu designs and manufactures in a highly-automated factory at its campus in Windsor, California near the Russian River. Micro-Vu was established in 1959 and is privately-held. Micro-Vu engineers must be highly-motivated, capable and passionate about bringing the best possible products and technologies to the market.
          "
          link="https://www.microvu.com/"
        />
        <Sponsor
          sponsorName="Platinum Performance"
          logo={platinum}
          blurb="Platinum Performance® is a premier animal health company co-founded in 1996 by a Cal Poly graduate at a renowned equine veterinary hospital on the central coast of California. The brand is based on the belief that wellness and nutrition are the foundation of exceptional health for both people and the animals we love.  Inspired by its roots in veterinary medicine, and committed to a culture of innovation and quality, Platinum Performance® aims to change lives, improve performance and influence disease through powerful nutrition. The effects of Platinum Performance formulas are studied in colleges of veterinary medicine across the country."
          link="https://www.platinumperformance.com/horses"
        />
        <Sponsor
          sponsorName="Google Cloud Platform"
          logo={gcp}
          blurb="Google Cloud Platform lets you build and host applications and websites, store data, and analyze data on Google’s scalable and reliable infrastructure."
          link="https://cloud.google.com/"
        />
        <Sponsor
          sponsorName="Splunk"
          logo={splunk}
          blurb="Splunk was founded to pursue a disruptive new vision: make machine data accessible, usable and valuable to everyone. By monitoring and analyzing everything from customer clickstreams and transactions to network activity and call records—and more—Splunk turns machine data into valuable insights no matter what business you're in. It's what we call operational intelligence. Splunk is growing rapidly worldwide — we’re hiring self-starters who want to help top companies solve huge challenges by turning data into answers."
          link="https://www.splunk.com/"
        />
        <Sponsor
          sponsorName="GitHub"
          logo={github}
          blurb=""
          link="https://github.com/"
        />
        <Sponsor
          sponsorName="Hathway"
          logo={hathway}
          blurb=""
          link="https://wearehathway.com"
        />
        <Sponsor
          sponsorName="Balsamiq"
          logo={balsamiq}
          blurb=""
          link="https://balsamiq.com"
        />
        <Sponsor
          sponsorName="Linode"
          logo={linode}
          blurb="Linode is a leading cloud hosting provider founded in 2003. Today, the company boasts more than 400,000 customers worldwide and operates nine data centers across three continents.

          Linode subscribers can create a cloud server in under a minute and then dynamically scale their environments to meet demands, paying only for resources used without long-term commitments. Lightning-quick SSD servers starting at $5/month for 1GB RAM."
          link="https://www.linode.com/"
        />
        <Sponsor
          sponsorName="Flume"
          logo={flume}
          blurb="Flume, a fast growing, venture-backed startup, shares the common belief that our current interaction with water usage, as well as the infrastructure for collecting water usage data, is in desperate need of improvement. At Flume, we have developed a connected home product that provides homeowners with real-time water usage and leak detection information."
          link="https://flumetech.com/"
        />
        <Sponsor
          sponsorName=".Tech"
          logo={td}
          blurb="Frontliners in the tech industry are building the future on .TECH: The Consumer Electronics Show upgraded from .org to CES.TECH, Viacom has Viacom.TECH to host their tech division, and Intel chose Insight.TECH for their latest initiative."
          link="https://get.tech/"
        />
        <Sponsor
          sponsorName="Corsair"
          logo={corsair}
          blurb=""
          link="https://www.corsair.com/us/en/"
        />
        <Sponsor
          sponsorName="Wolfram Language"
          logo={wolfram}
          blurb=""
          link="https://www.wolfram.com/"
        />
        <Sponsor
          sponsorName="Sketch"
          logo={sketch}
          blurb=""
          link="https://sketchapp.com/"
        />
        <Sponsor
          sponsorName="StickerMule"
          logo={mule}
          blurb=""
          link="https://stickermule.com/"
        />
        <Sponsor
          sponsorName="Cal Poly Computer Science"
          logo={calpolycs}
          blurb=""
          link="https://csc.calpoly.edu/"
        />
        <Sponsor
          sponsorName="Cal Poly Computer Engineering"
          logo={cpe}
          blurb=""
          link="https://cpe.calpoly.edu/"
        />
      </div>
    </div>
  </div>
);

export default Sponsors;
