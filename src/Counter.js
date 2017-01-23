/* eslint-disable no-unused-vars */
import React, { PropTypes, Component } from 'react';
import axios from 'axios';
import { debounce } from './routes';

class Counter extends Component {
  static propTypes = {
    getClicks: PropTypes.func,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    getData: PropTypes.func,
    value: PropTypes.object,
  }

  static defaultProps = {
    getClicks: () => null,
    onIncrement: () => null,
    onDecrement: () => null,
    getData: () => null,
    value: {},
  }

  componentWillMount() {
    this.props.getClicks();
  }

  render() {
    return (
      <div>
        {' '}
        <button onClick={() => debounce(this.props.onIncrement)}>
          Increment
        </button>
        {' '}
        <button onClick={() => debounce(this.props.onDecrement)}>
          Decrement
        </button>
        <button onClick={() => debounce(this.props.getData)}>
          Get random message
        </button>
        <p>
          Clicked: {this.props.value.clicks} times
        </p>
        <p>
          Server Message: {this.props.value.message}
        </p>
      </div>
    );
  }
}

export default Counter;
