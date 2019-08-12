import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Container,
  Row,
  Col,
  Jumbotron,
} from 'reactstrap';
import './../styles/App.css';
import ExerciseList from './ExerciseList'

class App extends Component {
  render() {
      return (
          <div>
              <Navbar color="inverse" light expand="md">
                  <NavbarBrand href="/">German grammar trainer</NavbarBrand>
              </Navbar>
              <Jumbotron>
                  <Container>
                      <Row>
                          <Col>
                              <h1>Exercise</h1>
                              <ExerciseList />
                          </Col>
                      </Row>
                  </Container>
              </Jumbotron>
          </div>
      );
  }
}

export default App;
