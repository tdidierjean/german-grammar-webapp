import React, { Component } from 'react'
import gql from 'graphql-tag';
// import { useQuery } from '@apollo/react-hooks';
import { Query } from 'react-apollo'
import {
    Col,
    Card,
    CardBody,
} from 'reactstrap';

const EXERCISE_TYPES_QUERY = gql`
    query {
      exerciseTypes
    }
`

class ExerciseTypes extends Component {
    constructor(props) {
        super(props);

        this.onExerciseTypeSelected = this.props.onExerciseTypeSelected;
    }

    render() {
        return (
            <Col sm="4">
                <Card className="border-primary">
                <CardBody>
                <h5 className="card-title text-primary">Pick a type of exercise</h5>
                <Query query={EXERCISE_TYPES_QUERY}>
                    {({ data, loading, error }) => {
                        if (loading) return <p>loading...</p>;
                        if (error) return <p>{error.message}</p>;
                        return (
                            <select name="exerciseType" onChange={this.onExerciseTypeSelected}>
                                {data.exerciseTypes.map(exerciseType => (
                                    <option key={exerciseType} value={exerciseType}>
                                        {exerciseType}
                                    </option>
                                ))}
                            </select>
                        );
                    }}
                </Query>
                </CardBody>
                </Card>
            </Col>
        );
    }
}

export default ExerciseTypes