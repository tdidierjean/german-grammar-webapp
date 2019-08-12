import React, { Component } from 'react'
import Exercise from './Exercise'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const EXERCISE_QUERY = gql`
    query findExercises {
        exercises(count: 10, exerciseType: "preposition") {
          question,
          hint,
          answer
        }
      }
`

class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = {currentExerciseIndex: 0};

    // This binding is necessary to make `this` work in the callback
    this.nextExercise = this.nextExercise.bind(this);
  }

  nextExercise() {
    this.setState(state => ({
      currentExerciseIndex: ++state.currentExerciseIndex
    }));
    console.log(this.state.currentExerciseIndex)
  }

  render() {
    return (
      <Query query={EXERCISE_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          const exercisesToRender = data.exercises

          return (
            <div>
              {/* {exercisesToRender.map(exercise => <Exercise key={exercise.question} exercise={exercise} />)} */}
              <Exercise key={this.state.currentExerciseIndex} exercise={exercisesToRender[this.state.currentExerciseIndex]} />
            </div>
          )
        }}
      </Query>
    )
  }
}

export default ExerciseList