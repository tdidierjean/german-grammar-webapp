import React, { Component } from 'react'
import {
  Input,
  Form,
  FormGroup,
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from 'reactstrap';

// Conditionally display the answer 
function DisplayAnswer(props) {
  if (props.displayAnswer) {
    return <div className="invalid-feedback" style={{ display:'block' }}>Correct answer: {props.answer}</div>
  }
  return ''
}

class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAnswer: false,
      submittedAnswer: '',
      correctAnswer: props.exercise.answer,
      skipOnEmptySumbit: false
    };

    // This binding is necessary to make `this` work in the callback
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
  }

  // Decide if displaying error or moving to next exercise
  handleSubmit(event) {    
    event.preventDefault();

    // Move to next exercise if answer is correct, or if user submits empty field after making a mistake
    if (this.state.submittedAnswer === this.state.correctAnswer || this.state.skipOnEmptySumbit === true) {
      this.props.onSuccessfulAnswer();
    } else {
      this.setState(state => ({
        displayAnswer: true,
        skipOnEmptySumbit: true
      }));  
    }
  }

  // Sync input field state
  handleAnswerChange(event) {
    this.setState({submittedAnswer: event.target.value});
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card className="border-primary">
            {/* <CardTitle>Grammar exercise</CardTitle> */}
            <CardBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                {this.props.exercise.question} ({this.props.exercise.hint})
                <Input type="text" value={this.state.submittedAnswer} onChange={this.handleAnswerChange} placeholder="Enter answer" />
                <DisplayAnswer displayAnswer={this.state.displayAnswer} answer={this.props.exercise.answer} />
              </FormGroup>
              <FormGroup>
                <Input
                  type="submit"
                  value="OK"
                  onClick={this.nextExercise}
                  color="success"
                  bsSize="large"
                />
              </FormGroup>
            </Form>
            </CardBody> 
            </Card> 
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Exercise
