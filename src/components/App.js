import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import './../styles/Theme.css';
import './../styles/App.css';
import ExerciseList from './ExerciseList'
import AppNavbar from './AppNavbar'

class App extends Component {
    render() {
        return (
            <>
                <AppNavbar/>
                <div className="container-fluid">
                    <Row>
                        <Col className="col-12 bg-primary py-3">
                            <Container>
                                <Row>
                                    <Col className="py-2 text-light">
                                        <h1 className="card-title text-white">Practice your German grammar</h1>
                                        <p>
                                            Select a type of exercises:
                                            <ul>
                                                <li>"Object": practice article cases for sentences with direct and indirect objects</li>
                                                <li>"Preposition": which case follows which prepositions?</li>
                                                <li>"Adjective": drill those adjective endings</li>
                                            </ul>
                                        </p>
                                    </Col>
                            </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="py-3">
                            <ExerciseList />
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default App;
