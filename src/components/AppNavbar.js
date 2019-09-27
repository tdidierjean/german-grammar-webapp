import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Container,
} from 'reactstrap';

class AppNavbar extends Component {
  render() {
      return (
          <Navbar className="bg-primary navbar-dark">
              <Container>
              <NavbarBrand href="/">German grammar trainer</NavbarBrand>
              </Container>
          </Navbar>
      );
  }
}

export default AppNavbar;
