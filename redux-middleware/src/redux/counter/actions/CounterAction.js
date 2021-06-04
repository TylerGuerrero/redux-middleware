// action creator returns a action object with a 
// type and a payload

// dispatching a action object is the only way to update the 
// store and to update the whole global state managment system

import { INCREMENT, DECREMENT } from '../Types'

export const incrementAction = () => {
    return {
        type: INCREMENT,
        payload: ''
    }
}

export const decrementAction = () => {
    return {
        type: DECREMENT,
        payload: ''
    }
}