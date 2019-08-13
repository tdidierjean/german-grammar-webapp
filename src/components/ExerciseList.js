import React, { Component } from 'react'
import Exercise from './Exercise'
import ExerciseTypes from './ExerciseTypes'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import {
  Container,
  Row,
} from 'reactstrap';

const EXERCISE_QUERY = gql`
    query findExercises($exerciseType: String!) {
        exercises(count: 10, exerciseType: $exerciseType) {
          question,
          hint,
          answer
        }
      }
`;

class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentExerciseIndex: 0,
      exerciseType: 'object'
    };

    // This binding is necessary to make `this` work in the callback
    this.nextExercise = this.nextExercise.bind(this);
    this.onExerciseTypeSelected = this.onExerciseTypeSelected.bind(this);
  }

  // Moving the index forward
  nextExercise() {
    this.setState(state => ({
      currentExerciseIndex: ++state.currentExerciseIndex
    }));
    console.log('next exercise')
  }

  onExerciseTypeSelected(event) {
    const newType = event.target.value;
    console.log(newType);

    this.setState(state => ({
      exerciseType: newType
    }));
  }

  render() {
    return (
      <Container>
      <Row>
      <ExerciseTypes onExerciseTypeSelected={this.onExerciseTypeSelected}></ExerciseTypes>
      <Query query={EXERCISE_QUERY} variables={{ exerciseType: this.state.exerciseType}}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          const exercisesToRender = data.exercises

          return (
            // <div>
              <Exercise
                key={this.state.currentExerciseIndex}
                exercise={exercisesToRender[this.state.currentExerciseIndex]}
                onSuccessfulAnswer={this.nextExercise}
              />
            // </div>
          )
        }}
      </Query>
      </Row>
      </Container>
    )
  }
}

export default ExerciseList