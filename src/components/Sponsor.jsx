import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Sponsor.module.css';


class Sponsor extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const { clicked } = this.state;
    this.setState({ clicked: !clicked });
  }
  render() {
    const {
      logo,
      sponsorName,
      blurb,
      link,
    } = this.props;
    const {
      clicked,
    } = this.state;
    return (
      <div>
        <button className={styles.outline} onClick={this.handleOnClick}>
          <img className={styles.logo} src={logo} alt={sponsorName} />
        </button>
        {clicked ?
          <div>
            <p>
              {blurb}
            </p>
            <p>
              { 'Learn More: ' }
              <a href={link} target="_blank" rel="noopener noreferrer" >
                {sponsorName}
              </a>
            </p>
          </div> :
       null }
      </div>
    );
  }
}

export default Sponsor;
