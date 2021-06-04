import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { incrementAction, decrementAction } from '../redux/counter/actions/CounterAction'

const Counter = () => {
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <div className="counter">
            <h1>{count.count}</h1>
            <button onClick={() => dispatch(decrementAction())}>Decrement</button>
            <button onClick={() => dispatch(incrementAction())}>Increment</button>
        </div>  
    )
}

export default Counter
