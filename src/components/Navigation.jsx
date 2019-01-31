import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navigation.module.css';
import navLogo from '../assets/logo-white.png';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar className={styles.navColor} light expand="lg" fixed="top">
          <Link to="/">
            <img className={styles.navLogo} src={navLogo} alt="SLO Hacks 2019" />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className={`${styles.navFlex}`} isOpen={this.state.isOpen} navbar>
            <Nav className={styles.navList}navbar>
              <NavItem onClick={() => this.setState({ isOpen: false })}>
                <Link replace to="/schedule">Schedule</Link>
              </NavItem>
              <NavItem onClick={() => this.setState({ isOpen: false })}>
                <Link replace to="/map">Map</Link>
              </NavItem>
              <NavItem onClick={() => this.setState({ isOpen: false })}>
                <Link replace to="/tracks">Tracks</Link>
              </NavItem>
              <NavItem onClick={() => this.setState({ isOpen: false })}>
                <Link replace to="/workshop">Workshops</Link>
              </NavItem>
              <NavItem onClick={() => this.setState({ isOpen: false })}>
                <Link replace to="/sponsors">Sponsors</Link>
              </NavItem>
              <NavItem onClick={() => this.setState({ isOpen: false })}>
                <a rel="noopener noreferrer" href="https://slohacks2019.devpost.com/" target="_blank">Submit</a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div
          style={{
            paddingTop: '8.5rem',
            width: '100%',
          }}
        />
      </div>
    );
  }
}

export default Navigation;
