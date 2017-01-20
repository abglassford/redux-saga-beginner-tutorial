/*eslint-disable no-unused-vars */
import React, { Component } from 'react'

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync, getData }) =>
      <div>
        {' '}
        <button onClick={onIncrementAsync}>Increment Async</button>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        <button onClick={getData}>
          Get Data
        </button>
        <p>
          Clicked: {value.clicks} times
        </p>
      </div>


export default Counter
