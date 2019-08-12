import React, { Component } from 'react'

class Exercise extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div>
          {this.props.exercise.question} ({this.props.exercise.hint})
        </div>
      </div>
    )
  }
}

export default Exercise
