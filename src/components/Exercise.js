import React, { Component } from 'react'
import {
  Input,
  Form,
  FormGroup,
  Col,
  Card,
  CardBody,
  Label
} from 'reactstrap';

// Conditionally display the valid / invalid answer block
function AnswerValidation(props) {
  if (!props.answerWasSubmitted || props.isCorrectAnswer) {
    return ''
  }

  return <div className="invalid-feedback" style={{ display:'block' }}>Correct answer: {props.answer}</div>
}

// Validate submission is correct
function validateSubmission(submission, correctAnswer) {
  if (submission.toLowerCase().trim() === correctAnswer) {
    return true;
  }  

  return false;
}

class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCorrectAnswer: false,
      answerWasSubmitted: false,
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
    if (validateSubmission(this.state.submittedAnswer, this.state.correctAnswer)) {
      this.setState(state => ({
        isCorrectAnswer: true,
        answerWasSubmitted: true
      }));
      setTimeout(() => {
        this.props.onSuccessfulAnswer();
      }, 1000);
    }
    else if (this.state.skipOnEmptySumbit === true) {
      this.props.onSuccessfulAnswer();
    } else {
      this.setState(state => ({
        answerWasSubmitted: true,
        skipOnEmptySumbit: true
      }));  
    }
  }

  // Sync input field state
  handleAnswerChange(event) {
    this.setState({submittedAnswer: event.target.value});
  }

  render() {
    let inputValidState = ''
    if (this.state.isCorrectAnswer) {
      inputValidState = 'is-valid'
    }

    return (
          <Col sm="8" className="mt-2">
            <Card className="border-primary">
            <CardBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label>{this.props.exercise.question} ({this.props.exercise.hint})</Label>
                <div className="input-group">
                <Input type="text" autoFocus className={inputValidState} value={this.state.submittedAnswer} onChange={this.handleAnswerChange} placeholder="Enter answer" />
                <AnswerValidation answerWasSubmitted={this.state.answerWasSubmitted} isCorrectAnswer={this.state.isCorrectAnswer} answer={this.props.exercise.answer} />
                </div>
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
    )
  }
}

export default Exercise
