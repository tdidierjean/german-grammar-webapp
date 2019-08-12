import React, { Component } from 'react'
import Exercise from './Exercise'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const EXERCISE_QUERY = gql`
    query findExercises {
        exercises(count: 1, exerciseType: "preposition") {
          question,
          hint,
          answer
        }
      }
`

class ExerciseList extends Component {
  render() {
    return (
      <Query query={EXERCISE_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          const exercisesToRender = data.exercises

          return (
            <div>
              {exercisesToRender.map(exercise => <Exercise key={exercise.question} exercise={exercise} />)}
              {/* {exercisesToRender.map(exercise => <Exercise key="question" exercise={plop} />)} */}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default ExerciseList