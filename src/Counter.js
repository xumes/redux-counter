import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from './actions'

const Counter = ({ count, increment, decrement }) => {
    return (
        <div>
            <h1>Contador</h1>
            <button onClick={() => increment(2)}>+</button>
            <span> {count} </span>
            <button onClick={decrement}>_</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: () => dispatch(decrement)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)