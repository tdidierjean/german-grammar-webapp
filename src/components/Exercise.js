import React, { Component } from 'react'
import {
  Input,
  Form,
  FormGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

function DisplayAnswer(props) {
  if (props.displayAnswer) {
    return <p>Correct answer: {props.answer}</p>
  }
  return ''
}

class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentExerciseIndex: 0,
      displayAnswer: false,
      submittedAnswer: '',
      correctAnswer: props.exercise.answer
    };

    // This binding is necessary to make `this` work in the callback
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
  }

  handleSubmit(event) {    
    event.preventDefault();

    if (this.state.submittedAnswer === this.state.correctAnswer) {
      this.setState(state => ({
        currentExerciseIndex: ++state.currentExerciseIndex
      }));
    } else {
      this.setState(state => ({
        displayAnswer: true
      }));  
    }
  }

  handleAnswerChange(event) {
    this.setState({submittedAnswer: event.target.value});
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                {this.props.exercise.question} ({this.props.exercise.hint})
                <Input type="text" value={this.state.submittedAnswer} onChange={this.handleAnswerChange} placeholder="Enter answer" />
                <DisplayAnswer displayAnswer={this.state.displayAnswer} answer={this.props.exercise.answer} />
                <Input
                  type="submit"
                  value="OK"
                  onClick={this.nextExercise}
                  color="success"
                  bsSize="large"
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Exercise
