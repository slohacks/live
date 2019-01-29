import { React, Component } from 'react';
import PropTypes from 'prop-types';


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
        <img src={logo} alt={sponsorName} onClick={this.handleOnClick} onKeyPress={this.handleOnClick} />
        {this.clicked ?
          <div>
            <p>
              {blurb}
            </p>
            <p>
              <a href={link} target="_blank" rel="noopener noreferrer" >
                {link}
              </a>
            </p>
          </div> :
       null }
      </div>
    );
  }
}

export default Sponsor;
