// state object is binded to the initial state object
// action object is binded to the action object inside the
// dispatch method

// (prevState, action) => newState

// state is immutable. Everytime we change a state it creates
// a new state. We do this for debugging reasons. Everytime we
// create a new state we can now see the states as they change
// with time.

// reducer returns a state object that is the same exact type
// as the original initial state object

import { INCREMENT, DECREMENT } from '../Types'

const initialState = {
    count: 0
}

export const counterReducer = (state = initialState, action) => {
    console.log('reducer ran')
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT: 
            return {
                ...state,
                count: state.count - 1
            }   
        default: 
            return state
    }
}
