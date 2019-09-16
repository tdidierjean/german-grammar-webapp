import React, { Component } from 'react'
import Exercise from './Exercise'
import ExerciseTypes from './ExerciseTypes'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import {
  Container,
  Row,
} from 'reactstrap';
import GrammarTip from './GrammarTip';
import ArticleCasesTip from './ArticleCasesTip';
import PrepositionsTip from './PrepositionsTip';


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
      exerciseType: 'object',
      exerciseLimit: 10,
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
  }

  // Reset the index to 0
  resetExercises() {
    this.setState(state => ({
      currentExerciseIndex: 0
    }));
  }

  onExerciseTypeSelected(event) {
    const newType = event.target.value;

    this.setState(state => ({
      exerciseType: newType
    }));

    this.resetExercises();
  }

  render() {
    let grammarTip;

    switch (this.state.exerciseType) {
      case "object":
          grammarTip = <ArticleCasesTip/>;
          break;      
      case "preposition":
        grammarTip = <PrepositionsTip/>;
        break;
      default:  
    }


    return (
      <Container id="main-container">
      <h1>Exercise</h1>
      <Row className="mt-2">
      <ExerciseTypes onExerciseTypeSelected={this.onExerciseTypeSelected}></ExerciseTypes>
      <Query query={EXERCISE_QUERY} variables={{ exerciseType: this.state.exerciseType}}>
        {({ loading, error, data, refetch }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          return (
            <Exercise
              exercise={data.exercises[this.state.currentExerciseIndex]}
              onSuccessfulAnswer={this.nextExercise}
              exerciseCounter={this.state.currentExerciseIndex + 1}
              exerciseLimit={this.state.exerciseLimit}
              refetchList={() => {refetch(); this.resetExercises()}}
            />
          )
        }}
      </Query>
      </Row>
      <Row className="mt-2">
        <GrammarTip tip={grammarTip}/>
      </Row>
      </Container>
    )
  }
}

export default ExerciseList