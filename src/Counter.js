/*eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios';

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () {
    this.props.getClicks()
  }

  render() {
    return  (
      <div>
        {' '}
        <button onClick={this.props.onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={this.props.onDecrement}>
          Decrement
        </button>
        <button onClick={this.props.getData}>
          Get random message
        </button>
        <p>
          Clicked: {this.props.value.clicks} times
        </p>
        <p>
          Server Message: {this.props.value.message}
        </p>
      </div>
    )
  }
}

export default Counter
