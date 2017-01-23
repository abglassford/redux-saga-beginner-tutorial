/*eslint-disable no-unused-vars */
import React, { Component } from 'react'

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync, getData }) =>
      <div>
        {' '}
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        <button onClick={getData}>
          Get random message
        </button>
        <p>
          Clicked: {value.clicks} times
        </p>
        <p>
          Server Message: {value.message}
        </p>
      </div>


export default Counter
