import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navigation.module.css';

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
        <Navbar color="light" light expand="lg" fixed="top">
          <NavbarBrand href="/">
            <Link to="/">SLO Hacks 2019</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className={`${styles.navFlex}`} isOpen={this.state.isOpen} navbar>
            <Nav className="nav-fill" navbar>
              <NavItem>
                <Link to="/tracks">About</Link>
              </NavItem>
              <NavItem>
                <Link to="/tracks">Events</Link>
              </NavItem>
              <NavItem>
                <Link to="/tracks">Map</Link>
              </NavItem>
              <NavItem>
                <Link to="/tracks">Tracks</Link>
              </NavItem>
              <NavItem>
                <Link to="/tracks">Mentors</Link>
              </NavItem>
              <NavItem>
                <Link to="/tracks">Sponsors</Link>
              </NavItem>
              <NavItem>
                <Link to="/tracks">Submit</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div
          style={{
            paddingTop: '4.5rem',
            width: '100%',
          }}
        />
      </div>
    );
  }
}

export default Navigation;
